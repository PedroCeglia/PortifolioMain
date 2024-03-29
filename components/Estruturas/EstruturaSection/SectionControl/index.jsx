'use client'
import { motion } from "framer-motion";
import { staggerContainer } from "@/constants/motion";

export default function SectionControl({idSection, children}){
    return(
        <motion.section
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{once:true, amount: 0.25}}
            style={{
                width:"100vw", height:"100%",
                display:"flex", flexDirection:"column",
                justifyContent:"flex-start", alignItems:"center",
                position:"relative"
                
            }}
        >
            <div id={idSection} style={{position:"absolute", top:"-100px"}}></div>
            {children}
        </motion.section>
    )
}