import { useState, useEffect } from 'react'

export const useImageLoader = (imagePath: string) => {
  const [image, setImage] = useState<string>('')

  useEffect(() => {
    let mounted = true
    
    const loadImage = async () => {
      try {
        const imageUrl = import.meta.env.PROD 
          ? `/assets/${imagePath.split('/').pop()}`
          : imagePath
        
        if (mounted) {
          setImage(imageUrl)
        }
      } catch (error) {
        console.error('Error loading image:', error)
      }
    }

    loadImage()
    
    return () => {
      mounted = false
    }
  }, [imagePath])

  return image
}