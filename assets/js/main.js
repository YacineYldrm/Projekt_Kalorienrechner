// #########################################################
// 
//                 Projekt: Kalorienrechner
// 
// #########################################################

// Variablen
const genderFemale = document.body.querySelector('#female');
const genderMale = document.body.querySelector('#male');
const calcBtn = document.body.querySelector('#calcBtn');
const palFact = document.body.querySelector('#palFact');
const kcalOutput = document.body.querySelector('#kcalResult');
const kjOutput = document.body.querySelector('#kjResult');
const kcalTotalOutput = document.body.querySelector('#kcalTotal');
const kjTotalOutput = document.body.querySelector('#kjTotal');

const kJ = 4.1868;
let multiWeight = 0;
let multiHeight = 0;
let multiAge = 0;
let constant = 0;
let palFactor = 0;
let kcalResult = 0;
let kjResult = 0;
let kcalTotal = 0;
let kjTotal = 0;

// User Input Geschlecht
genderFemale.addEventListener('click', () => 
{
    constant = 655.1
    multiWeight = 9.6
    multiHeight = 1.8
    multiAge = 4.7
})

genderMale.addEventListener('click', () => 
{
    constant = 66.47
    multiWeight = 13.7
    multiHeight = 5
    multiAge =  6.8
})

// User Input körperliche Belastung (PAL-Faktor)
palFact.addEventListener('click', () => 
{
    palFactor = palFact.value;
})

// Berechnung nach Harris Benedict Formel und Ausgabe Ergebnisse
calcBtn.addEventListener('click', () =>
{
    event.preventDefault();
    const heightInput = Number(document.body.querySelector('#heightInput').value);
    const ageInput = Number(document.body.querySelector('#ageInput').value);
    const weightInput = Number(document.body.querySelector('#weightInput').value);

    //Prüfung von User Input auf Vollständigkeit
    if(constant !== 0 && multiWeight !== 0 && multiHeight !== 0 && multiAge !== 0 && palFactor !== 0 && heightInput !== 0 && ageInput !== 0 && weightInput !== 0)
    {
        //Berechnung
        kcalResult = (constant + (multiWeight * weightInput) + ( multiHeight * heightInput) - (multiAge * ageInput)).toFixed(2); 
        kjResult = (kcalResult * kJ).toFixed(2);
        kcalTotal = (kcalResult * palFactor).toFixed(2);
        kjTotal = (kcalTotal * kJ).toFixed(2);

        // Output
        kcalOutput.textContent = kcalResult;
        kjOutput.textContent = kjResult;
        kcalTotalOutput.textContent = kcalTotal;
        kjTotalOutput.textContent = kjTotal;
    }
    else
    {
        // Error handling bei nicht vollständigem User Input
        window.alert("Bitte Eingabefelder ausfüllen und Auswahl treffen.");
        return false;
    }
})
