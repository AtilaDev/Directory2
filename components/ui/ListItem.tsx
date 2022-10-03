import { useMemo, FC } from 'react';
import Image from 'next/image';
import { Box, Grid } from '@mui/material';

import { removeScore } from '../../utils';
import { IFont } from '../../interfaces';

interface Props extends IFont {}

export const ListItem: FC<Props> = ({ fontName }) =>
  useMemo(() => {
    let loadImage = require(`../../public/font_images/${removeScore(
      fontName
    )}.png`);

    return (
      <Grid
        container
        direction='column'
        justifyContent='center'
        alignItems='center'
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            width: '30%',
          }}
        >
          <Image src={loadImage} alt={fontName} layout='fixed' height={40} />
        </Box>
      </Grid>
    );
  }, [fontName]);
