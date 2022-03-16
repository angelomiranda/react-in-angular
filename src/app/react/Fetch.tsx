import * as React from "react";

import "./style.css";

function User() {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => setUsers(json));
    }, 1000);
  });

  if (!users.length) {
    return <div className="t-10">Loading Data. Please wait...</div>;
  }

  const renderUsers = users.map(user => {
    return <div>{user.id} {user.name} {user.email}</div>
  }

  return (
    <div className="t-10">
      { renderUsers }
    </div>
  );
}

export default User;
