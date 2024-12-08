import api from './api';
import {Repos} from "../../types/types"
export const getUserRepos = async (username: string): Promise<Repos> => {
  const { data } = await api.get(`/users/${username}/repos`);
  return data;

};
export const getRepoReadme = async (username: string, repo: string) => {
  const { data } = await api.get(`/repos/${username}/${repo}/readme`, {
    headers: { Accept: 'application/vnd.github.VERSION.raw' },
  });
  return data;
};