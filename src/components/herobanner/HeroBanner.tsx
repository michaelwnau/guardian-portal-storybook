'use client'
import React, { useEffect, useState } from 'react'
import { Box, CardMedia, Link, Typography } from '@mui/material'
import * as styles from './styles'
import { Article } from '@/types'
import { useAutoSlide } from './useAutoSlide'
import DOMPurify from 'isomorphic-dompurify'

interface HeroBannerProps {
  articles: Article[]
}

const getImageStyle = (index: number, activeIndex: number) => (activeIndex === index ? styles.activeThumbnail : {})

const getThumbnailButtonStyle = (index: number, activeIndex: number) => ({
  ...styles.thumbnailButton,
  border: activeIndex === index ? '2px solid white' : '1px solid black',
})

const HeroBanner: React.FC<HeroBannerProps> = ({ articles }: HeroBannerProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const getImageUrlOrDefault = (imageSrc: string | null) => (imageSrc ? imageSrc : '/images/default_image.jpg')
  const { pauseAutoSlide, resumeAutoSlide } = useAutoSlide(articles.length, setActiveIndex, 5000)
  const [htmlContent, setHtmlContent] = useState<string>('')
  useEffect(() => {
    const safeBody = DOMPurify.sanitize(articles[activeIndex].body)
    setHtmlContent(safeBody)
  }, [articles, activeIndex])

  return (
    <Box sx={styles.container} onMouseEnter={pauseAutoSlide} onMouseLeave={resumeAutoSlide}>
      <Box sx={styles.mainImage}>
        <CardMedia
          component='img'
          height='100'
          image={getImageUrlOrDefault(articles[activeIndex].image)}
          alt={articles[activeIndex].title}
          style={{ objectFit: 'cover' }}
        />
      </Box>
      <Box sx={styles.textOverlay}>
        <Link href={`/article/${articles[activeIndex].slug}`}>
          <Typography sx={styles.heading}>{articles[activeIndex].title}</Typography>
        </Link>
        <Typography
          sx={{
            ...styles.subheading,
            'overflow' : 'hidden'
          }}
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        ></Typography>
      </Box>
      <Box sx={styles.thumbnailContainer}>
        {articles.map((article: Article, index: number) => (
          <Box key={article.id} sx={styles.thumbnailWrapper}>
            <Box onClick={() => setActiveIndex(index)} sx={getThumbnailButtonStyle(index, activeIndex)}>
              <CardMedia
                alt={article.imageCaption || `thumbnail ${index}`}
                sizes='(max-width: 768px) 25vw, 10vw'
                component='img'
                height='100'
                image={getImageUrlOrDefault(article.image)}
                style={{ ...getImageStyle(index, index), objectFit: 'fill' }}
              />
            </Box>
            <Typography sx={styles.imgCaption}>{article.imageCaption || ''}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
export default HeroBanner
