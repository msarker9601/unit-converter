function initialize() {
  //Within this function will be mainly variables and document.getElementById
  fahrenheit = 0;
  outputFahrenheit = document.getElementById("degreesFahrenheit");
  celsius = 0;
  outputCelsius = document.getElementById("degreesCelsius");
  inches = 0;
  outputInches = document.getElementById("Inches");
  outputFeet = document.getElementById("Feet");
  outputYards = document.getElementById("Yards");
  seconds = 0;
  outputSeconds = document.getElementById("Seconds");
  outputMinutes = document.getElementById("Minutes");
  outputHours = document.getElementById("Hours");
  grams = 0;
  outputGrams = document.getElementById("Grams");
  outputKilograms = document.getElementById("Kilograms");
  outputPounds = document.getElementById("Pounds");
}

function buttonDisappear() {
  var x = document.getElementById("fahrenheitAdd");
  var y = document.getElementById("fahrenheitSubtract");
  var z = document.getElementById("fahrenheitSwitch");
  var a = document.getElementById("celsiusAdd");
  var b = document.getElementById("celsiusSubtract");
  var c = document.getElementById("celsiusSwitch");
  if (x.style.visibility == "hidden") {
    x.style.visibility = "visible";
    y.style.visibility = "visible";
    z.style.visibility = "visible";
    a.style.visibility = "hidden";
    b.style.visibility = "hidden";
    c.style.visibility = "hidden";
  } else {
    x.style.visibility = "hidden";
    y.style.visibility = "hidden";
    z.style.visibility = "hidden";
    a.style.visibility = "visible";
    b.style.visibility = "visible";
    c.style.visibility = "visible";
  }
}
function buttonAppear() {
  var x = document.getElementById("fahrenheitAdd");
  var y = document.getElementById("fahrenheitSubtract");
  var z = document.getElementById("fahrenheitSwitch");
  var a = document.getElementById("celsiusAdd");
  var b = document.getElementById("celsiusSubtract");
  var c = document.getElementById("celsiusSwitch");
  if (a.style.visibility == "hidden") {
    x.style.visibility = "hidden";
    y.style.visibility = "hidden";
    z.style.visibility = "hidden";
    a.style.visibility = "visible";
    b.style.visibility = "visible";
    c.style.visibility = "visible";
  } else {
    x.style.visibility = "visible";
    y.style.visibility = "visible";
    z.style.visibility = "visible";
    a.style.visibility = "hidden";
    b.style.visibility = "hidden";
    c.style.visibility = "hidden";
  }
}
function fahrenheitAdd() {
  //If you press the add button for the temperature display section, then you will add to the temperature
  fahrenheit++;
  displayFahrenheit();
}
function fahrenheitSubtract() {
  //If you press the subtract button for the fahrenheit display section, then you will subtract to the fahrenheit
  fahrenheit--;
  displayFahrenheit();
}

function temperatureConvert() {
  /*Within this function will be the code for temperature conversion I have decided that I will start off with Fahrenheit. Use the formula F= 9/5F-32. */
  celsius = (5 / 9) * (fahrenheit - 32);
  celsius = Math.round(celsius * 1000) / 1000;
  displayCelsius();
}

