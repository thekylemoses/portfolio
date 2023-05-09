import Link from 'next/link';

export default function Menu() {
  return (
    <>
      {/* Horizontal menu for larger screens */}
      <nav className="desktop-nav">
        <ul>
          <li>
            <span className="initials">KM</span>
          </li>
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
      </nav>

      {/* Dropdown menu for mobile */}
      <nav className="mobile-nav">
        <input type="checkbox" id="menu-toggle" />
        <label htmlFor="menu-toggle">
          <span className="initials">KM</span>
          <span className="icon"></span>
        </label>
        <ul>
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
      </nav>

      <style jsx>{`
        /* Common styles */
        nav {
          display: flex;
          align-items: center;
        }

        ul {
          display: flex;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        li {
          margin-right: 1rem;
        }

        a {
          color: black;
          text-decoration: none;
        }

        /* Desktop styles */
        .desktop-nav {
          display: none;
        }

        @media (min-width: 768px) {
          .desktop-nav {
            display: flex;
          }

          .mobile-nav {
            display: none;
          }
        }

        /* Mobile styles */
        .mobile-nav {
          position: relative;
        }

        #menu-toggle {
          display: none;
        }

        label {
          display: flex;
          align-items: center;
          cursor: pointer;
        }

        .icon {
          display: inline-block;
          margin-left: 0.5rem;
          width: 1rem;
          height: 1rem;
          border: solid black;
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
        }

        #menu-toggle:checked + label .icon {
          transform: rotate(-135deg);
        }

        ul {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          margin: 0;
          padding: 0.5rem;
          background-color: white;
          border: 1px solid black;
        }

        li {
          margin-right: 0;
          margin-bottom: 0.5rem;
        }

        a {
          display: block;
          padding: 0.5rem;
          color: black;
        }
      `}</style>
    </>
  );
}
