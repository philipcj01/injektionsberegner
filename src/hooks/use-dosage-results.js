import { useMemo } from 'react';
import { calculateInjection } from '../tools/calculate-injection';
import { fetchMedicineOptions } from '../tools/retrieve-medicine-options';

export const useDosageResults = (weight, animalType, medicineOptions, isAlternative) => {
    return useMemo(() => {
        if (!weight || medicineOptions.length === 0) return null;

        if (isAlternative && animalType === 'dog') {
            animalType = `alternative_${animalType}`;
        }

        return medicineOptions.map(option => {
            const dosage = calculateInjection(weight, option.formula[animalType]);
            return { medicineName: option.label, dosage };
        });
    }, [weight, animalType, medicineOptions, isAlternative]);
};
