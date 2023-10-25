import { ClimbElement } from "../types/response";

export const fetchClimbs = async (): Promise<ClimbElement[]> => {
  let query = `http://localhost:8000/climbs`;

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
