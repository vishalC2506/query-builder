import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./features/filterSlice";
import logicSlice from "./features/logicSlice";
const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    operators:logicSlice.reducer,
  },
});

export default store;
