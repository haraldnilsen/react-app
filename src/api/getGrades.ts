import { GradeElement } from "../types/response";

export const fetchGrades = async (
  gradeType: string
): Promise<GradeElement[]> => {
  let query = `http://localhost:8080/grades/${gradeType}`;

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
