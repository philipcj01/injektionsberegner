import { useEffect, useState } from 'react';
import { fetchMedicineOptions } from '../tools/retrieve-medicine-options';

export const useMedicineOptions = (animalType) => {
  const [medicineOptions, setMedicineOptions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const options = await fetchMedicineOptions();
      const filtered = options.filter(opt => opt.formula[animalType] !== null);
      setMedicineOptions(filtered);
    };

    fetchData();
  }, [animalType]);

  return medicineOptions;
};
