'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { Container, Grid, Typography, Button, IconButton, Pagination, TextField, InputAdornment } from '@mui/material'
import NextLink from 'next/link'
import Image from 'next/image'
import FilterListIcon from '@mui/icons-material/FilterList'
import SearchIcon from '@mui/icons-material/Search'
import {
  FilterContainer,
  StyledCard,
  CardMediaContainer,
  HeaderTypography,
  CardDivider,
  SubTextTypography,
  readMoreBtn,
  PaginationContainer,
  CardBottomContainer,
} from './styles'

interface GalleryContentProps {
  items: {
    id: number
    title: string
    body: string
    slug: string
    image?: string | null
  }[]
  itemsPerPage?: number
  searchPlaceholder?: string
}

const GalleryContent: React.FC<GalleryContentProps> = ({ items, itemsPerPage = 8, searchPlaceholder = 'Search' }) => {
  const [filteredItems, setFilteredItems] = useState(items || [])
  const [searchTerm, setSearchTerm] = useState('')
  const [page, setPage] = useState(1)

  useEffect(() => {
    if (!items || items.length === 0) {
      setFilteredItems([])
    } else {
      const filtered = items.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()))
      setFilteredItems(filtered)
      setPage(1)
    }
  }, [searchTerm, items])

  const handleSearchChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value

    if (value === '') {
      setSearchTerm(value)
      return
    }

    const maxLength = 55

    const disallowedCharacters = /[^a-zA-Z0-9\s#]/g

    if (value.length <= maxLength && !disallowedCharacters.test(value)) {
      setSearchTerm(value)
    }
  }, [])

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }

  const paginatedItems = filteredItems.slice((page - 1) * itemsPerPage, page * itemsPerPage)

  const stripHtml = (html: string): string => {
    // get rid of html elements and special symbs
    const htmlEntityMap: { [key: string]: string } = {
      '&nbsp;': ' ',
      '&amp;': '&',
      '&lt;': '<',
      '&gt;': '>',
      '&quot;': '"',
      '&#39;': "'",
    }

    let text = html.replace(/<[^>]*>/g, ' ')

    text = text.replace(/&[a-zA-Z0-9#]+;/g, (entity) => htmlEntityMap[entity] || entity)

    return text.replace(/\s+/g, ' ').trim()
  }

  return (
    <Container>
      <FilterContainer>
        <FilterListIcon />
        <Typography variant='subtitle2'>FILTERS</Typography>
        <TextField
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder={searchPlaceholder}
          variant='outlined'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </FilterContainer>
      <Grid container spacing={2}>
        {paginatedItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
            <NextLink href={{ pathname: `/articles/${item.slug ? item.slug : item.id}` }}>
              <StyledCard>
                <CardMediaContainer>
                  <Image
                    src={item.image || '/images/lizard.jpg'}
                    alt={item.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    unoptimized={true}
                  />
                </CardMediaContainer>
                <CardDivider />
                <CardBottomContainer>
                  <HeaderTypography gutterBottom>{item.title}</HeaderTypography>
                  <SubTextTypography variant='body2' color='text.secondary'>
                    {stripHtml(item.body)}
                  </SubTextTypography>
                  <Button sx={readMoreBtn}>READ MORE</Button>
                </CardBottomContainer>
              </StyledCard>
            </NextLink>
          </Grid>
        ))}
      </Grid>
      <PaginationContainer>
        <IconButton onClick={() => setPage((prev) => Math.max(prev - 1, 1))} disabled={page === 1} />
        <Pagination
          count={Math.ceil(filteredItems.length / itemsPerPage)}
          page={page}
          onChange={handlePageChange}
          color='primary'
          sx={{ mx: 2 }}
          showFirstButton
          showLastButton
        />
        <IconButton
          onClick={() => setPage((prev) => Math.min(prev + 1, Math.ceil(filteredItems.length / itemsPerPage)))}
          disabled={page === Math.ceil(filteredItems.length / itemsPerPage)}
        />
      </PaginationContainer>
    </Container>
  )
}

export default GalleryContent
