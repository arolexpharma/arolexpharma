import { useParams } from "next/navigation";
import Image from "next/image";
import Breadscrumb from "@/app/components/common/breadscrumb/Breadscrumb";

const breadcrumbItems: any = [
  { label: "Home", href: "/" },
  { label: "Blogs", href: `/blogs` },
];

const blogPosts = [
  {
    id: 1,
    title: "Understanding Rabipose-DSR3T: Uses, Benefits, and Side Effects",
    date: "January 1, 2025",
    author: "admin",
    description:
      "Rabipose-DSR3T is a combination of Rabeprazole and Domperidone, commonly prescribed to treat acid reflux, heartburn, and gastric discomfort. It works by reducing the amount of acid in the stomach and promoting better gastric motility, providing relief from digestive issues. This blog will explore its uses, benefits, and potential side effects in detail to help you understand how this medication can improve your digestive health.",
    detailedDescription:
      "Rabipose-DSR3T combines Rabeprazole, a proton pump inhibitor (PPI), and Domperidone, a prokinetic agent, to provide comprehensive relief from gastric issues. Rabeprazole works by decreasing the production of stomach acid, which is essential for managing conditions like gastroesophageal reflux disease (GERD) and peptic ulcers. Domperidone, on the other hand, enhances the motility of the gastrointestinal tract, helping to alleviate nausea, bloating, and indigestion. This combination treatment is especially effective for individuals who experience both acid reflux and motility-related symptoms. However, like all medications, Rabipose-DSR3T may cause side effects, including headaches, dry mouth, and dizziness. It is essential to follow your healthcare provider’s instructions to ensure the medication is used safely and effectively.",
    benefits: [
      "Acid Reduction: Rabeprazole effectively reduces the amount of acid produced in the stomach, providing relief from heartburn and preventing ulcer formation.",
      "Improved Digestion: Domperidone enhances gastric motility, helping to alleviate symptoms like bloating, nausea, and indigestion.",
      "Long-lasting Relief: The dual-action formula ensures sustained relief from gastric discomfort.",
    ],
    dosage: ["Typically taken once daily, 30 minutes before a meal."],
    howToUse: [
      "Follow your doctor's instructions regarding dosage and duration.",
    ],
    image:
      "https://img.freepik.com/free-photo/medical-banner-with-doctor-wearing-goggles_23-2149611193.jpg?uid=R48018562&ga=GA1.1.1547196487.1728058155&semt=ais_hybrid",
  },
  {
    id: 2,
    title: "Acrocef-200: A Guide to Its Usage and Benefits",
    date: "January 2, 2025",
    author: "admin",
    description:
      "Acrocef-200 is an antibiotic used to treat various bacterial infections. With its broad-spectrum action, it targets both Gram-positive and Gram-negative bacteria. In this detailed blog post, we’ll discuss how Acrocef-200 works, its benefits, proper dosage, and the importance of adhering to the prescribed treatment schedule to avoid resistance and ensure the best results.",
    detailedDescription:
      "Acrocef-200 is a third-generation cephalosporin antibiotic that works by inhibiting the synthesis of bacterial cell walls. This prevents bacteria from multiplying and ultimately leads to their destruction. It is effective against a wide range of bacteria, including those responsible for respiratory infections, urinary tract infections, and skin conditions. Acrocef-200 is often prescribed for both acute and chronic bacterial infections, offering quick relief from symptoms such as fever, pain, and inflammation. However, it is essential to complete the full course of treatment as prescribed by your healthcare provider to prevent antibiotic resistance. Failure to do so may reduce the drug's effectiveness over time and make infections harder to treat. Some common side effects include nausea, vomiting, and diarrhea, though these are generally mild and temporary. Always consult your doctor before stopping or altering your dosage.",
    benefits: [
      "Broad-spectrum Action: Effective against a variety of Gram-positive and Gram-negative bacteria.",
      "Quick Relief: Provides noticeable improvement in symptoms within a few days of starting treatment.",
      "Well-tolerated: Minimal side effects when used as prescribed.",
    ],
    dosage: [
      "Usually prescribed as a tablet taken twice daily after meals.",
      "Dosage may vary depending on the severity of the infection and patient factors like age and kidney function.",
    ],
    howToUse: [
      "Complete the prescribed course to prevent antibiotic resistance.",
    ],
    image:
      "https://img.freepik.com/free-vector/arabic-doctor-with-medical-icon-hand-drawn-sketch-vector-background_460848-15109.jpg?uid=R48018562&ga=GA1.1.1547196487.1728058155&semt=ais_hybrid",
  },
  {
    id: 3,
    title: "Budalecs: Everything You Need to Know",
    date: "January 3, 2025",
    author: "admin",
    description:
      "Budalecs is a medication commonly used for asthma control, inflammatory bowel disease (IBD) management, and allergy relief. This blog post provides a comprehensive guide to the various uses of Budalecs, its administration methods, and its effectiveness in treating chronic conditions. We’ll also delve into the side effects and tips for using Budalecs correctly.",
    detailedDescription:
      "Budalecs is a combination of fluticasone and salmeterol, a medication that works by reducing inflammation and constriction in the airways, making it easier to breathe for individuals with asthma and chronic obstructive pulmonary disease (COPD). The inhaler form of Budalecs is widely used for asthma management as it delivers the medication directly to the lungs, providing fast and effective relief from wheezing, shortness of breath, and chest tightness. For IBD patients, Budalecs helps alleviate inflammation in the intestines, providing relief from abdominal pain and discomfort. Budalecs is also effective in treating nasal congestion and sneezing in allergic rhinitis. While it offers significant benefits, it is important to be aware of potential side effects, including throat irritation, headaches, and coughing. Always follow your doctor’s instructions regarding dosage and usage to minimize the risk of side effects and ensure maximum benefit.",
    benefits: [
      "Asthma Control: Helps reduce inflammation in the airways, improving breathing and preventing asthma attacks.",
      "IBD Management: Provides targeted relief from intestinal inflammation without significant systemic side effects.",
      "Allergy Relief: Reduces symptoms of nasal congestion and sneezing in allergic rhinitis.",
    ],
    dosage: [
      "Available as an inhaler, nasal spray, and oral capsules.",
      "Usage depends on the condition being treated.",
    ],
    howToUse: [
      "Adhere to your doctor's instructions for the correct dosage and method of administration.",
    ],
    image:
      "https://img.freepik.com/free-photo/medical-banner-with-doctor-holding-stethoscope_23-2149611203.jpg?uid=R48018562&ga=GA1.1.1547196487.1728058155&semt=ais_hybrid",
  },
];

