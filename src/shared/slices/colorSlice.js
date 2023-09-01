import { createSlice } from "@reduxjs/toolkit";
export const colorSlice = createSlice({
    name:'color',
    initialState:{
      colorList:[],
      groupList:[]
    },
    reducers:{
      setGroup:(state,action)=>{
        const color = action.payload
        state.colorList = [...state.colorList,color]
      },
      setGroupList:(state,action)=>{
        const colors = action.payload
        state.groupList = [...state.groupList,colors]
      },
      clearList:(state)=>{
        state.colorList=[]
      }
    }
})
export const {setGroup,setGroupList,clearList} = colorSlice.actions;
export default colorSlice.reducer