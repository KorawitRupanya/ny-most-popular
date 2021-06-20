import React, { useState } from "react";
import PropTypes from "prop-types";
import { TextField, IconButton, InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const SearchBar = ({ searchArticles }) => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    const { value } = event.target;
    setText(value);
    searchArticles(value);
  };

  return (
    <div>
      <TextField
        label="Search articles"
        type="text"
        name="text"
        value={text}
        onChange={handleChange}
        InputProps={{
          endAdornment: (
            <InputAdornment>
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

SearchBar.propTypes = {
  searchArticles: PropTypes.func.isRequired,
};

export default SearchBar;
