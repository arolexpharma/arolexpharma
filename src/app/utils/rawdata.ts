import RabiposeImage1 from "@/app/assets/images/products/RABIPOSE.png";
import ArocefImage2 from "@/app/assets/images/productModel/arocef.png";
import BudalecsImage3 from "@/app/assets/images/productModel/budalecs.png";
import RabiposeImage from "@/app/assets/images/products/RABIPOSE2.jpg";
import ArocefImage from "@/app/assets/images/products/arocef.jpeg";
import BudalecsImage from "@/app/assets/images/products/budalecs.jpeg";
import researchImage from "@/app/assets/images/blogs/researchImage.png";
import doctorImage from "@/app/assets/images/blogs/doctorImage.png";
import doctor2Image from "@/app/assets/images/blogs/doctor2.png";
import farhene25Image from "@/app/assets/images/products/farhene25.png";
import farhene50Image from "@/app/assets/images/products/farhene-50.png";
import acronacImage from "@/app/assets/images/products/acronac.png";
import albanjImage from "@/app/assets/images/products/albanj.png";
import cyproidImage from "@/app/assets/images/products/cyporid.png";
import dicol60kImage from "@/app/assets/images/products/dicol60k.png";
import fluliteMImage from "@/app/assets/images/products/fluliteM.png";
import fluvote10Image from "@/app/assets/images/products/Fluvote10.png";
import GastolexOImage from "@/app/assets/images/products/gastolexO.png";
export const products = [
  {
    id: 1,
    image: [RabiposeImage1, RabiposeImage],
    name: "Rabipose-DSR3T",
    price: "$50",
    MRP: "₹85/STRIP",
    description:
      "A RABIPOSE-DSR 3T (NANO TECHNOLOGY FLUX CAPSULE) used to treat certain stomach and esophagus problems such as acid reflux and ulcers.",
    Flavour: "Un Flavoured",
    Composition: "Rabeprazole Sodium 20 mg, Domperidone 10 mg",
    Packaging: "10 Strip",
    Indication_Uses:
      "For treatment of Gerd & Dyspepsia, Hyperacidity & HeartBurn, Nausea & Vomiting, acid reflux, ulcers, and gastroesophageal reflux disease (GERD).",
    Dosage: "One tablet daily before a meal.",
    faq: [
      {
        question: "What is Rabipose-DSR3T used for?",
        answer: "It is used to treat acid reflux and ulcers.",
      },
      {
        question: "Is this medication safe?",
        answer: "Yes, when used as prescribed by a doctor.",
      },
    ],
  },
  {
    id: 2,
    image: [ArocefImage2, ArocefImage],
    name: "Arocef - 200 DT",
    price: "$35",
    MRP: "₹109.53/strip",
    description:
      "An antibiotic used to treat infections caused by bacteria, including respiratory infections and skin infections.",
    Flavour: "Unflavored",
    Composition: "CEFIXIME 200 mg Despersible Tablet",
    Packaging: "Pack of 10 X 10 tablets",
    Indication_Uses:
      "Used to treat bacterial infections such as respiratory and skin infections.",
    Dosage: "Directed by the physician",
    faq: [
      {
        question: "What types of infections can Arocef treat?",
        answer: "Arocef is used to treat respiratory and skin infections.",
      },
      {
        question: "How long should I take this medication?",
        answer:
          "The course of treatment typically lasts for 7-10 days, as prescribed by your doctor.",
      },
    ],
  },
  {
    id: 3,
    image: [BudalecsImage3, BudalecsImage],
    name: "Budalecs",
    price: "$30",
    MRP: "₹130/packet",
    description:
      "A medication used for treating conditions such as bacterial infections and other health issues.",
    Flavour: "Lemon",
    Composition: "Amoxicillin 500 mg, Clavulanic Acid 125 mg",
    Packaging: "5 packets in a box",
    Indication_Uses:
      "Treats infections such as respiratory, urinary tract, and skin infections.",
    Dosage: "One tablet every 8 hours.",
    faq: [
      {
        question: "What infections can Budalecs treat?",
        answer:
          "Budalecs can treat respiratory, urinary tract, and skin infections.",
      },
      {
        question: "Can I take this medication with food?",
        answer: "Yes, it can be taken with food to reduce stomach irritation.",
      },
    ],
  },
  {
    id: 4,
    image: [farhene25Image, farhene25Image],
    name: "Farhene-25",
    price: "$50",
    MRP: "₹700/-",
    description: "Anti-diabetic medication for type 2 diabetes management.",
    Flavour: "Unflavoured",
    Composition: "Clomifene 25mg",
    Packaging: "10*10 Alu-Alu",
    Indication_Uses: "Controls blood sugar levels in adults with type 2 diabetes, often combined with diet/exercise.",
    Dosage: "Usually once daily in the morning.",
    faq: [
      {
        question: "Does Farhene-25 cause weight loss?",
        answer: "May cause modest weight reduction as it excretes excess glucose via urine."
      },
      {
        question: "Can it cause low blood sugar?",
        answer: "Risk is low when used alone but increases with other diabetes medications."
      }
    ]
  },
  {
    id: 5,
    image: [farhene50Image, farhene50Image],
    name: "Farhene-50",
    price: "$35",
    MRP: "₹850/-",
    description: "Higher strength anti-diabetic medication.",
    Flavour: "Unflavored",
    Composition: "Clomifene 50mg",
    Packaging: "10*10 Alu-Alu",
    Indication_Uses: "For type 2 diabetes management when tighter glycemic control is needed.",
    Dosage: "Once daily as prescribed by your doctor.",
    faq: [
      {
        question: "Difference between Farhene-25 and Farhene-50?",
        answer: "Only the strength differs; 50 mg provides stronger glucose-lowering effects."
      }
    ]
  },
  {
    id: 6,
    image: [acronacImage, acronacImage],
    name: "Aronac",
    price: "$30",
    MRP: "₹1100/-",
    description: "Pain relief and anti-inflammatory medication.",
    Flavour: "Lemon",
    Composition: "Rabeprazole Sodium 20mg + Aceclofenac 200mg. SR (Enteric Coated Pellets) Capsules",
    Packaging: "10*10 Alu-Alu",
    Indication_Uses: "Treats pain and inflammation in conditions like arthritis, dental pain, and post-operative pain.",
    Dosage: "One tablet twice daily after meals.",
    faq: [
      {
        question: "Is Aronac safe for long-term use?",
        answer: "Not recommended beyond 10 days without medical supervision due to gastric risks."
      }
    ]
  },
  {
    id: 7,
    image: [albanjImage, albanjImage],
    name: "Albanj",
    price: "$30",
    MRP: "₹170.80/-",
    description: "Antidepressant medication.",
    Flavour: "Unflavoured",
    Composition: "Albendazole 400mg",
    Packaging: "20*1 Blister",
    Indication_Uses: "Treats depression and generalized anxiety disorder.",
    Dosage: "Usually 10 mg once daily, adjustable by physician.",
    faq: [
      {
        question: "How long until Albanj works?",
        answer: "May take 2-4 weeks for full therapeutic effects."
      }
    ]
  },
  {
    id: 8,
    image: [cyproidImage, cyproidImage],
    name: "Cyproid",
    price: "$30",
    MRP: "₹135/-",
    description: "Anti-vertigo and anti-emetic medication.",
    Flavour: "Unflavoured",
    Composition: "Cyproheptadine Hydrochloride 2mg + Trichloline Citrate 275mg + Sorbitol",
    Packaging: "200ml Pet Bottle",
    Indication_Uses: "Treats vertigo, nausea, vomiting, and anxiety disorders.",
    Dosage: "As prescribed (typically 1 tablet 2-3 times daily).",
    faq: [
      {
        question: "Can Cyproid cause drowsiness?",
        answer: "Yes, avoid driving or operating machinery initially."
      }
    ]
  },
  {
    id: 9,
    image: [dicol60kImage, dicol60kImage],
    name: "Dicole-60k",
    price: "$30",
    MRP: "1008/-",
    description: "Vitamin D3 supplement.",
    Flavour: "Unflavoured",
    Composition: "Cholecalciferol (D3) 60000 I.U. Chewable",
    Packaging: "10*1*4 Blister",
    Indication_Uses: "Treats vitamin D deficiency and osteoporosis.",
    Dosage: "Once weekly or as prescribed.",
    faq: [
      {
        question: "Best time to take Dicole-60k?",
        answer: "Preferably with a fatty meal for better absorption."
      }
    ]
  },
  {
    id: 10,
    image: [fluliteMImage, fluliteMImage],
    name: "Flulite-M",
    price: "$30",
    MRP: "₹1300/-",
    description: "Multivitamin and mineral supplement.",
    Flavour: "Fruit",
    Composition: "Flupentixol 0.5 mg + Melitracen 10mg",
    Packaging: "10*10 Alu-Alu",
    Indication_Uses: "Boosts immunity and compensates nutritional deficiencies.",
    Dosage: "Dissolve 1 tablet in water daily.",
    faq: [
      {
        question: "Can Flulite-M prevent flu?",
        answer: "Supports immune function but doesn’t guarantee prevention."
      }
    ]
  },
  {
    id: 11,
    image: [fluvote10Image, fluvote10Image],
    name: "Fluvote-10",
    MRP: "₹530/-",
    description: "Antifungal medication.",
    Flavour: "Unflavoured",
    Composition: "Flunarizine 10mg",
    Packaging: "10*10 Alu-Alu",
    Indication_Uses: "Treats fungal infections like vaginal candidiasis and oral thrush.",
    Dosage: "Single dose or as prescribed.",
    faq: [
      {
        question: "How quickly does Fluvote-10 work?",
        answer: "Symptoms often improve within 24 hours."
      }
    ]
  },
  {
    id: 12,
    image: [GastolexOImage, GastolexOImage],
    name: "Gastolex-O",
    MRP: "₹135/-",
    description: "Proton pump inhibitor for acid reduction.",
    Flavour: "Unflavoured",
    Composition: "Sucralfate1gm + Oxetacaine 20mg",
    Packaging: "100ml Pet Bottle",
    Indication_Uses: "Treats acid reflux, peptic ulcers, and GERD.",
    Dosage: "Once daily before breakfast.",
    faq: [
      {
        question: "Can Gastolex-O cause calcium deficiency?",
        answer: "Long-term use may affect calcium absorption; consult your doctor."
      }
    ]
  }
];

export const blogPosts = [
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
    image: researchImage,
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
    image: doctorImage,
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
    image: doctor2Image,
  },
];
