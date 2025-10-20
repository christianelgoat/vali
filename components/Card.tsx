
import React, { ReactNode } from 'react';

interface CardProps {
  title: string;
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <section className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <header className="p-4 sm:p-6 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-dark-text">{title}</h2>
      </header>
      <div className="p-4 sm:p-6">
        {children}
      </div>
    </section>
  );
};

export default Card;
