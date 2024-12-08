// src/app/page.tsx
"use client";

// Importing necessary dependencies and components
import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic"; // Used for dynamically importing components
import Modal from "../components/ModalRepoReadme"; // Modal component for showing README
import styles from "./page.module.css"; // CSS module for styling

// Dynamically import the RepoList component to optimize server-side rendering (SSR)
const RepoList = dynamic(() => import("../components/RepoList"), { ssr: false });

export default function Home() {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  // const [notFound, setNotFound] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearch(username);
  };

  const handlePress=()=>{
    setShowModal(true)
  }
  return (
    <>
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Image
            src="/github-icon.svg"
            alt="GitHub Logo"
            width={40}
            height={40}
            className={styles.logo}
          />

          <h1>GitHub Viewer</h1>
        </div>
        <p className={styles.subtitle}>
          Discover repositories and README files easily
        </p>
      </header>

      <main className={styles.main}>
        <div className={styles.card}>
          <h2>Search GitHub Repositories</h2>
          <div className={styles.searchBox}>
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Enter GitHub username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={styles.input}
              />
              <button type="submit" className={styles.button}>
                Search
              </button>
            </form>
            {search && <RepoList username={search} onPress={handlePress}/>}
          </div>
          {error && <p className={styles.error}>{error}</p>}
        </div>
     
      </main>

      <footer className={styles.footer}>
        <p>© 2024 GitHub Viewer | Made Ridho Wahyu Nugroho</p>
      </footer>
    </div>

    {/* Show modal if selectedRepo exists */}
    {showModal && <Modal onClose={() => setShowModal(false)} />}

    </>
  );
}
