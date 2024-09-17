import React from 'react'
import validator from 'validator'
import { Grid, Typography, Box } from '@mui/material'
import { BannerData } from '@/types'
import {
  bannerSubFieldBox,
  bannerSubFieldText,
  bannerSubFieldTitle,
  bannerTitle,
  tagLine,
  logo,
  subFields,
  container,
} from './styles'

const Banner: React.FC<{ data: BannerData }> = ({ data }) => {
  const missionEmpty = !data.missionText || validator.isEmpty(data.missionText)
  const visionEmpty = !data.visionText || validator.isEmpty(data.visionText)
  const logoEmpty = !data.logoSrc || validator.isEmpty(data.logoSrc)

  return (
    <Box sx={container}>
      <Grid container alignItems='center'>
        <Grid item xs={12} md={8} sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          {!logoEmpty ? <Box component='img' src={data.logoSrc} alt={data.logoAlt} sx={logo} /> : null}
          <Box sx={{ whiteSpace: 'pre-wrap', textAlign: 'left' }}>
            <Typography variant='h4' sx={bannerTitle}>
              {data.title}
            </Typography>
            <Typography variant='subtitle1' sx={tagLine}>
              {data.tagline}
            </Typography>
          </Box>
        </Grid>

        {!missionEmpty || !visionEmpty ? (
          <Grid item xs={12} md={4} sx={subFields}>
            {!missionEmpty && (
              <Box sx={bannerSubFieldBox}>
                <Typography variant='h6' sx={bannerSubFieldTitle}>
                  Our Mission
                </Typography>
                <Typography variant='body2' sx={bannerSubFieldText}>
                  {data.missionText}
                </Typography>
              </Box>
            )}
            {!visionEmpty && (
              <Box sx={bannerSubFieldBox}>
                <Typography variant='h6' sx={bannerSubFieldTitle}>
                  Our Vision
                </Typography>
                <Typography variant='body2' sx={bannerSubFieldText}>
                  {data.visionText}
                </Typography>
              </Box>
            )}
          </Grid>
        ) : null}
      </Grid>
    </Box>
  )
}

export default Banner
