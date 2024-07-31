import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./components/Data";

const userSlice = createSlice({
  name: "users",
  initialState: userList,
  reducers: {
    adduser: (state, action) => {
      state.push(action.payload);
    },
    // updateUser: (state, action) => {
    //   const { id, name } = action.payload;
    //   const update = state.find((user) => user.id == id);
    //   if (update) {
    //     update.name = name;
    //     // update.email = email;
    //   }
    // },

    dltuser: (state, action) => {
      const { id } = action.payload;
      const update = state.find((user) => user.id == id);
      if (update) {
        return state.filter((f) => f.id !== id);
      }
    },
  },
});

export const { adduser, updateUser, dltuser } = userSlice.actions;
export default userSlice.reducer;
