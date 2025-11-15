import React, { useState, useMemo, Suspense } from 'react';
import './App.css';
import { useMedicineOptions } from './hooks/use-medicine-options';
import { useDosageResults } from './hooks/use-dosage-results';
import AnimalSelector from './components/animal-selector';
import WeightInput from './components/weight-input';
import AlternativeCheckbox from './components/alternative-checkbox';
import ResultsList from './components/results-list';
import Footer from './Footer';

// Loading component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center py-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500"></div>
  </div>
);

// Error boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
          <div className="card p-8 text-center max-w-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Noget gik galt</h2>
            <p className="text-gray-600 mb-4">Vi beklager, der opstod en fejl. Prøv at genindlæse siden.</p>
            <button 
              onClick={() => window.location.reload()} 
              className="btn-primary"
            >
              Genindlæs
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  const [animalType, setAnimalType] = useState('dog');
  const [weight, setWeight] = useState('');
  const [isAlternative, setIsAlternative] = useState(false);

  const medicineOptions = useMedicineOptions(animalType);
  const results = useDosageResults(weight, animalType, medicineOptions, isAlternative);

  // Memoize form validation
  const isFormValid = useMemo(() => {
    return weight && parseFloat(weight) > 0;
  }, [weight]);

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gradient mb-4 animate-fade-in">
                Injektionsberegner
              </h1>
              <p className="text-gray-600 text-lg">
                Beregn præcise injektionsdoseringer for hunde og katte
              </p>
            </div>

            {/* Main card */}
            <div className="card p-8 mb-8 animate-fade-in">
              <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                {/* Animal Selection */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-4">
                    Vælg dyretype:
                  </label>
                  <AnimalSelector animalType={animalType} setAnimalType={setAnimalType} />
                </div>

                {/* Weight Input */}
                <div>
                  <WeightInput weight={weight} setWeight={setWeight} />
                </div>

                {/* Alternative checkbox for dogs */}
                {animalType === 'dog' && (
                  <div className="animate-slide-up">
                    <AlternativeCheckbox 
                      isAlternative={isAlternative} 
                      setIsAlternative={setIsAlternative} 
                    />
                  </div>
                )}

                {/* Form validation indicator */}
                {!isFormValid && weight && (
                  <div className="text-amber-600 text-sm bg-amber-50 p-3 rounded-lg border border-amber-200">
                    ⚠️ Indtast venligst en gyldig vægt (større end 0 kg)
                  </div>
                )}
              </form>
            </div>

            {/* Results */}
            {isFormValid && (
              <Suspense fallback={<LoadingSpinner />}>
                <div className="animate-slide-up">
                  <ResultsList 
                    results={results} 
                    animalType={animalType} 
                    weight={weight} 
                  />
                </div>
              </Suspense>
            )}
          </div>
        </div>
        
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
