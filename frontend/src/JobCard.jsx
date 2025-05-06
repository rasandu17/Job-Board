function JobCard({ job }) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
        <h2 className="text-xl font-semibold text-blue-700">{job.title}</h2>
        <p className="text-gray-600 mt-1">{job.company}</p>
        <p className="text-sm text-gray-500 mt-1">{job.location}</p>
        <p className="mt-2 text-gray-700">{job.description}</p>
      </div>
    );
  }
  
  export default JobCard;
  