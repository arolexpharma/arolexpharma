import Breadscrumb from '@/app/components/common/breadscrumb/Breadscrumb';
import React from 'react';
const breadcrumbItems: any = [
  { label: "Home", href: "/" },
  { label: "Terms and Conditions", href: "/terms-and-conditions" },
];
const TermsAndConditions = () => {
  return (
    <div className='mb-10'>
      <div className="">
              <Breadscrumb items={breadcrumbItems} />
            </div>
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold">Terms and Conditions</h1>
      </header>
      <main className="container mx-auto p-6">
        <section>
          <h2 className="text-2xl font-semibold">Introduction</h2>
          <p className="text-gray-700">
            Welcome to Arolex Pharma! These Terms and Conditions govern your use of our website and the services
            we provide. By using this website, you agree to comply with and be bound by these terms.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Services Provided</h2>
          <p className="text-gray-700">
            Arolex Pharma offers contract-based manufacturing, marketing, and supply of pharmaceutical products.
            We work with businesses and organizations to create and distribute pharmaceutical solutions.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Use of Our Website</h2>
          <p className="text-gray-700">
            You agree to use this website for lawful purposes only and not to engage in any conduct that may damage
            or interfere with the functionality of the website or harm the interests of Arolex Pharma or other users.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Intellectual Property</h2>
          <p className="text-gray-700">
            All content, designs, trademarks, and other intellectual property on this website are the property of
            Arolex Pharma unless stated otherwise. You may not use any content from this website without our express
            written consent.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Limitation of Liability</h2>
          <p className="text-gray-700">
            Arolex Pharma is not liable for any damages, losses, or expenses arising from the use of this website or
            the inability to use the website. We do not guarantee that the website will be free from errors or
            interruptions.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Privacy and Data Collection</h2>
          <p className="text-gray-700">
            We collect personal information (name, phone number, and email) through our contact form for the purpose
            of responding to inquiries. Please refer to our Privacy Policy for more details on how we handle your data.
          </p>

          <h2 className="text-2xl font-semibold mt-6">External Links</h2>
          <p className="text-gray-700">
            Our website may contain links to external websites. We do not endorse or control the content of these
            third-party sites and are not responsible for their privacy practices or terms of use.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Modifications to the Terms</h2>
          <p className="text-gray-700">
            Arolex Pharma reserves the right to update or change these Terms and Conditions at any time. Any changes
            will be posted on this page with an updated date. Please review these terms regularly to stay informed
            about our practices.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Governing Law</h2>
          <p className="text-gray-700">
            These Terms and Conditions are governed by the laws of the country in which Arolex Pharma operates. Any
            legal disputes will be resolved in the appropriate jurisdiction.
          </p>
        </section>
      </main>
   
    </div>
  );
};

export default TermsAndConditions;
