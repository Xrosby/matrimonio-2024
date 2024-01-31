import './App.css';

function App() {
  const menuItems = [
    {
      name: 'We\'re Getting Married!',
      id: 'getting-married',
      component:
        <div className='content-container' id="getting-married">
          <h1>We're Getting Married!</h1>
          <div style={{ display: 'flex' }}>
            <h2 style={{ borderRight: '1px solid darkgrey', paddingRight: 10, marginRight: 10 }}>August 17th, 2024</h2><h2>Castello di San Basilio, Pisticci</h2>
          </div>
        </div>
    },
    {
      name: 'Location',
      id: 'location',
      component: <div className='content-container' id="location">
        <h1>Location</h1>
      </div>
    },
    {
      name: 'What To See',
      id: 'what-to-see',
      component: <div className='content-container' id="what-to-see">
        <h1>What To See</h1>
      </div>
    },
    {
      name: 'RSVP',
      id: 'rsvp',
      component: <div className='content-container' id="rsvp">
        <h1>RSVP</h1>
      </div>
    },
    {
      name: 'Gifts',
      id: 'gifts',
      component: <div className='content-container' id="gifts">
        <h1>Gifts</h1>
      </div>
    },
  ]

  const MenuItem = ({ name, id }) => <a style={{ textDecoration: 'none', color: 'white', fontWeight: 600, fontSize: 20 }} href={`#${id}`}>{name.toUpperCase()}</a>


  return (

    <div className="App">

      <div id="main-container" style={{ height: '75%', width: '100%' }}>
        <div id="filter"></div>
        <div id="background">      </div>
        <div id="menu">
          {menuItems.slice(0, 2).map(menuItem => <MenuItem name={menuItem.name} id={menuItem.id} />)}
          <div id="names">Mads - Nica</div>
          {menuItems.slice(2, 5).map(menuItem => <MenuItem name={menuItem.name} id={menuItem.id} />)}
        </div>

      </div>
      <div style={{ backgroundColor: 'white', width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        {menuItems.map(item => item.component)}
      </div>
    </div >
  );
}

export default App;
