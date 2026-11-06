<?php

include('lib/catalogue.lib.php');

// Définir la variable $page pour indiquer la page affichée.
$page = 'teeshirts';

// Inclure la partie de haut de la page.
include('parties-communes/entete.php');

// Gestion du tri
$tri = isset($_GET['tri']) ? $_GET['tri'] : "aleatoire";

[$themes, $produits] = obtenirCatalogue($page, $langue, $tri);

?>