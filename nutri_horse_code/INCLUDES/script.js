/////////////////////////////// ALTERNATYWNE MENU ////////////////////////////////////////////
function toggleMobileMenu() {
  var mobileMenuContent = document.getElementById("mobile-menu-content");
  mobileMenuContent.style.display = (mobileMenuContent.style.display === "flex") ? "none" : "flex";
}

///////////////////////////////////////////////////////////////////////

const deleteData = (id) => {
  fetch('delete.php?id='+id)
  .then(response=>response.text())
  .then(data=>{
      document.getElementById('data-table').innerHTML = data;
  })
};

const filter = () => {
  const allInfo = document.getElementById("allInfo").checked;
  const halfInfo = document.getElementById("halfInfo").checked;
  fetch('filter.php?allInfo='+allInfo+'&halfInfo='+halfInfo)
  .then(response=>response.text())
  .then(data=>{
      document.getElementById('data-table').innerHTML = data;
  })
};
////////////////////////// TU ZMIENIŁAM NAZWE Z isNotEmpty !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const isNtEmpty = (elementId) =>{
  const element = document.getElementById(elementId);
  if (!document.getElementById(elementId).value){
      element.setCustomValidity("Not valid");
  }else{
      element.setCustomValidity("");
  }

  const inputs = document.querySelectorAll('input[type="text"]');
  let isFormValid = true;
  inputs.forEach((input) => {
      if (!input.checkValidity()){
          isFormValid = false;
      }
  });
  if (isFormValid){
      document.getElementById("submit").removeAttribute('disabled');
  }else{
      document.getElementById("submit").setAttribute('disabled', 'true');
  }
}

/////////////////////////////////OBSŁUGA MAILA///////////////////////////////////////////

function validateEmail(inputId) {
  var emailInput = document.getElementById(inputId);
  var isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);

  if (!isValid) {
      alert("Podaj poprawny adres e-mail.");
      emailInput.value = ""; // Czyszczenie błędnego adresu e-mail
  }
}

function isNotEmpty(inputId) {
  var inputElement = document.getElementById(inputId);
  var inputValue = inputElement.value.trim(); // Usuń białe znaki z początku i końca

  if (inputValue === "") {
      alert("Pole nie może być puste.");
      inputElement.value = ""; // Czyszczenie pustego pola
      return false;
  }

  return true;
}

function validateForm() {
  var isNameNotEmpty = isNotEmpty('name');
  var isMailValid = validateEmail('mail');
  var isCommentNotEmpty = isNotEmpty('comment');

  return isNameNotEmpty && isMailValid && isCommentNotEmpty;
}

