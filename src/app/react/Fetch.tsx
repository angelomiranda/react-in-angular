import * as React from "react";

function User() {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => setUsers(json));
    }, 1500);
  });

  if (!users.length) {
    return <div className="t-10">Loading Data. Please wait...</div>;
  }

  const renderUsers = users.map(user => {
    return (
      <tr key={user.id}>
        <th>{user.id}</th>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
      </tr>
    )
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Username</th>
          <th scope="col">Phone</th>
        </tr>
      </thead>
      <tbody className="table-striped">
        { renderUsers }
      </tbody>
    </table>  
  );
}

export default User;
