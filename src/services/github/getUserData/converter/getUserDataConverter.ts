import { IGithubUserData } from "../model/getUserDataResponse";

export function getUserDataConverter(data: IGithubUserData) {
  return {
    login: data.login,
    id: data.id,
    avatar_url: data.avatar_url,
    url: data.url,
    followers_url: data.followers_url,
    name: data.name,
    bio: data.bio,
    followers: data.followers,
    company: data.company,
  };
}
