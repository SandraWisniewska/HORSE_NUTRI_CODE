///1. ALFALFA CALC///
function calculate_alfalfa() {
    const inputElement = document.getElementById('productWeight');
    let productWeight = parseFloat(inputElement.value);
  
    // Sprawdzenie, czy waga nie jest ujemna ani równa zeru
    if (!productWeight || productWeight <= 0) {
      alert("Waga produktu musi być większa niż zero.");
      inputElement.value = ""; // Wyczyszczenie pola wejściowego
      return;
    }
  
    const nutritionData_alfalfa = {
      Wapń: 0.012,
      Fosfor: 0.003,
      Magnez: 0,
      Potas: 0,
      Sód: 0,
      Selen: 0,
      Chlorek: 0,
      Żelazo: 0,
      Miedź: 0,
      Cynk: 0,
      Mangan: 0,
      Kobalt: 0,
      Jod: 0,
     };
  
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = "<h2>Wartości odżywcze dla podanej ilości produktu:</h2>";
  
    for (const nutrient in nutritionData_alfalfa) {
      const perKgValue = ((nutritionData_alfalfa[nutrient]) * productWeight).toFixed(5);
      resultContainer.innerHTML += `<p>${nutrient}: ${perKgValue} g</p>`;
    }
  }

  ///2. BALANCER CALC///
function calculate_balancer() {
    const inputElement = document.getElementById('productWeight');
    let productWeight = parseFloat(inputElement.value);
  
    // Sprawdzenie, czy waga nie jest ujemna ani równa zeru
    if (!productWeight || productWeight <= 0) {
      alert("Waga produktu musi być większa niż zero.");
      inputElement.value = ""; // Wyczyszczenie pola wejściowego
      return;
    }
  
    const nutritionData_balancer = {
      Wapń: 0.0026,
      Fosfor: 0.001,
      Magnez: 0.00045,
      Potas: 0.00116,
      Sód: 0.00052,
      Selen: 0.00000125,
      Chlorek: 0.00102,
      Żelazo: 0.0003,
      Miedź: 0.00015,
      Cynk: 0.00045,
      Mangan: 0.00025,
      Kobalt: 0,
      Jod: 0.000004,
     };
  
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = "<h2>Wartości odżywcze dla podanej ilości produktu:</h2>";
  
    for (const nutrient in nutritionData_balancer) {
      const perKgValue = ((nutritionData_balancer[nutrient]) * productWeight).toFixed(5);
      resultContainer.innerHTML += `<p>${nutrient}: ${perKgValue} g</p>`;
    }
  }

  ///3. BLEND CALC///
function calculate_blend() {
    const inputElement = document.getElementById('productWeight');
    let productWeight = parseFloat(inputElement.value);
  
    // Sprawdzenie, czy waga nie jest ujemna ani równa zeru
    if (!productWeight || productWeight <= 0) {
      alert("Waga produktu musi być większa niż zero.");
      inputElement.value = ""; // Wyczyszczenie pola wejściowego
      return;
    }
  
    const nutritionData_blend = {
      Wapń: 0.012,
      Fosfor: 0.003,
      Magnez: 0,
      Potas: 0,
      Sód: 0,
      Selen: 0,
      Chlorek: 0,
      Żelazo: 0,
      Miedź: 0,
      Cynk: 0,
      Mangan: 0,
      Kobalt: 0,
      Jod: 0,
     };
  
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = "<h2>Wartości odżywcze dla podanej ilości produktu:</h2>";
  
    for (const nutrient in nutritionData_blend) {
      const perKgValue = ((nutritionData_blend[nutrient]) * productWeight).toFixed(5);
      resultContainer.innerHTML += `<p>${nutrient}: ${perKgValue} g</p>`;
    }
  }

  ///4. CHEVINAL CALC///
function calculate_chevinal() {
    const inputElement = document.getElementById('productWeight');
    let productWeight = parseFloat(inputElement.value);
  
    // Sprawdzenie, czy waga nie jest ujemna ani równa zeru
    if (!productWeight || productWeight <= 0) {
      alert("Waga produktu musi być większa niż zero.");
      inputElement.value = ""; // Wyczyszczenie pola wejściowego
      return;
    }
  
    const nutritionData_chevinal = {
      Wapń: 0,
      Fosfor: 0,
      Magnez: 0.000666,
      Potas: 0,
      Sód: 0.000013333,
      Selen: 0.0000058,
      Chlorek: 0,
      Żelazo: 0.000001333,
      Miedź: 0.000001166,
      Cynk: 0.000004166,
      Mangan: 0.000003333,
      Kobalt: 0.0000165,
      Jod: 0.0000165,
     };
  
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = "<h2>Wartości odżywcze dla podanej ilości produktu:</h2>";
  
    for (const nutrient in nutritionData_chevinal) {
      const perKgValue = ((nutritionData_chevinal[nutrient]) * productWeight).toFixed(5);
      resultContainer.innerHTML += `<p>${nutrient}: ${perKgValue} g</p>`;
    }
  }

  ///5. COOKED CALC///
