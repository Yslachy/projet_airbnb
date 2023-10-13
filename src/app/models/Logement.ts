export interface Logement {
    id: number;
    image: string;
    city : {
        zipcode: number;
        name: string;
    }
    price: number;
    rating?: number;    //? pour facultatif
    favourite: boolean;
}