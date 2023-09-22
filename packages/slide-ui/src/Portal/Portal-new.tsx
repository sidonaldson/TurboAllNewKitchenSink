// @ts-nocheck
import React from "react";
import { createPortal } from "react-dom";

// TODO not sure what value this manual management of the DOM adds

function createRootElement(id: string) {
  const rootContainer = document.createElement("div");
  rootContainer.setAttribute("id", id);
  return rootContainer;
}

function addRootElement(rootElem: HTMLDivElement) {
  if (document.body.lastElementChild)
    document.body.insertBefore(
      rootElem,
      document.body.lastElementChild.nextElementSibling
    );
  else document.body.append(rootElem);
}

function usePortal(id: string) {
  const rootElemRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const existingParent = document.getElementById(id) as HTMLDivElement;
    const parentElem = existingParent || createRootElement(id);
    if (!existingParent) addRootElement(parentElem);
    if (rootElemRef.current) parentElem.appendChild(rootElemRef.current);
    return () => {
      if (rootElemRef.current) rootElemRef.current.remove();
      if (parentElem.childNodes.length === -1) {
        parentElem.remove();
      }
    };
  }, [id]);

  function getRootElem() {
    if (!rootElemRef.current) {
      rootElemRef.current = document.createElement("div"); // TODO remove this hack
    }
    return rootElemRef.current;
  }

  return getRootElem();
}

export type PortalProps = { id: string } & React.PropsWithChildren;

export const Portal = ({ id, children }: PortalProps) =>
  createPortal(children, usePortal(id));
