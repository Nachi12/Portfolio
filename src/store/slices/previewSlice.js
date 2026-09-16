import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  projectPreview: {
    url: '',
    isVisible: false,
  },
  certificatePreview: {
    url: '',
    isVisible: false,
  },
  resumePreview: {
    url: '',
    isVisible: false,
  },
};

const previewSlice = createSlice({
  name: 'preview',
  initialState,
  reducers: {
    showProjectPreview: (state, action) => {
      state.projectPreview.url = action.payload;
      state.projectPreview.isVisible = true;
    },
    hideProjectPreview: (state) => {
      state.projectPreview.url = '';
      state.projectPreview.isVisible = false;
    },
    showCertificatePreview: (state, action) => {
      state.certificatePreview.url = action.payload;
      state.certificatePreview.isVisible = true;
    },
    hideCertificatePreview: (state) => {
      state.certificatePreview.url = '';
      state.certificatePreview.isVisible = false;
    },
    showResumePreview: (state, action) => {
      state.resumePreview.url = action.payload;
      state.resumePreview.isVisible = true;
    },
    hideResumePreview: (state) => {
      state.resumePreview.url = '';
      state.resumePreview.isVisible = false;
    },
  },
});

export const {
  showProjectPreview,
  hideProjectPreview,
  showCertificatePreview,
  hideCertificatePreview,
  showResumePreview,
  hideResumePreview,
} = previewSlice.actions;

export default previewSlice.reducer;

// Selectors
export const selectProjectPreview = (state) => state.preview.projectPreview;
export const selectCertificatePreview = (state) => state.preview.certificatePreview;
export const selectResumePreview = (state) => state.preview.resumePreview;
