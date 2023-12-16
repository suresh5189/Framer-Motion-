import React from "react";
import { motion } from "framer-motion";

function Box2() {

  return (
    <div className="box-container">
       <h1>Box2</h1>
      <motion.div
        className="box"
        drag
        dragConstraints={{
          top:10,
          bottom:10,
          right:-20,
          left:-20,
        }}
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.9,
        }}
      ></motion.div>
    </div>
  );
}

export default Box2;
