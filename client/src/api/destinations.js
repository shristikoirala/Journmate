const BASE_URL = 'http://localhost:5000/api/destinations';

// GET all destinations
export const fetchDestinations = async () => {
  const res = await fetch(BASE_URL);
  return await res.json();
};

// POST a new destination
export const addDestination = async (destinationData) => {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(destinationData),
  });
  return await res.json();
};
