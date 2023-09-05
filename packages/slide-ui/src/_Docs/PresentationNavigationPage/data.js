export const presentationId = 99;

export const columnGroups = [
  {
    title: "Introduction",
    columns: [
      {
        thumbnail:
          "https://media-cdn.showhere.co/3/1652255132977_intro-title-thumbnail.jpg",
        slides: [
          {
            title: "Slide 1.1",
          },
          {
            title: "Slide 1.2",
          },
        ],
      },
      {
        thumbnail:
          "https://media-cdn.showhere.co/3/1652255178548_overview-title-thumbnail.jpg",
        slides: [
          {
            title: "Slide 2.1",
          },
          {
            title: "Slide 2.2",
          },
          {
            title: "Slide 2.3",
          },
        ],
      },
    ],
  },
  {
    title: "Key messages",
    columns: [
      {
        thumbnail:
          "https://media-cdn.showhere.co/3/1652255204695_km-1-thumb.png",
        slides: [
          {
            title: "Slide 1.1",
          },
          {
            title: "Slide 1.2",
          },
          {
            title: "Slide 1.3",
          },
          {
            title: "Slide 1.4",
          },
          {
            title: "Slide 1.5",
          },
          {
            title: "Slide 1.6",
          },
        ],
      },
      {
        thumbnail:
          "https://media-cdn.showhere.co/3/1652255214845_km-2-thumb.png",
        slides: [
          {
            title: "Slide 2.1",
          },
          {
            title: "Slide 2.2",
          },
          {
            title: "Slide 2.3",
          },
          {
            title: "Slide 2.4",
          },
        ],
      },
      {
        thumbnail:
          "https://media-cdn.showhere.co/3/1652255225927_km-3-thumb.png",
        slides: [
          {
            title: "Slide 3.1",
          },
          {
            title: "Slide 3.2",
          },
          {
            title: "Slide 3.3",
          },
          {
            title: "Slide 3.4",
          },
          {
            title: "Slide 3.5",
          },
          {
            title: "Slide 3.6",
          },
          {
            title: "Slide 3.7",
          },
          {
            title: "Slide 3.8",
          },
          {
            title: "Slide 3.9",
          },
          {
            title: "Slide 3.10",
          },
        ],
      },
      {
        thumbnail:
          "https://media-cdn.showhere.co/3/1652255235730_km-4-thumb.png",
        slides: [
          {
            title: "Slide 3.1",
          },
          {
            title: "Slide 3.2",
          },
          {
            title: "Slide 3.3",
          },
          {
            title: "Slide 3.4",
          },
          {
            title: "Slide 3.5",
          },
        ],
      },
    ],
  },
];

export const sequences = [];

export const initialStoryState = {
  columnIndex: 0,
  columns: columnGroups
    .flatMap(({ columns }) => columns)
    .flatMap(({ slides }, x) => ({
      slideIndex: 0,
      slides: slides.map((slide, y) => ({
        title: slide.title,
        position: { s: presentationId, x, y },
      })),
    })),
};
