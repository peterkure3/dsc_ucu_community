import React, { useState, useEffect } from 'react';

const Members = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Retrieve the list of registered users from local storage
    const userList = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(userList);
  }, []);

  const handleDelete = (userId) => {
    // Delete the user with the given ID from the list
    const updatedUsers = users.filter(user => user.id !== userId);
    setUsers(updatedUsers);

    // Save the updated list to local storage
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  const handleAdd = (newUser) => {
    // Add the new user to the list
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);

    // Save the updated list to local storage
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  const handleUpdate = (updatedUser) => {
    // Find the user with the given ID and update their information
    const updatedUsers = users.map(user => {
      if (user.id === updatedUser.id) {
        return updatedUser;
      }
      return user;
    });
    setUsers(updatedUsers);

    // Save the updated list to local storage
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  return (
    <div>
      <h1>Membership Management</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName} {user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.status}</td>
              <td>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
                <button onClick={() => handleUpdate(user)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Add User</h2>
      <UserForm onSubmit={handleAdd} />
    </div>
  );
};

export default Members;