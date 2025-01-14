export const bestSellingProducts = [
    { id: 1, name: 'Casual T-Shirt', price: '$25.99', image: '/images/casual-tshirt.jpg' },
    { id: 2, name: 'Formal Shirt', price: '$45.99', image: '/images/casual-shirt1.jpg' },
];
export const BestSellingProducts = [
    { id: 1, name: 'Product A', price: '$10' },
    { id: 2, name: 'Product B', price: '$20' }
];

export const fetchBestSellingProducts = async () => {
    try {
        const response = await fetch('http://localhost:5000/api/products/bestselling');
        if (!response.ok) {
            throw new Error('Failed to fetch best-selling products');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching best-selling products:', error);
        return [];
    }
    
};
