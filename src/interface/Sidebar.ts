export interface ISidebarParent {
    id: string;
    title: string;
    children: ISidebarChild[];
}

export interface ISidebarChild {
    id: string;
    title: string;
    page: string;
}
