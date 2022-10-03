import { useState, useEffect, ChangeEvent } from 'react';
import type { NextPage } from 'next';
import {
  Box,
  Button,
  Divider,
  Grid,
  ListItem,
  ListItemButton,
  Modal,
  Typography,
} from '@mui/material';
import { useDebouncedCallback } from 'use-debounce';
import { DirectoryLayout } from '../components/layout';
import { ListItem as ListItemImage } from '../components/ui';

import { fontArray } from '../database';
import { IFont } from '../interfaces/index';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  py: 2,
  px: 4,
};

const HomePage: NextPage = () => {
  const [show, setShow] = useState(false);
  const [miFont, setMiFont] = useState<IFont>({} as IFont);
  const [onChange, setOnChange] = useState('');
  const [listFonts, setListFonts] = useState([]);

  const showModal = () => setShow(true);
  const hideModal = () => setShow(false);

  const getFontsForQuery = (query: string) => {
    return fontArray.filter((font) => {
      return font.fontName.toLowerCase().includes(query);
    });
  };

  useEffect(() => {
    // @ts-ignore
    setListFonts(getFontsForQuery(onChange));
  }, [onChange]);

  const copyInstaller = async (value: string) => {
    try {
      await navigator.clipboard.writeText(
        `npx expo install @expo-google-fonts/${value}`
      );
    } catch (error) {
      // console.log(error)
    }
  };

  const copyImport = async (value: string) => {
    try {
      await navigator.clipboard.writeText(
        `import {  } from '@expo-google-fonts/${value}'`
      );
    } catch (error) {
      // console.log(error)
    }
  };

  const handleChangeText = (event: ChangeEvent<HTMLInputElement>) => {
    setOnChange(event.target.value.toLowerCase());
  };

  const handleOnChange = useDebouncedCallback(
    (onChange) => setOnChange(onChange),
    250
  );

  return (
    <DirectoryLayout
      title={'Directory App'}
      pageDescription={'Encuentra tus fonts favoritas'}
      onChange={handleChangeText}
    >
      <Grid justifyContent='center' alignItems='center'>
        <Grid item xs={12}>
          {listFonts.map((font: IFont) => (
            <ListItem key={font.fontName}>
              <ListItemButton
                onClick={() => {
                  setMiFont(font);
                  showModal();
                }}
              >
                <ListItemImage fontName={font.fontName} />
              </ListItemButton>
            </ListItem>
          ))}
        </Grid>
      </Grid>
      <Modal
        open={show}
        onClose={hideModal}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography
            variant='h2'
            component={'h2'}
            mb={1}
            bgcolor={'lightgray'}
            textAlign={'center'}
          >
            FONT
          </Typography>
          <Typography
            id='modal-modal-title'
            variant='subtitle1'
            component='h3'
            textAlign={'center'}
          >
            {miFont.fontName}
          </Typography>

          <Divider sx={{ my: 1 }} />
          <Typography bgcolor={'lightgray'} textAlign={'center'} mb={1}>
            VARIANTS
          </Typography>
          <Typography
            id='modal-modal-description'
            component='code'
            sx={{ mt: 2 }}
          >
            {miFont.variants?.map((item) => (
              <Typography key={item} variant='body2' component='div'>
                {item}
              </Typography>
            ))}
          </Typography>

          <Divider sx={{ my: 1 }} />
          <Typography bgcolor={'lightgray'} textAlign={'center'} mb={1}>
            ACTIONS
          </Typography>
          <Box display={'flex'} flexDirection={'column'}>
            <Button onClick={() => copyInstaller(miFont.fontName)}>
              COPY INSTALLER
            </Button>
            <Button onClick={() => copyImport(miFont.fontName)}>
              COPY IMPORT
            </Button>
            <Button onClick={hideModal}>BACK</Button>
          </Box>
        </Box>
      </Modal>
    </DirectoryLayout>
  );
};

export default HomePage;
