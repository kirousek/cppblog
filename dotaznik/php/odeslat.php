<?php
// Načtěte data z formuláře
$jmeno = $_POST['jmeno'];
$email = $_POST['email'];
$zprava = $_POST['zprava'];

// Nastavte příjemce emailu
$prijemce = 'tobimichalovsky@gmail.com';

// Nastavte předmět emailu
$predmet = 'Dotazník z webu';

// Sestavte zprávu
$zprava_pro_prijemce = "Jméno: $jmeno\nEmail: $email\nZpráva:\n$zprava";

// Odešlete email
mail($prijemce, $predmet, $zprava_pro_prijemce);

// Přesměrujte uživatele na stránku s potvrzením
header('Location: potvrzeni.html');

?>