import React from 'react'
import { Box, Typography, Link, Grid } from '@mui/material'
import { FooterLink } from '@/types'
import { content, contentTitle, marginTop12, link, padRightMedium } from './style'

interface FooterLinksProps {
  title: string
  links: FooterLink[]
}

const FooterLinks: React.FC<FooterLinksProps> = ({ title, links }) => {
  // Split links into two columns with a max of 5 links each
  const column1 = links.slice(0, 5)
  const column2 = links.slice(5, 10)

  const linksColumn = (column: FooterLink[]) => {
    return column
      .filter((linkItem) => !linkItem.hidden)
      .map((linkItem) => (
        <Typography key={linkItem.url} style={content}>
          <Link
            href={linkItem.url}
            target={linkItem.openInNew ? '_blank' : '_self'}
            color='inherit'
            underline='none'
            sx={link}
          >
            {linkItem.name}
          </Link>
        </Typography>
      ))
  }

  return (
    <Box display='flex' flexDirection='column' alignItems='flex-start' height='100%'>
      <Typography variant='h6' gutterBottom style={contentTitle}>
        {title}
      </Typography>
      <Grid container spacing={0} sx={marginTop12}>
        <Grid item xs={6} sx={padRightMedium}>
          {linksColumn(column1)}
        </Grid>
        <Grid item xs={6}>
          {linksColumn(column2)}
        </Grid>
      </Grid>
    </Box>
  )
}

export default FooterLinks
