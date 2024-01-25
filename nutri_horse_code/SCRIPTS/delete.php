<?php
$deleteId = $_GET['id'];

$file_path = dirname(__FILE__) . '/form-data.json';

function filterById($data, $deleteId)
{
    $tempArray = [];
    foreach ($data as $idx => $row) {
        if (strcmp($row->id, $deleteId) != 0){
            array_push($tempArray,$row);
        }
    }
    return $tempArray;
}


if (file_exists($file_path)) {
    $file_content = file_get_contents($file_path);
    $data = json_decode($file_content);

    $resultArr = filterById($data, $deleteId);

    $json = json_encode($resultArr);
    file_put_contents($file_path, $json);

    $file_content = file_get_contents($file_path);
    $contact_data = json_decode($file_content);

    if (count($contact_data) > 0) {
        include '../SCRIPTS/contact-table.php';
    }
}
