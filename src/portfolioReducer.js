import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import designersData from './designers.json';

// Async thunk for fetching designer data
export const fetchDesignerById = createAsyncThunk(
  'portfolio/fetchDesignerById',
  async (designerId, { rejectWithValue }) => {
    try {
      // In a real app, this would be an API call
      // For this example, we're using the local JSON data
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const designer = designersData.designers.find(d => d.id === designerId);
      
      if (!designer) {
        throw new Error('Designer not found');
      }
      
      return designer;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  designer: null,
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  currentSection: 'home',
};

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    setCurrentSection: (state, action) => {
      state.currentSection = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDesignerById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDesignerById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.designer = action.payload;
        state.error = null;
      })
      .addCase(fetchDesignerById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { setCurrentSection } = portfolioSlice.actions;

// Selectors
export const selectDesigner = (state) => state.portfolio.designer;
export const selectPortfolioStatus = (state) => state.portfolio.status;
export const selectPortfolioError = (state) => state.portfolio.error;
export const selectCurrentSection = (state) => state.portfolio.currentSection;

export default portfolioSlice.reducer;