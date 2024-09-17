'use client'
import React from 'react'
import Image from 'next/image'
import { AppBar, Toolbar, Box, IconButton, Badge, Typography, Grid } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import NotificationsIcon from '@mui/icons-material/Notifications'
import { NavbarData } from '@/types'
import ProfileButton from '@/components/navbar/ProfileButton'
import SearchBox from './SearchBox'
import {
  appbarStyle,
  navbarContainer,
  iconGridStyle,
  logoBox,
  linkStyle,
  typographyStyle,
  imageStyle,
  actionButtonsContainer,
} from './styles'
import spacing from '@/design-tokens/spacing'

const Navbar: React.FC<{ data: NavbarData }> = ({ data }) => {
  const theme = useTheme()
  const isTabletOrBelow = useMediaQuery(theme.breakpoints.down('lg'))

  const handleSearch = (query: string) => {
    const encodedQuery = encodeURIComponent(query.trim())
    window.location.href = `/search?query=${encodedQuery}`
  }

  return (
    <AppBar position='static' sx={appbarStyle}>
      <Toolbar sx={{ flexDirection: 'column', alignItems: isTabletOrBelow ? 'center' : 'center' }}>
        <Grid container alignItems='center' justifyContent='space-between' sx={{ width: '100%' }}>
          {isTabletOrBelow ? (
            <>
              {/* Logo at the top for tablets and below */}
              <Grid item xs={12} sx={{ textAlign: 'center', marginBottom: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Box sx={logoBox}>
                    <Image
                      src='/assets/guardian_one_logo_wordMark_dark.svg'
                      alt={data.logoAlt}
                      fill
                      style={imageStyle}
                      sizes='(max-width: 600px) 180px, 280.7px'
                    />
                  </Box>
                </Box>
              </Grid>

              {/* Links and Icons for Tablets and Below */}
              <Grid
                item
                xs={12}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: 2,
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  marginTop: spacing.spacing.m,
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                  {data.leftLinks.map((link, index) => (
                    <a key={index} href={link.url} style={linkStyle}>
                      <Typography variant='body1' sx={typographyStyle}>
                        {link.name}
                      </Typography>
                    </a>
                  ))}
                  {data.rightLinks.map((link, index) => (
                    <a key={index} href={link.url} style={linkStyle}>
                      <Typography variant='body1' sx={typographyStyle}>
                        {link.name}
                      </Typography>
                    </a>
                  ))}
                </Box>
                {/* Icons */}
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <SearchBox onSearch={handleSearch} />
                  <IconButton>
                    <Badge badgeContent={data.notificationsCount}>
                      <NotificationsIcon />
                    </Badge>
                  </IconButton>
                  <ProfileButton />
                </Box>
              </Grid>
            </>
          ) : (
            <>
              {/* Original Layout for Larger Screens */}
              <Grid item xs={12} sm={2}>
                {/* Empty grid item to push the center box to the middle on desktop */}
              </Grid>
              <Grid item xs={12} sm={8}>
                <Box sx={navbarContainer}>
                  {data.leftLinks.map((link, index) => (
                    <a key={index} href={link.url} style={linkStyle}>
                      <Typography variant='body1' sx={typographyStyle}>
                        {link.name}
                      </Typography>
                    </a>
                  ))}
                  <Box sx={logoBox}>
                    <Image
                      src='/assets/guardian_one_logo_wordMark_dark.svg'
                      alt={data.logoAlt}
                      fill
                      style={imageStyle}
                      sizes='(max-width: 600px) 180px, 280.7px'
                    />
                  </Box>
                  {data.rightLinks.map((link, index) => (
                    <a key={index} href={link.url} style={linkStyle}>
                      <Typography variant='body1' sx={typographyStyle}>
                        {link.name}
                      </Typography>
                    </a>
                  ))}
                </Box>
              </Grid>
              <Grid item xs={12} sm={2} sx={iconGridStyle}>
                <Box sx={actionButtonsContainer}>
                  <SearchBox onSearch={handleSearch} />
                  <IconButton>
                    <Badge badgeContent={data.notificationsCount}>
                      <NotificationsIcon />
                    </Badge>
                  </IconButton>
                  <ProfileButton />
                </Box>
              </Grid>
            </>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
