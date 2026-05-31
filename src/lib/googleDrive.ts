export type DriveImage = {
  id: string
  name: string
  src: string
}

export type DriveGalleryCategory = {
  id: string
  title: string
  folderLink: string
}

const extractFolderId = (value: string) => {
  const trimmed = value.trim()
  const patterns = [
    /\/folders\/([a-zA-Z0-9_-]+)/,
    /[?&]id=([a-zA-Z0-9_-]+)/,
  ]

  for (const pattern of patterns) {
    const match = trimmed.match(pattern)
    if (match?.[1]) return match[1]
  }

  return trimmed.length > 10 ? trimmed : ''
}

export const getFolderIdFromInput = (value: string) => extractFolderId(value)

export async function fetchDriveImages(folderInput: string): Promise<DriveImage[]> {
  const folderId = extractFolderId(folderInput)

  if (!folderId) {
    throw new Error('Please enter a valid Google Drive folder link or folder ID.')
  }

  const feedUrl = `https://drive.google.com/embeddedfolderview?id=${folderId}#grid`
  const response = await fetch(feedUrl)

  if (!response.ok) {
    throw new Error('Unable to access this Google Drive folder. Please check sharing permissions.')
  }

  const html = await response.text()
  const parser = new DOMParser()
  const doc = parser.parseFromString(html, 'text/html')

  const links = Array.from(doc.querySelectorAll('a'))
  const imagesMap = new Map<string, DriveImage>()

  links.forEach((link, index) => {
    const href = link.getAttribute('href') || ''
    const text = link.textContent?.trim() || `Gallery Image ${index + 1}`
    const match = href.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) || href.match(/[?&]id=([a-zA-Z0-9_-]+)/)

    if (!match?.[1]) return

    const fileId = match[1]

    if (!imagesMap.has(fileId)) {
      imagesMap.set(fileId, {
        id: fileId,
        name: text,
        src: `https://drive.google.com/thumbnail?id=${fileId}&sz=w1600`,
      })
    }
  })

  const images = Array.from(imagesMap.values())

  if (!images.length) {
    throw new Error('No public images found in this folder. Make sure the Drive folder is shared to Anyone with the link.')
  }

  return images
}

export async function fetchDriveImagesForCategories(categories: DriveGalleryCategory[]) {
  const results = await Promise.all(
    categories.map(async (category) => {
      if (!category.folderLink.trim()) {
        return [category.id, []] as const
      }

      try {
        const images = await fetchDriveImages(category.folderLink)
        return [category.id, images] as const
      } catch {
        return [category.id, []] as const
      }
    }),
  )

  return Object.fromEntries(results) as Record<string, DriveImage[]>
}
