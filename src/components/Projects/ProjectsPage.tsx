import { ProjectComponent } from "./Project";

function ProjectsPage() {
  const ProjectList = [
    { title: "Stitch the Weather" },
    { title: "Test2" },
    { title: "Test3" },
    { title: "Test4" },
  ];

  return (
    <>
      <section>
        <div>
          <h1>Projects</h1>
        </div>

        <ProjectComponent projectsList={ProjectList} />
      </section>
    </>
  );
}

export default ProjectsPage;
