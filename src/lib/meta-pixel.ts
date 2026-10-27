export const META_DATASET_ID = "1102673052301304";
export const META_PIXEL_ID = META_DATASET_ID;
export const META_API_TOKEN =
  "EAAS9jApFmXQBSqz9ofqo4rDiIyMnkCzHJpRq14lPt48M97mSUZBltPlZBd3mFSGBOISeydZAzA4ZCa0ljIXr9ZBLh4VmyVUROr3uZAv3ISD3GJztJEUfXqqlDmb2zZCD7ZCTLPAl7nKfV1gitW3T2BF7PyJXYaNihXZAje1yhmqwQ2mlleU0TTVJqKay86ROZATAZDZD";

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
