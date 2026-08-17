import BreadcrumbHero from "../../src/components/BreadcrumbHero";
import ProjectsShowcaseSection from "../../src/components/projects/ProjectsShowcaseSection";
import ProjectsTimelineSection from "../../src/components/projects/ProjectsTimelineSection";
import ProjectsCtaSection from "../../src/components/projects/ProjectsCtaSection";
import { createPageMetadata } from "../../src/lib/metadata";

export const metadata = createPageMetadata({
  title: "Projects",
  description:
    "Explore representative project workstreams and delivery capability from Phogole Resources across mining support services.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white">
      <BreadcrumbHero
        crumbs={[
          { label: "home", href: "/" },
          { label: "projects" },
        ]}
        title="projects and delivery capability"
        description="Representative workstreams that show how we execute in the field: disciplined delivery, safety-first, and clear reporting."
        imageAlt="Phogole Resources projects header"
      />

      <ProjectsShowcaseSection />
      <ProjectsTimelineSection />
      <ProjectsCtaSection />
    </main>
  );
}
