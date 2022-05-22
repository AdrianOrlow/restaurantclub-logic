export interface Project {
  id: string;
  name: string;
  modified: number;
}

export interface ProjectWithCanvas {
  id: string;
  project: {
    id: string;
    name: string;
    width: number;
    height: number;
    items: ProjectItem[];
  };
}

export interface ProjectItem {
  id: string;
  color: string;
  rotation: number;
  x: number;
  y: number;
  width: number;
  height: number;
}
