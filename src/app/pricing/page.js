// src/app/pricing/page.js
import PricingCategory from './components/pricingcategory';

const treatments = [
  {
    category: "Dermal Fillers",
    items: [
      {
        name: "Lip Fillers",
        price: "€300",
        description: "Enhance the volume and shape of your lips for a fuller, youthful look.",
      },
      {
        name: "Chin Fillers",
        price: "€350",
        description: "Add volume and definition to your chin for a balanced profile.",
      },
      {
        name: "Jaw Fillers",
        price: "€400",
        description: "Define and sculpt the jawline for a more structured appearance.",
      },
      {
        name: "Cheek Fillers",
        price: "€450",
        description: "Restore volume to the cheeks, enhancing facial contours.",
      },
      {
        name: "Smoker Lines",
        price: "€250",
        description: "Smooth fine lines around the lips caused by smoking or aging.",
      },
      {
        name: "Nasolabial Folds (Smile Lines)",
        price: "€300",
        description: "Reduce the appearance of deep smile lines for a youthful look.",
      },
    ],
  },
  {
    category: "Regenerative & Skin Treatments",
    items: [
      {
        name: "Lumi Eyes",
        price: "€250",
        description: "Treat under-eye bags and dark circles, brightening the eye area.",
      },
      {
        name: "Profhilo",
        price: "€500",
        description: "Hydrate and improve skin elasticity for smoother, younger skin.",
      },
      {
        name: "Sunekos",
        price: "€450",
        description: "Stimulate collagen for revitalized skin and improved elasticity.",
      },
      {
        name: "Jalupro",
        price: "€400",
        description: "Amino acid treatment that rejuvenates the skin for a youthful glow.",
      },
    ],
  },
  {
    category: "Mesotherapy",
    items: [
      {
        name: "Mesotherapy",
        price: "€350",
        description: "A rejuvenating treatment for skin hydration and anti-aging effects.",
      },
    ],
  },
];

const Page = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-5xl font-bold text-center text-gray-700 mb-6">Pricing</h1>

      <div className="space-y-6 mx-16">
        {treatments.map((section, index) => (
          <PricingCategory
            key={index}
            category={section.category}
            items={section.items}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
