"use client";

import { useEffect, useState } from "react";
import { Logo } from "./logo";
import { SearchTrigger } from "./search-trigger";
import { AccountCartIcons } from "./account-cart-icons";
import { PrimaryNav } from "./primary-nav";
import type { NavCategory } from "@/lib/nav-items";

function useIsScrolled(threshold = 30) {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return isScrolled;
}

export function Header({
  isMenuOpen,
  isSearchOpen,
  activeCategory,
  onOpenCategory,
  onToggleSearch,
}: {
  isMenuOpen: boolean;
  isSearchOpen: boolean;
  activeCategory: NavCategory | null;
  onOpenCategory: (category: NavCategory) => void;
  onToggleSearch: () => void;
}) {
  const isScrolled = useIsScrolled();
  const solid = isScrolled || isMenuOpen || isSearchOpen;

  return (
    <header
      className="transition-[background,box-shadow] duration-[250ms] ease-out"
      style={{
        background: 'var(--color-paper)',
        boxShadow: '0 1px 0 rgba(33,29,25,0.08)',
      }}
    >
      <div className="grid h-[84px] grid-cols-[1fr_auto_1fr] items-center px-12">
        <div className="flex items-center">
          <SearchTrigger onClick={onToggleSearch} />
        </div>
        <Logo />
        <div className="flex items-center justify-end">
          <AccountCartIcons />
        </div>
      </div>
      <PrimaryNav activeCategory={activeCategory} onOpenCategory={onOpenCategory} />
    </header>
  );
}
