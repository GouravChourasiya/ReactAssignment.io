import { createSlice } from '@reduxjs/toolkit'

export const postSlice = createSlice({
  name: 'post',
  initialState: {
    items: []
}
,
  reducers: {
    addpost: function(state , action){
        state.items.push(action.payload);
    },
    deletepost:function(state,action){

      state.items= state.items.filter(item=> item.id !== action.payload)
    },
    updatepost:function(state,action){
      state.items.map(item => {
        if(item.id===action.payload.id){
           item.title=action.payload.title;
           item.category=action.payload.category;
           item.description=action.payload.description;


        }
      })
    },
    updateLike:function(state,action){
      state.items.map(item => {
      
        if(item.id=== action.payload.id){
          item.Like=action.payload.Like;
        }
      })
    }

  }
})

// Action creators are generated for each case reducer function
export const {addpost,deletepost,updatepost ,updateLike} = postSlice.actions

export default postSlice.reducer