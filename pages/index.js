import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>My Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header title="My Portfolio" />

      <main>
        <section className="hero">
          <h1>Hi, I'm Kyle Moses</h1>
          <p>I am a computer science major and software developer. Here are some of the projects I have worked on:</p>
        </section>

        <section className="projects">
          <h2>Projects</h2>
          <div className="project">
            <h3>Project 1</h3>
            <p>Description of project 1</p>
            <a href="#">View project</a>
          </div>
          <div className="project">
            <h3>Project 2</h3>
            <p>Description of project 2</p>
            <a href="#">View project</a>
          </div>
          <div className="project">
            <h3>Project 3</h3>
            <p>Description of project 3</p>
            <a href="#">View project</a>
          </div>
        </section>

        <section className="about">
          <h2>About Me</h2>
          <p>I'm a computer science major at [Your University], and I'm passionate about software development and technology. In my free time, I enjoy learning new programming languages and building personal projects.</p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
