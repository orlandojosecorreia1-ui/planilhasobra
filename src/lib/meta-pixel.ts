export const META_DATASET_ID = "1102673052301304";
export const META_PIXEL_ID = META_DATASET_ID;
export const META_API_TOKEN =
  "EAAS9jApFmXQBS96uKBtlfmCe8JGnxiJuQglrtjBmWZAwLZBLx5uGIUfnXl4EK7q0CF9Y8o4oR3uc2am23YVaWlS7ZBzNwAOnggZArjci7PhbMNvIYRKerBeedhIo3HoIX6YaTDilUubS26GpTjsblxUDCGSUGLFzLNwQcN3mtHPlFzTM9YITmOifE89dRgZDZD";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
  }
}

export function trackMetaEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    if (params) {
      window.fbq("track", eventName, params);
    } else {
      window.fbq("track", eventName);
    }
  }
}
