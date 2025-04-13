import React from 'react'
import { useDispatch } from 'react-redux'
import { remove } from '../redux/slice/CartSlice';
import toast from 'react-hot-toast';

const CartItem = ({item, itemIndex}) => {

  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item removed successfully")
  }
  return (
    <div className="flex items-center p-2 md:p-5 justify-between mt-2 mb-2 md:mx-5">
        <div className="flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center">
            <div className="w-[30%]"><img src={item.image} className="object-cover"/></div>
            <div className="md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]">
                <h1 className="text-xl text-slate-700 font-semibold">{item.title}</h1>
                <h1 className="text-base text-slate-700 font-medium">{item.description}</h1>
            </div>
            <div className="flex flex-row items-center justify-between"><p className="font-bold text-lg text-green-600">${item.price}</p></div>
            <div>
                <button className="bin-button cursor-pointer p-3 mr-3" onClick={removeFromCart}>
                    <svg
                        className="bin-top"
                        viewBox="0 0 39 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <line y1="5" x2="39" y2="5" stroke="white" stroke-width="4"></line>
                        <line
                        x1="12"
                        y1="1.5"
                        x2="26.0357"
                        y2="1.5"
                        stroke="white"
                        stroke-width="3"
                        ></line>
                    </svg>
                    <svg
                        className="bin-bottom"
                        viewBox="0 0 33 39"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <mask id="path-1-inside-1_8_19" fill="white">
                        <path
                            d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z"
                        ></path>
                        </mask>
                        <path
                        d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z"
                        fill="white"
                        mask="url(#path-1-inside-1_8_19)"
                        ></path>
                        <path d="M12 6L12 29" stroke="white" stroke-width="4"></path>
                        <path d="M21 6V29" stroke="white" stroke-width="4"></path>
                    </svg>
                </button>
            </div>
        </div>
     </div>
  )
}

export default CartItem