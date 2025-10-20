
import React from 'react';
import Card from './Card';
import { Status, ValidationResult } from '../types';

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const XIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const MinusIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
    </svg>
);


const resultsData: ValidationResult[] = [
  {
    parameter: 'Reducción de Desperdicio',
    result: '+7%',
    interpretation: 'Se observa una ligera mejora, aunque con alta variabilidad en las respuestas.',
    status: Status.NotFulfilled
  },
  {
    parameter: 'Reducción de Tiempo',
    result: '0%',
    interpretation: 'El MVP no logró una reducción neta del tiempo de gestión en promedio.',
    status: Status.NotFulfilled
  },
  {
    parameter: 'Reducción de Estrés',
    result: '+0.97 (en escala de -2 a 2)',
    interpretation: 'El MVP tuvo un impacto positivo, disminuyendo la percepción de estrés y frustración.',
    status: Status.Fulfilled
  },
  {
    parameter: 'Aceptación del Prototipo',
    result: '53% (Tasa de Adopción)',
    interpretation: 'La aceptación del prototipo es media, sin alcanzar un consenso mayoritario.',
    status: Status.NotFulfilled
  },
];

const StatusBadge: React.FC<{ status: Status }> = ({ status }) => {
  const baseClasses = "flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium w-36 justify-center";
  switch (status) {
    case Status.Fulfilled:
      return (
        <div className={`${baseClasses} bg-green-100 text-green-800`}>
          <CheckIcon className="h-4 w-4" />
          <span>Cumplido</span>
        </div>
      );
    case Status.NotFulfilled:
      return (
        <div className={`${baseClasses} bg-red-100 text-red-800`}>
          <XIcon className="h-4 w-4" />
          <span>No Cumplido</span>
        </div>
      );
    default:
        return (
            <div className={`${baseClasses} bg-yellow-100 text-yellow-800`}>
                <MinusIcon className="h-4 w-4" />
                <span>Neutral</span>
            </div>
        );
  }
};


const ResultsTable: React.FC = () => {
  return (
    <Card title="Resumen de Resultados Promedio">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-medium-text uppercase tracking-wider">
                Parámetro Evaluado
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-medium-text uppercase tracking-wider">
                Resultado Promedio
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-medium-text uppercase tracking-wider">
                Interpretación
              </th>
              <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-medium-text uppercase tracking-wider">
                Criterio
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {resultsData.map((item) => (
              <tr key={item.parameter} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-dark-text">{item.parameter}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-medium-text">{item.result}</td>
                <td className="px-6 py-4 text-sm text-medium-text max-w-xs">{item.interpretation}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex justify-center">
                        <StatusBadge status={item.status} />
                    </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default ResultsTable;
