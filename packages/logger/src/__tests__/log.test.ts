import { log } from "..";

jest.spyOn(global.console, "log");

describe("logger", () => {
  it("prints a message", () => {
    log("hello");
    // eslint-disable-next-line no-console
    expect(console.log).toBeCalled();
  });
});
