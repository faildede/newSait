export interface Item {
	id: number;
	name: string;
	route: string;
}

export interface MenuItem {
    tag: any;
	bodytext: ReactNode;
	imageUrl: string | StaticImport;
	title: string;
	route?: string;
	image?: string;
	children?: MenuItem[]; 
}

export interface Props {
	item: MenuItem;
} 

export interface MenuItemSimple {
	title: string;
	route: string;
}

export type SearchProducts = {
	imageUrl: string | null;
	id: string;
	name: string;
	image: {
			sizes: {
					thumbnail: {
							url: string;
							width: number;
							height: number;
					};
					tablet: {
							url: string;
							width: number;
							height: number;
					};
			};
	};
}

export interface SearchResult {
	search: any;
	docs: SearchProducts[];
}

export interface SearchProps {
	term: string;
}

export interface StaticCard { 
	imageUrl: string;
	title: string;
	bodytext: string;
}


export interface Product {
    id: string;
    name: string;
    price: number;
    image: Image;
    category: Category;
}

export interface Image {
    sizes: {
        thumbnail: {
            url: string;
        };
    };
}

export interface Category {
    tags: string[];
}