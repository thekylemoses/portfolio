import Link from 'next/link';

export default function Menu() {
  return (
    <nav>
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
      
      <style jsx>{`
        .initials {
          display: inline-block;
          padding: 0.2rem 0.5rem;
          border: 1px solid black;
        }
      `}</style>
    </nav>
  );
}