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
            <Image src="pages/imgs/profile-picture.jpeg" alt="My Profile Picture"  />
          </div>
          <h1>Welcome to my portfolio!</h1>
          <p>Here you can find information about me and my projects.(Note: this site is not mobile safe yet)</p>
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
