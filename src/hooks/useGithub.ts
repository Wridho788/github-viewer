// src/hooks/useGitHub.ts
import { useQuery } from "@tanstack/react-query";
import { getUserRepos } from "../app/api/github";

export const useUserRepos = (username: string) => {
  return useQuery({
    queryKey: ["userRepos", username],
    queryFn: () => getUserRepos(username),
    enabled: !!username,
    staleTime: 1000 * 60 * 5, // Data  valid for 5 minutes
  });
};
