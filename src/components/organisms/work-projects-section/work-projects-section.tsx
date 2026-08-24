import { ProjectsGrid } from "@/components/organisms/projects-grid";

import "./work-projects-section.scss";

export function WorkProjectsSection() {
  return (
    <section className="work-projects-section">
      <div className="work-projects-section__inner">
        <ProjectsGrid />
      </div>
    </section>
  );
}
