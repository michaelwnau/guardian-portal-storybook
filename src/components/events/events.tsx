// src/components/events.tsx
'use client'
import React, { useState } from 'react'
import { Box, Card, CardActionArea, CardContent, CardMedia, Pagination, Typography } from '@mui/material'
import { Article } from '@/types'
import spacing from '@/design-tokens/spacing'
import SectionTitle from '@/components/SectionTitle'

interface EventsProps {
  data: Article[]
}

// Function to remove HTML tags from a string
const stripHtmlTags = (text: string) => {
  return (text || '').replace(/<[^>]*>/g, '')
}

const Events: React.FC<EventsProps> = ({ data }) => {
  const [page, setPage] = useState(1)
  const cardsPerPage = 4 // Adjust this number based on your layout and preference

  const handleChange = (_: any, value: number) => {
    setPage(value)
  }

  const indexOfLastCard = page * cardsPerPage
  const indexOfFirstCard = indexOfLastCard - cardsPerPage
  const currentCards = data.slice(indexOfFirstCard, indexOfLastCard)

  return (
    <Box sx={{ padding: '0px' }}>
      <SectionTitle>Base Events</SectionTitle>
      {currentCards.length > 0 ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            paddingBottom: spacing.spacing.ml,
          }}
        >
          {currentCards.map((card, index) => (
            <Card
              key={index}
              sx={{
                maxWidth: 250,
                backgroundColor: '#333',
                color: '#fff',
                borderRadius: '10px',
              }}
            >
              <CardActionArea href={'#'} target='_blank' rel='noopener noreferrer'>
                {card.image && <CardMedia component='img' height='140' image={card.image} alt={card.title} />}
                <CardContent>
                  <Typography gutterBottom variant='h6' component='div' sx={{ color: '#fff', fontSize: '18px' }}>
                    {card.title}
                  </Typography>
                  <Typography variant='body2' sx={{ color: '#999' }}>
                    {stripHtmlTags(card.body)}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      ) : (
        <Typography>No events available</Typography>
      )}
      <Box display='flex' justifyContent='center' sx={{ marginTop: '2em', marginBottom: '2em' }}>
        <Pagination defaultPage={1} count={data.length} onChange={handleChange} />
      </Box>
    </Box>
  )
}

export default Events
