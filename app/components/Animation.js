"use client"
import { AnimatePresence, motion } from "framer-motion";

const Animation = ({children}) => {
    return ( 
        <AnimatePresence>
        <motion.div initial={{ opacity: 0}}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0}}
        transition={{ delay: 0.10 }} >
            {children}
        </motion.div>
    </AnimatePresence>

     );
}
 
export default Animation;