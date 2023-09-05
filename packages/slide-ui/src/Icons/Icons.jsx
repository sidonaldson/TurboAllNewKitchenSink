import React from "react";

import {
  Close,
  Menu,
  ArrowBack,
  ArrowForward,
  ArrowUpward,
  ArrowDownward,
  Settings,
  Home,
  PowerSettingsNew,
  Info,
  AccountCircle,
  GridOn,
  GridOff,
  PlayArrow,
  Pause,
  Forward10,
  Replay10,
  ViewList,
  Photo,
  CameraAlt,
  ThreeHundredSixty,
  PresentToAll,
  CancelPresentation,
  Add,
  Remove,
  WbIncandescent,
  Cast,
  Schedule,
  Layers,
  ViewComfy,
  Toc,
  SkipPrevious,
  SkipNext,
  Warning,
  Shuffle,
  OpenInNew,
  FileDownload,
  StopCircle,
  PictureAsPdf,
} from "@styled-icons/material";

import { HomeAlt } from "@styled-icons/boxicons-regular";

const DEFAULT_SIZE = 24;

export const IconMenu = ({ size = DEFAULT_SIZE }) => <Menu size={size} />;
export const IconClose = ({ size = DEFAULT_SIZE }) => <Close size={size} />;
export const IconArrowBack = ({ size = DEFAULT_SIZE }) => (
  <ArrowBack size={size} />
);
export const IconArrowForward = ({ size = DEFAULT_SIZE }) => (
  <ArrowForward size={size} />
);
export const IconArrowUpward = ({ size = DEFAULT_SIZE }) => (
  <ArrowUpward size={size} />
);
export const IconArrowDownward = ({ size = DEFAULT_SIZE }) => (
  <ArrowDownward size={size} />
);
export const IconSettings = ({ size = DEFAULT_SIZE }) => (
  <Settings size={size} />
);
export const IconHome = ({ size = DEFAULT_SIZE }) => <Home size={size} />;
export const IconReset = ({ size = DEFAULT_SIZE }) => (
  <PowerSettingsNew size={size} />
);
export const IconInfo = ({ size = DEFAULT_SIZE }) => <Info size={size} />;
export const IconAccount = ({ size = DEFAULT_SIZE }) => (
  <AccountCircle size={size} />
);
export const IconGrid = ({ size = DEFAULT_SIZE }) => <GridOn size={size} />;
export const IconGridOff = ({ size = DEFAULT_SIZE }) => <GridOff size={size} />;
export const IconPlay = ({ size = DEFAULT_SIZE }) => <PlayArrow size={size} />;
export const IconPause = ({ size = DEFAULT_SIZE }) => <Pause size={size} />;
export const IconForward10 = ({ size = DEFAULT_SIZE }) => (
  <Forward10 size={size} />
);
export const IconReplay10 = ({ size = DEFAULT_SIZE }) => (
  <Replay10 size={size} />
);
export const IconViewList = ({ size = DEFAULT_SIZE }) => (
  <ViewList size={size} />
);
export const IconImage = ({ size = DEFAULT_SIZE }) => <Photo size={size} />;
export const IconPhoto = ({ size = DEFAULT_SIZE }) => <CameraAlt size={size} />;
export const IconPano360 = ({ size = DEFAULT_SIZE }) => (
  <ThreeHundredSixty size={size} />
);
export const IconPresentRemote = ({ size = DEFAULT_SIZE }) => (
  <PresentToAll size={size} />
);
export const IconPresentRemoteOff = ({ size = DEFAULT_SIZE }) => (
  <CancelPresentation size={size} />
);
export const IconPlus = ({ size = DEFAULT_SIZE }) => <Add size={size} />;
export const IconMinus = ({ size = DEFAULT_SIZE }) => <Remove size={size} />;
export const IconLightbulb = ({ size = DEFAULT_SIZE }) => (
  <WbIncandescent size={size} />
);
export const IconScreencast = ({ size = DEFAULT_SIZE }) => <Cast size={size} />;
export const IconClock = ({ size = DEFAULT_SIZE }) => <Schedule size={size} />;
export const IconLayers = ({ size = DEFAULT_SIZE }) => <Layers size={size} />;
export const IconGridDense = ({ size = DEFAULT_SIZE }) => (
  <ViewComfy size={size} />
);
export const IconToc = ({ size = DEFAULT_SIZE }) => <Toc size={size} />;

