import Head from 'next/head';
import Menu from '/components/Menu';

const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'This is the description for project 1',
    productionUrl: 'https://www.example.com/project1',
    githubUrl: 'https://github.com/username/project1'
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'This is the description for project 2',
    productionUrl: 'https://www.example.com/project2',
    githubUrl: 'https://github.com/username/project2'
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'This is the description for project 3',
    productionUrl: 'https://www.example.com/project3',
    githubUrl: 'https://github.com/username/project3'
  }
];

const ProjectsPage = () => {
  return (
    <div className="container">
      <Head>
        <title>My Projects</title>
        <meta name="description" content="A list of my projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <div>
          <Menu />
        </div>
      </header>

      <main>
        <h1>My Projects</h1>

        <div className="projects">
          {projects.map(project => (
            <div key={project.id} className="project">
              <h2 className="title">{project.title}</h2>
              <p className="description">{project.description}</p>
              <div className="links">
                <a href={project.productionUrl} target="_blank" rel="noopener noreferrer">Production</a> | {' '}
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer>
        <p>&copy; 2023 My Portfolio</p>
      </footer>

      <style jsx>{`
        .projects {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }

        .project {
          width: 30%;
          padding: 1rem;
          margin-bottom: 2rem;
          border: 1px solid #eaeaea;
          border-radius: 5px;
          box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
        }

        .title {
          margin-bottom: 0.5rem;
        }

        .description {
          margin-bottom: 1rem;
        }

        .links {
          display: flex;
          justify-content: space-between;
        }

        a {
          color: white;
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default ProjectsPage;
