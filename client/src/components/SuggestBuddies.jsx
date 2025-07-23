const buddies = [
  { name: "Sita", age: 23, city: "Kathmandu" },
  { name: "Kiran", age: 26, city: "Pokhara" },
];

const SuggestedBuddies = () => (
  <div className="bg-white p-6 rounded-2xl shadow-md">
    <h3 className="text-xl font-semibold mb-4">Suggested Travel Buddies</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {buddies.map((b, index) => (
        <div key={index} className="p-4 bg-gray-100 rounded-xl">
          <p className="font-semibold">{b.name}, {b.age}</p>
          <p className="text-sm text-gray-600">{b.city}</p>
          <button className="mt-2 text-sm bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
            Connect
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default SuggestedBuddies;
