// src/app/components/RepoList.tsx
import React, { useState } from "react";
import { useUserRepos, useRepoReadme } from "../hooks/useGithub";
import RepoReadme from "./RepoReadme";
import styles from './RepoList.module.css'; // Styling eksternal
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';

interface Repo {
  id: number;
  name: string;
  description: string;
}

interface RepoListProps {
  username: string;
}
const RepoList: React.FC<RepoListProps> = ({ username }) => {
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useUserRepos(username);
  const [selectedRepo, setSelectedRepo] = useState<string | null>(null);

  if (isLoading) return <p>Loading repositories...</p>;
  if (isError) return <p>Failed to load repositories.</p>;

  const handleRepoSelect = (repoName: string) => {
    dispatch(setSelectedRepo(repoName)); // Update Redux state
    window.location.href = `/repo/${repoName}`; // Navigate to the RepoReadme page
  };

  return (
    <div className={styles.container}>
    <h2 className={styles.title}>Repositories</h2>
    <div className={styles.repoList}>
      {data.map((repo: Repo) => (
        <div key={repo.id} className={styles.repoCard}>
          <div className={styles.repoHeader}>
            <img
              src={repo.owner.avatar_url}
              alt={`${repo.name} avatar`}
              className={styles.avatar}
            />
            <div className={styles.repoInfo}>
              <h3 className={styles.repoName}>{repo.name}</h3>
              <p className={styles.repoDescription}>{repo.description}</p>
            </div>
          </div>
          <div className={styles.repoStats}>
            <span className={styles.repoLanguage}>{repo.language}</span>
            <span className={styles.repoStars}>⭐ {repo.stars}</span>
            <span className={styles.repoForks}>🍴 {repo.forks}</span>
          </div>
          <button
            onClick={() => setSelectedRepo(repo.name)}
            className={styles.repoButton}
          >
            View README
          </button>
        </div>
      ))}
    </div>
    {/* {selectedRepo && <RepoReadme username={username} repo={selectedRepo} />} */}
  </div>
  );
};

export default RepoList;