////////////////////////////////////KALKULATOR DB/////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
  const addProductButtonCustom = document.getElementById('addProductCustom');
  const calculateButtonCustom = document.getElementById('calculateButtonCustom');
  const resultContainerCustom = document.getElementById('resultContainerCustom');

  // Funkcja do pobierania danych z bazy danych PHP
  async function fetchProductNamesCustom() {
    try {
      const response = await fetch('../SCRIPTS/nutrition_calculator.php?getProductsList');
      const data = await response.json();

      if (response.ok) {
        return data.products;
      } else {
        console.error('Błąd podczas pobierania danych z bazy danych:', data);
        return [];
      }
    } catch (error) {
      console.error('Błąd podczas pobierania danych z bazy danych:', error);
      return [];
    }
  }

  // Funkcja do wypełniania listy produktów w rozwijalnych listach
  async function fillProductSelectsCustom() {
    const productSelects = document.querySelectorAll('.product-select-custom');
    try {
      const productNames = await fetchProductNamesCustom();
      productSelects.forEach((select) => {
        productNames.forEach((productName) => {
          const option = document.createElement('option');
          option.value = productName;
          option.text = productName;
          select.add(option);
        });
      });
    } catch (error) {
      console.error('Błąd podczas wypełniania listy produktów:', error);
    }
  }

  // Funkcja do dodawania nowego wiersza
  function addRowCustom() {
    const calculator = document.getElementById('calculatorCustom');
    const newRow = document.createElement('div');
    newRow.className = 'row-custom';
    newRow.innerHTML = `
        <select class="product-select-custom" name="productCustom[]"></select>
        <input type="number" class="weight-input-custom" name="weightCustom[]" placeholder="Waga (g)">
    `;
    calculator.insertBefore(newRow, addProductButtonCustom);
    fillProductSelectsCustom();
  }

  // Funkcja do obliczeń
  async function calculateCustom() {
    const productSelects = document.querySelectorAll('.product-select-custom');
    const weightInputs = document.querySelectorAll('.weight-input-custom');

    // Inicjalizacja obiektu do przechowywania sumy wartości odżywczych
    const totalNutrition = {
      Wapń: 0,
      Fosfor: 0,
      Magnez: 0,
      Potas: 0,
      Sód: 0,
      Selen: 0,
      Chlor: 0,
      Żelazo: 0,
      Miedź: 0,
      Cynk: 0,
      Mangan: 0,
      Kobalt: 0,
      Jod: 0,
    };

    // Pętla po wszystkich wierszach
    for (let index = 0; index < productSelects.length; index++) {
      const select = productSelects[index];
      const productName = select.value;
      const productWeight = parseFloat(weightInputs[index].value);

      // Pobranie danych odżywczych z wybranego produktu
      const productNutrition = await getProductNutritionCustom(productName);

      // Dodanie wartości odżywczych pomnożonych przez wagę do sumy
      for (const nutrient in totalNutrition) {
        totalNutrition[nutrient] += productNutrition[nutrient] * productWeight;
      }
    }

    // Porównanie z dzienne zapotrzebowanie
    const dailyRequirements = await getDailyRequirementsCustom();

    // Wyświetlanie wyników
    displayResultsCustom(totalNutrition, dailyRequirements);
  }

  // Funkcja do pobierania danych odżywczych z bazy danych
  async function getProductNutritionCustom(productName) {
    try {
      const response = await fetch(`../SCRIPTS/nutrition_calculator.php?product=${encodeURIComponent(productName)}`);
      const data = await response.json();

      if (response.ok) {
        return data.productNutrition;
      } else {
        console.error('Błąd podczas pobierania danych z bazy danych:', data);
        return {};
      }
    } catch (error) {
      console.error('Błąd podczas pobierania danych z bazy danych:', error);
      return {};
    }
  }

  // Funkcja do pobierania danych dzienne zapotrzebowanie z bazy danych
  async function getDailyRequirementsCustom() {
    try {
      const response = await fetch('../SCRIPTS/nutrition_calculator.php?dailyRequirements');
      const data = await response.json();

      // Sprawdź, czy odpowiedź jest poprawnym JSON-em
      if (response.ok) {
        return data;
      } else {
        console.error('Błąd podczas pobierania danych dzienne zapotrzebowanie:', data);
        return {};
      }
    } catch (error) {
      console.error('Błąd podczas pobierania danych dzienne zapotrzebowanie:', error);
      return {};
    }
  }

  // Funkcja do wyświetlania wyników
  function displayResultsCustom(totalNutrition, dailyRequirements) {
    resultContainerCustom.innerHTML = "<h2>Wartości odżywcze dla podanej ilości produktu:</h2>";

    for (const nutrient in totalNutrition) {
        const perDayValue = (totalNutrition[nutrient] * 1).toFixed(5);
        const minRequirement = parseFloat(dailyRequirements[`${nutrient}_min`]);
        const maxRequirement = parseFloat(dailyRequirements[`${nutrient}_max`]);

        resultContainerCustom.innerHTML += `<p>${nutrient}: ${perDayValue} g`;

        if (!isNaN(minRequirement) && !isNaN(maxRequirement)) {
            if (perDayValue >= minRequirement && perDayValue <= maxRequirement) {
                resultContainerCustom.innerHTML += ` <span style="color: green;">(OK)</span>`;
            } else if (perDayValue < minRequirement) {
                resultContainerCustom.innerHTML += ` <span style="color: red;">(ZBYT MAŁO)</span>`;
            } else {
                resultContainerCustom.innerHTML += ` <span style="color: red;">(ZBYT DUŻO)</span>`;
            }
        } else {
            resultContainerCustom.innerHTML += ` <span style="color: red;">(BRAK DANYCH ZAPOTRZEBOWANIA)</span>`;
        }

        resultContainerCustom.innerHTML += `</p>`;
    }
}

  // Inicjalizacja
  fillProductSelectsCustom();

  // Obsługa zdarzeń
  addProductButtonCustom.addEventListener('click', addRowCustom);
  calculateButtonCustom.addEventListener('click', calculateCustom);
});
//////////////////////////////OBSŁUGA SZUKAJKI////////////////////////

document.addEventListener("DOMContentLoaded", function () {
  enableProductSearch('../PAGES/produkty.php', '.product-container');
});

function enableProductSearch(productsPagePath, productContainerClass) {
  const search_Input = document.getElementById('search-input');
  const search_Button = document.getElementById('search-button');

  if (search_Input && search_Button) {
    search_Button.addEventListener('click', function () {
      const searchTerm = search_Input.value.toLowerCase();

      // Pobranie wszystkich produktów z określonej strony
      const search_ProductContainer = document.querySelector(productContainerClass);
      const search_Products = search_ProductContainer ? search_ProductContainer.querySelectorAll('.product') : [];

      // Iteracja przez produkty i ukrycie/odkrycie na podstawie zgodności z wyszukiwanym terminem
      search_Products.forEach(function (search_Product, index) {
        const search_ProductNameElement = search_Product.querySelector('h2');
        const search_ProductName = search_ProductNameElement ? search_ProductNameElement.textContent.toLowerCase() : '';

        // Przeszukiwanie parametrów <h2> i <p> ze strony produkty.php
        const search_ProductDescriptionElement = search_Product.querySelector('p');
        const search_ProductDescription = search_ProductDescriptionElement ? search_ProductDescriptionElement.textContent.toLowerCase() : '';

       
        if (search_ProductNameElement) {
          search_ProductNameElement.textContent = `${search_ProductName}`;
        }

        if (search_ProductName.includes(searchTerm) || search_ProductDescription.includes(searchTerm)) {
          search_Product.style.display = 'block';
        } else {
          search_Product.style.display = 'none';
        }
      });
    });
  }
}
