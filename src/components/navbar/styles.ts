import { SxProps } from '@mui/material'
import colors from '@/design-tokens/colors'
import { m3MobileLabelMedium } from '@/design-tokens/typography'

export const navbarContainer: SxProps = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '7%',
  padding: '20px',
  '@media (max-width: 600px)': {
    alignItems: 'flex-start',
    gap: '8px',
    padding: '1px',
  },
}

export const appbarStyle = {
  m: {
    height: 'auto',
    padding: '10px 0',
  },
}

export const iconGridStyle = {
  xs: {
    marginTop: '10px',
  },
}

export const logoBox: SxProps = {
  position: 'relative',
  width: '280.7px',
  height: '24px',
  xs: {
    width: '180px',
    height: '20px',
    marginBottom: '8px',
  },
}

export const linkStyle = {
  color: 'inherit',
  textDecoration: 'none',
}

export const imageStyle = {
  objectFit: 'contain' as const,
  width: '100%',
  height: '100%',
}

export const typographyStyle: SxProps = {
  color: colors.m3SysLightInverseSurface,
  fontSize: m3MobileLabelMedium.font.size,
  '@media (max-width: 600px)': {
    fontSize: '9px',
  },
}

export const actionButtonsContainer: SxProps = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: '24px',
  xs: {
    justifyContent: 'flex-end',
    width: '100%',
  },
}
