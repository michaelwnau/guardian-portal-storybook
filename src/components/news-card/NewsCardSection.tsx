'use client'

import NewsCard from '@/components/news-card/NewsCard'
import CustomIndicator from '@/components/announcements/customindicator'
import React, { useEffect, useRef, useState } from 'react'
import { Box } from '@mui/material'
import { Article } from '@/types'

export interface NewsItem {
  id: string
  title: string
  description: string
  image: string
}

interface NewsCardSectionProps {
  newsItems: Article[]
  minCardWidth: number
}

export default function NewsCardSection({ newsItems, minCardWidth }: NewsCardSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [visibleCards, setVisibleCards] = useState<Article[]>([])
  const [totalPages, setTotalPages] = useState(1)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateVisibleCards = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth
        const cardsPerPage = Math.floor(containerWidth / minCardWidth)
        const startIndex = activeIndex * cardsPerPage
        const endIndex = Math.min(startIndex + cardsPerPage, newsItems.length)
        setVisibleCards(newsItems.slice(startIndex, endIndex))
        setTotalPages(Math.ceil(newsItems.length / cardsPerPage))
      }
    }

    updateVisibleCards()
    window.addEventListener('resize', updateVisibleCards)
    return () => window.removeEventListener('resize', updateVisibleCards)
  }, [newsItems, minCardWidth, activeIndex])

  const handleIndicatorClick = (index: number) => {
    setActiveIndex(index - 1)
  }

  return (
    <>
      <Box ref={containerRef} sx={{ display: 'flex', flexDirection: 'row', gap: 2, overflow: 'hidden' }}>
        {visibleCards.map((item: any) => (
          <NewsCard key={item.id} article={item} />
        ))}
      </Box>
      <CustomIndicator length={totalPages} activeIndex={activeIndex + 1} onClick={handleIndicatorClick} />
    </>
  )
}
