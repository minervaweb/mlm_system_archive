<?php
// Start the session
session_start();

// Database $connection (assuming you're using PDO)
include "../config/db_connection.php";

// SQL query to fetch data (excluding 'status' and 'id' columns)
$sql = "SELECT prenom, nom, email, tele, city, country, gender, RIB, bank_name, user_count FROM sub_admin_info";
$result = $conn->query($sql);

// Initialize an array to store the data
$data = array();

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
} else {
    echo "0 results";
}

// Encode the data as JSON for easy transmission to the frontend
echo json_encode($data);

$conn->close();
?>
