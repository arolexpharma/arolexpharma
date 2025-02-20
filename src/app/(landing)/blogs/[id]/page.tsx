import { useParams } from "next/navigation";
import Image from "next/image";
import Breadscrumb from "@/app/components/common/breadscrumb/Breadscrumb";
import { blogPosts } from "@/app/utils/rawdata";

const breadcrumbItems: any = [
  { label: "Home", href: "/" },
  { label: "Blogs", href: `/blogs` },
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
