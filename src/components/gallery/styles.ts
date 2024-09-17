import { styled } from '@mui/material/styles'
import { Box, Card, TextField, Typography } from '@mui/material'

export const FilterContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  gap: '10px',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
}))

export const StyledSearchField = styled(TextField)(() => ({
  '& .MuiInputBase-root': {
    paddingRight: '0px',
    paddingLeft: '8px',
    borderRadius: '4px',
    backgroundColor: '#f5f5f5',
    width: '250px',
  },
  '& .MuiInput-underline:before': {
    borderBottom: `1px solid rgba(0, 0, 0, 0.42)`,
  },
  '& .MuiInputAdornment-root svg': {
    color: 'rgba(0, 0, 0, 0.54)',
  },
}))

export const StyledCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  border: '1px solid #e0e0e0',
  borderRadius: theme.shape.borderRadius * 2,
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  backgroundColor: theme.palette.background.paper,
}))

export const CardMediaContainer = styled(Box)({
  height: 358,
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
})

export const HeaderTypography = styled(Typography)({
  height: '136px',
  flexGrow: 0,
  fontFamily: 'LibreFranklin',
  fontSize: '24px',
  fontWeight: 'bold',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 1.29,
  letterSpacing: 'normal',
  textAlign: 'left',
  color: 'var(--schemes-on-surface)',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
})

export const CardDivider = styled(Box)(({ theme }) => ({
  height: '1px',
  backgroundColor: theme.palette.divider,
}))

export const CardBottomContainer = styled(Box)({
  height: 152,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'stretch',
  padding: 14,
  backgroundColor: 'var(--schemes-surface)',
})

export const TruncatedTypography = styled(Typography)({
  display: '-webkit-box',
  overflow: 'hidden',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 4,
})

export const SubTextTypography = styled(Typography)({
  flexGrow: 1,
  fontFamily: 'LibreFranklin',
  fontSize: '12px',
  fontWeight: 'normal',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 1.67,
  letterSpacing: 'normal',
  textAlign: 'left',
  color: 'var(--schemes-on-surface)',
  height: '152px',
  display: '-webkit-box',
  overflow: 'hidden',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 18,
})

export const readMoreBtn = {
  backgroundColor: 'var(--schemes-primary)',
  color: 'var(--schemes-on-primary)',
  fontSize: '14px',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  borderRadius: '4px',
  padding: '12px 0px 2px',
  textAlign: 'left',
  display: 'block',
  '&:hover': {
    backgroundColor: 'var(--schemes-primary-dark)',
    color: 'red',
  },
}

export const PaginationContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(4),
}))
