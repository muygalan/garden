'use client'

import mediumZoom from 'medium-zoom'
import { useEffect, useRef } from 'react'

export function ImageZoom({ src, alt, width = 600 }: { src: string; alt?: string; width?: number }) {
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (!imgRef.current) return undefined
    const zoom = mediumZoom(imgRef.current, {
      margin: 24,
      background: '#000000',
    })
    return () => { zoom.detach() }
  }, [])

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      width={width}
      style={{ cursor: 'zoom-in' }}
    />
  )
}