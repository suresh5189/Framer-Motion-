import React, { useState } from "react";
import { motion } from "framer-motion";

function Box1() {
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <div className="box-container">
      <h1>Box1</h1>
      <motion.div
        className="box"
        animate={{
          x: isAnimating ? 1100 : 0,
          opacity: isAnimating ? 1 : 0.5,
          rotate: isAnimating ? 360 : 0,
        }}
        initial={{ opacity: 0.5 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        onClick={() => setIsAnimating(!isAnimating)}
      ></motion.div>
    </div>
  );
}

export default Box1;
