import React, { useState } from 'react';
import axios from 'axios';

const JobForm = ({onJobPosted}) => {
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/api/jobs', {
        title,
        company,
        location,
        description
      });
      if (onJobPosted) {
        onJobPosted(); 
      }

      alert('Job posted successfully!');
      setTitle('');
      setCompany('');
      setLocation('');
      setDescription('');
    } catch (err) {
      console.error('Error posting job:', err);
      alert('Something went wrong.');
    }
  };

  

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg space-y-4">
      <h2 className="text-2xl font-bold text-center">Post a New Job</h2>
      <input
        type="text"
        placeholder="Job Title"
        className="w-full p-2 border border-gray-300 rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Company"
        className="w-full p-2 border border-gray-300 rounded"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      <input
        type="text"
        placeholder="Location"
        className="w-full p-2 border border-gray-300 rounded"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <textarea
        placeholder="Job Description"
        className="w-full p-2 border border-gray-300 rounded"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
        Post Job
      </button>
    </form>
  );
};

export default JobForm;
