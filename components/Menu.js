import Link from 'next/link';

export default function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <span>Kyle</span>
        </li>
        <li>
          <Link href="/">
            <a><span>Kyle </span> Home</a>
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