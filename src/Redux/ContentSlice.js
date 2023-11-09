import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contentValue: "",
  keywordNum: 0,
  createNum: 0,
};

const ContentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    setContentValue: (state, action) => {
      state.contentValue = action.payload;
    },
    setKeywordNum: (state, action) => {
      state.keywordNum = action.payload;
    },
    setCreateNum: (state, action) => {
      state.createNum = action.payload;
    },
  },
});

export const { setContentValue, setKeywordNum, setCreateNum } =
  ContentSlice.actions;
export default ContentSlice.reducer;
