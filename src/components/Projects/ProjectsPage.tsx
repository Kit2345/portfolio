import { ProjectComponent } from "./ProjectComponent";
import { projectsList } from "../../data/projects";

function ProjectsPage() {
  //   const ProjectList = [
  //     { title: "Stitch the Weather" },
  //     { title: "Test2" },
  //     { title: "Test3" },
  //     { title: "Test4" },
  //   ];

  return (
    <>
      <section>
        <div>
          <h1>Projects</h1>
        </div>

        <ProjectComponent projectsList={projectsList} />
      </section>
    </>
  );
}

export default ProjectsPage;
