import React from "react";
import { FormControl, MenuItem, Select, InputLabel } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    maxWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const PeriodSelector = ({ getArticlesByPeriod }) => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
    const { value } = event.target;
    getArticlesByPeriod(value);
  };

  const classes = useStyles();

  return (
    <FormControl className={classes.formControl}>
      <InputLabel>Period</InputLabel>
      <Select value={age} onChange={handleChange}>
        <MenuItem value={1}>1 Day</MenuItem>
        <MenuItem value={7}>7 Days</MenuItem>
        <MenuItem value={30}>30 Days</MenuItem>
      </Select>
    </FormControl>
  );
};

export default PeriodSelector;
