<?php
	include '../conn.php';
	include '../error.php';

	try {
		$conn = new PDO("mysql:host=$serv;dbname=$dbnm", $user, $pass);
		$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

		$queryStr = "insert into orders(orst_id, cust_id) values (0,1);";
		$conn->exec($queryStr);

	} catch (PDOException $e) {
		echo "error";
	}
	echo "ingresado";
	$conn = null;
?>