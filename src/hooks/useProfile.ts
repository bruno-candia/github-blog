import { useEffect, useState } from "react";
import { getUserDataService } from "../services/github/getUserData";
import { IGetUserDataResponse } from "../services/github/getUserData/model/getUserDataResponse";

interface IUseProfile {
  profile: IGetUserDataResponse | undefined;
}

export function useProfile(): IUseProfile {
  const [profile, setProfile] = useState<IGetUserDataResponse>();

  useEffect(() => {
    getUserDataService({ userName: "tailwindlabs" }).then((response) => {
      setProfile(response);
    });
  }, []);

  return { profile };
}
