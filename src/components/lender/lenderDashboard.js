import React, { useState } from 'react';
// import Geolocation from '../../components/geolocation'; // Adjust path accordingly

const LenderDashboard = () => {
  const [bookDetails, setBookDetails] = useState({ title: '', location: { lat: 0, lng: 0 } });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookDetails({ ...bookDetails, [name]: value });
  };

  // const handleLocationChange = (location) => {
  //   console.log('New Location:', location);
  // };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Lender Dashboard</h1>
      <div className="mb-4">
        <label className="block text-gray-700">Book Title</label>
        <input
          type="text"
          name="title"
          value={bookDetails.title}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border rounded-md"
        />
      </div>
      <div className="min-h-screen bg-gray-100">
        <h1 className="text-2xl text-center mt-6">Geolocation Example</h1>
        {/* <Geolocation onLocationChange={handleLocationChange} /> */}
      </div>
      <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md">Add Book</button>
    </div>
  );
};

export default LenderDashboard;
