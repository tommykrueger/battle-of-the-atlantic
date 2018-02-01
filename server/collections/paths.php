<?php

include_once ('./framework/collection.php');

class Paths extends Collection {


  public function __construct() {

    parent::__construct();

    $this->data = [];

  }


  public function save () {

    $data = isset($_REQUEST['data']) ? $_REQUEST['data'] : false;
    var_dump($data);

    for ($i=0; $i<count($data['paths']); $i++) {
      $data['paths'][$i]['id'] = (int)$data['paths'][$i]['id'];
      $data['paths'][$i]['a'] = (int)$data['paths'][$i]['a'];
      $data['paths'][$i]['b'] = (int)$data['paths'][$i]['b'];
      $data['paths'][$i]['d'] = (float)$data['paths'][$i]['d'];
    }

    for ($i=0; $i<count($data['nodes']); $i++) {
      $data['nodes'][$i]['id'] = (int)$data['nodes'][$i]['id'];
      $data['nodes'][$i]['type'] = (int)$data['nodes'][$i]['type'];
    }

    if ($file = file_get_contents('./data/nodes.json')) {

      $data = json_decode($file);

      $data['nodes'] = $nodes;
      $data['paths'] = $paths;

      echo file_put_contents('./data/nodes.json', json_encode($data));

    }

  }


}

?>
