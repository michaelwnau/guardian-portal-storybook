'use client'

import React from 'react'
import { Typography, TypographyProps, Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import Image from 'next/image'
import { m3MobileHeadlineSmall } from '@/design-tokens/typography'

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontFamily: m3MobileHeadlineSmall.font.family,
  fontSize: `${m3MobileHeadlineSmall.font.size}px`,
  fontWeight: m3MobileHeadlineSmall.font.weight,
  fontStretch: `${m3MobileHeadlineSmall.font.stretch * 100}%`,
  lineHeight: `${m3MobileHeadlineSmall.line_height}px`,
  textAlign: 'left',
  padding: theme.spacing(1, 0),
  position: 'relative',
  zIndex: 2,
  display: 'inline-block',
}))

const BackgroundContainer = styled(Box)({
  position: 'absolute',
  top: '18px',
  left: '4px',
  right: '-5px',
  bottom: '-5px',
  zIndex: 1,
  width: '230px',
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
