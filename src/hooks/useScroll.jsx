import { useEffect, useState } from "react";

export function useScroll() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (e, id) => {
    e.preventDefault();

    const el = document.querySelector(id);

    if (el) {
      const navHeight = 80;
      const elPosition = el.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setIsOpen(false);
    }
  };

  return { isScrolled, isOpen, setIsOpen, handleScrollTo };
}
