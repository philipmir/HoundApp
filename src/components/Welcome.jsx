import React, { useState } from 'react';

const Welcome = (props) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleMenuClick = (screen) => {
    props.nextScreen(screen);
    toggleMenu();
  };

  return (
    <section>
      <div className="header">
        <button onClick={toggleMenu} className="menu-side">
          Menu
        </button>
        <h3>Välkommen Till Doggy Daycare!</h3>
      </div>

      {showMenu && (
        <div className="menu">
          <button onClick={() => handleMenuClick('Hounds')}>Hounds</button>
          {/* Add more menu items here */}
        </div>
      )}

      <picture>
        <img
          src="https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG91bmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
          alt="Hundar"
        />
      </picture>
    </section>
  );
};

export default Welcome;

