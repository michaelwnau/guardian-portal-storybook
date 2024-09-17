'use client'
import React, { useState } from 'react'
import { Box, Typography, Card, CardMedia, CardContent, Pagination } from '@mui/material'
import Carousel from 'react-material-ui-carousel'
import { Article } from '@/types'
import Link from '../../../node_modules/next/link'
import SectionTitle from '@/components/SectionTitle'

const stripHtml = (html: string): string => {
  return html
    .replace(/<\/?[^>]+(>|$)/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
}

interface ItemProps {
  item: Article
}

const Item: React.FC<ItemProps> = ({ item }) => {
  const bodyStripped = stripHtml(item.body)
  const slug = item.slug ? item.slug : item.id
  return (
    <Card sx={{ position: 'relative', backgroundColor: '#333' }}>
      <Link href={{ pathname: `/articles/${slug}` }}>
        <CardMedia component='img' height='400' image={item.image || ''} alt={bodyStripped} />
        <CardContent
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            textAlign: 'left',
            padding: '10px',
            transition: 'opacity 0.3s',
          }}
        >
          <Typography variant='h6'>{item.title}</Typography>
          <Typography
            variant='body2'
            sx={{
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 3, // Limits to 3 lines
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {bodyStripped}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  )
}

interface AnnouncementsProps {
  data: Article[]
}

const Announcements: React.FC<AnnouncementsProps> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleCarouselChange = (now?: number | undefined) => {
    if (typeof now === 'number' && !isNaN(now)) {
      setActiveIndex(now)
    }
  }
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setActiveIndex(value)
  }

  return (
    <Box sx={{ padding: '0px' }}>
      <SectionTitle>Announcements</SectionTitle>
      <Carousel
        animation='slide'
        autoPlay={false}
        indicators={false}
        navButtonsAlwaysVisible={false}
        index={activeIndex}
        onChange={handleCarouselChange}
        sx={{
          maxWidth: '100%',
          flexGrow: 1,
          margin: 'auto',
        }}
      >
        {data.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
      <Box display='flex' justifyContent='center' sx={{ marginTop: '2em' }}>
        <Pagination defaultPage={1} count={data.length} onChange={handleChange} />
      </Box>
    </Box>
  )
}

export default Announcements
