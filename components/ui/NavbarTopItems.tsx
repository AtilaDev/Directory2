import React from 'react';
import NextLink from 'next/link';
import { Box, Typography, IconButton, Grid } from '@mui/material';
import {
  AiFillInfoCircle,
  AiOutlineGithub,
  AiOutlineLinkedin,
  // AiOutlineTwitter,
  AiOutlineMail,
  AiOutlineGlobal,
} from 'react-icons/ai';
import { FaXTwitter } from 'react-icons/fa6';
import { HtmlTooltip } from './HtmlTooltip';
import * as externalLinks from '../../utils';

export const NavbarTopItems = () => {
  return (
    <Box sx={{ display: { xs: 'block' } }}>
      <HtmlTooltip
        title={
          <>
            <Typography variant='subtitle1' color='inherit'>
              Directory App
            </Typography>
            <Typography variant='subtitle2'>
              Is an easy & quick search to find google fonts using{' '}
              <NextLink href='https://github.com/expo/google-fonts' passHref>
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
        <HtmlTooltip
          title={
            <Typography variant='subtitle2' color='inherit'>
              GitHub
            </Typography>
          }
        >
          <IconButton onClick={externalLinks.gitHubLink}>
            <AiOutlineGithub />
          </IconButton>
        </HtmlTooltip>

        <HtmlTooltip
          title={
            <Typography variant='subtitle2' color='inherit'>
              LinkedIn
            </Typography>
          }
        >
          <IconButton onClick={externalLinks.linkedInLink}>
            <AiOutlineLinkedin />
          </IconButton>
        </HtmlTooltip>

        <HtmlTooltip
          title={
            <Typography variant='subtitle2' color='inherit'>
              Twitter
            </Typography>
          }
        >
          <IconButton onClick={externalLinks.twitterLink}>
            <FaXTwitter />
          </IconButton>
        </HtmlTooltip>

        <HtmlTooltip
          title={
            <Typography variant='subtitle2' color='inherit'>
              Email
            </Typography>
          }
        >
          <IconButton onClick={externalLinks.mailLink}>
            <AiOutlineMail />
          </IconButton>
        </HtmlTooltip>
      </Grid>

      <HtmlTooltip
        title={
          <Typography variant='subtitle2' color='inherit'>
            Personal Website
          </Typography>
        }
      >
        <IconButton onClick={externalLinks.atilaDevLink}>
          <AiOutlineGlobal />
        </IconButton>
      </HtmlTooltip>
    </Box>
  );
};
