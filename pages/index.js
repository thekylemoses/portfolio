import Head from 'next/head'

const HomePage = () => {
  return (
    <div className="container">
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="My portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <div className="logo">My Portfolio</div>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <div className="hero">
          <img src="/images/profile-picture.png" alt="My Profile Picture" className="profile-picture" />
          <h1>Welcome to my portfolio!</h1>
          <p>Here you can find information about me and my projects.</p>
          <a href="/projects">View Projects</a>
        </div>
      </main>

      <footer>
        <p>&copy; 2023 My Portfolio</p>
      </footer>
    </div>
  )
}

export default HomePage;
