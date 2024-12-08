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
// Main functional component for the Home page
export default function Home() {
  // State for managing user input (GitHub username)
  const [username, setUsername] = useState(""); 
  // State for the current search term (submitted GitHub username)
  const [search, setSearch] = useState(""); 
  // State for toggling modal visibility
  const [showModal, setShowModal] = useState(false); 
  // Handle form submission for searching repositories
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior
    setSearch(username); // Set search state with the current username
  };

  // Handle showing the modal when a repository is selected
  const handlePress = () => {
    setShowModal(true); // Show the modal
  };
  return (
    <>
       {/* Main container for the page */}
       <div className={styles.container}>
        {/* Header section */}
        <header className={styles.header}>
          <div className={styles.headerContent}>
            {/* Logo Image */}
            <Image
              src="/icon.svg"
              alt="GitHub Logo"
              width={40}
              height={40}
              className={styles.logo}
            />

            {/* Page title */}
            <h1>GitHub Viewer</h1>
          </div>

          {/* Subtitle */}
          <p className={styles.subtitle}>
            Discover repositories and README files easily
          </p>
        </header>

        {/* Main content section */}
        <main className={styles.main}>
          {/* Card container for the search input */}
          <div className={styles.card}>
            <h2>Search GitHub Repositories</h2>

            {/* Search form */}
            <div className={styles.searchBox}>
              <form onSubmit={handleSearch}>
                {/* Input field for GitHub username */}
                <input
                  type="text"
                  placeholder="Enter GitHub username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)} // Update username state
                  className={styles.input}
                />
                {/* Search button */}
                <button type="submit" className={styles.button}>
                  Search
                </button>
              </form>

              {/* Dynamically load and display the RepoList component when search is set */}
              {search && <RepoList username={search} onPress={handlePress} />}
            </div>

           
          </div>
        </main>

        {/* Footer section */}
        <footer className={styles.footer}>
          <p>© 2024 GitHub Viewer | Made Ridho Wahyu Nugroho</p>
        </footer>
      </div>

      {/* Modal for showing repository README files */}
      {showModal && (
        <Modal onClose={() => setShowModal(false)} /> // Close modal when triggered
      )}
    </>
  );
}
