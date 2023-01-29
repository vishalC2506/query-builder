import { createSlice } from "@reduxjs/toolkit";



export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    query: [
      {
        Field: [],
        Condition: [],
        Criteria: [],
      },
    ],
    FieldCount: 0,
    setField: true,
    setCondition: true,
    setCriteria: true,
  },
  reducers: {
    filtersField(state, action) {
      {
        if (state.setField) {
          state.query[state.FieldCount].Field = [
            ...state.query[state.FieldCount].Field,
            action.payload,
          ];
        }
      }
      state.setField = false;
    },
    filtersCondition(state, action) {
      if (state.setCondition) {
        state.query[state.FieldCount].Condition = [
          ...state.query[state.FieldCount].Condition,
          action.payload,
        ];
      }
      state.setCondition=false;
    },
    filterCriteria(state, action) {
      if (state.setCriteria) {
        state.query[state.FieldCount].Criteria = [
          ...state.query[state.FieldCount].Criteria,
          action.payload,
        ];
      }
      state.setCriteria=false;
    },
    AddFilter(state) {
      state.setField = true;
      state.setCriteria = true;
      state.setCondition = true;
      state.FieldCount++;
      state.query.push({ Field: "", Condition: "", Criteria: "" });
    },
  },
});
export const filtersActions = filterSlice.actions;
export default filterSlice;
