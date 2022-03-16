import * as React from "react";

function User() {
  const [user, setUser] = React.useState({});

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => setUser(json));
  });

  return (
    <ul>
      <li>{user.userId}</li>
      <li>{user.id}</li>
      <li>{user.title}</li>
      <li>{JSON.stringify(user.completed)}</li>
    </ul>
  );
}

export default User;
