import React from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import { ArrowForward } from '@mui/icons-material'
import { Article } from '@/types'

interface NewsCardProps {
  article: Article
}

const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 250 }}
        image={article.image || '/images/placeholder_image.jpeg'} // fallback to a placeholder image if none is provided
        title={article.title}
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {article.title}
        </Typography>
        <Typography
          variant='body2'
          color='text.secondary'
          sx={{
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {article.body}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'start' }}>
        <Button
          sx={{
            padding: 0,
            maxWidth: 'fit-content',
            maxHeight: 'fit-content',
          }}
        >
          Share
        </Button>
        <IconButton aria-label='learn-more-button'>
          <ArrowForward />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default NewsCard
