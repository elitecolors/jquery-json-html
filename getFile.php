<?php

/**
 * get file 
 * clear 
 * put new data
 */
$fileName='files/languages.js';

$param=$_POST['param'];


file_put_contents($fileName, "");
file_put_contents($fileName, $param);

echo 'done';