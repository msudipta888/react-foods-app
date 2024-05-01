import { createContext, useState } from "react";
import { food_list } from "../component/assets/assets/assets.js";

const StoreContext=createContext(null);

const StoreContextProvider= (props)=>{
  
  const [cartItem,setCartItem] =useState([]);
  const addTocart= (id)=>{
    if(!cartItem[id])
    {
        setCartItem((prev)=>({...prev,[id]:1}))
      
    }
    else{
        setCartItem(prev=>({...prev,[id]:prev[id]+1}))
        
    }
  }
  const removeTocart=(id)=>{
    setCartItem(prev=>({...prev,[id]:prev[id]-1}))
  }
  const subTotal=()=>{
    let total=0;
   for(const item in cartItem){
    if(cartItem[item]>0){
   const infoT= food_list.find((val)=>val._id===item)
   total+=cartItem[item]*infoT.price;
  }
   }
   return total;
  }
  const [bodyColor, setBodyColor] = useState("white");
  const darktheme = () => {
    if (bodyColor === "white") {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      document.body.classList.add("dark");
      setBodyColor("black");
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document.body.classList.remove("dark");
      setBodyColor("white");
    }
  };
  
    const contextVal={
     food_list,
     addTocart,
     removeTocart,
     cartItem,
     setCartItem,
     subTotal,
     darktheme,
     bodyColor
    }

    return(
      
        <StoreContext.Provider value={contextVal}>
            {props.children}
        </StoreContext.Provider>
    )
}
export  {StoreContextProvider,StoreContext};