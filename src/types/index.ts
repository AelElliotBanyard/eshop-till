export type NavigationItemProps = {
    title: string,
    path: string,
    list: boolean,
    subroutes?: Routes[]
}

type Routes = {
    title: string,
    path: string
}