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
          flex-direction: column;
          justify-content: center;
          align-items: center;
          list-style: none;
          margin: 0;
          padding: 0;
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background-color: #0070f3;
          transform: translateY(-100%);
          opacity: 0;
          transition: transform 0.3s ease, opacity 0.3s ease;
          z-index: 1;
        }

        .links li {
          margin-bottom: 1rem;
        }

        .links a {
          color: white;
          text-decoration: none;
        }

        .open .links {
          transform: translateY(0);
          opacity: 1;
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
              bottom: -0.5rem;
            }
      
            .open .dropdown-toggle .hamburger {
              transform: rotate(45deg);
            }
      
            .open .dropdown-toggle .hamburger:before {
              transform: translateY(0.5rem) rotate(-45deg);
            }
      
            .open .dropdown-toggle .hamburger:after {
              transform: translateY(-0.5rem) rotate(-45deg);
            }
      
            .links {
              flex-direction: row;
              position: static;
              transform: translateY(0);
              opacity: 1;
              background-color: transparent;
              width: auto;
              justify-content: flex-end;
              height: auto;
              overflow: hidden;
              margin-top: 1rem;
              margin-right: 1rem;
            }
      
            .links li {
              margin-left: 1rem;
              margin-bottom: 0;
            }
      
            .links a {
              font-size: 1.2rem;
            }
      
            .open .links {
              flex-direction: column;
              align-items: flex-end;
              background-color: #0070f3;
              width: 100%;
              height: 100%;
              overflow: auto;
              margin-top: 0;
              margin-right: 0;
              padding: 1rem;
              border-radius: 0 0 0.5rem 0.5rem;
            }
      
            .open .links li {
              margin-bottom: 1rem;
            }
          }
          `}</style>
          </nav>
          );
        }