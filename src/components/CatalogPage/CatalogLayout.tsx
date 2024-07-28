'use state'
import React from 'react';
import Link from 'next/link';
import menuItems from '@/constant/index';

interface CatalogLayoutProps {
  children: React.ReactNode;
}

const CatalogLayout: React.FC<CatalogLayoutProps> = ({ children }) => {
  return (
    <div className="flex">
      <aside className="w-1/4 p-4 border-r border-gray-200">
        <nav>
          {menuItems.map((item) => (
            <div key={item.tag}>
              <Link href={`/catalog/${item.tag}`}>
                <p className="block py-2 text-gray-700 font-bold hover:bg-gray-100">{item.title}</p>
              </Link>
              {item.children && (
                <div className="ml-4">
                  {item.children.map((child) => (
                    <Link key={child.tag} href={`/catalog/${child.tag}`}>
                      <p className="block py-1 text-gray-600 hover:bg-gray-50">{child.title}</p>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </aside>
      <main className="w-3/4 p-4">
        {children}
      </main>
    </div>
  );
};

export default CatalogLayout;
