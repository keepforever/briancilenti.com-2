import React from "react";

export type Experience = {
  role: string;
  company: string;
  location: string;
  duration: string;
  description: string;
};

type ExperienceCardProps = {
  experience: Experience;
};

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
}) => {
  return (
    <div className="my-4 rounded-lg bg-gray-800 p-8 shadow-md">
      <h2 className="text-3xl font-semibold text-green-400">
        {experience.role}
      </h2>
      <p className="mt-2 text-green-300">
        {experience.company}, {experience.location}
      </p>
      <p className="mt-2 text-green-200">{experience.duration}</p>
      <p className="mt-2 text-green-100">{experience.description}</p>
    </div>
  );
};
