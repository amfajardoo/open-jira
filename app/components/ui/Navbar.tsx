import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import { useContext } from 'react';
import { UIContext } from "@/app/context/ui";

export const Navbar = () => {

  const { openMenu } = useContext(UIContext);

  return (
    <AppBar position="sticky" >
      <Toolbar>
        <IconButton size="large" edge="start" onClick={openMenu}>
          <MenuTwoToneIcon />
        </IconButton>
        <Typography variant="h6">Open Jira</Typography>
      </Toolbar>
    </AppBar>
  );
}
