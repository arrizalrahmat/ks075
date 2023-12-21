'use client';
import React from 'react';
import { Member } from '../../store/reducers/members/types';

type UserCardPropTypes = {
  member: Member;
  onClick: (fullName: string) => void;
};

const UserCard: React.FC<UserCardPropTypes> = (props) => {
  const { member, onClick } = props;
  const {
    picture: { large },
    name: { first, last },
    email,
  } = member;
  return (
    <div
      style={{
        display: 'flex',
        margin: 8,
        flexDirection: 'row',
        backgroundColor: 'rgba(255, 177, 66,0.4)',
        borderRadius: 8,
        alignItems: 'center',
      }}
      onClick={() => onClick(`${first} ${last}`)}
    >
      <img src={large} alt="User avatar" />
      <div>
        <h5>{`${first} ${last}`}</h5>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default UserCard;
