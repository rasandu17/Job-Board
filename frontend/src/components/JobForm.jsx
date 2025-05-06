import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

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
  
      if (onJobPosted) onJobPosted();
  
      toast.success('✅ Job posted successfully!');
      setTitle('');
      setCompany('');
      setLocation('');
      setDescription('');
    } catch (err) {
      console.error('Error:', err);
      toast.error('❌ Failed to post job. Try again.');
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg space-y-6"
      >
        <h2 className="text-2xl font-bold text-gray-800">Post a Job</h2>

        <input
          type="text"
          placeholder="Job Title"
          className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Company"
          className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />

        <input
          type="text"
          placeholder="Location"
          className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <textarea
          placeholder="Job Description"
          className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Post Job
        </button>
      </form>
    </div>
  );
}

export default JobForm;