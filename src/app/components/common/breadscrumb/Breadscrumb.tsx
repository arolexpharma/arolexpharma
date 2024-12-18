import React from 'react';
import Image from 'next/image';
import BreadscrumbImg from '@/app/assets/images/breadscrumb/breadscrumb.jpg';

export default function Breadscrumb({ items = [] }) {
  return (
    <div className="relative h-72 flex justify-center items-center shadow-md">
      {/* Background Image */}
      <Image
        src={BreadscrumbImg}
        alt="Breadcrumb Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />

      <nav className="z-10 text-sm font-medium text-white bg-black bg-opacity-50 px-4 py-2 rounded-md">
        <ul className="flex items-center space-x-2">
          {items.map((item:any, index) => (
            <li key={index} className="flex items-center">
              <span className={`${index !== 0 ? 'mx-2 text-gray-200' : ''}`}>
                {index !== 0 && '>'}
              </span>
              <a
                href={item.href || '#'}
                className="text-white hover:text-blue-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
