import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";


const store=configureStore({     //here i have created my store which contains differnet slices
  reducer:{                        //
      cart:cartSlice              //name of the slice and slice
  },
});

export default store;


/*
revison

create store
  -configureStore()-imported from RTK

Provide my store to app
 -<Provider store={store}>  --import from react-redix


Slice
  -createSlice(  {            // comes from rtk
     name:" ",
     initalState:
     reducers:{
         additem:(state,action)={state=action.payload}
     }
    }
  );
  export const{addItem,removeItem}=CartSlice.actions       
  export default cartSlice.reducer;


Put that slice into store
     -{
         reducer:{
             cart:CartSlice,
             user:UserSlice
         } 
     }


*/
