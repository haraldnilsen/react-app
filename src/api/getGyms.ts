import { GymElement } from "../types/response";
import supabase from "../clients/supabaseClient";

export const fetchGyms = async (): Promise<GymElement[]> => {
  try {
    const { data } = await supabase.from("gyms").select();
    return data;
  } catch (error) {
    return error;
  }
};
