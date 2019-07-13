import React from "react";
import List from "./List";

const ListGist = () => (
  <React.Fragment>
    <p>Display a list of gists from https://api.github.com/gists/public</p>
    <List
      url="https://api.github.com/gists/public?per_page=5"
      title="A public api of Gists"
    />
  </React.Fragment>
);

export default ListGist;
