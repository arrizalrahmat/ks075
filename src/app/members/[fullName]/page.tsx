'use client';
import { useParams } from 'next/navigation';

const Member = () => {
  const { fullName } = useParams();

  return (
    <div>
      <h1>
        This is {decodeURIComponent(fullName as string)}{' '}
        page
      </h1>
    </div>
  );
};

export default Member;
