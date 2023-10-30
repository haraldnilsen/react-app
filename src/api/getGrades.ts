import supabase from "../clients/supabaseClient";
import { GradeElement } from "../types/response";

export const fetchGrades = async (
  gradeType: string
): Promise<GradeElement[]> => {
  try {
    let { data } = await supabase.from("grades").select();
    data = data.filter((grade) => grade.grade_type == gradeType);
    return data;
  } catch (error) {
    return error;
  }
};
