declare module "react-vertical-timeline-component" {
  import { ComponentType, ReactNode } from "react";

  export const VerticalTimeline: ComponentType<{ children: ReactNode }>;
  export const VerticalTimelineElement: ComponentType<any>; // می‌تونی بعداً stricter تایپ کنی
}
