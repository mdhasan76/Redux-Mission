import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: function (state) {
      state.count += 1;
    },
    comao: function (state) {
      state.count = state.count - 3;
    },
    baramoByAmunt: (state, action: PayloadAction<number>) => {
      state.count = state.count + action.payload;
    },
  },
});
export const { comao, increment, baramoByAmunt } = counterSlice.actions;
export default counterSlice.reducer;
