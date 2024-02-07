import './App.css';
import castello from './castello.jpg'
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import CelebrationIcon from '@mui/icons-material/Celebration';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import EmailIcon from '@mui/icons-material/Email';
import RedeemIcon from '@mui/icons-material/Redeem';


function App() {
  const menuItems = [
    {
      icon: <CelebrationIcon />,
      name: 'We\'re Getting Married!',
      id: 'getting-married',
      component:
        <div id="getting-married">
          <h1>We're Getting Married!</h1>
          <div style={{ display: 'flex' }}>
            <h2 style={{ borderRight: '1px solid darkgrey', paddingRight: 10, marginRight: 10 }}>August 17th, 2024</h2><h2>Castello di San Basilio, Pisticci</h2>
          </div>
        </div>
    },
    {
      icon: <LocationOnIcon />,
      name: 'Location',
      id: 'location',
      component: <div className='content-container' id="location">
        <h1>Location</h1>
        <div id="location-container" style={{ display: 'flex' }}>
          <div id="location-photo">
            <img style={{ height: '100%', width: '100%' }} src={castello} alt='Castello di San Basilio' />
          </div>
          <div style={{ paddingLeft: '4%' }}>The location is Castello Di San Basilio in Pisticci. Some random test! San Basilio in Pisticci. Some random test! San Basilio in Pisticci. Some random test! San Basilio in Pisticci. Some random test! San Basilio in Pisticci. Some random test! San Basilio in Pisticci. Some random test! </div>
        </div>
      </div>
    },
    {
      icon: <CameraAltIcon />,
      name: 'What To See',
      id: 'what-to-see',
      component: <div className='content-container' id="what-to-see">
        <h1>What To See</h1>
      </div>
    },
    {
      icon: <EmailIcon />,
      name: 'RSVP',
      id: 'rsvp',
      component: <div className='content-container' id="rsvp">
        <h1>RSVP</h1>
      </div>
    },
    {
      icon: <RedeemIcon />,
      name: 'Gifts',
      id: 'gifts',
      component: <div className='content-container' id="gifts">
        <h1>Gifts</h1>
      </div>
    },
  ]

  const MenuItem = ({ name, id }) => <a style={{ textDecoration: 'none', fontWeight: 600, fontSize: 20 }} href={`#${id}`}>{name.toUpperCase()}</a>


  const [open, setOpen] = React.useState(false)



  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
    >
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton>
              <a onClick={() => setOpen(false)} style={{ display: 'flex', color: '#141414', alignItems: 'center' }} href={`#${item.id}`}>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </a>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );


  return (

    <div className="App">
      <div id="background"></div>
      <div id="mobile-menu"
        style={{

          position: 'fixed',
          zIndex: 999,
          top: 0,
          left: 0
        }}>
        <MenuIcon
          onClick={() => setOpen(true)}
          style={{
            zIndex: 999,
            boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
            marginLeft: 5,
            marginTop: 5,
            color: 'black',
            padding: 5,
            backgroundColor: '#fff',
            fontSize: 30,
            borderRadius: 5,
            border: '1px solid lightgrey'
          }} />
      </div>
      <div id="main-container" style={{ height: '5%', width: '100%' }}>

        <div id="desktop-menu">
          {menuItems.map(menuItem => <MenuItem name={menuItem.name} id={menuItem.id} />)}
        </div>
        <Drawer
          style={{ zIndex: 1000 }}
          anchor={'left'}
          open={open}
          onClose={() => setOpen(false)}
        >
          {list('left')}
        </Drawer>
      </div>



      <div style={{ backgroundColor: 'white', width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        {menuItems.map(item => item.component)}
      </div>

    </div >
  );
}

export default App;
