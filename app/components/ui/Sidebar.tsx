import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import InboxTwoToneIcon from '@mui/icons-material/InboxTwoTone';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import { useContext } from "react";
import { UIContext } from "@/app/context/ui";

const menuItems = ['Inbox', 'Starred', 'Send email', 'Drafts'];

export const Sidebar = () => {

  const { isMenuOpen, closeMenu } = useContext(UIContext);

  return (
    <Drawer anchor="left" open={isMenuOpen} onClose={closeMenu}>
      <Box sx={{ width: 250 }}>
        <Box sx={{ padding: "5px 10px" }}>
          <Typography variant="h4">Menu</Typography>
        </Box>
        <List>
          {
            menuItems.map((text, index) => (
              <ListItem key={text}>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 ? <InboxTwoToneIcon /> : <EmailTwoToneIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))
          }
        </List>
        <Divider />
        <List>
          {
            menuItems.map((text, index) => (
              <ListItem key={text}>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 ? <InboxTwoToneIcon /> : <EmailTwoToneIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))
          }
        </List>
      </Box>
    </Drawer>
  );
}