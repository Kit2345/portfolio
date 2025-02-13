interface Project {
  title: string;
  description?: string;
}
interface ProjectList {
  projectsList: Project[];
}

// const ProjectList = [{ title: "Stitch the weather" }, { title: "Test2" }];

export function ProjectComponent({ projectsList }: ProjectList) {
  // const projectsList = [{"title": "Stitch the weather", }]

  return projectsList.map((project, index) => (
    <div key={index}>
      <h3>{project.title}</h3>
    </div>
  ));
}
