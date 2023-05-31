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
