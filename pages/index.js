import Head from 'next/head';
import Image from 'next/image';
import Menu from '/components/Menu';

const HomePage = () => {
  return (
    <div className="container">
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="My portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <div>
          <Menu />
        </div>
      </header>

      <main>
        <div className="hero">
          <div className="profile-picture">
            <img src="/imgs/profile-picture.jpeg" alt="My Profile Picture"  />
          </div>
          <h1>Welcome to my portfolio!</h1>
          <p>This site is still a WIP</p>
          <a href="/projects">View Projects</a>
        </div>
      </main>

      <footer>
        <p>Copyright © 2023 Kyle Moses</p>
      </footer>

      <style jsx>{`
        .profile-picture {
          border-radius: 50%;
          overflow: hidden;
          margin-bottom: 2rem;
        }
      `}</style>
    </div>
  )
}

export default HomePage;
