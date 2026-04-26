'use client'

import mediumZoom from 'medium-zoom'
import { useEffect, useRef } from 'react'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

interface Photo {
  src: string
  alt?: string
}

export function PhotoGallery({ photos }: { photos: Photo[] }) {
  const galleryRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!galleryRef.current) return undefined
    const images = galleryRef.current.querySelectorAll('img')
    const zoom = mediumZoom(images, {
      margin: 24,
      background: '#000000',
    })
    return () => { zoom.detach() }
  }, [])

  return (
    <div
      ref={galleryRef}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '8px',
        margin: '16px 0',
      }}
    >
      {photos.map((photo, index) => (
        <img
          key={index}
          src={`${basePath}${photo.src}`}
          alt={photo.alt ?? `Photo ${index + 1}`}
          style={{
            width: '100%',
            height: '200px',
            objectFit: 'cover',
            borderRadius: '8px',
            cursor: 'zoom-in',
          }}
        />
      ))}
    </div>
  )
}