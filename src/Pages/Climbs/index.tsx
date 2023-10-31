import React, { useState, useEffect } from "react";
import ClimbForm from "./ClimbForm";
import ClimbList from "./ClimbList";
import { ClimbElement } from "../../types/response";
import supabase from "../../clients/supabaseClient";
import { useHistory } from "react-router-dom";

const Climbs: React.FC = () => {
  const [climbs, setClimbs] = useState<ClimbElement[]>(null);
  const history = useHistory();

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getSession();
      try {
        console.log(data);
        if (data.session == null) {
          history.push("/signup");
          return;
        }
      } catch (error) {
        console.log(error);
      }
    };

    // npx json-server --watch data/climbs.json --port 8000
    fetch("http://localhost:8000/climbs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setClimbs(data);
      });

    fetchUser();
  }, []);

  return (
    <div className="">
      <ClimbForm />
      {/* <GradeConverter /> */}
      {climbs && <ClimbList climbs={climbs} title="All Climbs" />}
    </div>
  );
};

export default Climbs;