export const IconCone = ({ rotation }) => (
  <svg
    width="24"
    height="24"
    style={{ transform: `rotate(${rotation})` }}
    viewBox="0 0 269.5 339.1"
  >
    <g>
      <g>
        <path
          fill="#DADADA"
          d="M269.5,169.5C269.4,71.6,215.9,6.5,211,0L0.1,169.7L0,169.9l0.1,0.2l211.4,169.1
			C216.4,332.6,269.7,267.2,269.5,169.5"
        />
      </g>
    </g>
    <path
      fill="#b2b2b2"
      d="M96.6,92.1L0.1,169.9l-0.1,0l0.1,0.2l96.7,77.5c3.1-4.1,27.1-33.7,27-77.8C123.8,125.6,99.7,96,96.6,92.1"
    />
  </svg>
);

export const IconHawkeye = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path
      opacity="0.5"
      d="M12 21.5L23.6 7c-.4-.3-4.9-4-11.6-4C5.3 3 .8 6.7.4 7L12 21.5z"
    />
    <path d="M6.7 14.9l5.3 6.6 5.3-6.6C17.1 14.6 15 13 12 13s-5.1 1.6-5.3 1.9z" />
  </svg>
);

export const IconHawkeyeToggled = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path
      opacity="0.5"
      d="M18.2 13.8L23.6 7c-.4-.3-4.9-4-11.6-4-1.5 0-2.9.2-4.1.5l10.3 10.3zM5.9 4C2.7 5.2.7 6.8.4 7L12 21.5l5-6.3L5.9 4z"
    />
    <path d="M15.7 13.8a8.5 8.5 0 0 0-9 1.1l5.3 6.6 5-6.3-1.3-1.4z" />
    <path d="M19.2 19.9l1.3-1.2-3.5-3.5L3.3 1.4 2 2.7z" />
  </svg>
);

export const IconSpeakerNotesOn = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 14H6v-2h2v2zm0-3H6V9h2v2zm0-3H6V6h2v2zm7 6h-5v-2h5v2zm3-3h-8V9h8v2zm0-3h-8V6h8v2z" />
  </svg>
);

export const IconSpeakerNotesOff = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M10.54 11l-.54-.54L7.54 8 6 6.46 2.38 2.84 1.27 1.73 0 3l2.01 2.01L2 22l4-4h9l5.73 5.73L22 22.46 17.54 18l-7-7zM8 14H6v-2h2v2zm-2-3V9l2 2H6zm14-9H4.08L10 7.92V6h8v2h-7.92l1 1H18v2h-4.92l6.99 6.99C21.14 17.95 22 17.08 22 16V4c0-1.1-.9-2-2-2z" />
  </svg>
);

export const IconRoomControls = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M14,11.26V6h3v4h2V4h-5V3H5v16H3v2h9.26C11.47,19.87,11,18.49,11,17C11,14.62,12.19,12.53,14,11.26z M10,11h2v2h-2V11z M21.69,16.37l1.14-1l-1-1.73l-1.45,0.49c-0.32-0.27-0.68-0.48-1.08-0.63L19,12h-2l-0.3,1.49c-0.4,0.15-0.76,0.36-1.08,0.63 l-1.45-0.49l-1,1.73l1.14,1c-0.08,0.5-0.08,0.76,0,1.26l-1.14,1l1,1.73l1.45-0.49c0.32,0.27,0.68,0.48,1.08,0.63L17,22h2l0.3-1.49 c0.4-0.15,0.76-0.36,1.08-0.63l1.45,0.49l1-1.73l-1.14-1C21.77,17.13,21.77,16.87,21.69,16.37z M18,19c-1.1,0-2-0.9-2-2s0.9-2,2-2 s2,0.9,2,2S19.1,19,18,19z" />
  </svg>
);

