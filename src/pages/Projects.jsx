import React from 'react';
import { projects } from '../constants';
import CTA from '../components/CTA';

const Projects = () => {
  return (
    <section className="max-container py-10">
      <h1 className="text-4xl font-bold mb-8 text-center">
        My <span className="text-blue-500">Projects</span>
      </h1>
      <p className="text-center mb-12 text-lg text-gray-700">
        I've embarked on numerous projects throughout the years. These are the ones I hold closest to my heart. Many of them are open-source, so feel free to explore the codebase and contribute your ideas for further enhancements.
      </p>
      <div className="flex flex-wrap justify-center gap-10">
        {projects.map((project) => (
          <div
            className="w-full md:w-1/2 lg:w-1/3 p-4"
            key={project.name}
          >
            <div
              className={`bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-2xl ${project.theme}`}
            >
              <div className="relative flex justify-center items-center h-48 bg-gray-200">
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black to-transparent opacity-30"></div>
                <div className="relative z-10 text-center text-white text-xl font-semibold p-4">
                  <h4>{project.name}</h4>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">{project.description}</p>
                <p className="text-sm text-gray-500">Tools: {project.tools || 'Not specified'}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="border-slate-200 my-8" />
      <CTA />
    </section>
  );
};

export default Projects;
