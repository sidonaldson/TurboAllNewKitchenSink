// @ts-nocheck
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Styles from "./TitleBar.module.css";
import { fadeInOut } from "../FramerMotionAnimations";

export type TitleBarProps = {
  text?: string;
};

export const TitleBar = ({ text = "" }: TitleBarProps) => {
  if (!text.length) return null;
  return (
    <AnimatePresence initial={false}>
      <motion.div className={Styles.bar} {...fadeInOut}>
        <AnimatePresence initial={false}>
          <motion.p className={Styles.title} {...fadeInOut}>
            {text}
          </motion.p>
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};
