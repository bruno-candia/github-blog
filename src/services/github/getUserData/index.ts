import { GITHUB_API_SERVICE_ENDPOINTS, IGetUserData } from "../endpoints";
import { IGetUserDataResponse } from "./model/getUserDataResponse";
import { api } from "../../../lib/axios";
import { getUserDataConverter } from "./converter/getUserDataConverter";

export async function getUserDataService({
  userName,
}: IGetUserData): Promise<IGetUserDataResponse> {
  const { data } = await api.get(
    GITHUB_API_SERVICE_ENDPOINTS.GET_USER_DATA({ userName })
  );

  return getUserDataConverter(data);
}
