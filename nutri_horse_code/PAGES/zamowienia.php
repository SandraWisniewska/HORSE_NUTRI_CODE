<?php include '../INCLUDES/head.html'; ?>

<div class="photo-container">
        <img src="../photo/zamowienie.jpeg" class="left-element">
        <div class="right-element">
    
    <h1>ZŁÓŻ ZAMÓWIENIE</h1>
    <br>
    <p>Produkty, które prezentujemy w ofercie improtujemy z Francji i Wielkiej Brytanii.</p>
    <p>Jeżeli jesteś zainteresowany zakupem, określ w wiadomości jaka ilość Cię interesuje.</p> 
    <p>Czas oczekiwania na produkty, których nie mamy aktualnie na magazynie wynosi do 14 dni.</p>
    <br>
    <p>Zamówienia przyjmujemy wyłącznie drogą elektroniczną lub w punkcie stacjonarnym.</p>
    <p>Oferujemy odbiór osobisty w siedzibie firmy na terenie Toru Wyścigów Konnych.</p>
    <p>Po wcześniejszym opłaceniu towarów na konto bankowe: XX XXXX XXXX XXXX XXXX XXXX</p>
    <p>zapewniamy wysyłkę kurierską lub pocztową na wskazany w wiadomości adres.</p>
    <br>


    <form action="../SCRIPTS/insert.php" method="POST" onsubmit="return validateForm()">
    <div>
        <label for="name">Imię*:
            <input type="text" name="name" id="name" onchange="isNotEmpty('name')" />
        </label>
    </div>
    <br>
    <div>
        <label for="mail">Mail*:
            <input type="email" name="mail" id="mail" onchange="validateEmail('mail')" required/>
        </label>
    </div>
    <br>
    <div>
        <label>Wiadomość*:</label>
        <br />
        <textarea id="comment" name="comment" rows="15" cols="80" 
        placeholder="Podaj nazwy, oraz ilość produktów, które Cię interesują." onchange="isNotEmpty('comment')"></textarea>
    </div>
    <div>
        <input type="submit" class="cta-button" id="submit" name="submit" value="Wyślij" /> 
        <input type="reset" name="reset" value="Wyczyść formularz" />
    </div>
</form>
    </div>
</div>  
<?php include '../INCLUDES/footer.html'; ?>