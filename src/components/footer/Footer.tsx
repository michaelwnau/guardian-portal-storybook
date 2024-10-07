'use client'
import React, { useEffect, useState } from 'react'
import { Grid, Typography, Box, Link } from '@mui/material'
import { Facebook, Instagram, YouTube } from '@mui/icons-material'
import X from '@mui/icons-material/X' // Import X icon
import { FooterData } from '@/types'
import { content, contentTitle, footerContentStyle, link, padRightMedium, marginTop12 } from './style'
import FooterLinks from './FooterLinks'
import DOMPurify from 'isomorphic-dompurify'

const Footer: React.FC<{ data: FooterData }> = ({ data }) => {
  const informationText = data.informationText ? data.informationText.split('\n') : []
  const addressText = encodeURIComponent(data.streetAddress + ', ' + data.city + ', ' + data.state + ' ' + data.zip)
  const addressHref = `https://www.google.com/maps/search/?api=1&query=${addressText}`
  const currentYear = new Date().getFullYear().toString()

  const [htmlContent, setHtmlContent] = useState<string>('')
  useEffect(() => {
    const safeFeedback = DOMPurify.sanitize(data.feedback)
    setHtmlContent(safeFeedback)
  }, [data])

  let image = <Box />
  if (data.default === false) {
    image = (
      <Box display='flex' flexDirection='column' alignItems='flex-start' height='100%'>
        <Typography variant='h6' gutterBottom sx={contentTitle}>
          {data.imageDescription}
        </Typography>
        <Box component='img' src={data.image} width='100%' height='auto' alt={data.imageDescription} sx={marginTop12} />
      </Box>
    )
  }

  let location = <Box />

  if (data.hasLocation) {
    location = (
      <Grid item>
        <Box display='flex' flexDirection='column' alignItems='flex-start' height='100%'>
          <Typography variant='h6' gutterBottom sx={contentTitle}>
            Location
          </Typography>
          <Link href={addressHref} target='_blank' color='inherit' underline='none' sx={link}>
            <Typography flexGrow={1} sx={[content, marginTop12]}>
              {data.streetAddress}
            </Typography>
            <Grid container spacing={0} sx={marginTop12}>
              <Grid item>
                <Typography flexGrow={1} sx={[content, padRightMedium]}>
                  {data.city}
                </Typography>
              </Grid>
              <Grid item>
                <Typography flexGrow={1} sx={[content, padRightMedium]}>
                  {data.state}
                </Typography>
              </Grid>
              <Grid item>
                <Typography flexGrow={1} sx={[content]}>
                  {data.zip}
                </Typography>
              </Grid>
            </Grid>
          </Link>
          <Grid container spacing={0} sx={marginTop12}>
            <Grid item>
              <Typography flexGrow={1} sx={[content, padRightMedium]}>
                <Link href={`mailto:${data.email}`} color='inherit' underline='none' sx={link}>
                  {data.email}&nbsp;
                </Link>
              </Typography>
            </Grid>
            <Grid item>
              <Typography flexGrow={1} sx={[content]}>
                <Link href={`tel:${data.phone}`} color='inherit' underline='none' sx={link}>
                  {data.phone}
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    )
  }

  return (
    <Box sx={footerContentStyle}>
      <Grid container spacing={4} direction='row' justifyContent='center' alignItems='flex-start'>
        <Grid item xs={12} sm={6} md={3}>
          <Grid container direction='column' spacing={2}>
            {location}
            <Grid item>
              <Box display='flex' flexDirection='column' alignItems='flex-start' height='100%'>
                <Typography variant='h6' gutterBottom sx={contentTitle}>
                  {data.informationTitle}
                </Typography>
                <Box sx={marginTop12}>
                  {informationText.map((text) => (
                    <Typography key={crypto.randomUUID()} sx={content}>
                      {text}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          {image}
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Box
            display='flex'
            flexDirection='column'
            alignItems='flex-start'
            height='100%'
            gap={{ xs: 2, sm: 3, md: 6 }}
          >
            <FooterLinks title='Quick Links' links={data.quickLinks} />
            <FooterLinks title='Guardian Portal' links={data.guardianPortal} />
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Box
            display='flex'
            flexDirection='column'
            alignItems='flex-start'
            height='100%'
            gap={{ xs: 2, sm: 3, md: 6 }}
          >
            <Box display='flex' flexDirection='column' alignItems='flex-start'>
              <Typography variant='h6' gutterBottom sx={contentTitle}>
                Get Connected
              </Typography>
              <Box sx={{ display: 'flex', gap: 3, marginTop: '12px' }}>
                <Link href={data.linkFB} target='_blank' color='inherit'>
                  <Facebook />
                </Link>
                <Link href={data.linkX} target='_blank' color='inherit'>
                  <X />
                </Link>
                <Link href={data.linkIG} target='_blank' color='inherit'>
                  <Instagram />
                </Link>
                <Link href={data.linkYT} target='_blank' color='inherit'>
                  <YouTube />
                </Link>
              </Box>
            </Box>
            <Box display='flex' flexDirection='column' alignItems='flex-start'>
              <Typography variant='h6' gutterBottom sx={contentTitle}>
                Got Feedback
              </Typography>
              <Box sx={marginTop12}>
                <br />
                <Typography sx={content} dangerouslySetInnerHTML={{ __html: htmlContent }} />
                <Typography sx={content}>&copy;{currentYear} All rights reserved, USSF Guardian One</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Footer
