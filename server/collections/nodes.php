<?php

include_once ('./framework/collection.php');

class Nodes extends Collection {


  public function __construct() {

    parent::__construct();

    $this->data = [];

  }


  public function save () {

    $data = isset($_REQUEST['data']) ? $_REQUEST['data'] : false;

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

    //var_dump($data);

    if ($file = file_get_contents('./data/nodes.json')) {

      $f = json_decode($file);
      //var_dump($f);
      $f->nodes = $data['nodes'];
      $f->paths = $data['paths'];

      echo file_put_contents('./data/nodes.json', json_encode($f));

    }


  }


}

?>
