// File: /components/Navbar.tsx
import React from "react";
import Link from "next/link"; // Assumes usage of Next.js

const Navbar: React.FC = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link href="/" style={styles.navLink}>
            Home
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link href="/about" style={styles.navLink}>
            About
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link href="/Projects" style={styles.navLink}>
            Projects
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link href="/contact" style={styles.navLink}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

// Define the styles using inline typings
const styles: Record<string, React.CSSProperties> = {
  navbar: {
    position: "fixed",
    top: 0,
    width: "100%",
    backgroundColor: "ffffff",
    opacity: ".4",
    padding: "10px 20px",
    zIndex: 1000,
  },
  navList: {
    display: "flex",
    justifyContent: "center",
    listStyleType: "none",
    margin: 0,
    padding: 0,
  },
  navItem: {
    margin: "0 15px",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "bold",
    transition: "color 0.3s",
  },
};

export default Navbar;
