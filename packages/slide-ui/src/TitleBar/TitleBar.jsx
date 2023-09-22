/* eslint-disable react/prop-types */
// @ts-nocheck
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./TitleBar.module.css";

const fadeProps = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.15 },
};

export const TitleBar = ({ text = false }) => {
  const showBar = text !== false && text !== "" && text !== null;
  return (
    <AnimatePresence initial={false}>
      {showBar && (
        <motion.div className={styles.bar} {...fadeProps} data-cy="title-bar">
          <AnimatePresence initial={false}>
            <motion.p key={text} className={styles.title} {...fadeProps}>
              {text}
            </motion.p>
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
