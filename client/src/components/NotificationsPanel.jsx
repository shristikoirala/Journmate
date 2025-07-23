const notifications = [
  "Sita requested to connect.",
  "You have 1 new buddy suggestion.",
];

const NotificationsPanel = () => (
  <div className="bg-white p-6 rounded-2xl shadow-md">
    <h3 className="text-xl font-semibold mb-4">Notifications</h3>
    <ul className="list-disc list-inside text-sm text-gray-700">
      {notifications.map((note, i) => (
        <li key={i}>{note}</li>
      ))}
    </ul>
  </div>
);

export default NotificationsPanel;
