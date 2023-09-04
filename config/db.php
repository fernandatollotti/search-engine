<?php

  $host = '';
  $user = '';
  $pass = '';
  $db = '';

  try {
    $dsn = "mysql:host=$host;dbname=$db;";
    $conn = new PDO($dsn, $user, $pass);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  } catch(PDOException $e) {
    die('Erro de conexão' . $e->getMessage());
  }