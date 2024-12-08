// src/hooks/useGitHub.ts
import { useQuery } from '@tanstack/react-query';
import { getUserRepos, getRepoReadme } from '../app/api/github';

export const useUserRepos = (username: string) => {
  return useQuery({queryKey:['userRepos', username], queryFn:() => getUserRepos(username), 
    enabled: !!username, // Query hanya berjalan jika username ada
    staleTime: 1000 * 60 * 5, // Data dianggap valid selama 5 menit
  });
};

export const useRepoReadme = (username: string, repo: string) => {
  return useQuery({queryKey:['repoReadme', username, repo],queryFn: () => getRepoReadme(username, repo), 
    enabled: !!username && !!repo, // Query berjalan jika username dan repo ada
    staleTime: 1000 * 60 * 5,
  });
};
