import axios from 'axios';

export async function fetchMedicineOptions() {
    try {
        //const response = await axios.get('https://mockapi.example.com/medicine-options'); // Replace with actual URL
        //return response.data; // Assuming the API returns an array of options
        const options = [
            { value: 'PLEGICIL_10', label: 'Plegicil 10 mg/ml', formula: { dog: 0.002, cat: null } },
            { value: 'INSISTOR_10', label: 'Insistor 10 mg/ml', formula: { dog: 0.04, cat: 0.03, alternative_dog: 0.04 } },
            { value: 'DEXDOMITOR_0_1', label: 'Dexdomitor 0.1 mg/ml', formula: { dog: 0.02, cat: null } },
            { value: 'DEXDOMITOR_0_5', label: 'Dexdomitor 0.5 mg/ml', formula: { dog: 0.004, cat: 0.06 } },
            { value: 'KETAMINOL_50', label: 'Ketaminol 50 mg/ml', formula: { dog: 0.02, cat: 0.1 } },
            { value: 'BUPAQ_0_3', label: 'Bupaq 0.3 mg/ml', formula: { dog: 0.05, cat: 0.05, alternative_dog: 0.05 } },
            { value: 'ONSIOR_20', label: 'Onsior 20 mg/ml', formula: { dog: 0.1, cat: null, alternative_dog: 0.1 } },
            { value: 'RHEUMOCAM_5', label: 'Rheumocam 5 mg/ml', formula: { dog: 0.04, cat: 0.06, alternative_dog: 0.04 } },
            { value: 'FENTANYL_50', label: 'Fentanyl 50 mikg/ml', formula: { dog: [0.02, 0.04], cat: null, alternative_dog: [0.02, 0.04] } },
            { value: 'HEMOSILATE_125', label: 'Hemosilate 125 mg/ml', formula: { dog: 0.1, cat: 0.1, alternative_dog: 0.1 } },
            { value: 'RIVALGIN_500', label: 'Rivalgin 500 mg/ml', formula: { dog: 0.1, cat: null } },
            { value: 'DIAZEDOR_5', label: 'Diazedor 5 mg/ml', formula: { alternative_dog: 0.05 } },
            { value: 'MIDAZOLAM_1', label: 'Midazolam 1 mg/ml', formula: { alternative_dog: 0.25 } }
        ];
        return options;
    } catch (error) {
        console.error('Error fetching medicine options:', error);
        throw error;
    }
}