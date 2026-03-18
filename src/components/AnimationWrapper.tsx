import { motion, type HTMLMotionProps } from "framer-motion";
import { type ReactNode } from "react";

interface AnimationWrapperProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const AnimationWrapper = ({ children, delay = 0, className = "", ...props }: AnimationWrapperProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: [0.19, 1, 0.22, 1] }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export default AnimationWrapper;
