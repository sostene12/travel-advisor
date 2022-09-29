import { createSlice } from "@reduxjs/toolkit";

const childSlice = createSlice({
  name: "child",
  initialState: {
    childClicked: null,
  },
  reducers: {
    setChildClicked: (state, action) => {
      state.childClicked = action.payload;
    },
  },
});

export const { setChildClicked } = childSlice.actions;
export default childSlice.reducer;
