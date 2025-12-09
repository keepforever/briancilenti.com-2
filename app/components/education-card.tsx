import React from "react";

type Education = {
  university: string;
  location: string;
  graduationYear: number;
  degree: string;
  gpa: number;
};

export const educationConfig: Education = {
  university: "University of Akron",
  location: "Akron, Ohio",
  graduationYear: 2008,
  degree: "B.S. Mechanical Engineering",
  gpa: 3.5,
};

type EducationCardProps = {
  education: Education;
};

export const EducationCard: React.FC<EducationCardProps> = ({ education }) => {
  return (
    <div className="my-4 rounded-lg bg-gray-800 p-8 shadow-md">
      <h2 className="text-3xl font-semibold text-green-400">
        {education.university}
      </h2>
      <p className="mt-2 text-green-300">{education.location}</p>
      <p className="mt-2 text-green-200">
        Graduated: {education.graduationYear}
      </p>
      <p className="mt-2 text-green-100">{education.degree}</p>
      <p className="mt-2 text-green-100">GPA: {education.gpa}</p>
    </div>
  );
};
