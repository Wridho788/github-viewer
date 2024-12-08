import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RepoState {
  selectedRepo: string | null;
}

const initialState: RepoState = {
  selectedRepo: null,
};

const repoSlice = createSlice({
  name: 'repo',
  initialState,
  reducers: {
    setSelectedRepo: (state, action: PayloadAction<string | null>) => {
      state.selectedRepo = action.payload;
    },
  },
});

export const { setSelectedRepo } = repoSlice.actions;

export default repoSlice.reducer;
