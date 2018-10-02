<?php
	include '../conn.php';
	include '../error.php';

	$arr = array();

	try {
		$conn = new PDO("mysql:host=$serv;dbname=$dbnm", $user, $pass);
		$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

		$queryStr = "select orde_id, orst_id, cust_id from orders;";
		$stmt = $conn->prepare($queryStr);
		$stmt->execute();

		foreach ($stmt->fetchAll() as $row => $value) {
			$orderRow = (object) array(
				'orde_id' => $value["orde_id"],
				'orst_id' => $value["orst_id"],
				'cust_id' => $value["cust_id"]);

			array_push($arr, $orderRow); 		
		}

	} catch (PDOException $e) {
		echo "error";
	}
	//echo $arr[0]->orst_id;//así se puede obtener la variable correspondiente al registro
	$conn = null;
?>