import supabase from "../clients/supabaseClient";
import { GradeElement } from "../types/response";

export const fetchGrades = async (): Promise<GradeElement[]> => {
  try {
    let { data } = await supabase.from("grades").select();
    return data;
  } catch (error) {
    return error;
  }
};
