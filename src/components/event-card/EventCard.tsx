'use client'
import { Button, Card, CardActions, CardContent, CardMedia, Typography, Grid, IconButton } from '@mui/material'
import { ArrowForward } from '@mui/icons-material'
import { Article } from '@/types'
import { useEffect, useState } from 'react'
import DOMPurify from 'dompurify'

interface EventCardProps {
  article: Article
}

export default function EventCard({ article }: EventCardProps) {
  const [htmlContent, setHtmlContent] = useState<string>('')

  useEffect(() => {
    const safeBody = DOMPurify.sanitize(article.body)
    setHtmlContent(safeBody)
  }, [article])

  return (
    <Card sx={{ display: 'flex', maxWidth: 600, height: '100%' }}>
      <Grid container sx={{ height: '100%' }}>
        <Grid item xs={6} sx={{ height: '100%' }}>
          <CardMedia
            component='img'
            sx={{ height: '100%', objectFit: 'cover' }}
            image={article.image || '/images/default_image.jpg'} // Use article image or a default
            title={article.title}
          />
        </Grid>
        <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography gutterBottom variant='h5' component='div'>
              {article.title}
            </Typography>
            <Typography
              variant='body2'
              color='text.secondary'
              dangerouslySetInnerHTML={{ __html: htmlContent }}
              sx={{
                display: '-webkit-box',
                WebkitLineClamp: 4, // Limit to 3 lines
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            ></Typography>
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
            <IconButton aria-label={'learn-more-button'}>
              <ArrowForward />
            </IconButton>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  )
}
