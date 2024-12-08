// src/app/components/RepoList.tsx
import React from "react";
import { useDispatch } from "react-redux";
import { useUserRepos } from "../hooks/useGithub";
import styles from "./RepoList.module.css"; // Styling eksternal
import { Repo } from "../types/types";
import { setSelectedRepo } from "../store/repoSlice"; // Import setSelectedRepo

interface RepoListProps {
  username: string;
  onPress: () => void;
}

const RepoList: React.FC<RepoListProps> = ({ username, onPress }) => {
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useUserRepos(username);
  // const [selectedRepo, setSelectedRepo] = useState<string | null>(null);

  if (isLoading) return <p>Loading repositories...</p>;
  if (isError) return <p>Failed to load repositories.</p>;

  const handleRepoSelect = (repo: Repo) => {
    console.log(repo, "repo");
    dispatch(setSelectedRepo(repo)); // Dispatch the entire repo object
    // setShowModal(true);  // Show the modal
    onPress();
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Repositories</h2>
      {data && data.length > 0 ? (
        <div className={styles.gridContainer}>
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
                <span className={styles.repoLanguage}>
                  {repo.language || "N/A"}
                </span>
                <span className={styles.repoStars}>
                  ⭐ {repo.stargazers_count || 0}
                </span>
                <span className={styles.repoForks}>
                  🍴 {repo.forks_count || 0}
                </span>
              </div>
              <button
                onClick={() => handleRepoSelect(repo)}
                className={styles.repoButton}
              >
                View README
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className={styles.noData}>
          No repositories available for this user.
        </p>
      )}
    </div>
  );
};

export default RepoList;
