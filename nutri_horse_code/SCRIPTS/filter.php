<?php
$allInfo = $_GET['allInfo'] == 'true';
$halfInfo = $_GET['halfInfo'] == 'true';

$file_path = dirname(__FILE__) . '/form-data.json';

function filterByInfo($data, $allInfo, $halfInfo)
{
    $tempArray = [];
    foreach ($data as $idx => $row) {
        if ($row->allInfo == $allInfo AND $row->halfInfo == $halfInfo) {
            array_push($tempArray, $row);
        }
    }
    return $tempArray;
}


if (file_exists($file_path)) {
    $file_content = file_get_contents($file_path);
    $data = json_decode($file_content);

    $contact_data = filterByInfo($data, $allInfo, $halfInfo);

    if (count($contact_data) > 0) {
        include '../SCRIPTS/contact-table.php';
    }
}
