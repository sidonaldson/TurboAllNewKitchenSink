// @ts-nocheck
import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../Button";
import { Portal } from "../Portal";
import { IconSpeakerNotesOn, IconSpeakerNotesOff } from "../Icons";
import styles from "./SpeakerNotes.module.scss";

export const SpeakerNotes = ({ title, body, isCurrent, position }) => {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <>
      <AnimatePresence>
        {isToggled && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className={styles.speaker_notes_container}
            data-cy="speaker-notes-container">
            {title && <h3 className={styles.title}>{title}</h3>}
            <div
              className={styles.body}
              dangerouslySetInnerHTML={{ __html: body }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Portal id={`slide-controls_${position.s}-${position.x}-${position.y}`}>
        <AnimatePresence initial={false}>
          {isCurrent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}>
              <Button
                icon={IconSpeakerNotesOn}
                iconToggled={IconSpeakerNotesOff}
                isToggled={isToggled}
                onClick={() => setIsToggled(!isToggled)}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </Portal>
    </>
  );
};

SpeakerNotes.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  isCurrent: PropTypes.bool.isRequired,
  position: PropTypes.shape({
    s: PropTypes.number.isRequired,
    sequenceId: PropTypes.number,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
};
