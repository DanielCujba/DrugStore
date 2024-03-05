// Mock data
export type Drug = {
    id: number;
    name: string;
    price: number;
    stock: number;

};

export type DrugDetailed = Drug & {
    manufacturer: string;
    description: string;
    sideEffects: string;
    interactions: string;
    dosage: string;
    contraindications: string;
    warnings: string;
    storage: string;
    pregnancy: string;
    breastfeeding: string;
    overdose: string;

};

const drugs: DrugDetailed[] = [
    {
        id: 1,
        name: 'Paracetamol',
        price: 5,
        stock: 100,
        manufacturer: 'GSK',
        description: 'Paracetamol is a painkiller and can be used to relieve mild to moderate pain. It can also reduce high temperatures (fever).',
        sideEffects: 'Paracetamol is a very safe medicine when used correctly. Side effects are rare if you take it at the right dosage.',
        interactions: 'Paracetamol can be taken with other medicines, including prescription medicines such as antibiotics.',
        dosage: 'The usual dose of paracetamol is one or two 500mg tablets at a time. Do not take more than 4 doses in 24 hours.',
        contraindications: 'Do not take paracetamol if you are allergic to it.',
        warnings: 'Do not take more than the recommended dose.',
        storage: 'Keep paracetamol in a cool, dry place. Do not store it above 25C.',
        pregnancy: 'Paracetamol is safe to take in pregnancy and while breastfeeding, at recommended doses.',
        breastfeeding: 'Paracetamol is safe to take while breastfeeding, at recommended doses.',
        overdose: 'An overdose of paracetamol can cause serious harm. The maximum amount of paracetamol for adults is 1 gram (1000 mg) per dose and 4 grams (4000 mg) per day.'
    },
    {
        id: 2,
        name: 'Ibuprofen',
        price: 10,
        stock: 50,
        manufacturer: 'Pfizer',
        description: 'Ibuprofen is a painkiller available over the counter without a prescription. It\'s one of a group of painkillers called non-steroidal anti-inflammatory drugs (NSAIDs) and can be used to ease mild to moderate pain, such as period pain, toothache, and migraines.',
        sideEffects: 'The most common side effects of ibuprofen are headaches, dizziness, and drowsiness.',
        interactions: 'Ibuprofen can be taken with other medicines, including prescription medicines such as antibiotics.',
        dosage: 'The usual dose for adults is one or two 200mg tablets 3 times a day. Do not take more than 6 tablets (1200mg) in 24 hours.',
        contraindications: 'Do not take ibuprofen if you have a stomach ulcer, or have had one in the past.',
        warnings: 'Do not take more than the recommended dose.',
        storage: 'Keep ibuprofen in a cool, dry place. Do not store it above 25C.',
        pregnancy: 'Ibuprofen is not recommended in pregnancy, especially in the third trimester.',
        breastfeeding: 'Ibuprofen is safe to take while breastfeeding, at recommended doses.',
        overdose: 'An overdose of ibuprofen can cause serious harm. The maximum amount of ibuprofen for adults is 1 gram (1000 mg) per dose and 3 grams (3000 mg) per day.'
    },
    {
        id: 3,
        name: 'Aspirin',
        price: 15,
        stock: 25,
        manufacturer: 'Bayer',
        description: 'Aspirin is a painkiller and anti-inflammatory medicine. It can be used to relieve pain and inflammation caused by many conditions such as headaches, toothache, period pain, and joint pain.',
        sideEffects: 'The most common side effects of aspirin are indigestion and stomach irritation.',
        interactions: 'Aspirin can be taken with other medicines, including prescription medicines such as antibiotics.',
        dosage: 'The usual dose for adults is one or two 300mg tablets 3 or 4 times a day. Do not take more than 12 tablets (3600mg) in 24 hours.',
        contraindications: 'Do not take aspirin if you have a stomach ulcer, or have had one in the past.',
        warnings: 'Do not take more than the recommended dose.',
        storage: 'Keep aspirin in a cool, dry place. Do not store it above 25C.',
        pregnancy: 'Aspirin is not recommended in pregnancy, especially in the third trimester.',
        breastfeeding: 'Aspirin is safe to take while breastfeeding, at recommended doses.',
        overdose: 'An overdose of aspirin can cause serious harm. The maximum amount of aspirin for adults is 1 gram (1000 mg) per dose and 3 grams (3000 mg) per day.'
    },
    {
        id: 4,
        name: 'Codeine',
        price: 20,
        stock: 10,
        manufacturer: 'GSK',
        description: 'Codeine is a strong painkiller and is part of a group of medicines called opioids. Opioids are derived from the poppy plant, and are known for their pain-relieving properties.',
        sideEffects: 'The most common side effects of codeine are constipation, feeling sick, and drowsiness.',
        interactions: 'Codeine can be taken with other medicines, including prescription medicines such as antibiotics.',
        dosage: 'The usual dose for adults is one or two 30mg tablets 3 or 4 times a day. Do not take more than 12 tablets (360mg) in 24 hours.',
        contraindications: 'Do not take codeine if you have a stomach ulcer, or have had one in the past.',
        warnings: 'Do not take more than the recommended dose.',
        storage: 'Keep codeine in a cool, dry place. Do not store it above 25C.',
        pregnancy: 'Codeine is not recommended in pregnancy, especially in the third trimester.',
        breastfeeding: 'Codeine is safe to take while breastfeeding, at recommended doses.',
        overdose: 'An overdose of codeine can cause serious harm. The maximum amount of codeine for adults is 1 gram (1000 mg) per dose and 3 grams (3000 mg) per day.'
    },
    {
        id: 5,
        name: 'Morphine',
        price: 25,
        stock: 5,
        manufacturer: 'Pfizer',
        description: 'Morphine is a strong painkiller and is part of a group of medicines called opioids. Opioids are derived from the poppy plant, and are known for their pain-relieving properties.',
        sideEffects: 'The most common side effects of morphine are constipation, feeling sick, and drowsiness.',
        interactions: 'Morphine can be taken with other medicines, including prescription medicines such as antibiotics.',
        dosage: 'The usual dose for adults is one or two 10mg tablets 3 or 4 times a day. Do not take more than 12 tablets (120mg) in 24 hours.',
        contraindications: 'Do not take morphine if you have a stomach ulcer, or have had one in the past.',
        warnings: 'Do not take more than the recommended dose.',
        storage: 'Keep morphine in a cool, dry place. Do not store it above 25C.',
        pregnancy: 'Morphine is not recommended in pregnancy, especially in the third trimester.',
        breastfeeding: 'Morphine is safe to take while breastfeeding, at recommended doses.',
        overdose: 'An overdose of morphine can cause serious harm. The maximum amount of morphine for adults is 1 gram (1000 mg) per dose and 3 grams (3000 mg) per day.'
    },
    {
        id: 6,
        name: 'Tramadol',
        price: 30,
        stock: 2,
        manufacturer: 'Bayer',
        description: 'Tramadol is a strong painkiller and is part of a group of medicines called opioids. Opioids are derived from the poppy plant, and are known for their pain-relieving properties.',
        sideEffects: 'The most common side effects of tramadol are constipation, feeling sick, and drowsiness.',
        interactions: 'Tramadol can be taken with other medicines, including prescription medicines such as antibiotics.',
        dosage: 'The usual dose for adults is one or two 50mg tablets 3 or 4 times a day. Do not take more than 12 tablets (600mg) in 24 hours.',
        contraindications: 'Do not take tramadol if you have a stomach ulcer, or have had one in the past.',
        warnings: 'Do not take more than the recommended dose.',
        storage: 'Keep tramadol in a cool, dry place. Do not store it above 25C.',
        pregnancy: 'Tramadol is not recommended in pregnancy, especially in the third trimester.',
        breastfeeding: 'Tramadol is safe to take while breastfeeding, at recommended doses.',
        overdose: 'An overdose of tramadol can cause serious harm. The maximum amount of tramadol for adults is 1 gram (1000 mg) per dose and 3 grams (3000 mg) per day.'
    },
    {
        id: 7,
        name: 'Cocodamol',
        price: 35,
        stock: 1,
        manufacturer: 'GSK',
        description: 'Cocodamol is a strong painkiller and is part of a group of medicines called opioids. Opioids are derived from the poppy plant, and are known for their pain-relieving properties.',
        sideEffects: 'The most common side effects of cocodamol are constipation, feeling sick, and drowsiness.',
        interactions: 'Cocodamol can be taken with other medicines, including prescription medicines such as antibiotics.',
        dosage: 'The usual dose for adults is one or two 30mg tablets 3 or 4 times a day. Do not take more than 12 tablets (360mg) in 24 hours.',
        contraindications: 'Do not take cocodamol if you have a stomach ulcer, or have had one in the past.',
        warnings: 'Do not take more than the recommended dose.',
        storage: 'Keep cocodamol in a cool, dry place. Do not store it above 25C.',
        pregnancy: 'Cocodamol is not recommended in pregnancy, especially in the third trimester.',
        breastfeeding: 'Cocodamol is safe to take while breastfeeding, at recommended doses.',
        overdose: 'An overdose of cocodamol can cause serious harm. The maximum amount of cocodamol for adults is 1 gram (1000 mg) per dose and 3 grams (3000 mg) per day.'
    },
    {
        id: 8,
        name: 'Diclofenac',
        price: 40,
        stock: 1,
        manufacturer: 'Pfizer',
        description: 'Diclofenac is a painkiller available over the counter without a prescription. It\'s one of a group of painkillers called non-steroidal anti-inflammatory drugs (NSAIDs) and can be used to ease mild to moderate pain, such as period pain, toothache, and migraines.',
        sideEffects: 'The most common side effects of diclofenac are headaches, dizziness, and drowsiness.',
        interactions: 'Diclofenac can be taken with other medicines, including prescription medicines such as antibiotics.',
        dosage: 'The usual dose for adults is one or two 50mg tablets 3 times a day. Do not take more than 6 tablets (300mg) in 24 hours.',
        contraindications: 'Do not take diclofenac if you have a stomach ulcer, or have had one in the past.',
        warnings: 'Do not take more than the recommended dose.',
        storage: 'Keep diclofenac in a cool, dry place. Do not store it above 25C.',
        pregnancy: 'Diclofenac is not recommended in pregnancy, especially in the third trimester.',
        breastfeeding: 'Diclofenac is safe to take while breastfeeding, at recommended doses.',
        overdose: 'An overdose of diclofenac can cause serious harm. The maximum amount of diclofenac for adults is 1 gram (1000 mg) per dose and 3 grams (3000 mg) per day.'
    },
    {
        id: 9,
        name: 'Naproxen',
        price: 45,
        stock: 1,
        manufacturer: 'Bayer',
        description: 'Naproxen is a painkiller available over the counter without a prescription. It\'s one of a group of painkillers called non-steroidal anti-inflammatory drugs (NSAIDs) and can be used to ease mild to moderate pain, such as period pain, toothache, and migraines.',
        sideEffects: 'The most common side effects of naproxen are headaches, dizziness, and drowsiness.',
        interactions: 'Naproxen can be taken with other medicines, including prescription medicines such as antibiotics.',
        dosage: 'The usual dose for adults is one or two 250mg tablets 3 times a day. Do not take more than 6 tablets (1500mg) in 24 hours.',
        contraindications: 'Do not take naproxen if you have a stomach ulcer, or have had one in the past.',
        warnings: 'Do not take more than the recommended dose.',
        storage: 'Keep naproxen in a cool, dry place. Do not store it above 25C.',
        pregnancy: 'Naproxen is not recommended in pregnancy, especially in the third trimester.',
        breastfeeding: 'Naproxen is safe to take while breastfeeding, at recommended doses.',
        overdose: 'An overdose of naproxen can cause serious harm. The maximum amount of naproxen for adults is 1 gram (1000 mg) per dose and 3 grams (3000 mg) per day.'
    },
    {
        id: 10,
        name: 'Mefenamic Acid',
        price: 50,
        stock: 1,
        manufacturer: 'GSK',
        description: 'Mefenamic Acid is a painkiller available over the counter without a prescription. It\'s one of a group of painkillers called non-steroidal anti-inflammatory drugs (NSAIDs) and can be used to ease mild to moderate pain, such as period pain, toothache, and migraines.',
        sideEffects: 'The most common side effects of mefenamic acid are headaches, dizziness, and drowsiness.',
        interactions: 'Mefenamic acid can be taken with other medicines, including prescription medicines such as antibiotics.',
        dosage: 'The usual dose for adults is one or two 250mg tablets 3 times a day. Do not take more than 6 tablets (1500mg) in 24 hours.',
        contraindications: 'Do not take mefenamic acid if you have a stomach ulcer, or have had one in the past.',
        warnings: 'Do not take more than the recommended dose.',
        storage: 'Keep mefenamic acid in a cool, dry place. Do not store it above 25C.',
        pregnancy: 'Mefenamic acid is not recommended in pregnancy, especially in the third trimester.',
        breastfeeding: 'Mefenamic acid is safe to take while breastfeeding, at recommended doses.',
        overdose: 'An overdose of mefenamic acid can cause serious harm. The maximum amount of mefenamic acid for adults is 1 gram (1000 mg) per dose and 3 grams (3000 mg) per day.'
    },
    {
        id: 11,
        name: 'Gabapentin',
        price: 55,
        stock: 1,
        manufacturer: 'Pfizer',
        description: 'Gabapentin is a medicine used to treat nerve pain, such as epilepsy, and can also be used to treat anxiety.',
        sideEffects: 'The most common side effects of gabapentin are headaches, dizziness, and drowsiness.',
        interactions: 'Gabapentin can be taken with other medicines, including prescription medicines such as antibiotics.',
        dosage: 'The usual dose for adults is one or two 300mg tablets 3 times a day. Do not take more than 6 tablets (1800mg) in 24 hours.',
        contraindications: 'Do not take gabapentin if you have a stomach ulcer, or have had one in the past.',
        warnings: 'Do not take more than the recommended dose.',
        storage: 'Keep gabapentin in a cool, dry place. Do not store it above 25C.',
        pregnancy: 'Gabapentin is not recommended in pregnancy, especially in the third trimester.',
        breastfeeding: 'Gabapentin is safe to take while breastfeeding, at recommended doses.',
        overdose: 'An overdose of gabapentin can cause serious harm. The maximum amount of gabapentin for adults is 1 gram (1000 mg) per dose and 3 grams (3000 mg) per day.'
    },
    {
        id: 12,
        name: 'Pregabalin',
        price: 60,
        stock: 1,
        manufacturer: 'Bayer',
        description: 'Pregabalin is a medicine used to treat nerve pain, such as epilepsy, and can also be used to treat anxiety.',
        sideEffects: 'The most common side effects of pregabalin are headaches, dizziness, and drowsiness.',
        interactions: 'Pregabalin can be taken with other medicines, including prescription medicines such as antibiotics.',
        dosage: 'The usual dose for adults is one or two 300mg tablets 3 times a day. Do not take more than 6 tablets (1800mg) in 24 hours.',
        contraindications: 'Do not take pregabalin if you have a stomach ulcer, or have had one in the past.',
        warnings: 'Do not take more than the recommended dose.',
        storage: 'Keep pregabalin in a cool, dry place. Do not store it above 25C.',
        pregnancy: 'Pregabalin is not recommended in pregnancy, especially in the third trimester.',
        breastfeeding: 'Pregabalin is safe to take while breastfeeding, at recommended doses.',
        overdose: 'An overdose of pregabalin can cause serious harm. The maximum amount of pregabalin for adults is 1 gram (1000 mg) per dose and 3 grams (3000 mg) per day.'
    },
    {
        id: 13,
        name: 'Amitriptyline',
        price: 65,
        stock: 1,
        manufacturer: 'GSK',
        description: 'Amitriptyline is a medicine used to treat nerve pain, such as epilepsy, and can also be used to treat anxiety.',
        sideEffects: 'The most common side effects of amitriptyline are headaches, dizziness, and drowsiness.',
        interactions: 'Amitriptyline can be taken with other medicines, including prescription medicines such as antibiotics.',
        dosage: 'The usual dose for adults is one or two 300mg tablets 3 times a day. Do not take more than 6 tablets (1800mg) in 24 hours.',
        contraindications: 'Do not take amitriptyline if you have a stomach ulcer, or have had one in the past.',
        warnings: 'Do not take more than the recommended dose.',
        storage: 'Keep amitriptyline in a cool, dry place. Do not store it above 25C.',
        pregnancy: 'Amitriptyline is not recommended in pregnancy, especially in the third trimester.',
        breastfeeding: 'Amitriptyline is safe to take while breastfeeding, at recommended doses.',
        overdose: 'An overdose of amitriptyline can cause serious harm. The maximum amount of amitriptyline for adults is 1 gram (1000 mg) per dose and 3 grams (3000 mg) per day.'
    },
    {
        id: 14,
        name: 'Duloxetine',
        price: 70,
        stock: 1,
        manufacturer: 'Pfizer',
        description: 'Duloxetine is a medicine used to treat nerve pain, such as epilepsy, and can also be used to treat anxiety.',
        sideEffects: 'The most common side effects of duloxetine are headaches, dizziness, and drowsiness.',
        interactions: 'Duloxetine can be taken with other medicines, including prescription medicines such as antibiotics.',
        dosage: 'The usual dose for adults is one or two 300mg tablets 3 times a day. Do not take more than 6 tablets (1800mg) in 24 hours.',
        contraindications: 'Do not take duloxetine if you have a stomach ulcer, or have had one in the past.',
        warnings: 'Do not take more than the recommended dose.',
        storage: 'Keep duloxetine in a cool, dry place. Do not store it above 25C.',
        pregnancy: 'Duloxetine is not recommended in pregnancy, especially in the third trimester.',
        breastfeeding: 'Duloxetine is safe to take while breastfeeding, at recommended doses.',
        overdose: 'An overdose of duloxetine can cause serious harm. The maximum amount of duloxetine for adults is 1 gram (1000 mg) per dose and 3 grams (3000 mg) per day.'
    },
    {
        id: 15,
        name: 'Venlafaxine',
        price: 75,
        stock: 1,
        manufacturer: 'Bayer',
        description: 'Venlafaxine is a medicine used to treat nerve pain, such as epilepsy, and can also be used to treat anxiety.',
        sideEffects: 'The most common side effects of venlafaxine are headaches, dizziness, and drowsiness.',
        interactions: 'Venlafaxine can be taken with other medicines, including prescription medicines such as antibiotics.',
        dosage: 'The usual dose for adults is one or two 300mg tablets 3 times a day. Do not take more than 6 tablets (1800mg) in 24 hours.',
        contraindications: 'Do not take venlafaxine if you have a stomach ulcer, or have had one in the past.',
        warnings: 'Do not take more than the recommended dose.',
        storage: 'Keep venlafaxine in a cool, dry place. Do not store it above 25C.',
        pregnancy: 'Venlafaxine is not recommended in pregnancy, especially in the third trimester.',
        breastfeeding: 'Venlafaxine is safe to take while breastfeeding, at recommended doses.',
        overdose: 'An overdose of venlafaxine can cause serious harm. The maximum amount of venlafaxine for adults is 1 gram (1000 mg) per dose and 3 grams (3000 mg) per day.'
    },
    {
        id: 16,
        name: 'Sertraline',
        price: 80,
        stock: 1,
        manufacturer: 'GSK',
        description: 'Sertraline is a medicine used to treat nerve pain, such as epilepsy, and can also be used to treat anxiety.',
        sideEffects: 'The most common side effects of sertraline are headaches, dizziness, and drowsiness.',
        interactions: 'Sertraline can be taken with other medicines, including prescription medicines such as antibiotics.',
        dosage: 'The usual dose for adults is one or two 300mg tablets 3 times a day. Do not take more than 6 tablets (1800mg) in 24 hours.',
        contraindications: 'Do not take sertraline if you have a stomach ulcer, or have had one in the past.',
        warnings: 'Do not take more than the recommended dose.',
        storage: 'Keep sertraline in a cool, dry place. Do not store it above 25C.',
        pregnancy: 'Sertraline is not recommended in pregnancy, especially in the third trimester.',
        breastfeeding: 'Sertraline is safe to take while breastfeeding, at recommended doses.',
        overdose: 'An overdose of sertraline can cause serious harm. The maximum amount of sertraline for adults is 1 gram (1000 mg) per dose and 3 grams (3000 mg) per day.'
    },
];

export function GetDrugs() {
    return drugs.map((drug) => {return {id: drug.id, name: drug.name, price: drug.price, stock: drug.stock} as Drug}  );
}

export function GetDrug(id: number) {
    console.log(id);
    return drugs.find((drug) => drug.id === id) as DrugDetailed;
}


