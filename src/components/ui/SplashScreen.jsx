import { useEffect, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';

function SplashScreen({children}){
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        key="splash"
                        initial={{ y: 0 }}
                        exit={{ y: "-100vh" }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="fixed inset-0 flex items-center flex-col justify-center bg-[#161f27] text-white text-2xl z-50"
                    >
                        <motion.h1 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: -10 }}
                            transition={{ duration: 0.4 }}
                            className="text-7xl"
                        >
                            VictorGodoy.dev
                        </motion.h1>
                         <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="h-1 bg-gradient-to-r from-[#7fb8ee] to-white w-3xl"
                        />
                    </motion.div>

                )}
            </AnimatePresence>
            
            {!isVisible && children}
        </>
    );
}

export default SplashScreen;