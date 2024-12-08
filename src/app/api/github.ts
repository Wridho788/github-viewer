import api from './api';
import {Repos} from "../../types/types"
export const getUserRepos = async (username: string): Promise<Repos> => {
  const { data } = await api.get(`/users/${username}/repos`);
  return data;

};
