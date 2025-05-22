'use client'
import { motion, AnimatePresence } from "framer-motion"
import { BiMenu } from "react-icons/bi"
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"
import { useState } from "react"

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    const sidebarVariants = {
        open: {
            x: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30
            }
        },
        closed: {
            x: "100%",
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30
            }
        }
    }

    return (
        <nav className='absolute top-0 w-full pt-10 text-white z-20'>
            <div className='container'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-2xl font-semibold uppercase'>
                        <span className='text-primary'>
                            Interior
                        </span>
                        Design
                    </h1>
                    {!isSidebarOpen && (
                        <button onClick={toggleSidebar}>
                            <BiMenu className="text-3xl cursor-pointer"/>
                        </button>
                    )}
                </div>
                {/* sidebar menu section */}
                <AnimatePresence>
                    {isSidebarOpen && (
                        <motion.div 
                            className="fixed top-0 right-0 w-[140px] h-full bg-gradient-to-b from-primary/60 to-primaryDark/80 backdrop-blur-sm z-10"
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={sidebarVariants}
                        >
                            <div className="w-full h-full flex flex-col">
                                <div className="p-8">
                                    <button onClick={toggleSidebar}>
                                        <BiMenu className="text-3xl cursor-pointer"/>
                                    </button>
                                </div>
                                <div className="flex-1 flex justify-center items-center">
                                    <div className="flex flex-col justify-center items-center gap-6 text-white">
                                        <div className="w-[1px] h-[70px] bg-white"></div>
                                        <div className="flex flex-col gap-4">
                                            <a href="#" className="line">
                                                <FaFacebook className="text-2xl hover:text-primary transition-colors" />
                                            </a>
                                            <a href="#" className="line">
                                                <FaTwitter className="text-2xl hover:text-primary transition-colors" />
                                            </a>
                                            <a href="#" className="line">
                                                <FaInstagram className="text-2xl hover:text-primary transition-colors" />
                                            </a>
                                        </div>
                                        <div className="w-[1px] h-[70px] bg-white"></div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    )
}

export default Navbar