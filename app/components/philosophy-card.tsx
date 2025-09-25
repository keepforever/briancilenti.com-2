import { Link } from 'react-router'
import React from 'react'

export const PhilosophyCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="rounded-lg bg-gray-800 p-6 shadow-md">
    <h2 className="text-2xl font-bold text-green-400">{title}</h2>
    <div className="mt-4 text-green-200">{children}</div>
  </div>
)

const ExperienceListItem: React.FC<{ company: string; description: string; duration: string }> = ({
  company,
  description,
  duration,
}) => (
  <li className="mb-4">
    <strong className="text-green-300">{company}</strong> <span className="text-xs text-green-200">({duration})</span>
    <p className="mt-2 text-green-100">{description}</p>
  </li>
)

export const cardConfig = [
  {
    title: 'About Me',
    content: (
      <p>
        I'm a frontend developer with an enthusiasm for DX, velocity, and cutting-edge tools like GitHub Copilot and
        ChatGPT. My mechanical engineering background drives my systematic approach to problem-solving and optimization.
        <br />
        <br />I consider myself a skilled communicator; As such, I prioritize clear, concise messaging and leverage
        tools like{' '}
        <a
          href="https://www.loom.com/"
          className="font-mono text-green-400 hover:text-green-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          Loom
        </a>{' '}
        to send dense information efficiently, minimizing noise, maximizing impact, and saving time.
      </p>
    ),
  },
  {
    title: 'Philosophy',
    content: (
      <p>
        I treat users of apps I work on as guests, aiming to provide efficient workflows that respect their time and
        effort. I value pragmatic solutions that balance velocity and quality, and adhere to a "strong opinions, loosely
        held" mindset.
      </p>
    ),
  },
  {
    title: 'Community & Collaboration',
    content: (
      <p>
        Staying current with modern practices and trends is crucial in web development. I actively follow React
        community thought leaders on platforms like X.com, which keeps my work aligned with the latest advancements.
      </p>
    ),
  },
  {
    title: "Let's Connect",
    content: (
      <>
        <p>Looking for a seasoned developer or a consultant? Reach out to discuss collaboration.</p>
        <br />
        <p>The best way to reach me is via a DM on LinkedIn.</p>
        <p className="mt-4">
          <a href="https://www.linkedin.com/in/brian-cilenti-65754749" className="text-green-400 hover:text-green-600">
            LinkedIn
          </a>{' '}
          |{' '}
          <a href="https://github.com/keepforever" className="text-green-400 hover:text-green-600">
            GitHub
          </a>
        </p>
      </>
    ),
  },
  {
    title: 'Experience Highlights',
    content: (
      <>
        <ul>
          <ExperienceListItem
            company="Ketch Cloud Inc (2.5 years)"
            description="Frontend Engineer on SaaS Dashboard and Consent Management UI, balancing speed and quality."
            duration="6/2021 - 2/2024"
          />

          <ExperienceListItem
            company="Findaway (2.5 years)"
            description="Enhanced collaboration platform for authors and narrators, led Chaptering Tool development."
            duration="4/2019 - 02/2021"
          />
        </ul>
        <div className="flex flex-wrap items-center gap-2">
          <Link to="/resume">
            <button className="mt-4 rounded-md bg-green-400 px-2 py-1 text-gray-800 hover:bg-green-500">
              View Full Resume
            </button>
          </Link>
        </div>
      </>
    ),
  },
]