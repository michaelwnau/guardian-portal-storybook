import React from 'react'
import { Box, Grid, Pagination, Card, CardMedia, Link } from '@mui/material'
import { FeaturedLinksData } from '@/types'
import { card, container } from './styles'
import SectionTitle from '@/components/SectionTitle'

const LandingPageFeaturedLinks: React.FC<{ data: FeaturedLinksData }> = ({ data }) => {
  return (
    <React.Fragment>
      <Box sx={container}>
        <SectionTitle>Featured Links</SectionTitle>
        <Grid container spacing={3}>
          {data.links.map((link, index) => (
            <Grid
              item
              container
              xs={6}
              sm={4}
              key={index}
              direction='column'
              alignItems='center'
              justifyContent='center'
              textAlign='center'
            >
              <Grid item xs={6}>
                <Link href={link.url} target='_blank' rel='noopener noreferrer'>
                  <Card sx={card} key={index}>
                    <CardMedia
                      component='img'
                      height='100'
                      image={link.imageUrl}
                      alt={link.imageUrl}
                      style={{ objectFit: 'cover' }}
                    />
                  </Card>
                </Link>
              </Grid>
              <Grid item>{link.name}</Grid>
            </Grid>
          ))}
        </Grid>

        <Box display='flex' justifyContent='center' sx={{ marginTop: '2em' }}>
          <Pagination count={2} disabled />
        </Box>
      </Box>
    </React.Fragment>
  )
}

export default LandingPageFeaturedLinks
