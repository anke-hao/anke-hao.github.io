import type { CSSProperties } from "react";

export interface ProjectCard {
  title: string;
  description: string;
  image: string;
  link: string;
  buttonText?: string;
}

export interface ProjectLink {
  label: string;
  href: string;
  external?: boolean;
}

export type ProjectBlock =
  | {
      type: "html";
      html: string;
      style?: CSSProperties;
    }
  | {
      type: "image";
      src: string;
      alt: string;
      width?: string | number;
      style?: CSSProperties;
    }
  | {
      type: "gallery";
      images: Array<{
        src: string;
        alt: string;
        width?: string | number;
      }>;
      style?: CSSProperties;
    }
  | {
      type: "embed";
      src: string;
      title: string;
      width?: string | number;
      height?: string | number;
      frameBorder?: number;
      allowFullScreen?: boolean;
      style?: CSSProperties;
    }
  | {
      type: "buttons";
      links: ProjectLink[];
      style?: CSSProperties;
    };

export interface ProjectSection {
  title?: string;
  blocks: ProjectBlock[];
  style?: CSSProperties;
}

export interface Project extends ProjectCard {
  slug: string;
  route: string;
  sections: ProjectSection[];
}