function celsiusAdd() {
  //If you press the add button for the temperature display section, then you will add to the temperature
  celsius++;
  displayCelsius();
}
function celsiusSubtract() {
  //If you press the subtract button for the celsius display section, then you will subtract to the celsius
  celsius--;
  displayCelsius();
}
function celsiusConvert() {
  /*Within this function will be the code for temperature conversion I have decided that I will start off with celsius. Use the formula F= 9/5F-32. */
  fahrenheit = (9 / 5) * celsius + 32;
  fahrenheit = Math.round(fahrenheit * 1000)/ 1000;
  displayFahrenheit();
}
function displayCelsius() {
  //As the name implies, I will use the innerHTML function to display the converted value
  outputCelsius.innerHTML = celsius + " Celsius ";
}
function displayFahrenheit() {
  //Within this, I will display my fahrenheit using the inner HTML function
  outputFahrenheit.innerHTML = fahrenheit + " Fahrenheit ";
}
function distanceAppear() {
  document.getElementById("feetAdd").className = "show-button";
  document.getElementById("feetSubtract").className = "show-button";
  document.getElementById("yardAdd").className = "show-button";
  document.getElementById("yardSubtract").className = "show-button";
}
function inchesAdd() {
  //If you press the add button for the inches display section, then you will add to the inches
  inches++;
  displayInches();
}
function inchesSubtract() {
  //If you press the subtract button for the time display section, then you will subtract to the inches
  inches--;
  if (inches <= 0) inches = 0;
  displayInches();
}
function displayInches() {
  //Within this, I will display the inches using the inner HTML function
  outputInches.innerHTML = inches + " Inches ";
  if (inches == 1) outputInches.innerHTML = inches + " Inch ";
}
function distanceConvert() {
  /*Within this function will be the code for distance conversion. I will start off with inches. Within this command, I will have to use an if statement that makes it such that it doesn’t go to negative. */
  //Add conversion of feet, yards, and miles
  feet = inches / 12;
  feet = Math.round(feet * 100) / 100;
  yards = feet / 3;
  yards = Math.round(yards * 1000) / 1000;
  displayFeet();
  displayYard();
}

function feetAdd() {
  feet++;
  displayFeet();
}
function feetSubtract() {
  feet--;
  if (feet <= 0) feet = 0;
  displayFeet();
}
function displayFeet() {
  outputFeet.innerHTML = feet + " Feet ";
  if (feet == 1) outputFeet.innerHTML = feet + " Foot ";
}
function distanceConvert2() {
  yards = feet / 3;
  yards = Math.round(yards * 1000) / 1000;
  inches = feet * 12;
  inches = Math.round(inches * 100) / 100;
  displayInches();
  displayYard();
}
function yardsAdd() {
  yards++;
  displayYard();
}
function yardsSubtract() {
  yards--;
  if (yards <= 0) yards = 0;
  displayYard();
}
function displayYard() {
  outputYards.innerHTML = yards + " Yards ";
  if (yards == 1) outputYards.innerHTML = yards + " Yard ";
}

function distanceConvert3() {
  feet = yards * 3;
  feet = Math.round(feet * 100) / 100;
  inches = yards * 36;
  inches = Math.round(inches * 100) / 100;
  displayInches();
  displayFeet();
}

function timeAppear() {
  document.getElementById("minutesAdd").className = "show-button";
  document.getElementById("minutesSubtract").className = "show-button";
  document.getElementById("hoursAdd").className = "show-button";
  document.getElementById("hoursSubtract").className = "show-button";
}

function secondsAdd() {
  //If you press the add button for the time display section, then you will add to the time
  seconds++;
  displaySeconds();
}
function secondsSubtract() {
  //If you press the subtract button for the temperature display section, then you will subtract to the temperature
  seconds--;
  if (seconds <= 0) seconds = 0;
  displaySeconds();
}
function displaySeconds() {
  //Within this, I will display the seconds using the inner HTML function
  outputSeconds.innerHTML = seconds + " Seconds ";
  if (seconds == 1) outputSeconds.innerHTML = seconds + " Second ";
}
function timeConvert() {
  /*Within this function will be the code for time conversion. I will start off with seconds. Within this command, I will also have to use an if statement that make it such that it doesn’t go to negative. */
  //Add conversion of milliseconds, minutes, hours
  minutes = seconds / 60;
  minutes = Math.round(minutes * 100) / 100;
  hours = minutes / 60;
  hours = Math.round(hours * 10000) / 10000;
  displayMinutes();
  displayHours();
}
function minutesAdd() {
  //If you press the add button for the time display section, then you will add to the time
  minutes++;
  displayMinutes();
}
function minutesSubtract() {
  //If you press the subtract button for the temperature display section, then you will subtract to the temperature
  minutes--;
  if (minutes <= 0) minutes = 0;
  displayMinutes();
}
function displayMinutes() {
  //The name also implies here as well, I will use innerHTML to display the Time conversions
  outputMinutes.innerHTML = minutes + " Minutes ";
  if (minutes == 1) outputMinutes.innerHTML = minutes + " Minute ";
}
function timeConvert2() {
  /*Within this function will be the code for time conversion. I will start off with seconds. Within this command, I will also have to use an if statement that make it such that it doesn’t go to negative. */
  //Add conversion of milliseconds, minutes, hours
  seconds = minutes * 60;
  seconds = Math.round(seconds * 100) / 100;
  hours = minutes / 60;
  hours = Math.round(hours * 10000) / 10000;
  displaySeconds();
  displayHours();
}
function hoursAdd() {
  hours++;
  displayHours();
}
function hoursSubtract() {
  hours--;
  if (hours <= 0) hours = 0;
  displayHours();
}
function displayHours() {
  outputHours.innerHTML = hours + " Hours ";
  if (hours == 1) outputHours.innerHTML = hours + " Hour ";
}

