import { GymElement } from "../types/response";

export const fetchGyms = async (): Promise<GymElement[]> => {
  let query = `http://localhost:8040/gyms`;

  const response = await fetch(query)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log("Error:", error);
    });
  return response;
};
