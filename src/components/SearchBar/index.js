import React, { useState } from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

const SearchBar = ({ searchArticles }) => {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
    e.preventDefault();
    searchArticles(text);
  };
  const handleSubmit = (e) => {};
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
