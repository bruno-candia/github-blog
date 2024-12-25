import { GITHUB_API_SERVICE_ENDPOINTS, IGetIssueInfo } from "../endpoints";
import { api } from "../../../lib/axios";
import { IGetIssueInfoResponse } from "./model/getUserIssueResponse";

export async function getIssueInfoService({
  userName,
  repository,
  issueNumber,
}: IGetIssueInfo): Promise<IGetIssueInfoResponse> {
  const { data } = await api.get(
    GITHUB_API_SERVICE_ENDPOINTS.GET_ISSUE_INFO({
      userName,
      repository,
      issueNumber,
    })
  );

  return data;
}
