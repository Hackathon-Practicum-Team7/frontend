import React from 'react';
import { useParams } from 'react-router-dom';

export const ProfilePage: React.FC = () => {
  const { id } = useParams();

  return (
    <div>
      <h1> Profile Page </h1>
      <p>{id}</p>
    </div>
  )
}
