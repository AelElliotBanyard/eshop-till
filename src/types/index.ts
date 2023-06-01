import { ReactElement } from "react";

export type NavigationItemProps = {
  title: string | JSX.Element;
  path: string;
  list: boolean;
  subroutes?: Routes[];
};

type Routes = {
  title: string;
  path: string;
};

export interface Picture {
  id: string;
  src: string;
  alt: string;
  price: number;
  description: string;
  category: string[];
}

export type CustomSelectProps = {
  label: string;
  options: CustomOption[];
  onChange: (e: string) => void;
};

export interface CustomOption {
  value: string;
  label: string;
}
