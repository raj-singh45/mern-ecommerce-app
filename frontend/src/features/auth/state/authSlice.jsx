import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthenticate: false,
    isLoading: true,
  },
  reducers: {
    setLoading: (state, action) => {
    state.isLoading = action.payload;
  },
    addUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticate = true;
      state.isLoading = false;
    },

    removeUser: (state) => {
      state.user = null;
      state.isAuthenticate = false;
     
    },
  },
});

export const { addUser, removeUser , setLoading} = authSlice.actions;

export default authSlice.reducer;
