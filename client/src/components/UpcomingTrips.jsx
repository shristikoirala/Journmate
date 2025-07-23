const trips = [
  { id: 1, destination: "Pokhara", date: "2025-08-05", status: "Looking for Buddy" },
  { id: 2, destination: "Bandipur", date: "2025-08-12", status: "Confirmed" },
];

const UpcomingTrips = () => (
  <div className="bg-white p-6 rounded-2xl shadow-md">
    <h3 className="text-xl font-semibold mb-4">Your Upcoming Trips</h3>
    <ul className="space-y-3">
      {trips.map((trip) => (
        <li
          key={trip.id}
          className="p-4 bg-gray-100 rounded-xl flex justify-between items-center"
        >
          <div>
            <h4 className="font-medium">{trip.destination}</h4>
            <p className="text-sm text-gray-600">{trip.date}</p>
          </div>
          <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
            {trip.status}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

export default UpcomingTrips;
