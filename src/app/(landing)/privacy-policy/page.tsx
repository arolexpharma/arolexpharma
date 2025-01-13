import Breadscrumb from "@/app/components/common/breadscrumb/Breadscrumb";
import React from "react";
const breadcrumbItems: any = [
  { label: "Home", href: "/" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];
const PrivacyPolicy = () => {
  return (
    <div className='mb-10'>

      <div className="">
        <Breadscrumb items={breadcrumbItems} />
      </div>
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold">Privacy Policy</h1>
      </header>
      <main className="container  mx-auto p-6">
        <section>
          <h2 className="text-2xl font-semibold">Introduction</h2>
          <p className="text-gray-700">
            Welcome to Arolex Pharma! We value your privacy and are committed to
            protecting your personal information. This Privacy Policy outlines
            the information we collect, how it is used, and the measures we take
            to protect your data.
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            Information We Collect
          </h2>
          <p className="text-gray-700">
            We collect personal information when you submit a contact form on
            our website. This includes:
          </p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Your name</li>
            <li>Your phone number</li>
            <li>Your email address</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6">
            How We Use Your Information
          </h2>
          <p className="text-gray-700">
            The information we collect is used solely for the purpose of
            responding to your inquiries and providing you with more information
            about our pharmaceutical contract manufacturing, marketing, and
            supply services. We do not use your information for any other
            purposes without your consent.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Data Protection</h2>
          <p className="text-gray-700">
            We take reasonable measures to protect your personal data from
            unauthorized access, disclosure, or alteration. However, no method
            of electronic transmission is 100% secure, and we cannot guarantee
            absolute security.
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            Sharing Your Information
          </h2>
          <p className="text-gray-700">
            We do not share your personal information with third parties except
            for the following:
          </p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>
              When required by law or to protect the rights, property, or safety
              of Arolex Pharma, our clients, or others.
            </li>
            <li>
              With trusted service providers who assist us in operating our
              website and conducting our business, provided they agree to keep
              this information confidential.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6">Cookies</h2>
          <p className="text-gray-700">
            Our website may use cookies to enhance the user experience. Cookies
            are small text files that are placed on your device to help the
            website remember your preferences and track your activity. You can
            control cookie settings in your browser.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Your Rights</h2>
          <p className="text-gray-700">
            You have the right to request access to the personal information we
            hold about you, correct inaccuracies, and request deletion of your
            information. To exercise these rights, please contact us via the
            contact information provided on our website.
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            Changes to this Privacy Policy
          </h2>
          <p className="text-gray-700">
            We reserve the right to update this Privacy Policy at any time. Any
            changes will be posted on this page with an updated date at the top.
            Please review this page periodically to stay informed about how we
            are protecting your data.
          </p>
        </section>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
