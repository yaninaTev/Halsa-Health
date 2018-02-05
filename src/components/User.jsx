import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../image/avatar.png';

const User = (props) => {
  return (
    <div className="user-info">
      <div className="userbox">
        <div className="user-border">
          <div className="avatar">
            <img src={avatar} alt="" width="200" height="200" />
          </div>
          <div className="user-container" >
            <p className="user-details"><span>Name </span>{props.username}</p>
            <p className="user-details"><span>Plan </span>{props.plan_name}</p>
            <p className="user-details"><span>Age </span>{props.age} </p>
            <p className="user-details"><span>Income </span>{props.income}</p>
            <p className="user-details"><span>Zip </span>{props.zip}</p>
            <div className="edit-button">
              <button onClick={() => props.deleteUser(props.id)}>DELETE USER</button>
              <button onClick={() => props.setEditing()}>EDIT USER</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
