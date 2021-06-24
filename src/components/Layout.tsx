import React from 'react';
import Sidebar from './Sidebar';

interface LayoutProps {
  children?: React.ReactChild | Array<React.ReactChild>;
  title?: string;
}
export default function Layout({ children, title }: LayoutProps) {
  return (
    <div className="flex flex-wrap bg-gray-100 w-full h-screen">
      <div className="w-3/12 flex">
        <Sidebar />
      </div>
      <div className="w-9/12">
        <div className="flex flex-row p-4 mt-4">
          <h1 className="text-gray-700 text-3xl uppercase">{title}</h1>
        </div>
        <div className="p-4 text-gray-500">{children}</div>
      </div>
    </div>
  );
}
