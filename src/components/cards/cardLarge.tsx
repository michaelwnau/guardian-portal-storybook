'use client'
import React from 'react'
import { Box, Card, CardContent, Typography } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { CardLargeData } from '@/types'
import { cardStyles } from './styles'

const CardLarge: React.FC<{ data: CardLargeData }> = ({ data }) => {
  return (
    <Box sx={cardStyles.cardEnabledLarge}>
      <Box sx={cardStyles.stateenabledSizelarge}>
        <Box sx={cardStyles.cardMedia}>
          <Box sx={cardStyles.replaceImage}>
            <Box sx={cardStyles.strokeShape} />
          </Box>
        </Box>
        <Box sx={cardStyles.cardContent}>
          <Box sx={cardStyles.line1}>
            <Typography variant="h4" sx={cardStyles.header1}>
              {data.title}
            </Typography>
            <Typography sx={cardStyles.headerBodyText}>
              {data.subtitle}
            </Typography>
          </Box>
          <Typography sx={cardStyles.subText}>
            {data.description}
          </Typography>
          <Grid container sx={cardStyles.instanceSlots}>
            {data.instanceSlots.map((slot, index) => (
              <Grid item key={index} sx={cardStyles.instanceSlot}>
                {slot}
              </Grid>
            ))}
          </Grid>
          <Box sx={cardStyles.callToAction}>
            <Typography sx={cardStyles.callToActionText}>
              {data.callToActionText}
            </Typography>
            <Box sx={cardStyles.icon}>
              <ArrowForwardIcon sx={cardStyles.arrowForwardFilled} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default CardLarge
