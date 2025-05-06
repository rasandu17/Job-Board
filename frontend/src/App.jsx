import { useEffect, useState } from 'react';
import axios from 'axios';
import JobForm from './components/JobForm';
import JobCard from './components/JobCard';

function App() {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/jobs');
      setJobs(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="p-4">
      <JobForm onJobPosted={fetchJobs} />
      <div className="mt-8 grid gap-4 grid-cols-1 md:grid-cols-2">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
}

export default App;
