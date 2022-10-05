import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

import {
  AiOutlineGithub,
  AiOutlineGlobal,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineTwitter,
} from 'react-icons/ai';
import * as externalLinks from '../../utils';
import Typography from '@mui/material/Typography';

interface Props {
  open: boolean;
  onClose: () => void;
}

export const SideMenu = ({ open, onClose }: Props) => {
  return (
    <Drawer
      open={open}
      anchor='left'
      sx={{ backdropFilter: 'blur(4px)', transition: 'all 0.5s ease-out' }}
      onClose={onClose}
    >
      <Box sx={{ width: 250, paddingTop: 5 }}>
        <List>
          <ListItem>
            <Typography variant='subtitle1'>Directory | AtilaDev</Typography>
          </ListItem>

          <Divider variant='middle' />

          <ListItem button onClick={externalLinks.gitHubLink}>
            <ListItemIcon>
              <AiOutlineGithub />
            </ListItemIcon>
            <ListItemText primary={'GitHub'} />
          </ListItem>

          <ListItem button onClick={externalLinks.linkedInLink}>
            <ListItemIcon>
              <AiOutlineLinkedin />
            </ListItemIcon>
            <ListItemText primary={'LinkedIn'} />
          </ListItem>

          <ListItem button onClick={externalLinks.twitterLink}>
            <ListItemIcon>
              <AiOutlineTwitter />
            </ListItemIcon>
            <ListItemText primary={'Twitter'} />
          </ListItem>

          <ListItem button onClick={externalLinks.mailLink}>
            <ListItemIcon>
              <AiOutlineMail />
            </ListItemIcon>
            <ListItemText primary={'Email'} />
          </ListItem>

          <ListItem button onClick={externalLinks.atilaDevLink}>
            <ListItemIcon>
              <AiOutlineGlobal />
            </ListItemIcon>
            <ListItemText primary={'Personal Website'} />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};
