import { ChangeEvent, useEffect, useRef } from 'react';
import NextLink from 'next/link';
import {
  AppBar,
  Box,
  Grid,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from '@mui/material';
import { AiOutlineMenu } from 'react-icons/ai';
import SearchIcon from '@mui/icons-material/Search';
import { NavbarTopItems } from './NavbarTopItems';
import { Search, SearchIconWrapper, StyledInputBase } from './WrapperSearchBar';

interface Props {
  onChange?: (value: ChangeEvent<HTMLInputElement>) => void;
}

export const Navbar = ({ onChange }: Props) => {
  const searchRef = useRef<HTMLInputElement>(null);

  const detectKeyDown = (e: KeyboardEvent) => {
    if (e.key !== '/') return;
    setTimeout(() => {
      searchRef.current?.focus();
    }, 50);
  };

  useEffect(() => {
    document.addEventListener('keydown', detectKeyDown, true);
  }, []);

  return (
    <AppBar>
      <Toolbar>
        <Grid item sx={{ display: { xs: 'block', sm: 'none' } }}>
          <IconButton>
            <AiOutlineMenu />
          </IconButton>
        </Grid>

        <NextLink href={'/'} passHref>
          <Link
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Typography variant='h6'>Directory | AtilaDev</Typography>
          </Link>
        </NextLink>

        <Box flex={1} />

        <NavbarTopItems />

        <Box borderColor={'black'}>
          <Search
            sx={{
              display: { xs: 'none', md: 'block' },
            }}
          >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              inputRef={searchRef}
              onChange={onChange}
              placeholder='focus: /'
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Box>
      </Toolbar>

      <Search sx={{ display: { xs: 'block', md: 'none' } }}>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          fullWidth
          onChange={onChange}
          placeholder='Search...'
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>
    </AppBar>
  );
};
