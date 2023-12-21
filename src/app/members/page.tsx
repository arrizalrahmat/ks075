'use client';

import UserCard from '@/components/UserCard/UserCard.component';
import { AppDispatch, RootState } from '@/store';
import { fetchMembers } from '@/store/reducers/members';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Members() {
  const dispatch = useDispatch<AppDispatch>();
  const { members, isLoading } = useSelector(
    (state: RootState) => state.members
  );
  const router = useRouter();

  const handleClickCard = (fullName: string) => {
    router.push(`members/${fullName}`);
  };

  useEffect(() => {
    dispatch(fetchMembers());
  }, []);

  return (
    <main>
      <h1>This is Members Page</h1>
      {isLoading ? (
        <h1>Sedang Loading....</h1>
      ) : (
        <div>
          {members.map((member, i) => (
            // <div key={member.login.uuid + i}>
            //   <Link
            //     to={`${member.name.first} ${member.name.last}`}
            //   >{`${member.name.first} ${member.name.last}`}</Link>
            //   {i < members.length - 1 ? <> | </> : null}
            // </div>
            <UserCard
              key={member.login.uuid + i}
              member={member}
              onClick={handleClickCard}
            />
          ))}
        </div>
      )}
      {/* <button
        style={{ marginBottom: 30 }}
        onClick={handleRefetch}
      >
        Get more users
      </button> */}
    </main>
  );
}
