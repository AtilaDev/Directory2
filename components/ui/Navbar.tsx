import { ChangeEvent, useEffect, useRef } from 'react';
import NextLink from 'next/link';
import {
  AppBar,
  Box,
  Grid,
  IconButton,
  InputBase,
  Link,
  ListItem,
  Toolbar,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineTwitter,
  AiOutlineGlobal,
  AiOutlineMenu,
  AiFillInfoCircle,
} from 'react-icons/ai';
import SearchIcon from '@mui/icons-material/Search';

import { grey } from '@mui/material/colors';
import { HtmlTooltip } from './HtmlTooltip';

interface Props {
  onChange?: (value: ChangeEvent<HTMLInputElement>) => void;
}

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: grey[300],
  '&:hover': {
    backgroundColor: grey[300],
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'black',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'black',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export const Navbar = ({ onChange }: Props) => {
  const searchRef = useRef<HTMLInputElement>(null);

  const gitHubLink = () => window.open('https://github.com/AtilaDev');
  const linkedInLink = () =>
    window.open('https://www.linkedin.com/in/leandro-f-7a06a8171/');
  const twitterLink = () => window.open('https://twitter.com/FavreLeandro');
  const atilaDevLink = () => window.open('https://atiladev.com/en');
  const mailLink = () => window.open('mailto:atiladevelop@gmail.com');

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
        {/* Drawer menu */}
        <NextLink href={'/'} passHref>
          <Link>
            <IconButton>
              <AiOutlineMenu />
            </IconButton>
          </Link>
        </NextLink>

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

        <Box sx={{ display: { xs: 'block' } }}>
          <HtmlTooltip
            title={
              <>
                <Typography variant='subtitle1' color='inherit'>
                  Directory App
                </Typography>
                <Typography variant='subtitle2'>
                  Is an easy & quick search to find google fonts using{' '}
                  <NextLink
                    href='https://github.com/expo/google-fonts'
                    passHref
                  >
                    <a target='_blank'>@expo-google-fonts</a>
                  </NextLink>{' '}
                  for your React Native App. Developed with ❤️ by{' '}
                  <NextLink href='https://atiladev.com/en' passHref>
                    <a target='_blank'>AtilaDev</a>
                  </NextLink>
                </Typography>
              </>
            }
          >
            <IconButton>
              <AiFillInfoCircle />
            </IconButton>
          </HtmlTooltip>

          {/* Put inside of Drawer in the future */}
          <Grid item sx={{ display: { xs: 'none', sm: 'inline' } }}>
            <IconButton onClick={gitHubLink}>
              <AiOutlineGithub />
            </IconButton>

            <IconButton onClick={linkedInLink}>
              <AiOutlineLinkedin />
            </IconButton>

            <IconButton onClick={twitterLink}>
              <AiOutlineTwitter />
            </IconButton>

            <IconButton onClick={mailLink}>
              <AiOutlineMail />
            </IconButton>
          </Grid>

          <IconButton onClick={atilaDevLink}>
            <AiOutlineGlobal />
          </IconButton>
        </Box>

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
