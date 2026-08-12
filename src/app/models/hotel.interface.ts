export interface Hotel {
    id: string;
    name: string;
    country: string;
    price: number;
    roomsAvailable: number;
    stars: number;
    rating: number;
    address: string;
    imageUrl: string;
    wifi: boolean;
    breakfastIncluded: boolean;
}