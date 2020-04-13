import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const PORT = process.env.PORT || 5000;
const client = new ApolloClient({
  uri: `http://localhost:${PORT}/graphql`,
  dataIdFromObject: o => o.id
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById("root")
);
