import { NewsTypeEnum } from "@/constants/enum";
import { createSlice } from "@reduxjs/toolkit";

export const clientSlice = createSlice({
  name: "client",
  initialState: {
    currentNewsType: <NewsTypeEnum>NewsTypeEnum.NEWS
  },
  reducers: {
    setCurrentNewType(state, action) {
      state.currentNewsType = action.payload
    }
  }
})

export const clientAction = clientSlice.actions