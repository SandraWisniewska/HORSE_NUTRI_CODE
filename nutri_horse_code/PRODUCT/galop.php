<?php include '../INCLUDES/head.html'; ?>
<br><br><br>
<div class="photo-container">
        <img src="../photo/galop.jpg" class="left-element">
        <div class="right-element">
            <div class="calculator-container">
                <h1>Oblicz wartości odżywcze Bonutron GALOP</h1>
                <label for="productWeight">Podaj wagę produktu (w gramach):</label>
                <input type="number" id="productWeight" placeholder="Waga w gramach" required>
                <button onclick="calculate_galop()">Oblicz</button>
                <br>
                <div id="resultContainer"></div>
        </div>
    </div>
</div>
    <br><br><br>
<?php include '../INCLUDES/footer.html'; ?>