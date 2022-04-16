import React from "react";
import './Card.scss';
import { motion } from "framer-motion";

const Card = (props) => {
  
  return (
    <>
   
    <motion.div whileHover={{ scale: 1 }}  animate={{ scale:0.8 }} transition={{ ease: "easeInOut", duration: 0.8 } } whileTap={{ scale: 1.2 }}  >

    <div class="card card2 flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
    <img src={props.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">
           {props.title}
          </p>
       
        </div>
    </div>
    <div class="flip-card-back">
    <p className="card-text">
           {props.title}
          </p>

      <div>
      <p style={{fontSize:"1.2rem",color:"grey"}}>Duration : {props.duration}</p>
      <p style={{fontSize:"1rem",color:"grey"}}>Rating : {props.rating}</p>
     
      <p style={{fontSize:"1rem",color:"grey"}}>About : {props.about.substring(0,100)}...</p><br/>
      </div>
    </div>
  </div>
</div>
    
      

      </motion.div>
    </>
  );
};

export default Card;
