"use client";

import Link from "next/link";
import { useState } from "react";
import { buttonVariants } from "./ui/button";
import styles from "./header.module.css";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.fantasyNavbar}>
      <div className={styles.navbarBrand}>
        <span className={styles.navbarTitle}>Characters Masters</span>
        <button 
          className={styles.menuToggle}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      <nav className={`${styles.navbarLinks} ${menuOpen ? styles.open : ""}`}>
        <Link 
          className={`${buttonVariants({ size: "lg", variant: "ghost" })} ${styles.fantasyLink}`}
          href="/admin"
        >
          Admin
        </Link>
        <Link 
          className={`${buttonVariants({ size: "lg", variant: "ghost" })} ${styles.fantasyLink}`}
          href="/admin/characters/new"
        >
          Nouveau Héros
        </Link>
        <Link 
          className={`${buttonVariants({ size: "lg", variant: "ghost" })} ${styles.fantasyLink}`}
          href="/admin/characters/newServer"
        >
          Depuis Serveur
        </Link>
      </nav>
    </header>
  );
}
