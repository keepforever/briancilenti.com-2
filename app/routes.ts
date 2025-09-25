import { type RouteConfig, index, route } from '@react-router/dev/routes'

export default [
  index('routes/home.tsx'),
  route('projects', 'routes/projects.tsx'),
  route('projects/:projectId', 'routes/project-details.tsx'),
  route('resume', 'routes/resume.tsx'),
  route('demo', 'routes/demo.tsx', [
    index('routes/demo-index.tsx'),
    route('video-clip-demo', 'routes/video-clip-demo.tsx'),
  ]),
  route('you-will-not-find-this', 'routes/hidden.tsx'),
] satisfies RouteConfig
