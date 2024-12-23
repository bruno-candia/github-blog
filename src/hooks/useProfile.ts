import { useEffect, useState } from "react";
import { getUserDataService } from "../services/github/getUserData";
import { IGetUserDataResponse } from "../services/github/getUserData/model/getUserDataResponse";

export function useProfile() {
  const [profile, setProfile] = useState<IGetUserDataResponse>();

  useEffect(() => {
    getUserDataService({ userName: "bruno-candia" }).then((response) => {
      setProfile(response);
    });
  }, []);

  return { profile };
}
