import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  PaletteMode,
  Switch,
} from "@mui/material";
import AddHomeIcon from "@mui/icons-material/AddHome";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";
import GroupIcon from "@mui/icons-material/Group";
import StoreIcon from "@mui/icons-material/Store";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LightModeIcon from '@mui/icons-material/LightMode';
import ModeNightIcon from "@mui/icons-material/ModeNight";

interface SidebarProps {
  setMode: (mode: PaletteMode) => void;
  mode: PaletteMode;
}
const Sidebar:React.FC<SidebarProps>= ({setMode,mode}) => {
  return (
    <Box p={2} flex={1} sx={{ display: { xs: "none", sm: "block" } }}>
        <Box position={"fixed"}> {/* fixed position acts as absolute so we must wrap the position inside the box to avoid this behavior with our feedbar*/}
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <AddHomeIcon />
            </ListItemIcon>
            <ListItemText primary="HomePage" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#pages">
            <ListItemIcon>
              <SpeakerNotesIcon />
            </ListItemIcon>
            <ListItemText primary="Pages" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#groups">
            <ListItemIcon>
              <GroupIcon />
            </ListItemIcon>
            <ListItemText primary="Groups" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#store">
            <ListItemIcon>
              <StoreIcon />
            </ListItemIcon>
            <ListItemText primary="Store" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#friends">
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Friends" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#settings">
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#profile">
            <ListItemIcon>
              <AccountBoxIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              {mode==='light'?<ModeNightIcon/>:<LightModeIcon/>}
            </ListItemIcon>
            <Switch onChange={()=>setMode(mode==='light'? "dark":"light")} /> {/*if you change me i will change the state to the opposite value , cause you changed me*/}
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
    </Box>
  );
};

export default Sidebar;
