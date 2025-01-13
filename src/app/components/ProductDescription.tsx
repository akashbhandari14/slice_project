// ProductDescription.tsx
'use client';

import { useState } from 'react';

type Tab = 'description' | 'recipes' | 'history' | 'ingredients';

export default function ProductDescription() {
  const [activeTab, setActiveTab] = useState<Tab>('description');

  const tabs: { id: Tab; label: string }[] = [
    { id: 'description', label: 'Description' },
    { id: 'recipes', label: 'Recipes' },
    { id: 'history', label: 'History & Source' },
    { id: 'ingredients', label: 'Ingredients' }
  ];

  return (
    <div className="w-full mt-16 mx-auto p-4 max-sm:px-0">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Tabs - Vertical on desktop, horizontal on mobile */}
        <div className="md:w-48 h-fit flex justify-start items-start gap-5 md:flex-col overflow-x-auto md:overflow-x-visible over border-l-2 border-gray-400 max-md:border-none">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-left whitespace-nowrap transition-colors text-lg font-semibold
                ${activeTab === tab.id
                  ? 'border-l-2 border-black max-md:border-l-0 max-md:border-b-2 z-10'
                  : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 w-full border border-black rounded-md p-8">
          {activeTab === 'description' && (
            <div className="space-y-6 w-full">
              <section className='w-full'>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Purpose</h2>
                <p className="text-gray-700 mb-4">
                  Hathi Resham Kashmiri chilli powder is spicy chilli powder. it gives your dishes a natural red hue with incredible depth of taste. We maintain quality standards, ensuring that we deliver untouched flavor and freshness while satisfying the requirements of professional and home cooks. This Resham Kashmiri Chilli Powder is ideal for individuals who enjoy a touch of heat with extreme spiciness.
                </p>
                <p className="text-gray-700 mb-4">
                  Our Resham Kashmiri chilli powder boosts the flavor and appearance of a variety of meals. Whether you're cooking traditional Indian recipes or experimenting with global cuisines, Hathi Resham Kashmiri Chilli Powder is the ideal addition for adding a depth of richness and complexity to your dishes.
                </p>
                <img src="/images/single_product_spice_img_1.avif" alt="" />
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  3 reasons why you should choose hathi Kashmiri chilli
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-xl text-gray-900 mb-2">Freshness and arom</h3>
                    <p className="text-gray-700">
                      An inhalation of authentic Kashmiri chili powder shows its unique aroma, which blends spiciness and an element of sweetness. The tempting aroma of our Kashmiri chilli powder can enhance the flavor of any dish. Moreover, Hathi brand offer packaging with sealed varnishing, keeping freshness and aroma for a long period.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-xl text-gray-900 mb-2">Aromatic and rich in flavor:</h3>
                    <p className="text-gray-700">
                      Our Resham Kashmiri Chilli Powder is a mildly spicy dish with an array of flavors that will leave you craving more. Add a pop of mild spiciness to your dishes; moreover, it is ideal for curries, marinades, and other foods that require a touch of Kashmir.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-xl text-gray-900 mb-2">Versatile uses</h3>
                    <p className="text-gray-700">
                      This chilli powder is extremely adaptable and can be used in a wide range of food styles. It enhances the flavor and color of classic Indian curries and tandoori meals, as well as soups, stews, and marinades in global cuisines.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          )}

          {/* Placeholder content for other tabs */}
          {activeTab === 'recipes' && (
            <div className="text-gray-700">
              <h3 className='text-3xl font-bold'>How to use Kashmiri chili powder in your cooking</h3>
              <section className='my-8 flex flex-col gap-3'>
                <div className='flex flex-col items-start justify-start gap-3'>
                  <h3 className='text-2xl font-semibold'>Vegetable Kebabs:</h3>
                  <p>Hathi Kashmiri chili powder can be used to enhance the depth and intricate nature of delicious vegetable kebabs. Simply add a teaspoon or two of the powder to the saucepan along with the other ingredients.</p>
                </div>
                <div>
                  <h3 className='text-2xl font-semibold'>Gujarati Kadhi:</h3>
                  <p>Our Kashmiri chili powder can also be used to add spice and flavor to Gujarati Kadhi. Try adding a pinch of chili powder to a margarita for a spicy twist. A small amount of Kashmiri chili powder is used to balance off the sweetness.</p>
                </div>
                <div>
                  <h3 className='text-2xl font-semibold'>Curries:</h3>
                  <p className='text-sm'>It's an essential element in many Indian curries. Use it to flavor and color your favorite chicken or vegetable curries.</p>
                </div>
              </section>
            </div>
          )}
          {activeTab === 'history' && (
            <div className='flex flex-col gap-4'>
              <h3 className='text-3xl font-semibold'>History & Sources</h3>
              <p>Kashmiri chilli powder comes from the Kashmir area of northern India, which is known for its rich culinary tradition and vibrant methods of agriculture. Kashmiri chilies are known for their deep red color and mild heat, which have made them popular in India and around the world. Kashmiri chilli powder is used to enhance the visual appearance and flavor of many different meals.

                Kashmiri chilli powder is a popular spice in Indian kitchens, recognized for adding deep red color and mild heat to foods. It is widely used in traditional Indian cuisine, including curries, tandoori meals, and biryanis, where color and flavor have priority over severe spicy. Its mild heat makes it appropriate for a wide range of tastes, even those who prefer less spicy foods.
              </p>
              <h3 className='text-3xl font-semibold'>Gujarati Kadhi:</h3>
              <p>Our Kashmiri chili powder can also be used to add spice and flavor to Gujarati Kadhi. Try adding a pinch of chili powder to a margarita for a spicy twist. A small amount of Kashmiri chili powder is used to balance off the sweetness.</p>
            </div>
          )}
          {activeTab === 'ingredients' && (
            <div className="text-gray-700">
              <h3 className='text-3xl font-bold'>Coming Soon...</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}