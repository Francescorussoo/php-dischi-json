<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type");

$jsonData = file_get_contents('albums.json');
$albums = json_decode($jsonData, true);

if (isset($_GET['author']) && $_GET['author'] !== '') {
    $author = $_GET['author'];
    $albums = array_filter($albums, function ($album) use ($author) {
        return stripos($album['author'], $author) !== false;
    });
}

header('Content-Type: application/json');
echo json_encode(array_values($albums));
?>