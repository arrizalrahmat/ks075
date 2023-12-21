'use client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Navbar = () => {
  const router = useRouter();
  // const dispatch = useDispatch();
  // const { token } = useSelector((state) => state.auth);
  return (
    <nav>
      <Link href="/">Home</Link> |{' '}
      <Link href="/about">About us</Link> |{' '}
      <Link href="/members">Members</Link> |{' '}
      <Link href="/items">Items</Link> |{' '}
      <Link href="/todo">Todo</Link>
      {/* {token ? (
        <>
          {' '}
          |{' '}
          <button
            onClick={() => {
              // dispatch(logout());
              router.push('/');
            }}
          >
            Logout
          </button>
        </>
      ) : null} */}
    </nav>
  );
};

export default Navbar;
