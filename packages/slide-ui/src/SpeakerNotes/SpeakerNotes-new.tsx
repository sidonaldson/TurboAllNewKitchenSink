// @ts-nocheck
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button, Portal, IconSpeakerNotesOn, IconSpeakerNotesOff } from "..";
import Styles from "./SpeakerNotes.module.scss";

export type SpeakerNotesProps = {
  title?: string;
  body?: string;
  isCurrent?: boolean;
  position?: {
    s: number;
    x: number;
    y: number;
  };
};

export const SpeakerNotes = ({
  title = "",
  body = "",
  isCurrent = false,
  position = { s: 0, x: 0, y: 0 },
}: SpeakerNotesProps) => {
  const [isToggled, setIsToggled] = React.useState(false);
  return (
    <>
      <AnimatePresence>
        {isToggled && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className={Styles.speaker_notes_container}>
            {title.length > 0 && <h3 className={Styles.title}>{title}</h3>}
            <div
              className={Styles.body}
              dangerouslySetInnerHTML={{ __html: body }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Portal id={`speaker-notes_${position.s}-${position.x}-${position.y}`}>
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
