import React from 'react';

const projects = [
  {
    title: "Project 1",
    description: "Description of Project 1. This project involves building a responsive web application using React and Tailwind CSS.",
    link: "#",
    imageUrl: "../assets/bg.jpeg",
  },
  {
    title: "Project 2",
    description: "Description of Project 2. This project focuses on developing an AI model for image recognition.",
    link: "#",
    imageUrl: "https://via.placeholder.com/150"
  },
  {
    title: "Project 3",
    description: "Description of Project 3. This project is about creating a mobile app using Flutter.",
    link: "#",
    imageUrl: "https://via.placeholder.com/150"
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects" className="bg-blue-600 text-white p-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold">Projects</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-blue-500 rounded-lg overflow-hidden shadow-lg">
              <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-2">{project.description}</p>
                <a href={project.link} className="text-blue-200 hover:text-white mt-4 inline-block">Learn More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
