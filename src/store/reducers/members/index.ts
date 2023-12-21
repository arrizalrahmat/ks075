'use client';

import {
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import { Member, MembersStateType } from './types';
import axios, { AxiosError } from 'axios';
import { APIResponse } from '@/types/api-response';

const initialState: MembersStateType = {
  members: [],
  isLoading: false,
};

const membersSlice = createSlice({
  name: 'members',
  initialState,
  reducers: {
    resetMembers: (state) => {
      state.members = initialState.members;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMembers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchMembers.fulfilled, (state, action) => {
        state.members = action.payload.results;
        state.isLoading = false;
      });
  },
});

export const { resetMembers } = membersSlice.actions;

export default membersSlice.reducer;

export const fetchMembers = createAsyncThunk(
  'members/fetchMembers',
  async (_, { rejectWithValue }) => {
    try {
      const data = await axios.get<APIResponse<Member[]>>(
        'https://randomuser.me/api/?results=10'
      );
      //   console.log(data, 'ini data');
      return data.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.response);
      }
      throw error;
    }
  }
);
