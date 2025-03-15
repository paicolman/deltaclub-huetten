<?php
// Set headers for CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: text/plain");

// Path to the file
$file_path = dirname(__FILE__)."/dch-kalender.ics";
//echo $file_path

// Check if the file exists
if (file_exists($file_path)) {
    // Read the file contents
    $file_content = file_get_contents($file_path);
    
    // Output the file contents
    echo $file_content;
} else {
    // File not found, return error
    //http_response_code(404);
    echo "File not found";
}
?>