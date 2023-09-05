// @ts-nocheck
export type UseRoomControlProps = {
  roomControlConfig: {
    apiUrl: string;
  };
  role: string;
  timeoutAfter?: number;
};

export const useRoomControl = ({
  roomControlConfig,
  role,
  timeoutAfter = 5000,
}: UseRoomControlProps) => {
  const sendCommand = async (string = "") => {
    if (role === "listen") return;
    try {
      if (!string.length)
        throw Error(
          "[RoomControl] sendCommand aborted due to missing `string`"
        );

      console.info(
        `[RoomControl] sending "${string}" (${roomControlConfig?.apiUrl}/?command=${string})`
      );

      // a fetch request which times out after `timeoutAfter` milliseconds
      const controller = new AbortController();
      const timeoutId = setTimeout(() => {
        console.warn(`[RoomControl] Request aborted after ${timeoutAfter}ms`);
        return controller.abort();
      }, timeoutAfter);
      await window.fetch(`${roomControlConfig?.apiUrl}/?command=${string}`, {
        mode: "no-cors",
        signal: controller.signal,
      });
      clearTimeout(timeoutId);
    } catch (err) {
      console.error(err);
    }
  };
  return { sendCommand };
};
