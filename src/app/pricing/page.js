'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import PricingCategory from './components/pricingcategory';

const pricingData = [
  {
    category: "Dermal Fillers",
    items: [
      {
        id: 0,
        name: "Lip Fillers",
        price: "€200",
        discountedPrice: "€150*",
        description:
          "Enhance the volume and shape of your lips for a fuller, youthful look.",
      },
      {
        id: 1,
        name: "Chin Fillers",
        price: "€225",
        discountedPrice: "€170*",
        description:
          "Add volume and definition to your chin for a balanced profile.",
      },
      {
        id: 2,
        name: "Jawline Fillers",
        price: "€240",
        discountedPrice: "€180*",
        description:
          "Define and sculpt the jawline for a more structured appearance.",
      },
      {
        id: 3,
        name: "Cheek Fillers",
        price: "€225",
        discountedPrice: "€170*",
        description:
          "Restore volume to the cheeks, enhancing facial contours.",
      },
      {
        id: 4,
        name: "Smoker Lines",
        price: "€240",
        discountedPrice: "€180*",
        description:
          "Smooth fine lines around the lips caused by smoking or aging.",
      },
      {
        id: 5,
        name: "Nasolabial Folds (Smile - Marionette Lines)",
        price: "€240",
        discountedPrice: "€180*",
        description:
          "Reduce the appearance of deep smile lines for a youthful look.",
      },
    ],
  },
  {
    category: "Regenerative & Skin Treatments",
    items: [
      {
        id: 11,
        name: "Polynucleotides",
        price: "€240",
        discountedPrice: "€180*",
        description: "Improve skin texture and hydration with Polynucleotides.",
      },
      {
        id: 7,
        name: "Profhilo",
        price: "€260",
        discountedPrice: "€195*",
        description:
          "Hydrate and improve skin elasticity for smoother, younger skin.",
      },
      {
        id: 8,
        name: "Sunekos",
        price: "€240",
        discountedPrice: "€180*",
        description:
          "Stimulate collagen for revitalized skin and improved elasticity.",
      },
      {
        id: 9,
        name: "Jalupro",
        price: "€240",
        discountedPrice: "€180*",
        description:
          "Amino acid treatment that rejuvenates the skin for a youthful glow.",
      },
      {
        id: 6,
        name: "Lumi Eyes",
        price: "€240",
        discountedPrice: "€180*", // Tear-Through treatment
        description:
          "Treat under-eye bags and dark circles, brightening the eye area.",
      },
    ],
  },
  {
    category: "Mesotherapy",
    items: [
      {
        id: 10,
        name: "Mesotherapy",
        price: "€240",
        discountedPrice: "€180*",
        description:
          "A rejuvenating treatment for skin hydration and anti-aging effects.",
      },
    ],
  },
];


const Page = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <PricingPageContent />
    </Suspense>
  );
};

const PricingPageContent = () => {
  const searchParams = useSearchParams();
  const selectedTreatmentStr = searchParams.get('selected');
  const selectedTreatmentId = selectedTreatmentStr ? parseInt(selectedTreatmentStr, 10) : null;
  const selectedCategory = searchParams.get('category') || null;

  return (
    <div className="max-w-3xl mx-auto p-4 md:p-6">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-700 mb-6">Pricing</h1>
      <div className="space-y-6 mx-4 md:mx-16">
        {pricingData.map((section, index) => (
          <PricingCategory
            key={index}
            category={section.category}
            items={section.items}
            selectedTreatmentId={selectedTreatmentId}
            selectedCategory={selectedCategory}
          />
        ))}
      </div>
      <div className="fixed bottom-0 left-0 w-full bg-gray-100 text-gray-600 text-center p-2 text-sm shadow-md">
  *Promotion valid for new clients only.
</div>

    </div>
  );
};

export default Page;
