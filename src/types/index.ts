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

export type InputProps = {
  label: string;
  type: "email" | "text" | "password" | string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}
