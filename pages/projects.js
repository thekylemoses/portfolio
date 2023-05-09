import Head from 'next/head';

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

        <ul>
          {projects.map(project => (
            <li key={project.id}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <p>
                <a href={project.productionUrl} target="_blank" rel="noopener noreferrer">Production</a> | {' '}
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
              </p>
            </li>
          ))}
        </ul>
      </main>

      <footer>
        <p>&copy; 2023 My Portfolio</p>
      </footer>
    </div>
  );
};

export default ProjectsPage;
