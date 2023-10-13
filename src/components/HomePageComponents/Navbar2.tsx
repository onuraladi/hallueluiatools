import React from 'react'
import Link from 'next/link'

const Navbar2 = () => {
    return (
        <div className='boxsh'>
            <header className="p-4 navbarr2 boxsh">
                <div className="container flex justify-between h-16 mx-auto">
                    <div className="flex justify-between w-full">
                        <Link href="/" aria-label="Back to homepage" className="flex items-center p-2">
                            <p className=' font-semibold text-3xl'>Halleluia by love</p>
                        </Link>
                        
                    </div>

                    <button className="p-0 relative left-4 lg:hidden">

                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost btn-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                            </label>
                            

                        </div>


                    </button>
                </div>
            </header>

        </div>
    )
}

export default Navbar2