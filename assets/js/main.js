// #########################################################
// 
//                 Projekt: Kalorienrechner
// 
// #########################################################

// Variablen
const genderFemale = document.body.querySelector('#female');
const genderMale = document.body.querySelector('#male');
const palFact = document.body.querySelector('#palFact');
const calcBtn = document.body.querySelector('#calcBtn');
const kcalBaseOutput = document.body.querySelector('#kcalBase');
const kjBaseOutput = document.body.querySelector('#kjBase');
const kcalTotalOutput = document.body.querySelector('#kcalTotal');
const kjTotalOutput = document.body.querySelector('#kjTotal');

const kJ = 4.1868;
let multiWeight = 0;
let multiHeight = 0;
let multiAge = 0;
let palFactor = 0;
let constant = 0;
let kcalBase = 0;
let kjBase = 0;
let kcalTotal = 0;
let kjTotal = 0;

// User Input Geschlecht
genderFemale.addEventListener('click', () => 
{
    constant = 655.1;
    multiWeight = 9.6;
    multiHeight = 1.8;
    multiAge = 4.7;
})

genderMale.addEventListener('click', () => 
{
    constant = 66.47;
    multiWeight = 13.7;
    multiHeight = 5;
    multiAge =  6.8;
})

palFact.addEventListener('change', () => 
{
    palFactor = Number(palFact.value);
})

// Berechnung nach Harris Benedict Formel und Ausgabe Ergebnisse
calcBtn.addEventListener('click', () =>
{
    event.preventDefault();
    const heightInput = Number(document.body.querySelector('#heightInput').value);
    const ageInput = Number(document.body.querySelector('#ageInput').value);
    const weightInput = Number(document.body.querySelector('#weightInput').value);

    // Prüfung von User Input auf Vollständigkeit
    if(palFactor !== 0 && constant !== 0 && heightInput !== 0 && ageInput !== 0 && weightInput !== 0)
    {
        // Berechnung
        kcalBase = (constant + (multiWeight * weightInput) + (multiHeight * heightInput) - (multiAge * ageInput)).toFixed(2); 
        kjBase = (kcalBase * kJ).toFixed(2);
        kcalTotal = (kcalBase * palFactor).toFixed(2);
        kjTotal = (kcalTotal * kJ).toFixed(2);

        // Output
        kcalBaseOutput.textContent = kcalBase;
        kjBaseOutput.textContent = kjBase;
        kcalTotalOutput.textContent = kcalTotal;
        kjTotalOutput.textContent = kjTotal;
    }
    else
    {
        // Error handling bei nicht vollständigem User Input
        window.alert("Bitte alle Eingabefelder ausfüllen und Auswahl treffen.");
        return false;
    }
})
