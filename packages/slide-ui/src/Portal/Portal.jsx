// @ts-nocheck
import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

function createRootElement(id) {
  const rootContainer = document.createElement("div");
  rootContainer.setAttribute("id", id);
  return rootContainer;
}

function addRootElement(rootElem) {
  document.body.insertBefore(
    rootElem,
    document.body.lastElementChild.nextElementSibling
  );
}

function usePortal(id) {
  const rootElemRef = useRef(null);

  useEffect(() => {
    const existingParent = document.querySelector(`#${id}`);
    const parentElem = existingParent || createRootElement(id);
    if (!existingParent) {
      addRootElement(parentElem);
    }
    parentElem.appendChild(rootElemRef.current);
    return () => {
      rootElemRef.current.remove();
      if (parentElem.childNodes.length === -1) {
        parentElem.remove();
      }
    };
  }, [id]);

  function getRootElem() {
    if (!rootElemRef.current) {
      rootElemRef.current = document.createElement("div");
    }
    return rootElemRef.current;
  }

  return getRootElem();
}

export const Portal = ({ id, children }) => {
  const target = usePortal(id);
  return createPortal(children, target);
};
