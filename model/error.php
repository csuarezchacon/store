<?php
	function error($error) {
		$err->cod = 0;
		$err->msg = 'Transaccion exitosa';
		$err->typ = 'success';

		return $err;
	}
?>