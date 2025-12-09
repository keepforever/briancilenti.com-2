import type { Route } from "./+types/project-details";
import { Link, data } from "react-router";
import { projectConfig } from "~/constants/config";

export function meta({ params }: Route.MetaArgs): Route.MetaDescriptors {
  const projectId = params.projectId;

  const project = projectConfig.find(
    (project) => project?.detailViewLink === `/projects/${projectId}`,
  ) as (typeof projectConfig)[0];

  return [
    { title: `Brian Cilenti | Project: ${project?.title}` },
    {
      name: "description",
      content:
        "A comprehensive app for managing a cover band logistics including booking shows, tracking venues, building set lists, and managing songs.",
    },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {
  const projectId = params.projectId;

  const project = projectConfig.find(
    (project) => project?.detailViewLink === `/projects/${projectId}`,
  ) as (typeof projectConfig)[0];

  if (!project) {
    throw data({ status: 404, message: "Project not found" }, { status: 404 });
  }

  return project;
}

export default function ProjectDetails({ loaderData }: Route.ComponentProps) {
  const { title, imageSrc, githubUrl, description, deployedUrl, demoUrl } =
    loaderData;

  const stopPropagation = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.stopPropagation();
  };

  if (!title) {
    return (
      <div className="flex flex-col items-start rounded-md bg-slate-600 p-6">
        <Link
          to="/projects"
          className="mb-4 text-2xl font-bold text-blue-300 hover:text-blue-700"
        >
          Back to Projects
        </Link>
        <div className="text-3xl text-red-500 sm:text-6xl">
          Project not found
        </div>
      </div>
    );
  }

  return (
    <div className="m-2 flex flex-col justify-between gap-4 rounded-lg bg-gray-800 p-6 shadow-md">
      <h2 className="text-2xl font-bold text-green-400">{title}</h2>

      <img
        src={imageSrc}
        alt={title}
        className="object-fit w-full rounded-md"
      />

      <p className="text-green-200">{description}</p>

      <h2 className="text-xl font-bold text-green-400">Links</h2>

      <div className="flex flex-wrap gap-4">
        {githubUrl && (
          <a
            href={githubUrl}
            className="text-green-300 hover:text-green-500"
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
            className="text-green-300 hover:text-green-500"
            target="_blank"
            rel="noopener noreferrer"
            onClick={stopPropagation}
          >
            Live Site
          </a>
        )}
        {demoUrl && (
          <a
            href={demoUrl}
            className="text-green-300 hover:text-green-500"
            target="_blank"
            rel="noopener noreferrer"
            onClick={stopPropagation}
          >
            YouTube Demo
          </a>
        )}
      </div>
    </div>
  );
}
