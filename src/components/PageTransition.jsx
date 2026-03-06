import { motion } from "framer-motion"

function PageTransition({ children }) {

  const variants = {
    hidden: { opacity: 0, x: 80 },
    enter: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -80 }
  }

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ duration: 0.45 }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  )
}

export default PageTransition