export const IconLargeCircle = () => (
  <svg
    width="44"
    height="44"
    viewBox="0 0 44 44"
    preserveAspectRatio="xMidYMid meet"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="22" cy="22" r="11" fill="currentColor" />
  </svg>
);

export const IconSmallCircle = () => (
  <svg
    width="44"
    height="44"
    viewBox="0 0 44 44"
    preserveAspectRatio="xMidYMid meet"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="22" cy="22" r="8" fill="currentColor" />
  </svg>
);

export const IconSquare = () => (
  <svg
    width="44"
    height="44"
    viewBox="0 0 44 44"
    preserveAspectRatio="xMidYMid meet"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="15" y="15" width="14" height="14" fill="currentColor" />
  </svg>
);
export const IconPinDrop = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="34px"
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    width="34px"
    fill="currentColor"
  >
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </svg>
);

export const IconDiamond = () => (
  <svg
    width="44"
    height="44"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 44 44"
    preserveAspectRatio="xMidYMid meet"
  >
    <polygon points="22,11 33,22 22,33 11,22" fill="currentColor" />
  </svg>
);

export const IconSkipPrevious = ({ size = DEFAULT_SIZE }) => (
  <SkipPrevious size={size} />
);

export const IconSkipNext = ({ size = DEFAULT_SIZE }) => (
  <SkipNext size={size} />
);

export const IconArrowBackToStart = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M21 11H8.8l5.6-5.6L13 4l-8 8 8 8 1.4-1.4L8.8 13H21v-2z" />
    <path d="M6 4v16H4V4z" />
  </svg>
);

export const IconBroadcastingLive = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 44 44"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#484848"
  >
    <g fill="red" strokeWidth="0">
      <circle cx="22" cy="22" r="1">
        <animate
          attributeName="r"
          begin="0s"
          dur="2s"
          values="1; 20"
          calcMode="spline"
          keyTimes="0; 1"
          keySplines="0.165, 0.84, 0.44, 1"
          repeatCount="indefinite"
        />
        <animate
          attributeName="fill-opacity"
          begin="0s"
          dur="2s"
          values="1; 0"
          calcMode="spline"
          keyTimes="0; 1"
          keySplines="0.3, 0.61, 0.355, 1"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="22" cy="22" r="1">
        <animate
          attributeName="r"
          begin="-1s"
          dur="2s"
          values="1; 20"
          calcMode="spline"
          keyTimes="0; 1"
          keySplines="0.165, 0.84, 0.44, 1"
          repeatCount="indefinite"
        />
        <animate
          attributeName="fill-opacity"
          begin="-1s"
          dur="2s"
          values="1; 0"
          calcMode="spline"
          keyTimes="0; 1"
          keySplines="0.3, 0.61, 0.355, 1"
          repeatCount="indefinite"
        />
      </circle>
    </g>
  </svg>
);

export const IconWarning = ({ size = DEFAULT_SIZE }) => <Warning size={size} />;

export const IconShuffle = ({ size = DEFAULT_SIZE }) => <Shuffle size={size} />;

export const IconOpenInNew = ({ size = DEFAULT_SIZE }) => (
  <OpenInNew size={size} />
);

export const IconFileDownload = ({ size = DEFAULT_SIZE }) => (
  <FileDownload size={size} />
);

export const IconStopCircle = ({ size = DEFAULT_SIZE }) => (
  <StopCircle size={size} />
);

export const IconHomeAlt = ({ size = DEFAULT_SIZE }) => <HomeAlt size={size} />;

export const IconPdf = ({ size = DEFAULT_SIZE }) => (
  <PictureAsPdf size={size} />
);
