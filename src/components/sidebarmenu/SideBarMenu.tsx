'use client'

import React, { useState } from 'react'
import { Box, Typography, List, ListItem, ListItemText, IconButton, Link } from '@mui/material'
import { KeyboardArrowUp, KeyboardArrowDown } from '@mui/icons-material'
import { containerStyles, titleStyle } from './style'
import { SideBarMenuData } from '@/types'

const SideBarMenu: React.FC<{ data: SideBarMenuData }> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(true)
  const links = Array.isArray(data?.links) ? data.links : []

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Box>
      <Box sx={containerStyles} onClick={toggleMenu}>
        <Typography sx={titleStyle}>Additional Links</Typography>
        <IconButton size='small'>{isOpen ? <KeyboardArrowUp /> : <KeyboardArrowDown />}</IconButton>
      </Box>
      {isOpen && (
        <List>
          {links.map((link, index) => (
            <ListItem key={index} disablePadding>
              <Link href={link.url} target='_blank' rel='noopener noreferrer'>
                <ListItemText primary={link.name} />
              </Link>
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  )
}

export default SideBarMenu
