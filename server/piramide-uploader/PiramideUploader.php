<?php

class PiramideUploader {

	private $info_file;

	public function __construct() {
		$this->info_file = array();
	}

	public function upload($name, $file, $directory, $types_allowed, $force_name = NULL) {
		$this->info_file = array(
			"name"			=> $_FILES["$file"]["name"][0],
			"complete_name" => $name . "-" . time() . "-" . $_FILES["$file"]["name"][0],
			"temporal_name" => $_FILES["$file"]["tmp_name"][0],
			"type"			=> $_FILES["$file"]["type"][0],
			"size"			=> $_FILES["$file"]["size"][0],
			"error"			=> $_FILES["$file"]["error"][0]
		);

		if ($force_name != NULL) {
			$this->info_file["complete_name"] = $name;
		}

		if (is_uploaded_file($this->info_file["temporal_name"])) {
			if (is_array($types_allowed) && in_array($this->info_file["type"], $types_allowed)) {

				if(!is_dir($directory)){
					$dir = mkdir($directory, 0777, true);
				}else{
					$dir = true;
				}
				
				if($dir){
					$mpf = move_uploaded_file($this->info_file["temporal_name"], $directory . "/" . $this->info_file["complete_name"]);
			
					if($mpf){
						$uploaded = true;
					}else{
						$uploaded = false;
						$error = "The file has not moved";
					}
				}else{
					$upload = false;
					$error = "The directory does not exist";
				}
					
			} else {
				$uploaded = false;
				$error = "The type of file to be uploaded is not allowed";
			}
		} else {
			$uploaded = false;
			$error = "The file has not been uploaded";
		}
		
		$response = array("uploaded" => $uploaded, "error" => null);
		
		if(isset($uploaded) && isset($error)){
			$response = array("uploaded" => $uploaded, 
							  "error" => $error);
		}
		
		return $response;
	}

	public function getInfoFile() {
		return $this->info_file;
	}

}

?>