function calculate_cooked() {
    const inputElement = document.getElementById('productWeight');
    let productWeight = parseFloat(inputElement.value);
  
    // Sprawdzenie, czy waga nie jest ujemna ani równa zeru
    if (!productWeight || productWeight <= 0) {
      alert("Waga produktu musi być większa niż zero.");
      inputElement.value = ""; // Wyczyszczenie pola wejściowego
      return;
    }
  
    const nutritionData_cooked = {
      Wapń: 0.0123,
      Fosfor: 0.006,
      Magnez: 0.0028,
      Potas: 0.00116,
      Sód: 0.0025,
      Selen: 0.0000005,
      Chlorek: 0.0058,
      Żelazo: 0.00012,
      Miedź: 0.00006,
      Cynk: 0.00018,
      Mangan: 0.0001,
      Kobalt: 0,
      Jod: 0.0000015,
     };
  
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = "<h2>Wartości odżywcze dla podanej ilości produktu:</h2>";
  
    for (const nutrient in nutritionData_cooked) {
      const perKgValue = ((nutritionData_cooked[nutrient]) * productWeight).toFixed(5);
      resultContainer.innerHTML += `<p>${nutrient}: ${perKgValue} g</p>`;
    }
  }

  ///6. COPPERVIT CALC///
  function calculate_coppervit() {
    const inputElement = document.getElementById('productWeight');
    let productWeight = parseFloat(inputElement.value);
  
    // Sprawdzenie, czy waga nie jest ujemna ani równa zeru
    if (!productWeight || productWeight <= 0) {
      alert("Waga produktu musi być większa niż zero.");
      inputElement.value = ""; // Wyczyszczenie pola wejściowego
      return;
    }
  
    const nutritionData_coppervit = {
      Wapń: 0,
      Fosfor: 0,
      Magnez: 0,
      Potas: 0,
      Sód: 0.0001,
      Selen: 0,
      Chlorek: 0,
      Żelazo: 0,
      Miedź: 0.0061,
      Cynk: 0,
      Mangan: 0.00305,
      Kobalt: 0,
      Jod: 0,
     };
  
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = "<h2>Wartości odżywcze dla podanej ilości produktu:</h2>";
  
    for (const nutrient in nutritionData_coppervit) {
      const perKgValue = ((nutritionData_coppervit[nutrient]) * productWeight).toFixed(5);
      resultContainer.innerHTML += `<p>${nutrient}: ${perKgValue} g</p>`;
    }
  }  

///7. ENDURANCE CALC///
function calculate_endurance() {
    const inputElement = document.getElementById('productWeight');
    let productWeight = parseFloat(inputElement.value);
  
    // Sprawdzenie, czy waga nie jest ujemna ani równa zeru
    if (!productWeight || productWeight <= 0) {
      alert("Waga produktu musi być większa niż zero.");
      inputElement.value = ""; // Wyczyszczenie pola wejściowego
      return;
    }
  
    const nutritionData_endurance = {
      Wapń: 0,
      Fosfor: 0,
      Magnez: 0.02,
      Potas: 0,
      Sód: 0,
      Selen: 0.000009,
      Chlorek: 0,
      Żelazo: 0,
      Miedź: 0.0004,
      Cynk: 0.0016,
      Mangan: 0.004,
      Kobalt: 0,
      Jod: 0.000014,
     };
  
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = "<h2>Wartości odżywcze dla podanej ilości produktu:</h2>";
  
    for (const nutrient in nutritionData_endurance) {
      const perKgValue = ((nutritionData_endurance[nutrient]) * productWeight).toFixed(5);
      resultContainer.innerHTML += `<p>${nutrient}: ${perKgValue} g</p>`;
    }
  }    

  ///8. GALOP CALC///
  function calculate_galop() {
    const inputElement = document.getElementById('productWeight');
    let productWeight = parseFloat(inputElement.value);
  
    // Sprawdzenie, czy waga nie jest ujemna ani równa zeru
    if (!productWeight || productWeight <= 0) {
      alert("Waga produktu musi być większa niż zero.");
      inputElement.value = ""; // Wyczyszczenie pola wejściowego
      return;
    }
  
    const nutritionData_galop = {
      Wapń: 0.06,
      Fosfor: 0.06,
      Magnez: 0.03,
      Potas: 0,
      Sód: 0,
      Selen: 0.000048,
      Chlorek: 0,
      Żelazo: 0,
      Miedź: 0.003,
      Cynk: 0.01,
      Mangan: 0.004,
      Kobalt: 0,
      Jod: 0.000072,
     };
  
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = "<h2>Wartości odżywcze dla podanej ilości produktu:</h2>";
  
    for (const nutrient in nutritionData_galop) {
      const perKgValue = ((nutritionData_galop[nutrient]) * productWeight).toFixed(5);
      resultContainer.innerHTML += `<p>${nutrient}: ${perKgValue} g</p>`;
    }
  }  

