import { createSlice } from "@reduxjs/toolkit";
import {
  getEmailFromLocalStorage,
  getIdFromLocalStorage,
  getUserDateFromLocalStorage,
} from "../utils";

interface UserState {
  email: string | null;
  userDate: string | null;
  id: string | null;
}

const initialState: UserState = {
  email: getEmailFromLocalStorage(),
  userDate: getUserDateFromLocalStorage(),
  id: getIdFromLocalStorage(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.userDate = action.payload.userDate;
      state.id = action.payload.id;
    },
    removeUser(state) {
      state.email = null;
      state.userDate = null;
      state.id = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
