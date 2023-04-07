import React, { useState, useEffect } from 'react';

const Admin = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users'));
    setUsers(storedUsers || []);
  }, []);

  const handleDelete = (id) => {
    const filteredUsers = users.filter(user => user.id !== id);
    localStorage.setItem('users', JSON.stringify(filteredUsers));
    setUsers(filteredUsers);
  };

  return (
    <div>
      <h1>Membership Management</h1>
      <p>Number of registered users: {users.length}</p>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.firstName} {user.lastName} - Status: {user.status}
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
