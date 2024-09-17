'use client'

import NewsCard from '@/components/news-card/NewsCard'
import React, { useEffect, useRef, useState } from 'react'
import { Box, Pagination } from '@mui/material'
import { Article } from '@/types'
import SectionTitle from '@/components/SectionTitle'

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
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateVisibleCards = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth
        const cardsPerPage = Math.floor(containerWidth / minCardWidth)
        const startIndex = activeIndex * cardsPerPage
        const endIndex = Math.min(startIndex + cardsPerPage, newsItems.length)
        setVisibleCards(newsItems.slice(startIndex, endIndex))
      }
    }

    updateVisibleCards()
    window.addEventListener('resize', updateVisibleCards)
    return () => window.removeEventListener('resize', updateVisibleCards)
  }, [newsItems, minCardWidth, activeIndex])

  const handleChange = (_: any, value: number) => {
    setActiveIndex(value)
  }

  return (
    <>
      <SectionTitle>News</SectionTitle>
      <Box ref={containerRef} sx={{ display: 'flex', flexDirection: 'row', gap: 2, overflow: 'hidden' }}>
        {visibleCards.map((item: any) => (
          <NewsCard key={item.id} article={item} />
        ))}
      </Box>
      <Box display='flex' justifyContent='center' sx={{ marginTop: '2em' }}>
        <Pagination defaultPage={1} count={visibleCards.length} onChange={handleChange} />
      </Box>
    </>
  )
}
