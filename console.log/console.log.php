<?php
	class Console {
		function _log($msg)
		{
			echo $msg;
		}
	}
	$console = new Console();
	$console->_log("hehe");
?>