import { constructEndpoint } from "../../lib/axios";

export interface IGetUserData {
  userName: string;
}

export interface IGetUserIssues {
  text: string;
  userName: string;
  repository: string;
  signal?: AbortSignal;
}

export const GITHUB_API_SERVICE_ENDPOINTS = {
  GET_USER_DATA: ({ userName }: IGetUserData) =>
    constructEndpoint({
      endpoint: "/users/{userName}",
      pathParams: { userName },
    }),
  GET_USER_ISSUES: ({ text, userName, repository }: IGetUserIssues) =>
    constructEndpoint({
      endpoint: `/search/issues`,
      queryParams: {
        q: `${text} repo:${userName}/${repository}`,
        per_page: 10,
      },
    }),
};
