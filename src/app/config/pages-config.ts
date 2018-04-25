export const pages = {
    search: {
        path: 'search',
    },
    hotels: {
        path: 'hotels',
        loadChildren: 'app/hotel/hotel.module#HotelModule'
    }
}