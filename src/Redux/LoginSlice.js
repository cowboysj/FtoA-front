import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: null,
  token: null,
  hostid: null,
  alreadyuser: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setId: (state, action) => {
      state.userId = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setHostId: (state, action) => {
      state.hostid = action.payload;
    },
    //이미 가입한 유저
    setAlreadyuser: (state, action) => {
      state.alreadyuser = action.payload;
    },
  },
});

export const { setAlreadyuser, setId, setToken, setHostId } =
  loginSlice.actions;
export default loginSlice.reducer;

/* dispatch(setAlreadyuser(true));
const alreadyUser = useSelector((state) => state.login.alreadyuser); */
