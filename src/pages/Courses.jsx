import React from 'react'
import { UserAuth } from '../context/AuthContext';

export default function Courses() {
  const {LogOut} = UserAuth();
  return (
    <div>
      Courses
      <button onClick={LogOut}>
        logout
      </button>
    </div>
  )
}
