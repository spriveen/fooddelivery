import { createContext, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

 const StoreContextProvider =(props)=>{
   

    const [cartItems,SetCartItems]= useState({});

    const addToCart = (itemId) => {
        if (!cartItems[itemId]){
        SetCartItems((prev)=>({...prev,[itemId]:1}))  
        }
        else{
            SetCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] }));

    }


const contextvalue = {
    food_list
}

 return(
    <StoreContext.Provider value={contextvalue}>
        {props.children}
    </StoreContext.Provider>

 )
}

export default StoreContextProvider;
