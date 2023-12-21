'use client';
import { createSlice } from '@reduxjs/toolkit';
import { CounterStateType } from './types';

const initialState: CounterStateType = {
  count: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
    incrementByValue: (state, action) => {
      state.count = state.count + action.payload;
    },
    setCount: (state, action) => {
      state.count = action.payload;
    },
  },
});

export const {
  increment,
  decrement,
  incrementByValue,
  setCount,
} = counterSlice.actions;

export default counterSlice.reducer;
