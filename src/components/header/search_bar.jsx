import React, { useRef } from "react";
import styles from "./search_bar.module.css";

const SearchBar = ({ onSearch }) => {
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };
  const onClick = () => {
    handleSearch();
  };
  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <header className={styles.header}>
      <h1>Youtube</h1>
      <input
        ref={inputRef}
        type="search"
        name="search"
        id="search"
        placeholder="Search..."
        onKeyPress={onKeyPress}
      />
      <button type="submit" onClick={onClick}>
        search
      </button>
    </header>
  );
};

export default SearchBar;
