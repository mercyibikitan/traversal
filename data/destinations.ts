export type Destination = {
    id: number;
    name: string;
    location: string;
    image: string;
    description: string;
};

export const destinations: Destination[] = [
    {
        id: 1,
        name: "Paris",
        location: "France",
        image:
            "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=80",
        description:
            "Experience the beauty, culture and unforgettable charm of Paris.",
    },
    {
        id: 2,
        name: "Santorini",
        location: "Greece",
        image:
            "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=900&q=80",
        description:
            "Discover stunning views, beautiful beaches and peaceful island life.",
    },
    {
        id: 3,
        name: "Bali",
        location: "Indonesia",
        image:
            "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=80",
        description:
            "Explore tropical landscapes, temples and relaxing island experiences.",
    },
    {
        id: 4,
        name: "Dubai",
        location: "United Arab Emirates",
        image:
            "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80",
        description:
            "Enjoy luxury, adventure and breathtaking modern architecture.",
    },
    {
        id: 5,
        name: "Cape Town",
        location: "South Africa",
        image:
            "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=900&q=80",
        description:
            "Experience mountains, beaches and incredible natural scenery.",
    },
    {
        id: 6,
        name: "New York",
        location: "United States",
        image:
            "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=900&q=80",
        description:
            "Explore the energy, attractions and iconic sights of New York City.",
    },
];