<?php
	include '../conn.php';
	include '../error.php';

	try {
		$conn = new PDO("mysql:host=$serv;dbname=$dbnm", $user, $pass);
		$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

		$queryStr = "select orde_id, orst_id, cust_id from orders;";
		$stmt = $conn->prepare($queryStr);
		$stmt->execute();

		foreach ($stmt->fetchAll() as $row) {
			echo $row['orde_id'];
			echo $row['orst_id'];
			echo $row['cust_id'];
			echo "------------------";
		}

	} catch (PDOException $e) {
		echo "error";
	}
	echo "ingresado";
	$conn = null;
?>