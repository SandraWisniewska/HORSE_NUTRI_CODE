<?php

function getProductNutrition($productName, $conn) {
    $sql = "SELECT * FROM PIERWIASTKI WHERE PIERWIASTKI_name = '$productName'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        return $result->fetch_assoc();
    } else {
        return [];
    }
}

function getDailyRequirements($conn) {
    $sql = "SELECT * FROM DZIENNE_ZAPOTRZEBOWANIE";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        return $result->fetch_assoc();
    } else {
        return [];
    }
}

function getProductsFromDatabase($conn) {
    $sql = "SELECT PIERWIASTKI_name FROM PIERWIASTKI";
    $result = $conn->query($sql);

    $products = [];

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $products[] = $row['PIERWIASTKI_name'];
        }
    }

    return $products;
}

?>
