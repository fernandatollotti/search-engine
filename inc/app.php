<?php

  require_once('../config/db.php');

  $book = $_GET['book'];

  if(isset($book) && $book != '') {
    $nameBook = '%' . $book . '%';

    $query = "SELECT * FROM books WHERE name LIKE :name";
    $stmt = $conn->prepare($query);
    $stmt->bindParam(':name', $nameBook, PDO::PARAM_STR);
    $stmt->execute();

    $itens = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $row = $stmt->rowCount();

    if($row > 0) {
      echo json_encode(['itens' => $itens]);
    } else {
      echo json_encode(['itens' => []]);
    }
  }