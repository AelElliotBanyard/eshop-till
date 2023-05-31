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
  category: string;
}
