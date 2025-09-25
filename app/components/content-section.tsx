import React from 'react'
import { PhilosophyCard, cardConfig } from './philosophy-card'
import { PortfolioProjectCard } from './portfolio-project-card'
import { projectConfig } from '~/constants/config'

export const ContentSection: React.FC = () => {
  return (
    <>
      <div className="mx-auto mt-6 grid max-w-7xl grid-cols-1 gap-4 px-2 pb-6 lg:px-0">
        {cardConfig.map((card, index) => (
          <PhilosophyCard key={index} title={card.title}>
            {card.content}
          </PhilosophyCard>
        ))}
      </div>

      <h2 className="px-2 text-3xl font-bold text-green-400 lg:px-0">Featured Projects</h2>

      <div className="mx-auto mt-6 grid max-w-7xl grid-cols-1 gap-4 px-2 pb-6 lg:grid-cols-2 lg:px-0">
        {projectConfig.map((project, index) => (
          <PortfolioProjectCard
            key={index}
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
    </>
  )
}