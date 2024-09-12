'use client'
import React from 'react'
import { Box, Card, CardContent, Typography } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

interface CardSmallWideProps {
  headline: string
  titleSmall: string
  bodySmall: string
  instanceSlots: string[]
  callToAction: string
  image: string
}

const CardSmallWide: React.FC<CardSmallWideProps> = ({
  headline,
  titleSmall,
  bodySmall,
  instanceSlots,
  callToAction,
  image,
}) => {
  return (
    <Card
      sx={{
        width: '383px',
        height: '366px',
        padding: '3px 4px 5px',
        '& .MuiCardContent-root': {
          padding: 0,
        },
      }}
    >
      <Box
        sx={{
          width: '375px',
          height: '358px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          boxShadow: '0 1px 3px 1px rgba(0, 0, 0, 0.15), 0 1px 2px 0 rgba(0, 0, 0, 0.3)',
        }}
      >
        <Box
          component='img'
          src={image}
          alt={headline}
          sx={{
            width: '375px',
            height: '138px',
            objectFit: 'cover',
          }}
        />
        <CardContent
          sx={{
            height: '220px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            gap: '8px',
            padding: '16px',
            bgcolor: '#f2f2f2',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', width: '100%' }}>
            <Typography
              variant='h5'
              sx={{
                fontFamily: 'LibreFranklin',
                fontSize: '28px',
                lineHeight: 1.29,
                color: '#1b1c1d',
              }}
            >
              {headline}
            </Typography>
            <Typography
              sx={{
                fontFamily: 'LibreFranklin',
                fontSize: '14px',
                lineHeight: 1.43,
                color: '#1b1c1d',
              }}
            >
              {titleSmall}
            </Typography>
          </Box>
          <Typography
            sx={{
              fontFamily: 'LibreFranklin',
              fontSize: '12px',
              lineHeight: 1.33,
              color: '#1b1c1d',
            }}
          >
            {bodySmall}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              width: '100%',
            }}
          >
            {instanceSlots.map((slot) => (
              <Box
                key={slot}
                sx={{
                  padding: '8px',
                  border: '1px solid #425464',
                  borderRadius: '4px',
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'LibreFranklin',
                    fontSize: '14px',
                    lineHeight: 1.43,
                    letterSpacing: '0.25px',
                    color: '#425464',
                  }}
                >
                  {slot}
                </Typography>
              </Box>
            ))}
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              height: '48px',
              width: '100%',
            }}
          >
            <Typography
              sx={{
                fontFamily: 'IBMPlexMono',
                fontSize: '12px',
                lineHeight: 1.33,
                color: '#425464',
              }}
            >
              {callToAction}
            </Typography>
            <Box
              sx={{
                width: '48px',
                height: '48px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <ArrowForwardIcon sx={{ width: '20px', height: '20px' }} />
            </Box>
          </Box>
        </CardContent>
      </Box>
    </Card>
  )
}

export default CardSmallWide
