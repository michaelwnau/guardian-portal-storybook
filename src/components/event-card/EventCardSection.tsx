'use client'

import EventCard from '@/components/event-card/EventCard'
import React, { useState, useEffect, useRef } from 'react'
import { Box, Pagination } from '@mui/material'
import { Article } from '@/types'
import SectionTitle from '@/components/SectionTitle'

export interface EventItem {
  id: string
  title: string
  description: string
  image: string
}

interface EventCardSectionProps {
  eventItems: Article[]
  minCardHeight: number
}

export default function EventCardSection({ eventItems, minCardHeight }: EventCardSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [visibleCards, setVisibleCards] = useState<Article[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateVisibleCards = () => {
      if (containerRef.current) {
        const containerHeight = containerRef.current.offsetHeight
        const cardsPerPage = Math.floor(containerHeight / minCardHeight)
        const startIndex = activeIndex * cardsPerPage
        const endIndex = Math.min(startIndex + cardsPerPage, eventItems.length)
        setVisibleCards(eventItems.slice(startIndex, endIndex))
      }
    }

    updateVisibleCards()
    window.addEventListener('resize', updateVisibleCards)
    return () => window.removeEventListener('resize', updateVisibleCards)
  }, [eventItems, minCardHeight, activeIndex])

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setActiveIndex(value)
  }

  return (
    <>
      <SectionTitle>Events</SectionTitle>
      <Box ref={containerRef} sx={{ display: 'flex', flexDirection: 'column', gap: 2, height: '100%' }}>
        {visibleCards.map((item) => (
          <EventCard key={item.id} article={item} />
        ))}
      </Box>
      <Box display='flex' justifyContent='center' sx={{ marginTop: '2em' }}>
        <Pagination defaultPage={1} count={visibleCards.length} onChange={handleChange} />
      </Box>
    </>
  )
}
