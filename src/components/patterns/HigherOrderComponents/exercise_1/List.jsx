import React from "react";
import withData from "./withData";

const List = ({ data = [], error, loading, title }) => {
  if (error) {
    return <p>Error: {error}</p>;
  } else if (loading) {
    return <p>Loading...</p>;
  } else if (!data.length) {
    return (
      <p>
        <strong>Empty list :(</strong>
      </p>
    );
  } else {
    return (
      <React.Fragment>
        <h1>{title}</h1>
        <ul className="issue-list">
          {data.map(item => (
            <li key={item.id}>
              <a href={item.html_url} target="_blank">
                <img
                  alt={item.owner.login}
                  src={item.owner.avatar_url}
                  style={{ maxWidth: "100px" }}
                />
                {item.description}
              </a>
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
};

export default withData(List);
