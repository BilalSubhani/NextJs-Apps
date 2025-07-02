import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, createUser, updateUser, deleteUser } from './userSlice';

export default function UserComponent() {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUser(1));
  }, [dispatch]);

  const handleCreate = () => {
    dispatch(createUser({ name: 'New User', email: 'new@example.com' }));
  };

  const handleUpdate = () => {
    dispatch(updateUser({
      userId: 1,
      updatedData: { name: 'Updated Name', email: 'updated@example.com' }
    }));
  };

  const handleDelete = () => {
    dispatch(deleteUser(1));
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>User Info</h2>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p style={{ color: 'red' }}>Error: {error}</p>}

      {status === 'succeeded' && data && (
        <div>
          <p><strong>Name:</strong> {data.name}</p>
          <p><strong>Email:</strong> {data.email}</p>
        </div>
      )}

      <div style={{ marginTop: '20px' }}>
        <button onClick={handleCreate}>Create User</button>
        <button onClick={handleUpdate} style={{ marginLeft: '10px' }}>Update User</button>
        <button onClick={handleDelete} style={{ marginLeft: '10px' }}>Delete User</button>
      </div>
    </div>
  );
}
