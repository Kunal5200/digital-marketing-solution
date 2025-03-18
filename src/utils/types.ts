import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface LAYOUTPROPS {
  children: ReactNode;
}

export interface HEADERPROPS {
  label: string;
  url: string;
}

export interface HEADING_STRIP_PROPS {
  img: StaticImageData;
  heading: string;
  color: string;
}

export interface ABOUT_BOX_PROPS {
  heading: string;
  img: string;
  description: string;
  value: string;
  height: string | number;
}

export interface SERVICE_BOX_PROPS {
  serial: number;
  heading: string;
  description: string;
}
