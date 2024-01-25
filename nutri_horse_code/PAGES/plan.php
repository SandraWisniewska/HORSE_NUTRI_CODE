<?php include '../INCLUDES/head.html'; ?>

<div class="photo-container">
        <img src="../photo/tlo.jpeg" class="left-element">
        <div class="right-element">
    
    <h1>KONTAKT</h1>
    <br>
    <p>Układamy plany żywieniowe wyłącznie dla koni wyścigowych.</p>
    <p>Nie ma znaczenia, czy Twój koń trenuje już od dłuższego czasu,</p> 
    <p>czy dopiero jest przygotowywany do rozpoczęcia wyścigów.</p>
    <p>Napisz w wiadomości na jakim znajduje się etapie, a my pomożemy Wam osiągnąć mistrzostwo.</p>
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
            <input type="checkbox" name="allInfo" id="allInfo" value="allInfo">
            <label for="allInfo"> Chcę umówić badania krwi i ułożyć plan żywieniowy na produktach HORSE NUTRI CODE</label><br>
            <input type="checkbox" name="halfInfo" id="halfInfo" value="halfInfo">
            <label for="halfInfo"> Chcę ułożyć plan żywieniowy bez zlecania badań krwi mojego konia</label><br>
            <br>
            <label>Wiadomość*:</label>
            <br />
            <textarea id="comment" name="comment" rows="15" cols="80" 
            placeholder="Napisz w jakim wieku jest Twój koń.
Jeśli korzystasz z jakichś produktów z poza oferty HORSE NUTRI CODE i chcesz aby zostały uwzględnione w planie, uwzględnij to w wiadomości." onchange="isNotEmpty('comment')"></textarea>
        </div>
        <div>
        <input type="submit" class="cta-button" id="submit" name="submit" value="Wyślij" /> 
        <input type="reset" name="reset" value="Wyczyść formularz" />
        </div>
</form>
    </div>
</div>  
<?php include '../INCLUDES/footer.html'; ?>