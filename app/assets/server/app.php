<?php

include_once 'scenario.php';

class App {

  public function __construct() {

    $this->scenario = new Scenario();

  }


  public function listen () {

    $action = isset( $_REQUEST['action'] ) ?  $_REQUEST['action'] : '';
    $id = isset($_REQUEST['id']) ? $_REQUEST['id'] : 1;

    if ($action) {

      switch ($action) {
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
