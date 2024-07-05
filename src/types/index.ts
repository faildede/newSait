
export interface Item {
    id: number;
    name: string;
    route: string;
}

export interface MenuItem {
    title: string;
    route?: string;
    image?: string;
    children?: MenuItem[]; 
}

export interface Props {
    item: MenuItem;
} 

export interface menuItem {
    title: string;
    route: string;
}