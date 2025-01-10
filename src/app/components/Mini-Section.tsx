import React from 'react';
import { Leaf, Smile, Package } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6 space-y-4 max-w-sm mx-auto">
    <div className="text-gray-700">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const MiniSection = () => {
  const features = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Pure for Sure",
      description: "For years, we've been dedicated to providing our customers with the finest, unadulterated spices, and we'll continue to uphold this promise"
    },
    {
      icon: <Smile className="w-8 h-8" />,
      title: "Flavourful",
      description: "Our cutting-edge technology ensures our blends retain their flavor, aroma, and color for an extended period, resulting in a longer shelf life and unparalleled freshness."
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Hygienically Packed",
      description: "From cleaning to packaging, our fully automated process eliminates human contact, ensuring absolute purity and quality for our customers."
    }
  ];

  return (
    <section className="py-16 px-4 bg-[#fff9f0]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Hathi Masala: Your Best Choice for Spices
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MiniSection;