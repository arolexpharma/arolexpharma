import React from 'react';
import Breadscrumb from '@/app/components/common/breadscrumb/Breadscrumb';

const productsByDosageForm = [
  'Respules', 'Soaps', 'Dusting Powder', 'Sprays Ointments', 'Lotions',
  'Creams', 'Ointments', 'Nasal Sprays & Drops', 'Dry Syrup', 'Eye Ear Drops',
  'Injectables', 'Pediatric Drops', 'Suspension', 'Capsule', 'Syrups',
  'Cardiac Diabetic', 'Tablets', 'Sachets', 'Misc. Products', 'Ayurvedic Products',
  'Antihistamines Range', 'Skin Care Range', 'Infusions',
];

const productsByTherapyWise = [
  'Critical Care Range', 'Derma Products Range', 'Ayurvedic Products Range',
  'Anti Inflammatory Range', 'Analgesic Range', 'Antibiotics Range',
  'Anticold Range', 'Anti Ulcer Range', 'Anti Allergics Range',
  'Anti Flatulent Range', 'Antifungal Range', 'Anti Cough Range',
  'Anti Spasmodic Range', 'Antispasmodic Range', 'Orthopedic Range',
  'Dental Range', 'Gynaecological Range', 'Neurology Range',
  'Gastro Range', 'Liver Care Range',
];

export default function ProductsPage() {
  const breadcrumbItems:any = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
  ];

  const renderCards = (products: string[]) => {
    return products.map((product, index) => (
      <div
        key={index}
        className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-200 cursor-pointer" 
      >
        <h3 className="text-lg font-semibold text-gray-800">{product}</h3>
      </div>
    ));
  };

  return (
    <div className="">
      {/* Breadcrumb */}
      <div className="">
        <Breadscrumb items={breadcrumbItems} />
      </div>

      {/* Products Section */}
      <div className="container mx-auto px-4 py-6 space-y-12">
        {/* By Dosage Form */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">By Dosage Form</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {renderCards(productsByDosageForm)}
          </div>
        </div>

        {/* By Therapy wise */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">By Therapy Wise</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {renderCards(productsByTherapyWise)}
          </div>
        </div>
      </div>
    </div>
  );
}
