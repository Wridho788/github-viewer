import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import styles from "./Modal.module.css"; // Import styling untuk modal

interface ModalProps {
  onClose: () => void; // Fungsi untuk menutup modal
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
    // Fetch the selected repository from the Redux store

  const selectedRepo = useSelector((state: RootState) => state.repo.selectedRepo);
  if (!selectedRepo) return null; // Do not render the modal if no repository is selected

  // Destructure the selected repository data for cleaner code

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button onClick={onClose} className={styles.closeButton}>
          &times;
        </button>
        <div className={styles.modalHeader}>
          <img
            src={selectedRepo.owner.avatar_url}
            alt={`${selectedRepo.owner.login} avatar`}
            className={styles.avatar}
          />
          <div>
            <h2 className={styles.repoName}>{selectedRepo.name}</h2>
            <p className={styles.ownerName}>
              by <strong>{selectedRepo.owner.login}</strong>
            </p>
          </div>
        </div>
        <div className={styles.modalBody}>
          <p className={styles.repoDescription}>
            {selectedRepo.description || "No description provided for this repository."}
          </p>
          <div className={styles.stats}>
            <div>
              <span>🌟 Stars</span>
              <strong>{selectedRepo.stargazers_count}</strong>
            </div>
            <div>
              <span>🍴 Forks</span>
              <strong>{selectedRepo.forks_count}</strong>
            </div>
            <div>
              <span>🛠 Issues</span>
              <strong>{selectedRepo.open_issues_count}</strong>
            </div>
            <div>
              <span>📂 Language</span>
              <strong>{selectedRepo.language || "N/A"}</strong>
            </div>
          </div>
        </div>
        <div className={styles.modalFooter}>
          <a
            href={selectedRepo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubLink}
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
