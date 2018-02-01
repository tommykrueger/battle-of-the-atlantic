<?php

include_once 'collections/nodes.php';
include_once 'collections/paths.php';
include_once 'scenario.php';

class App {

  public function __construct() {

    $this->nodes = new Nodes();
    $this->paths = new Paths();

    $this->scenario = new Scenario();

  }


  public function listen () {

    $action = isset( $_REQUEST['action'] ) ?  $_REQUEST['action'] : '';
    $id = isset($_REQUEST['id']) ? $_REQUEST['id'] : 1;

    if ($action) {

      switch ($action) {
        case 'save_nodes':
          $this->nodes->save();
          break;
        case 'save_paths':
          $this->paths->save();
          break;
        case 'scenario':
          $this->scenario->get($id);
          break;
      }

    }

  }

}

$app = new App();
$app->listen();


?>
