// src/app/components/RepoReadme.tsx
import React, {useState, useEffect} from 'react';
import { useRepoReadme } from '../hooks/useGithub';

interface RepoReadmeProps {
  username: string;
  repo: string;
}

const RepoReadme: React.FC<RepoReadmeProps> = ({ username, repo }) => {
  const [readme, setReadme] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   const fetchReadme = async () => {
  //     try {
  //       const response = await axios.get(
  //         `https://api.github.com/repos/${username}/${repo}/readme`,
  //         {
  //           headers: {
  //             Accept: 'application/vnd.github.v3.raw',
  //           },
  //         }
  //       );
  //       setReadme(response.data);
  //       setIsLoading(false);
  //     } catch (err) {
  //       setError('Failed to load README');
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchReadme();
  // }, [username, repo]);

  if (isLoading) return <p>Loading README...</p>;
  if (error) return <p>{error}</p>;

  return <div dangerouslySetInnerHTML={{ __html: readme! }} />;
};

export default RepoReadme;
