import { createSlice } from "@reduxjs/toolkit";

export const logicSlice = createSlice({
  name: "operators",
  initialState: {
    value: "&&",
  },
  reducers: {
    Logic(state, action) {
      console.log(`w ${action.payload}`);
      state.value = action.payload;
    },
  },
});
export const logicActions = logicSlice.actions;
export default logicSlice;