function timeConvert3() {
  /*Within this function will be the code for time conversion. I will start off with seconds. Within this command, I will also have to use an if statement that make it such that it doesn’t go to negative. */
  //Add conversion of milliseconds, minutes, hours
  seconds = hours * 3600;
  seconds = Math.round(seconds * 100) / 100;
  minutes = hours * 60;
  minutes = Math.round(minutes * 1000) / 1000;
  displaySeconds();
  displayMinutes();
}
function massAppear() {
  document.getElementById("kilogramAdd").className = "show-button";
  document.getElementById("kilogramSubtract").className = "show-button";
  document.getElementById("poundsAdd").className = "show-button";
  document.getElementById("poundsSubtract").className = "show-button";
}
function gramsAdd() {
  //If you press the add button for the temperature display section, then you will add to the temperature
  grams++;
  displayGram();
}
function gramsSubtract() {
  //If you press the subtract button for the gram display section, then you will subtract to the gram
  grams--;
  if (grams <= 0) grams = 0;
  displayGram();
}
function displayGram() {
  //Within this, I will display my gram using the inner HTML function
  outputGrams.innerHTML = grams + " Grams ";
  if (grams == 1) outputGrams.innerHTML = grams + " Gram ";
}
function massConvert() {
  /*Within this function will be the code for mass conversion. I will start off with grams. Within this command, I will also have to include an if statement that will make ti such that it doesn’t go to negative */
  //Add conversions of kilogram and pounds
  kilogram = grams / 1000;
  kilogram = Math.round(kilogram * 1000) / 1000;
  pounds = kilogram * 2.205;
  pounds = Math.round(pounds * 10000) / 10000;
  displayKilogram();
  displayPound();
}
function kilogramAdd() {
  //If you press the add button for the temperature display section, then you will add to the temperature
  kilogram++;
  displayKilogram();
}
function kilogramSubtract() {
  //If you press the subtract button for the gram display section, then you will subtract to the gram
  kilogram--;
  if (kilogram <= 0) kilogram = 0;
  displayKilogram();
}
function displayKilogram() {
  //Use innerHTML to display the mass conversions
  outputKilograms.innerHTML = kilogram + " Kilograms ";
  if (kilogram == 1) outputKilograms.innerHTML = kilogram + " Kilogram ";
}
function massConvert2() {
  /*Within this function will be the code for mass conversion. I will start off with grams. Within this command, I will also have to include an if statement that will make ti such that it doesn’t go to negative */
  //Add conversions of kilogram and pounds
  grams = kilogram * 1000;
  grams = Math.round(grams * 1000) / 1000;
  pounds = kilogram * 2.205;
  pounds = Math.round(pounds * 10000) / 10000;
  displayGram();
  displayPound();
}
function poundAdd() {
  //If you press the add button for the temperature display section, then you will add to the temperature
  pounds++;
  displayPound();
}
function poundSubtract() {
  //If you press the subtract button for the gram display section, then you will subtract to the gram
  pounds--;
  if (pounds <= 0) pounds = 0;
  displayPound();
}
function massConvert3() {
  /*Within this function will be the code for mass conversion. I will start off with grams. Within this command, I will also have to include an if statement that will make ti such that it doesn’t go to negative */
  //Add conversions of kilogram and pounds
  grams = kilogram * 1000;
  grams = Math.round(grams * 1000) / 1000;
  kilogram = pounds / 2.205;
  kilogram = Math.round(kilogram * 10000) / 10000;
  displayGram();
  displayKilogram();
}
function displayPound() {
  outputPounds.innerHTML = pounds + " Pounds ";
  if (pounds == 1) outputPounds.innerHTML = pounds + " Pound ";
}
