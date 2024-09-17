'use client'

import React from 'react'
import { Typography, TypographyProps, Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import Image from 'next/image'
import { m3MobileHeadlineLarge } from '@/design-tokens/typography'

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontFamily: m3MobileHeadlineLarge.font.family,
  fontSize: `${m3MobileHeadlineLarge.font.size}px`,
  fontWeight: m3MobileHeadlineLarge.font.weight,
  fontStretch: `${m3MobileHeadlineLarge.font.stretch * 100}%`,
  lineHeight: `${m3MobileHeadlineLarge.line_height}px`,
  textAlign: 'left',
  padding: theme.spacing(1, 2),
  position: 'relative',
  zIndex: 2,
  display: 'inline-block',
}))

const BackgroundContainer = styled(Box)({
  position: 'absolute',
  top: '18px',
  left: '20px',
  right: '-5px',
  bottom: '-5px',
  zIndex: 1,
  width: '215px',
  height: '40px',
  overflow: 'hidden',
})

interface SectionTitleProps extends TypographyProps {
  children: React.ReactNode
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, ...props }) => {
  return (
    <Box position='relative' display='inline-block'>
      <BackgroundContainer>
        <Image
          src='/images/header-background-dark.svg'
          alt='Background'
          fill
          style={{ objectFit: 'cover' }}
          quality={100}
        />
      </BackgroundContainer>
      <StyledTypography variant='h2' {...props}>
        {children}
      </StyledTypography>
    </Box>
  )
}

export default SectionTitle
