<?php

$params = $_POST;
$params['id'] = uniqid();

if (isset($params['allInfo'])) {
  $params['allInfo'] = true;
} else {
  $params['allInfo'] = false;
}

if (isset($params['halfInfo'])) {
  $params['halfInfo'] = true;
} else {
  $params['halfInfo'] = false;
}

$file_path = dirname(__FILE__) . '/form-data.json';
$tempArray = [];

if (file_exists($file_path)) {
  $file_content = @file_get_contents($file_path);

  if ($file_content !== false) {
    $tempArray = json_decode($file_content);

    if ($tempArray === null) {
      $tempArray = [];
    }
  }
}

array_push($tempArray, $params);
$json = json_encode($tempArray);

file_put_contents($file_path, $json);

?>

<?php include '../INCLUDES/head.html'; ?>
<div class="content">
  <p>Wysłano!</p>
</div>
<?php include '../INCLUDES/footer.html'; ?>
