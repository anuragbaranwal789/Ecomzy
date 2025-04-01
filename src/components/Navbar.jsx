import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const {cart} = useSelector((state) => state);
  return (
    <div className="bg-slate-900">
        <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">
            <NavLink to="/"><div className="ml-5"><img src='../logo.png' className="h-14"/></div></NavLink>
            <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
                <NavLink to="/"><p>Home</p></NavLink>
                <NavLink to="/cart">
                    <div className="relative">
                        <button className="btn-cart text-2xl">
                            <svg className="icon-cart" viewBox="0 0 24.38 30.52" height="30.52" width="24.38" xmlns="http://www.w3.org/2000/svg">
                                <title>icon-cart</title>
                                <path transform="translate(-3.62 -0.85)" d="M28,27.3,26.24,7.51a.75.75,0,0,0-.76-.69h-3.7a6,6,0,0,0-12,0H6.13a.76.76,0,0,0-.76.69L3.62,27.3v.07a4.29,4.29,0,0,0,4.52,4H23.48a4.29,4.29,0,0,0,4.52-4ZM15.81,2.37a4.47,4.47,0,0,1,4.46,4.45H11.35a4.47,4.47,0,0,1,4.46-4.45Zm7.67,27.48H8.13a2.79,2.79,0,0,1-3-2.45L6.83,8.34h3V11a.76.76,0,0,0,1.52,0V8.34h8.92V11a.76.76,0,0,0,1.52,0V8.34h3L26.48,27.4a2.79,2.79,0,0,1-3,2.44Zm0,0"></path>
                            </svg>
                            <span className="quantity absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">{cart.length}</span>
                        </button>
                    </div>
                </NavLink>
            </div>
        </nav>
    </div>
  )
}

export default Navbar