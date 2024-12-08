// src/app/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import RepoList from "../components/RepoList";

export default function Home() {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [search, setSearch] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearch(username);
  };
 
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Image
          src="/github-icon.svg"
          alt="GitHub Viewer"
          width={60}
          height={60}
        />

        <h1>GitHub Viewer</h1>
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
              />
              <button type="submit">Search</button>
            </form>
            {search && <RepoList username={search} />}
          </div>
          {error && <p className={styles.error}>{error}</p>}
        </div>
      </main>

      <footer className={styles.footer}>
        <p>© 2024 GitHub Viewer | Made with ❤️ by You</p>
      </footer>
    </div>
  );
}
