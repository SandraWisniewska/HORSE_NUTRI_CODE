<?php
usort($contact_data, function($a, $b)
{
    return strcmp($a->name, $b->name);
});
echo "<table class='delete-table'>";
    echo "<thead>";
    echo "<tr>";
    echo "<td>Imię</td>";
    echo "<td>Mail</td>";
    echo "<td>Wszystkie informacje</td>";
    echo "<td>Częściowe informacje</td>";
    echo "<td>Komentarz</td>";
    echo "<td>Usuń</td>";
    echo "</tr>";
    echo "</thead>";

    foreach ($contact_data as $idx => $row) {
        echo "<tr>";
        echo "<td>$row->name</td>";
        echo "<td>$row->mail</td>";
        echo "<td>".($row->allInfo ? 'Tak' : 'Nie')."</td>";
        echo "<td>".($row->halfInfo ? 'Tak' : 'Nie')."</td>";
        echo "<td>$row->comment</td>";
        echo "<td><button onclick=\"deleteData('".$row->id."')\"/>delete</button></td>";
        echo "</tr>";
    }
    echo "</table>";
?>