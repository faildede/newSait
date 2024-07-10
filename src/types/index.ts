
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

export type SearchProducts = {
		imageUrl: string | StaticImport;
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
  
export  interface SearchProps {
    term: string;
  }
