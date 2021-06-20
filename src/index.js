import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Router from "./router";
import reportWebVitals from "./reportWebVitals";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

ReactDOM.render(
  <React.StrictMode>
    <Container>
      <Typography color="textPrimary" gutterBottom variant="h2" align="center">
        <Router />
      </Typography>
    </Container>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
