db = db.getSiblingDB('sighties');

const imageUrls = [
    "https://sighties-sights.s3.amazonaws.com/660886af-2b29-4353-bd43-5a996e8d2e86.jpg",
    "https://sighties-sights.s3.amazonaws.com/dd3de9df-3286-4ff9-bf19-74a97566812f.jpg",
    "https://sighties-sights.s3.amazonaws.com/9a5c4b8d-2b22-49c5-ba58-fd75e4076b57.jpg",
    "https://sighties-sights.s3.amazonaws.com/2c427199-8c1a-4951-8922-b5ead7adfc87.jpg",
    "https://sighties-sights.s3.amazonaws.com/e0b0afa5-2925-484f-8c74-dfcbece2e133.jpg",
    "https://sighties-sights.s3.amazonaws.com/084be92d-1a35-4890-acb7-a50f6a5b225b.jpg",
    "https://sighties-sights.s3.amazonaws.com/7493d585-e6e4-493c-a009-d439a510f717.jpg",
    "https://sighties-sights.s3.amazonaws.com/d235727e-0935-4830-bcdf-74cc25504c7c.jpg"
];

const categories = [
    "Theatre & Performances",
    "Sport Events",
    "Concerts & Music Festivals",
    "Cultural & Literary Events",
    "Food & Drink",
    "Family & Community",
    "Cinema & Film Festivals",
    "Exhibitions & Art Shows"
];

const descriptions = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Vivamus tincidunt quam id libero dapibus tincidunt.",
    "Aliquam erat volutpat. Nullam nec justo eu erat commodo sodales.",
    "Praesent rutrum felis nec odio pulvinar, id malesuada nisl suscipit.",
    "Suspendisse at mauris ac eros pulvinar tincidunt.",
    "Curabitur in leo nec sapien finibus luctus in in orci.",
    "Mauris a mi ut nisi sodales luctus vitae nec purus.",
    "Integer vulputate sapien non justo vehicula, sed cursus massa egestas.",
    "Donec dignissim sapien sed dolor lacinia, sed fermentum justo aliquet.",
    "Fusce at purus id velit laoreet fermentum nec et eros."
];

const sights = [];

for (let i = 1; i <= 30; i++) {
    sights.push({
        name: `Generated Sight ${i}`,
        description: descriptions[i % descriptions.length],
        price: Math.floor(Math.random() * 100) + 10, // 10–109
        category: categories[i % categories.length],
        imageUrl: imageUrls[i % imageUrls.length]
    });
}

db.sights.insertMany(sights);
