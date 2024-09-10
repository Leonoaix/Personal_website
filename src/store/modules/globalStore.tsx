import { createSlice, PayloadAction } from "@reduxjs/toolkit";


//这里可以将用户的状态存储到localStorage中，其他的用户数据建议每次从后端获取
const globalStore = createSlice({
  name: "global",
  initialState: {
    //这个loading是用来控制整个应用是否处于加载状态的
    //如果有promise请求正在进行，loading为true，请求结束则loading为false
    loading: false,
    //这里添加一下需要放在localStorage中的用户状态信息
    user: {}, 
  },
  reducers: {
    changeLoading(state, action: PayloadAction<boolean>){
        state.loading = action.payload;
    },
    //这里只是先写一个示例
    changeUser(state, action: PayloadAction<any>){
        state.user = action.payload;
    },
  },
});

const {changeLoading, changeUser} = globalStore.actions;
export {changeLoading, changeUser};

const globalStoreReducer = globalStore.reducer;
export default globalStoreReducer;