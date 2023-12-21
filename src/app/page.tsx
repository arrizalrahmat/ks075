'use client';

import { AppDispatch, RootState } from '@/store';
import {
  decrement,
  increment,
  incrementByValue,
} from '@/store/reducers/counter';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {
  const { count } = useSelector(
    (state: RootState) => state.counter
  );
  const dispatch = useDispatch<AppDispatch>();
  const [number, setNumber] = useState<number>(0);

  return (
    <main>
      <h1>This is Home Page</h1>
      <h3>counter: {count}</h3>
      <button onClick={() => dispatch(increment())}>
        +
      </button>
      <button onClick={() => dispatch(decrement())}>
        -
      </button>
      <input
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <button
        onClick={() => {
          dispatch(incrementByValue(number));
          setNumber(0);
        }}
      >
        Submit
      </button>
    </main>
  );
}