export default function BlogDetail({ params }: any) {
  const post = blogPosts.find((blogPost) => blogPost.id === Number(params.id));

  if (!post) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <p className="text-2xl text-gray-500">Blog post not found!</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50">
      <Breadscrumb items={breadcrumbItems} />
      <div className="container mx-auto px-5 py-10 md:px-10">
       
        <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
          <Image
            src={post.image}
            alt={post.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

      
        <div className="mt-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            {post.title}
          </h1>
          <p className="text-md md:text-lg text-gray-500 mt-3">
            By <span className="font-medium">{post.author}</span> on{" "}
            <span>{post.date}</span>
          </p>
        </div>

  
        <div className="mt-6">
          <p className="text-lg text-gray-700">{post.description}</p>
        </div>

       
        <div className="mt-10">
          <p className="text-lg text-gray-700">{post.detailedDescription}</p>
        </div>

        <div className="mt-10">
          <article className="prose prose-md md:prose-lg max-w-none text-gray-700">
            <h2 className="font-bold">Benefits</h2>
            <ul>
              {post.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>

            <h2 className="font-bold">Dosage</h2>
            <ul>
              {post.dosage.map((dose, index) => (
                <li key={index}>{dose}</li>
              ))}
            </ul>

            <h2 className="font-bold">How to Use</h2>
            <ul>
              {post.howToUse.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ul>
          </article>
        </div>

    
        <div className="mt-10">
          <a
            href="/blogs"
            className="inline-block text-sm md:text-base text-blue-600 hover:underline"
          >
            ← Back to Blogs
          </a>
        </div>
      </div>
    </div>
  );
}
