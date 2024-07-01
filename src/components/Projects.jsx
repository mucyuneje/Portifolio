import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="bg-white text-gray-800 p-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold">Projects</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-200 p-4 rounded">
            <h3 className="text-xl font-semibold">Project 1</h3>
            <p className="mt-2">Description of Project 1.</p>
          </div>
          <div className="bg-gray-200 p-4 rounded">
            <h3 className="text-xl font-semibold">Project 2</h3>
            <p className="mt-2">Description of Project 2.</p>
          </div>
          {/* Add more projects as needed */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
