import React, { useState, useEffect } from 'react';
import { Filter, ChevronDown, Loader2 } from 'lucide-react';
import DealCard from '../components/dashboard/DealCard';

const Marketplace = () => {
  const [deals, setDeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDeals = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        const formattedDeals = data.map(item => ({
          id: item.id,
          title: item.title,
          category: item.category,
          price: `$${item.price.toFixed(2)}`,
          image: item.image,
          badge: item.rating?.rate >= 4.5 ? 'Top Rated' : 'New',
          type: 'price'
        }));
        setDeals(formattedDeals);
      } catch (error) {
        console.error("Error fetching deals:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDeals();
  }, []);

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-4xl font-black text-gray-900 mb-2">Marketplace</h1>
        <p className="text-gray-500 font-medium">
          Discover and negotiate premium B2B assets and surplus inventory.
        </p>
      </div>

      {/* Filters Bar */}
      <div className="bg-white p-4 rounded-[2rem] border border-gray-100 flex flex-wrap items-center gap-4 shadow-sm">
        <div className="flex items-center gap-2 px-6 border-r border-gray-100 mr-2">
          <Filter className="w-4 h-4 text-gray-400" />
          <span className="text-sm font-bold text-gray-700">Filters</span>
        </div>

        <div className="flex flex-wrap gap-3 flex-1">
          {['All Categories', 'Any Price', 'Any Condition'].map((filter) => (
            <button 
              key={filter}
              className="px-5 py-2.5 rounded-xl border border-gray-100 bg-gray-50/50 text-sm font-bold text-gray-600 flex items-center gap-3 hover:bg-white hover:shadow-md transition-all"
            >
              {filter}
              <ChevronDown className="w-4 h-4" />
            </button>
          ))}
        </div>

        <div className="text-sm font-bold text-gray-400 px-6">
          Showing {deals.length} results
        </div>
      </div>

      {/* Deals Grid */}
      {loading ? (
        <div className="flex justify-center items-center py-20">
          <Loader2 className="w-8 h-8 animate-spin text-indigo-600" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {deals.map((deal) => (
            <DealCard key={deal.id} deal={deal} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Marketplace;
