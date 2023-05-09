import Link from 'next/link';
import { useState } from 'react';

export default function Menu() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="menu">
      <div className="branding">
        <span className="initials">KM</span>
      </div>
      <button className="dropdown-toggle" onClick={handleDropdownToggle}>
        <span className="sr-only">Toggle Navigation</span>
        <span className="hamburger"></span>
      </button>
      <ul className={`links ${isDropdownOpen ? 'open' : ''}`}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </li>
      </ul>

      <style jsx>{`
        .menu {
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          background-color: #0070f3;
          color: white;
          padding: 1rem;
        }

        .branding {
          display: flex;
          align-items: center;
        }

        .initials {
          display: inline-block;
          padding: 0.2rem 0.5rem;
          border: 1px solid white;
        }

        .dropdown-toggle {
          display: none;
        }

        .links {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .links li {
          margin-left: 1rem;
        }

        .links a {
          color: white;
          text-decoration: none;
        }

        @media (max-width: 768px) {
          .dropdown-toggle {
            display: block;
            position: absolute;
            top: 1rem;
            right: 1rem;
            width: 2rem;
            height: 2rem;
            background-color: transparent;
            border: none;
            cursor: pointer;
            z-index: 2;
          }

          .dropdown-toggle .hamburger {
            display: block;
            position: relative;
            width: 1.5rem;
            height: 2px;
            background-color: white;
            transition: transform 0.3s ease;
          }

          .dropdown-toggle .hamburger:before,
          .dropdown-toggle .hamburger:after {
            content: '';
            display: block;
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: white;
            transition: transform 0.3s ease;
          }

          .dropdown-toggle .hamburger:before {
            top: -0.5rem;
          }

          .dropdown-toggle .hamburger:after {
            top: 0.5rem;
          }

          .dropdown-toggle.open .hamburger {
            transform:rotate(45deg);
          }      .dropdown-toggle.open .hamburger:before {
            transform: rotate(45deg);
            top: 0;
          }
    
          .dropdown-toggle.open .hamburger:after {
            transform: rotate(-45deg);
            top: 0;
          }
    
          .links {
            display: none;
            position: absolute;
            top: 4rem;
            right: 0;
            width: 100%;
            background-color: #0070f3;
            padding: 1rem;
            box-sizing: border-box;
            z-index: 1;
          }
    
          .links.open {
            display: flex;
            flex-direction: column;
          }
    
          .links li {
            margin: 1rem 0;
          }
        }
      `}</style>
    </nav>
    );
  }
