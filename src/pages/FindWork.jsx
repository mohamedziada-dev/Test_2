import { useState } from "react";


export default function FindWork() {
  const [jobs, setJobs] = useState([
    { id: 1, title: "Job 1", description: "Description for Job 1" },
    { id: 2, title: "Job 2", description: "Description for Job 2" },
    { id: 3, title: "Job 3", description: "Description for Job 3" }
  ]);
  return (
    <div className="h-screen bg-gray-100 ">
      <h1 className="text-3xl font-bold text-center">Find Work</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {jobs.map((job) => (
          <div key={job.id} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">{job.title}</h2>
            <p className="text-gray-600">{job.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
