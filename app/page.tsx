'use client';
import React, { useState, useEffect } from 'react';

interface Item {
  id: number;
  title: string;
  category: string;
  description: string;
  price: number;
  imagePrompt: string;
}

const App: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredItems, setFilteredItems] = useState<Item[]>([]);

  // Define categories
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'Perfume', name: 'Perfume' },
    { id: 'Flower', name: 'Flower' },
    { id: 'Clothes', name: 'Clothes' },
    { id: 'sports', name: 'Sports' },
    { id: 'books', name: 'Books' },
    { id: 'toys', name: 'Toys & Games' },
  ];

  // Define items
  const items: Item[] = [
    {
      id: 1,
      title: 'Wireless Headphones',
      category: 'Perfume',
      description: 'Premium noise-cancelling wireless headphones with 30-hour battery life.',
      price: 249.99,
      imagePrompt:
        'Premium wireless headphones with sleek modern design, noise cancellation feature, floating on a minimalist light gray background with subtle shadow, product photography, high resolution, professional lighting, clean aesthetic',
    },
    {
      id: 2,
      title: 'Smart Watch',
      category: 'Perfume',
      description: 'Fitness tracker with heart rate monitor and sleep analysis.',
      price: 199.99,
      imagePrompt:
        'Modern smartwatch with sleek black band and colorful display showing fitness metrics, floating on a minimalist light gray background, high-end product photography, studio lighting, crisp details, professional commercial shot',
    },
    {
      id: 3,
      title: 'Cotton T-Shirt',
      category: 'Flower',
      description: 'Soft premium cotton t-shirt, perfect for everyday wear.',
      price: 24.99,
      imagePrompt:
        'Folded white cotton t-shirt with minimal design, premium fabric texture visible, on clean light gray background, professional product photography, soft shadows, commercial quality, lifestyle product shot with excellent detail',
    },
    {
      id: 4,
      title: 'Denim Jeans',
      category: 'Flower',
      description: 'Classic fit denim jeans with comfortable stretch.',
      price: 59.99,
      imagePrompt:
        'Premium blue denim jeans neatly folded showing texture and stitching details, on minimalist light gray background, professional product photography, soft studio lighting, commercial quality, high resolution image',
    },
    {
      id: 5,
      title: 'Coffee Maker',
      category: 'Clothes',
      description: 'Programmable coffee maker with thermal carafe.',
      price: 89.99,
      imagePrompt:
        'Modern stainless steel coffee maker with glass carafe, sleek design with digital display, on minimalist light gray background, professional product photography, soft lighting highlighting metallic finish, commercial quality',
    },
    {
      id: 6,
      title: 'Coffee Maker',
      category: 'Clothes',
      description: 'Programmable coffee maker with thermal carafe.',
      price: 89.99,
      imagePrompt:
        'Modern stainless steel coffee maker with glass carafe, sleek design with digital display, on minimalist light gray background, professional product photography, soft lighting highlighting metallic finish, commercial quality',
    },
    {
      id: 7,
      title: 'Yoga Mat',
      category: 'sports',
      description: 'Non-slip yoga mat with carrying strap.',
      price: 35.99,
      imagePrompt:
        'Rolled up premium yoga mat in vibrant color with carrying strap, textured surface visible, on minimalist light gray background, professional product photography, soft studio lighting, lifestyle fitness product, commercial quality',
    },
    {
      id: 8,
      title: 'Bestselling Novel',
      category: 'books',
      description: 'Award-winning fiction novel by renowned author.',
      price: 18.99,
      imagePrompt:
        'Hardcover book with elegant minimalist cover design, slightly angled to show spine and cover, on clean light gray background, professional product photography, soft shadows, high resolution details, commercial quality image',
    },
    {
      id: 9,
      title: 'Building Blocks Set',
      category: 'toys',
      description: 'Creative building blocks for ages 3+.',
      price: 29.99,
      imagePrompt:
        'Colorful building blocks neatly arranged showing different shapes and sizes, vibrant educational toy set, on minimalist light gray background, professional product photography, bright colors pop against neutral background',
    },
  ];

  // Filter items based on active filter and search query
  useEffect(() => {
    let result = items;

    // Apply category filter
    if (activeFilter !== 'all') {
      result = result.filter((item) => item.category === activeFilter);
    }

    // Apply search filter
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (item) =>
          item.title.toLowerCase().includes(query) || item.description.toLowerCase().includes(query)
      );
    }

    setFilteredItems(result);
  }, [activeFilter, searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            UI/UX Desing by Zin Ko Naing
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Discover premium products curated just for you
          </p>
        </div>

        {/* Filter Bar */}
        <div className="relative">
          <div className="flex items-center justify-between flex-wrap sm:flex-nowrap gap-4 mb-6">
            <div className="overflow-x-auto pb-2 flex-grow">
              <div className="flex space-x-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveFilter(category.id)}
                    className={`whitespace-nowrap cursor-pointer !rounded-button px-4 py-2 text-sm font-medium transition-all ${
                      activeFilter === category.id
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="fas fa-search text-gray-400"></i>
              </div>
              <input
                type="text"
                className="w-full sm:w-64 pl-10 pr-4 py-2 border-none !rounded-button bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Items Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 cursor-pointer"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={`https://readdy.ai/api/search-image?query=${encodeURIComponent(item.imagePrompt)}&width=600&height=400&seq=${item.id}&orientation=landscape`}
                    alt={item.title}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                    <span className="text-lg font-bold text-blue-600">UI/UX</span>
                  </div>
                  <div className="mt-1">
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                      {categories.find((cat) => cat.id === item.category)?.name}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-2">{item.description}</p>
                  <a
                    href={`https://example.com/product/${item.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 w-full bg-blue-600 text-white py-2 !rounded-button font-medium hover:bg-blue-700 transition-colors whitespace-nowrap inline-block text-center"
                  >
                    View Product
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Empty State
          <div className="flex flex-col items-center justify-center py-16 px-4">
            <div className="text-center">
              <i className="fas fa-search text-6xl text-gray-300 mb-4"></i>
              <h3 className="text-xl font-medium text-gray-900 mb-2">No items found</h3>
              <p className="text-gray-600 max-w-md">
                We couldn't find any items matching your criteria. Try clearing your filters or
                searching for something else.
              </p>
              <button
                onClick={() => {
                  setActiveFilter('all');
                  setSearchQuery('');
                }}
                className="mt-6 px-4 py-2 bg-blue-600 text-white !rounded-button font-medium hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
              >
                Clear Filters
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
