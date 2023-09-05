// @ts-nocheck
import React from "react";
import { PresentationNavigation } from "../..";
import { columnGroups, sequences, initialStoryState } from "./data";

export function PresentationNavigationPage() {
  const [storyState, setStoryState] = React.useState(initialStoryState);
  return (
    <>
      <h2>PresentationNavigation</h2>
      <div
        style={{
          position: "relative",
          aspectRatio: "16/9",
          maxWidth: 1024,
          overflow: "scroll",
          background: "rgb(33, 33, 33)",
          marginBottom: 40,
        }}
      >
        <PresentationNavigation
          story={{ columnGroups, sequences }}
          storyState={storyState}
          menuVisible={false}
          openSlide={({ _s, x, y }) => {
            const nextState = { ...storyState };
            nextState.columnIndex = x;
            nextState.columns[x].slideIndex = y;
            setStoryState(nextState);
          }}
          scrollRef={{ current: null }}
          setScrollPosition={(px) => console.log("scroll to", px)}
        />
      </div>
    </>
  );
}
