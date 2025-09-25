import type { Route } from "./+types/projects";
import React from 'react'
import { PortfolioProjectCard } from '~/components/portfolio-project-card'
import { projectConfig } from '~/constants/config'
import { cn } from '~/utils/misc'

export function meta(): Route.MetaDescriptors {
  return [
    { title: 'Brian Cilenti | Projects' },
    {
      name: 'description',
      content:
        'Explore the portfolio of Brian Cilenti, showcasing various web development projects including a comprehensive band management app and more. Each project includes details, GitHub repos, live demos, and YouTube videos.',
    },
  ];
}

export const ProjectsRoute: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn('py-6', className)}>
      <h2 className="px-2 text-3xl font-bold tracking-tighter text-green-400 sm:text-4xl lg:px-0">Featured Projects</h2>

      <div className="mx-auto mt-6 grid max-w-7xl grid-cols-1 gap-4 px-2 pb-6 lg:grid-cols-2 lg:px-0">
        {projectConfig.map(project => (
          <PortfolioProjectCard
            key={project.detailViewLink}
            title={project.title}
            imageSrc={project.imageSrc}
            githubUrl={project.githubUrl}
            description={project.description}
            deployedUrl={project.deployedUrl}
            demoUrl={project.demoUrl}
            detailViewLink={project.detailViewLink}
          />
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  return <ProjectsRoute />
}