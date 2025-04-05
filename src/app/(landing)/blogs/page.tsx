import React from "react";
import Image from "next/image";
import Link from "next/link";
import Breadscrumb from "@/app/components/common/breadscrumb/Breadscrumb";
import { blogPosts } from "@/app/utils/rawdata";

const breadcrumbItems: any = [
  { label: "Home", href: "/" },
  { label: "Blogs", href: `/blogs` },
];



export default function BlogPage() {
  return (
    <div className="">
      <Breadscrumb items={breadcrumbItems} />

      <div className="container mx-auto p-4 sm:p-6 lg:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Link href={`/blogs/${post.id}`} key={post.id}>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-shadow duration-300 ease-in-out">
              <div className="relative h-48 sm:h-64 lg:h-80 w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              <div className="p-4">
                <h3 className="text-lg sm:text-xl lg:text-3xl font-semibold text-gray-900 mb-2 pr-12 line-clamp-3 hover:text-blue-500 ">
                  {post.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
