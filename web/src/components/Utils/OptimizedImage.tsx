import { memo } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

interface OptimizedImageProps {
  src: string
  alt: string
  className?: string
  width?: string | number
  height?: string | number
}

export const OptimizedImage = memo(({ 
  src, 
  alt, 
  className, 
  width, 
  height 
}: OptimizedImageProps) => {
  return (
    <LazyLoadImage
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      effect="blur"
      //loading="lazy"
    />
  )
})

OptimizedImage.displayName = 'OptimizedImage'