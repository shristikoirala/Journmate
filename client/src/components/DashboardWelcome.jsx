import React from 'react';

const DashboardWelcome = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-6 rounded-xl shadow mb-6">
        <h1 className="text-4xl font-extrabold text-blue-800 mb-2">Welcome to JournMate, Explorer! 🌍</h1>
        <p className="text-gray-700 text-lg">Find your perfect travel buddy for every destination across Nepal.</p>
      </div>

      {/* Suggested Destinations Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Suggested Destinations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* You can map real data here later */}
          <div className="bg-white rounded-lg shadow p-4">
            <img src="/images/ilam.jpg" alt="Ilam" className="h-40 w-full object-cover rounded" />
            <h3 className="text-lg font-semibold mt-2">Ilam</h3>
            <p className="text-gray-600">Tea gardens, misty hills, and peaceful escape.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <img src="/images/Upper Mustang.webp" alt="Upper Mustang" className="h-40 w-full object-cover rounded" />
            <h3 className="text-lg font-semibold mt-2">Upper Mustang</h3>
            <p className="text-gray-600">Desert landscape meets Himalayan beauty.</p>
          </div>
          {/* Add more cards here */}
        </div>
      </section>

      {/* Nearby Travelers Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Nearby Travelers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-white shadow rounded p-4 flex items-center gap-4">
            <div className="bg-blue-100 text-blue-600 rounded-full w-10 h-10 flex items-center justify-center font-bold">A</div>
            <div>
              <p className="font-medium">Anish Thapa</p>
              <p className="text-sm text-gray-500">Going to Pokhara</p>
            </div>
          </div>
          {/* Add more traveler cards */}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600">1,250+</h3>
            <p className="text-gray-600">Travelers Active</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600">Pokhara, Mustang</h3>
            <p className="text-gray-600">Top Destinations</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600">13</h3>
            <p className="text-gray-600">Upcoming Group Treks</p>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Need Help?</h2>
        <form className="bg-white shadow rounded p-6 max-w-md space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-2 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border p-2 rounded"
          />
          <textarea
            placeholder="Message"
            className="w-full border p-2 rounded"
            rows={4}
          ></textarea>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Send</button>
        </form>
      </section>
    </div>
  );
};

export default DashboardWelcome;
