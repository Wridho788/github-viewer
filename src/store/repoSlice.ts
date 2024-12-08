// src/store/repoSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Repo } from '../types/types';  // Import the Repo type

interface RepoState {
  selectedRepo: Repo | null;  // Store the entire repository object
}

const initialState: RepoState = {
  selectedRepo: null,
};

const repoSlice = createSlice({
  name: 'repo',
  initialState,
  reducers: {
    setSelectedRepo: (state, action: PayloadAction<Repo | null>) => {
      state.selectedRepo = action.payload;
    },
  },
});

export const { setSelectedRepo } = repoSlice.actions;

export default repoSlice.reducer;
