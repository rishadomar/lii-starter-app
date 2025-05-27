import { HttpResponse, delay } from 'msw';
import mockClearances from './mockData/clearancesData.json';
import { Clearance } from '@/types';

// Helper function to generate random delay between 1 and 5 seconds
const getRandomDelay = () => {
    // Returns milliseconds between 1000 (1 second) and 5000 (5 seconds)
    return 1000 + Math.random() * 4000;
};

export const getClearances = async ({ request }: { request: Request }) => {
    const delayTime = getRandomDelay();
    console.log(`Mocking api: ${request.url}. Delay: ${Math.round(delayTime / 1000)} seconds`);
    await delay(delayTime);

    // Occasional error simulation (10% chance)
    if (Math.random() < 0.1) {
        return new HttpResponse(JSON.stringify({ message: 'Server error occurred' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    // Load and process mock data
    try {
        const data = mockClearances as unknown as Clearance[];
        return HttpResponse.json(data, { status: 200 });
    } catch (error) {
        return HttpResponse.json({ message: 'Failed to load translations' }, { status: 500 });
    }
};
