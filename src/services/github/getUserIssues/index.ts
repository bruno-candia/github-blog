import { GITHUB_API_SERVICE_ENDPOINTS, IGetUserIssues } from "../endpoints";
import { IGetUserIssuesResponse } from "./model/getUserIssueResponse";
import { api } from "../../../lib/axios";

export async function getUserIssuesService({
  userName,
  text,
  repository,
  signal,
}: IGetUserIssues): Promise<IGetUserIssuesResponse> {
  const { data } = await api.get(
    GITHUB_API_SERVICE_ENDPOINTS.GET_USER_ISSUES({
      userName,
      text,
      repository,
    }),
    {
      signal,
    }
  );

  return data;
}
