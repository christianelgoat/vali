import React, { useState } from 'react';
import Header from './components/Header';
import ResultsTable from './components/ResultsTable';
import AnalysisSection from './components/AnalysisSection';
import ConclusionSection from './components/ConclusionSection';
import Navigation from './components/Navigation';

const TOTAL_STEPS = 3;

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, TOTAL_STEPS));
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <ResultsTable />;
      case 2:
        return <AnalysisSection />;
      case 3:
        return <ConclusionSection />;
      default:
        return <ResultsTable />;
    }
  };

  return (
    <div className="min-h-screen bg-light-bg text-dark-text font-sans p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto flex flex-col min-h-[90vh]">
        <Header />
        <main className="mt-8 flex-grow">
          {renderStepContent()}
        </main>
        <Navigation
            currentStep={currentStep}
            totalSteps={TOTAL_STEPS}
            onNext={handleNextStep}
            onPrev={handlePrevStep}
        />
        <footer className="text-center mt-8 text-light-text text-sm">
          <p>Informe de Validación de MVP.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
