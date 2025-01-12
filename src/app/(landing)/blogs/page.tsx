import React from "react";
import Image from "next/image";
import Link from "next/link";
import Breadscrumb from "@/app/components/common/breadscrumb/Breadscrumb";

const breadcrumbItems: any = [
  { label: "Home", href: "/" },
  { label: "Blogs", href: `/blogs` },
];

const blogPosts = [
  {
    id: 1,
    title: "Understanding Rabipose-DSR3T: Benefits and Usage",
    date: "January 10, 2025",
    author: "admin",
    image:
      "https://img.freepik.com/free-photo/medical-banner-with-doctor-wearing-goggles_23-2149611193.jpg?uid=R48018562&ga=GA1.1.1547196487.1728058155&semt=ais_hybrid",
  },
  {
    id: 2,
    title: "Acrocef-200: Comprehensive Guide to Antibiotics",
    date: "January 11, 2025",
    author: "admin",
    image:
      "https://img.freepik.com/free-vector/arabic-doctor-with-medical-icon-hand-drawn-sketch-vector-background_460848-15109.jpg?uid=R48018562&ga=GA1.1.1547196487.1728058155&semt=ais_hybrid",
  },
  {
    id: 3,
    title: "Budalecs: All You Need to Know About Its Applications",
    date: "January 12, 2025",
    author: "admin",
    image:
      "https://img.freepik.com/free-photo/medical-banner-with-doctor-holding-stethoscope_23-2149611203.jpg?uid=R48018562&ga=GA1.1.1547196487.1728058155&semt=ais_hybrid",
  },
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
