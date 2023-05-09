import Link from 'next/link';

export default function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <span><h3>Kyle Moses</h3></span>
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
  );
}