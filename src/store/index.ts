'use client';
import {
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import counterReducer from './reducers/counter';
import membersReducer from './reducers/members';

const rootReducer = combineReducers({
  counter: counterReducer,
  members: membersReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
