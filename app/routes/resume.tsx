import type { Route } from "./+types/resume";
import { ExperienceCard } from "~/components/experience-card";
import { config } from "~/constants/config";
import { ResumeHeroSection } from "~/components/resume-hero-section";
import { ProjectsRoute } from "./projects";

export function meta(): Route.MetaDescriptors {
  return [
    { title: "Brian Cilenti | Résumé" },
    {
      name: "description",
      content:
        "Brian Cilenti - Senior Frontend Developer | Creating user-friendly experiences with AI and community insight. Systematic problem-solver with a passion for optimization and collaboration. Let's connect and build something great!",
    },
  ];
}

export default function Resume() {
  return (
    <>
      <ResumeHeroSection />
      <section className="px-2 py-4 text-green-400">
        <div>
          <div className="grid grid-cols-1 gap-3">
            {/* Education */}
            {/* <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Education</h2>

              <EducationCard education={educationConfig} />
            </div> */}

            {/* Tech */}
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Tech Soup
              </h2>

              <div className="my-4 rounded-lg bg-gray-800 p-8 shadow-md">
                <div className="flex flex-wrap gap-2">
                  {config.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-block rounded-full bg-gray-600 px-3 py-1 text-sm font-semibold text-green-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Experience */}

        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
          Experience
        </h2>

        <div className="grid grid-cols-1 gap-1">
          {config.experience.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </div>
      </section>

      {/* Projects */}

      <ProjectsRoute className="py-0" />
    </>
  );
}
