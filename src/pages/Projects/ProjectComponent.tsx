interface Project {
  title: string;
  description?: string;
  link?: string;
  repo?: string;
}
interface ProjectList {
  projectsList: Project[];
}

// const ProjectList = [{ title: "Stitch the weather" }, { title: "Test2" }];

export function ProjectComponent({ projectsList }: ProjectList) {
  // const projectsList = [{"title": "Stitch the weather", }]

  return projectsList.map((project, index) => (
    <div className="width-80" key={index}>
      <h3>{project.title}</h3>
      {project.description && <p>What's the aim of the project?</p>}
      {project.description && <p>{project.description}</p>}
      <p>
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            Demo link
          </a>
        )}
      </p>
      {project.repo && (
        <a href={project.repo} target="_blank" rel="noopener noreferrer">
          Repo link
        </a>
      )}
    </div>
  ));
}
