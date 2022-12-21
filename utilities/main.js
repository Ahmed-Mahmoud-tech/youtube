import { useState, useEffect } from "react";

export function useOutside(ref, state) {
  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      state();
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return;
}