///9. MUSCLE CALC///
function calculate_muscle() {
    const inputElement = document.getElementById('productWeight');
    let productWeight = parseFloat(inputElement.value);
  
    // Sprawdzenie, czy waga nie jest ujemna ani równa zeru
    if (!productWeight || productWeight <= 0) {
      alert("Waga produktu musi być większa niż zero.");
      inputElement.value = ""; // Wyczyszczenie pola wejściowego
      return;
    }
  
    const nutritionData_muscle = {
      Wapń: 0,
      Fosfor: 0,
      Magnez: 0,
      Potas: 0,
      Sód: 0.0001,
      Selen: 0.001,
      Chlorek: 0,
      Żelazo: 0,
      Miedź: 0,
      Cynk: 0,
      Mangan: 0,
      Kobalt: 0,
      Jod: 0,
     };
  
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = "<h2>Wartości odżywcze dla podanej ilości produktu:</h2>";
  
    for (const nutrient in nutritionData_muscle) {
      const perKgValue = ((nutritionData_muscle[nutrient]) * productWeight).toFixed(5);
      resultContainer.innerHTML += `<p>${nutrient}: ${perKgValue} g</p>`;
    }
  }  

///10. NUGGETS CALC///
function calculate_nuggets() {
    const inputElement = document.getElementById('productWeight');
    let productWeight = parseFloat(inputElement.value);
  
    // Sprawdzenie, czy waga nie jest ujemna ani równa zeru
    if (!productWeight || productWeight <= 0) {
      alert("Waga produktu musi być większa niż zero.");
      inputElement.value = ""; // Wyczyszczenie pola wejściowego
      return;
    }
  
    const nutritionData_nuggets = {
      Wapń: 0.006,
      Fosfor: 0.003,
      Magnez: 0,
      Potas: 0,
      Sód: 0.003,
      Selen: 0.00000025,
      Chlorek: 0,
      Żelazo: 0.00006,
      Miedź: 0.000025,
      Cynk: 0.000053,
      Mangan: 0.00005,
      Kobalt: 0.00000066,
      Jod: 0.0000002,
     };
  
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = "<h2>Wartości odżywcze dla podanej ilości produktu:</h2>";
  
    for (const nutrient in nutritionData_nuggets) {
      const perKgValue = ((nutritionData_nuggets[nutrient]) * productWeight).toFixed(5);
      resultContainer.innerHTML += `<p>${nutrient}: ${perKgValue} g</p>`;
    }
  }  

///11. RACEHORSE CALC///
function calculate_racehorse() {
    const inputElement = document.getElementById('productWeight');
    let productWeight = parseFloat(inputElement.value);
  
    // Sprawdzenie, czy waga nie jest ujemna ani równa zeru
    if (!productWeight || productWeight <= 0) {
      alert("Waga produktu musi być większa niż zero.");
      inputElement.value = ""; // Wyczyszczenie pola wejściowego
      return;
    }
  
    const nutritionData_racehorse = {
      Wapń: 0.01,
      Fosfor: 0.006,
      Magnez: 0.003,
      Potas: 0.0089,
      Sód: 0.0028,
      Selen: 0.0000006,
      Chlorek: 0.0069,
      Żelazo: 0.000144,
      Miedź: 0.000072,
      Cynk: 0.000216,
      Mangan: 0.00012,
      Kobalt: 0,
      Jod: 0.0000018,
     };
  
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = "<h2>Wartości odżywcze dla podanej ilości produktu:</h2>";
  
    for (const nutrient in nutritionData_racehorse) {
      const perKgValue = ((nutritionData_racehorse[nutrient]) * productWeight).toFixed(5);
      resultContainer.innerHTML += `<p>${nutrient}: ${perKgValue} g</p>`;
    }
  }  

///12. YEARLING CALC///
function calculate_yearling() {
    const inputElement = document.getElementById('productWeight');
    let productWeight = parseFloat(inputElement.value);
  
    // Sprawdzenie, czy waga nie jest ujemna ani równa zeru
    if (!productWeight || productWeight <= 0) {
      alert("Waga produktu musi być większa niż zero.");
      inputElement.value = ""; // Wyczyszczenie pola wejściowego
      return;
    }
  
    const nutritionData_yearling = {
      Wapń: 0.012,
      Fosfor: 0.016,
      Magnez: 0.05,
      Potas: 0,
      Sód: 0,
      Selen: 0.000012,
      Chlorek: 0,
      Żelazo: 0,
      Miedź: 0.001,
      Cynk: 0.004,
      Mangan: 0,
      Kobalt: 0,
      Jod: 0.000038,
     };
  
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = "<h2>Wartości odżywcze dla podanej ilości produktu:</h2>";
  
    for (const nutrient in nutritionData_yearling) {
      const perKgValue = ((nutritionData_yearling[nutrient]) * productWeight).toFixed(5);
      resultContainer.innerHTML += `<p>${nutrient}: ${perKgValue} g</p>`;
    }
  }  