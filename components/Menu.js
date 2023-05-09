import Link from 'next/link';

export default function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <span className="initials">KM</span>
        </li>
        <li className="menu-toggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul className="dropdown-menu">
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
        </li>
      </ul>
      
      <style jsx>{`
        .initials {
          display: inline-block;
          padding: 0.2rem 0.5rem;
          border: 1px solid black;
        }

        nav ul {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 0;
          padding: 0;
        }

        .menu-toggle {
          display: none;
        }

        .menu-toggle input {
          display: none;
        }

        .menu-toggle span {
          display: block;
          width: 25px;
          height: 3px;
          margin-bottom: 5px;
          position: relative;
          background: black;
        }

        .menu-toggle ul {
          position: absolute;
          top: 100%;
          left: 0;
          display: none;
          width: 100%;
          background: white;
          padding: 0;
          margin: 0;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .menu-toggle ul li {
          display: block;
          margin: 0;
        }

        .menu-toggle ul a {
          display: block;
          padding: 10px;
          color: black;
          text-decoration: none;
        }

        @media (max-width: 768px) {
          .initials {
            display: none;
          }

          .menu-toggle {
            display: block;
          }

          .menu-toggle ul {
            position: static;
            display: block;
          }

          .menu-toggle input:checked + ul {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
}
