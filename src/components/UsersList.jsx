import React from 'react';
import User from './User';
import { Link } from 'react-router-dom';

const UsersList = (props) => {
  return (
    <div className="users-list">
      <h1>Halsa Health Members</h1>
      {props.usersList.map((user, index) => {
        return (
          <User
            key={index}
            username={user.username}
            plan_name={user.plan_name}
            age={user.age}
            income={user.income}
            zip={user.zip_code}
            id={user.id}
            deleteUser={props.deleteUser}
            setEditing={props.setEditing}
          />

          );
        })}
    </div>
  );
};

export default UsersList;
