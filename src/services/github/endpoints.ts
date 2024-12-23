import { constructEndpoint } from "../../lib/axios";

export interface IGetUserData {
  userName: string;
}

export interface IGetIssues {
  text: string;
  userName: string;
  repository: string;
}

export const GITHUB_API_SERVICE_ENDPOINTS = {
  GET_USER_DATA: ({ userName }: IGetUserData) =>
    constructEndpoint({
      endpoint: "/users/{userName}",
      pathParams: { userName },
    }),
  GET_ISSUES: ({ text, userName, repository }: IGetIssues) =>
    constructEndpoint({
      endpoint: `/search/issues`,
      queryParams: {
        q: `${text}+repo:${userName}/${repository}`,
      },
    }),
};
