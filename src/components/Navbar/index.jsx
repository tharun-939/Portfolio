import Sidebar from '../Sidebar'
import './index.scss'
import {motion} from 'framer-motion'

const Navbar = () => {
    return (
        <div className='navbar'>
            {/* Sidebar */}
            <Sidebar />
            <div className="wrapper">
                <motion.span 
                  initial={{opacity:0, scale:0.3}} 
                  animate={{opacity:0.9, scale:0.3}} 
                  transition={{duration:1}}
                >
                    Tech Portfolio
                </motion.span>
                <div className='social'>
                    <a href="https://github.com/tharun-939" target="_blank"><img className='git' src='/github.png' alt='Github' /></a>
                    <a href='//www.instagram.com/_always_tharun/'><img src='/instagram.png' alt='Instagram' /></a>
                    <a href='https://www.linkedin.com/in/tharun-rachakonda'><img src='/linkedin.png' alt='Linkedin' /></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar