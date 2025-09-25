import { useNavigate } from 'react-router'
import React from 'react'

export const PortfolioProjectCard: React.FC<{
  title: string
  imageSrc: string
  githubUrl: string
  description: string
  deployedUrl: string
  demoUrl: string
  detailViewLink: string
}> = ({ title, imageSrc, githubUrl, description, deployedUrl, demoUrl, detailViewLink }) => {
  const navigate = useNavigate()

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      navigate(detailViewLink)
    }
  }

  const stopPropagation = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.stopPropagation()
  }

  return (
    <div
      className="flex flex-col justify-between rounded-lg bg-gray-800 p-6 shadow-md transition-transform duration-200 hover:scale-[1.01] hover:shadow-lg"
      onClick={() => navigate(detailViewLink)}
      onKeyPress={handleKeyPress}
      tabIndex={0}
      role="button"
      aria-pressed="false"
    >
      <img src={imageSrc} alt={title} className="h-[277px] w-full rounded-md" />

      <h2 className="mt-4 text-2xl font-bold text-green-400">{title}</h2>

      <p className="mt-2 text-green-200">{description}</p>

      <h2 className="mt-4 text-2xl font-bold text-green-400">Links</h2>

      <div className="mt-4 flex flex-wrap justify-between gap-4">
        {githubUrl && (
          <a
            href={githubUrl}
            className="text-green-400 hover:text-green-600"
            target="_blank"
            rel="noopener noreferrer"
            onClick={stopPropagation}
          >
            GitHub Repo
          </a>
        )}
        {deployedUrl && (
          <a
            href={deployedUrl}
            className="text-green-400 hover:text-green-600"
            target="_blank"
            rel="noopener noreferrer"
            onClick={stopPropagation}
          >
            Live App
          </a>
        )}
        {!!demoUrl && (
          <a
            href={demoUrl}
            className="text-green-400 hover:text-green-600"
            target="_blank"
            rel="noopener noreferrer"
            onClick={stopPropagation}
          >
            YouTube Demo
          </a>
        )}
      </div>
    </div>
  )
}