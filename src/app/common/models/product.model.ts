export interface Product {
    name: string;
    price: number;
    rating: number;
    colors: Array<{
        name: string;
        imageUrl: string;
    }>;
    isOnSale: boolean;
}