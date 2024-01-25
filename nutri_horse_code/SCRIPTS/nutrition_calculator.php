<?php
header('Content-Type: application/json');

// Połączenie z bazą danych
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "NUTRITION";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Załącz plik functions.php
include 'functions.php';

// Obsługa zapytań
if (isset($_GET['product'])) {
    $productName = $_GET['product'];
    $productNutrition = getProductNutrition($productName, $conn);
    echo json_encode(['productNutrition' => $productNutrition]);
} elseif (isset($_GET['dailyRequirements'])) {
    $dailyRequirements = getDailyRequirements($conn);
    echo json_encode($dailyRequirements);
} elseif (isset($_GET['getProductsList'])) {
    // Pobierz dane produktów z bazy danych
    $products = getProductsFromDatabase($conn);
    echo json_encode(['products' => $products]);
} else {
    echo json_encode(['error' => 'Invalid request']);
}

$conn->close();
?>
