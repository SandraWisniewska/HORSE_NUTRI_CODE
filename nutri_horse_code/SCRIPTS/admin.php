<?php include '../INCLUDES/head.html'; ?>

<div class="content">

    <?php include '../SCRIPTS/filter-form.html'; ?>

    <?php
    $file_path = dirname(__FILE__) . '/form-data.json';

    echo "<div id='data-table'>";

    if (file_exists($file_path)) {
        $file_content = file_get_contents($file_path);
        $contact_data = json_decode($file_content);

        if (count($contact_data) > 0) {
            include '../SCRIPTS/contact-table.php';
        }
    } else {
        echo 'No Data';
    }

    echo "</div>";
    ?>

</div>

<?php include '../INCLUDES/footer.html'; ?>