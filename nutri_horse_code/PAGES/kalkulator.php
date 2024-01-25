<?php include '../INCLUDES/head.html'; ?>
    
<div class="photo-container">
        <img src="../photo/logo.jpeg" class="left-element">
        <div class="right-element">
            <h1>KALKULATOR</h1>
            <br>
            <p>Wybierz produkt, a następnie określ w jakiej ilości gram go podajesz,</p>
            <p> aby obliczyć czy spełnia wymagania na dzienne zapotrzebowanie.</p>
            <br>
            <div id="calculatorCustom">
    <div class="row-custom">
        <select class="product-select-custom" name="productCustom[]">
            <option value="" disabled selected style="display:none;">▼ Wybierz produkt</option>
        </select>
        <input type="number" class="weight-input-custom" name="weightCustom[]" placeholder="Waga (g)">
    </div>

    <button id="addProductCustom">Dodaj kolejny produkt</button>
    <button id="calculateButtonCustom" class="cta-button">Oblicz</button>

    <div id="resultContainerCustom"></div>
</div>
        </div>
    </div>
       


<?php include '../INCLUDES/footer.html'; ?>
