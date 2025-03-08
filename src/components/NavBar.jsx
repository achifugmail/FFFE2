import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faUser, faChartBar, faCog } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 fixed top-0 w-full flex justify-around">
      <Link to="/league">
        <FontAwesomeIcon icon={faTrophy} />
        <span className="ml-2">League</span>
      </Link>
      <Link to="/my-team">
        <FontAwesomeIcon icon={faUser} />
        <span className="ml-2">My Team</span>
      </Link>
      <Link to="/scores">
        <FontAwesomeIcon icon={faChartBar} />
        <span className="ml-2">Scores</span>
      </Link>
      <Link to="/settings">
        <FontAwesomeIcon icon={faCog} />
        <span className="ml-2">Settings</span>
      </Link>
    </nav>
  );
};

export default NavBar;