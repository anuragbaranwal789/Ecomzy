import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem'

const Cart = () => {
  const {cart} = useSelector((state) => state)
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price, 0 ) )
  }, [cart])

  return (
    <div>
        {cart.length>0 
        ? (<div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center">
                <div className="w-[100%] md:w-[60%] flex flex-col p-2">
                    {cart.map((item, index) => {
                        return <CartItem key={item.id} item={item} itemIndex={index}/>
                    })}
                </div>
                <div className="w-[100%] md:w-[40%] mt-5  flex flex-col">
                    <div className="flex flex-col p-5 gap-5 my-14 h-[100%] justify-between">
                        <div className="flex flex-col gap-5">
                            <div className="font-semibold text-xl text-green-800">Your Cart</div>
                            <div className="font-semibold text-5xl text-green-700  -mt-5">Summary</div>
                            <p className="text-xl"><span className="text-gray-700 font-semibold text-xl">Total Items: {cart.length}</span></p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-5">
                        <p className="text-xl font-bold"><span className="text-gray-700 font-semibold">Total Amount:</span> ${totalAmount}</p>
                        <div className="container">
                            <div className="left-side">
                                <div className="card">
                                <div className="card-line"></div>
                                <div className="buttons"></div>
                                </div>
                                <div className="post">
                                <div className="post-line"></div>
                                <div className="screen">
                                    <div className="dollar">$</div>
                                </div>
                                <div className="numbers"></div>
                                <div className="numbers-line2"></div>
                                </div>
                            </div>
                            <div className="right-side">
                                <div className="new">Checkout</div>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        ) 
        : (<div className="min-h-[80vh] w-full flex flex-col items-center justify-center">
                <h1 className="text-gray-700 font-semibold text-xl mb-2">Your Cart is Empty</h1>
                <Link to={"/"}>
                    <button class="cta w-full">
                        <span class="hover-underline-animation"> Shop now </span>
                        <svg
                            id="arrow-horizontal"
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="10"
                            viewBox="0 0 46 16"
                        >
                            <path
                            id="Path_10"
                            data-name="Path 10"
                            d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                            transform="translate(30)"
                            ></path>
                        </svg>
                    </button>
                </Link>
            </div>
            )
        }
    </div>
  )
}

export default Cart