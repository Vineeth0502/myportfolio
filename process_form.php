<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve form data
    $name = $_POST['name'];
    $email = $_POST['phoneNumber'];
    $model = $_POST['email'];
    $year = $_POST['comment'];

    // Combine the form data into a string
    $data = "Name: $name\nPhone: $email\nEmail: $model\ncomment: $year\n";

    // Define the file path where you want to save the data
    $file = 'contact.txt';

    if (file_put_contents($file, $data, FILE_APPEND) === false) {
        // Handle errors
        error_log("Failed to save data to $file");
        echo "Failed to save data. Please contact the site administrator.";
    } else {
        // Data saved successfully
        echo "data saved successfully";    
    }
} else {
    http_response_code(400); 
    echo "Invalid request.";
}
?>
