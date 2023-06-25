'use client'
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { ChangeSectionStyledComponent, SwitchContainer } from "./style";

export default function ChangeSection({slug}){
    return(
        <ChangeSectionStyledComponent>
            <Link to={slug} smooth duration={1000} className="link-container">
                <SwitchContainer>
                    <motion.div
                        animate={{
                            y:[-12, 18, -12]
                        }}
                        transition={{
                            duration:2,
                            repeat:Infinity,
                            repeatType:"loop"
                        }}
                    />
                </SwitchContainer>
            </Link>
        </ChangeSectionStyledComponent>
    )
}