import Link from 'next/link';

export default function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <span><h1>Kyle Moses</h1></span>
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