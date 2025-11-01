import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeTab: 'home',
  aboutContent: '',
};

const tabSlice = createSlice({
  name: 'tab',
  initialState,
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
    setAboutContent: (state, action) => {
      state.aboutContent = action.payload;
    },
  },
});

export const { setActiveTab, setAboutContent } = tabSlice.actions;
export default tabSlice.reducer;

// Selectors
export const selectActiveTab = (state) => state.tab.activeTab;
export const selectAboutContent = (state) => state.tab.aboutContent;
