import { configureStore } from '@reduxjs/toolkit';
import tabReducer from './slices/tabSlice';
import previewReducer from './slices/previewSlice';

export const store = configureStore({
  reducer: {
    tab: tabReducer,
    preview: previewReducer,
  },
});

export default store;
