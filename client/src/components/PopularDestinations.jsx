const destinations = [
  { name: "Pokhara", img: "/images/Pokhara.avif" },
  { name: "Janakpur", img: "/images/janakpur.jpg" },
];

const PopularDestinations = () => (
  <div className="bg-white p-6 rounded-2xl shadow-md">
    <h3 className="text-xl font-semibold mb-4">Popular Destinations</h3>
    <div className="grid grid-cols-2 gap-4">
      {destinations.map((d, index) => (
        <div key={index} className="relative group overflow-hidden rounded-xl">
          <img src={d.img} alt={d.name} className="w-full h-28 object-cover" />
          <div className="absolute bottom-0 bg-black bg-opacity-40 w-full p-2 text-white text-sm">
            {d.name}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default PopularDestinations;
