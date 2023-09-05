import React, { useRef, useEffect } from "react";
import styles from "./PresentationNavigation.module.scss";

export function PresentationNavigation({
  story,
  storyState,
  menuVisible,
  openSlide,
  scrollRef,
  setScrollPosition,
}) {
  const activeColumnEl = useRef();
  useEffect(() => {
    const checkActiveColumnElMounted = setInterval(() => {
      if (menuVisible && activeColumnEl.current && scrollRef.current) {
        clearInterval(checkActiveColumnElMounted);
        setScrollPosition({
          axis: "x",
          position:
            activeColumnEl.current.offsetLeft +
            activeColumnEl.current.clientWidth / 2 -
            scrollRef.current.clientWidth / 2,
        });
      }
    }, 1);
    return () => clearInterval(checkActiveColumnElMounted);
  }, [activeColumnEl, menuVisible, scrollRef, setScrollPosition]);

  let columnAccumulator = 0;

  return (
    <ol
      className={styles.story}
      data-sequences-count={story.sequences?.length ?? 0}
      data-cy="presentation-naviation-story"
    >
      {story.columnGroups.map((columnGroup, i) => {
        return (
          <li
            className={styles.column_group}
            key={`column-group_${i}`}
            data-cy="presentation-naviation-column-group"
          >
            <div className={styles.column_group__title}>
              <h2>{columnGroup.title}</h2>
            </div>
            <div className={styles.columns}>
              {columnGroup.columns.map((column, j) => {
                const columnState = storyState.columns[columnAccumulator];
                const isActiveColumn =
                  columnAccumulator === storyState.columnIndex;
                columnAccumulator++;
                return (
                  <ol
                    className={styles.column}
                    key={`column_${i}_${j}`}
                    ref={isActiveColumn ? activeColumnEl : null}
                    data-cy="presentation-naviation-column"
                  >
                    {columnState.slides.map((slide) => {
                      const { x, y } = slide.position;
                      const isFirst = y === 0;
                      const isSelectedSlide =
                        storyState.columnIndex === x &&
                        columnState.slideIndex === y;
                      return (
                        <li
                          key={`${x}_${y}`}
                          data-cy="presentation-naviation-slide"
                          onClick={() =>
                            openSlide({
                              ...slide.position,
                              presentationId: slide.position.s,
                              slideId: slide.slideId,
                            })
                          }
                          className={`
                            ${styles.slide}
                            ${
                              isSelectedSlide ? styles["is-selected-slide"] : ""
                            }
                            ${isFirst ? styles["is-first"] : ""}
                          `}
                        >
                          {isFirst && (
                            <div className={styles.slide_thumbnail}>
                              {column.thumbnail && (
                                <img src={column.thumbnail} alt="" />
                              )}
                            </div>
                          )}
                          <p className={styles.slide_title}>{slide.title}</p>
                        </li>
                      );
                    })}
                  </ol>
                );
              })}
            </div>
          </li>
        );
      })}
      <li>&nbsp;</li>
    </ol>
  );
}
