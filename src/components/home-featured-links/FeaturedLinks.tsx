import React from 'react'
import { Grid, Box, Button } from '@mui/material'
import { FeaturedLinksData } from '@/types'
import { containerStyles } from './styles'
import SectionTitle from '@/components/SectionTitle'

const FeaturedLinks: React.FC<{ data: FeaturedLinksData }> = ({ data }) => {
  return (
    <Box sx={containerStyles}>
      <SectionTitle>Featured Links</SectionTitle>
      <Grid container sx={{ marginTop: '24px', justifyContent: 'center' }}>
        {data.links.map((link, index) => (
          <Button
            component={'a'}
            variant={'contained'}
            href={link.url}
            key={index}
            sx={{ marginRight: 2, marginTop: 2 }}
          >
            {link.name}
          </Button>
        ))}
      </Grid>
    </Box>
  )
}

export default FeaturedLinks
