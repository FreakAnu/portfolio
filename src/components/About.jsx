/* eslint-disable react/no-unescaped-entities */
import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { services } from "../constants"
import {fadeIn, textVariant} from "../utils/motion"
import { SectionWrapper } from "../hoc"

const ServicesCard = ({title,icon,index}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
    <motion.div 
    variants={fadeIn("right","spring",0.5*index,0.75)}
    className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
    <div className=" bg-tertiary rounded-[18px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col" >
      <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
      <h3 className=" text-white text-[20px] font-bold text-center">{title}</h3>
    </div>  
    </motion.div>
    </Tilt>
  )

}


const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>

    <motion.p 
    variants={fadeIn("","",0.1,1)} 
    className="mt-4 text-secondary text-[17px] leading-[30px]">
      I'm a skilled software developer with the experience in javascriot,typescript,react,redux,express,sql and nosql databases. I have a strong foundation in computer science and I'm always looking to learn new technologies and frameworks. I have a passion for creating web applications that are user-friendly and visually appealing. I'm a team player and I enjoy collaborating with others to create innovative solutions to complex problems. I'm always looking for new opportunities to grow and expand my skill set.
    </motion.p>

    <div className=" mt-20 flex flex-wrap gap-10">
      {services.map((service,index) => ( <ServicesCard key={services.title} index={index} {...service}/>))}
    </div>
    </>
  )
}

const WrappedAbout = SectionWrapper(About, "about");
export default WrappedAbout;