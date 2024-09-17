'use client'
import React, { useState, useRef, useEffect } from 'react'
import { TextField, IconButton, InputAdornment, Box } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

type SearchBoxProps = {
  onSearch: (query: string) => void
}

const BOX_TRANSITION_DURATION = '1s'

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const searchInputRef = useRef<HTMLInputElement>(null)

  const handleSearchIconClick = () => {
    setIsSearchOpen(true)
  }

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [isSearchOpen])

  const handleSearchSubmit = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && searchQuery.trim()) {
      onSearch(searchQuery)
    }
  }

  const handleBlur = () => {
    if (!searchQuery) {
      setIsSearchOpen(false)
    }
  }

  // Open the search box when the 's' key is pressed, but allow 's' input when the box is open
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const activeElement = document.activeElement as HTMLElement

      // Check if the focused element is an input, textarea, or any other interactive element
      const isInputFocused =
        activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA' || activeElement.isContentEditable

      if (event.key === 's' && !isSearchOpen && !isInputFocused) {
        event.preventDefault()
        setIsSearchOpen(true)
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isSearchOpen])

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <TextField
        inputRef={searchInputRef}
        variant='outlined'
        size='small'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleSearchSubmit}
        onBlur={handleBlur}
        placeholder='Search...'
        sx={{
          width: isSearchOpen ? '200px' : '0px',
          opacity: isSearchOpen ? 1 : 0,
          marginRight: isSearchOpen ? 2 : 0,
          transition: `width ${BOX_TRANSITION_DURATION} ease,
                       opacity ${BOX_TRANSITION_DURATION} ease,
                       margin-right ${BOX_TRANSITION_DURATION} ease`,
          overflow: 'hidden',
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      {!isSearchOpen && (
        <IconButton onClick={handleSearchIconClick}>
          <SearchIcon />
        </IconButton>
      )}
    </Box>
  )
}

export default SearchBox
