import { flags } from './flags';

export const countries = [
    {
        name: 'Poland',
        flag: flags.poland,
        states: [
            'Masovian Voivodeship',
            'Lesser Poland Voivodeship',
            'Greater Poland Voivodeship',
            'Silesian Voivodeship',
            'Lower Silesian Voivodeship',
            'Łódź Voivodeship',
            'Pomeranian Voivodeship',
            'Lublin Voivodeship',
            'Subcarpathian Voivodeship',
            'West Pomeranian Voivodeship'
        ]
    },
    {
        name: 'Ukraine',
        flag: flags.ukraine,
        states: [
            'Kyiv Oblast',
            'Lviv Oblast',
            'Odesa Oblast',
            'Kharkiv Oblast',
            'Dnipropetrovsk Oblast'
        ]
    },
    {
        name: 'Germany',
        flag: flags.germany,
        states: [
            'Bavaria',
            'North Rhine-Westphalia',
            'Baden-Württemberg',
            'Lower Saxony',
            'Hesse'
        ]
    },
    {
        name: 'Austria',
        flag: flags.austria,
        states: [
            'Vienna',
            'Lower Austria',
            'Upper Austria',
            'Styria',
            'Tyrol'
        ]
    }
]; 