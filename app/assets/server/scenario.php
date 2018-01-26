<?php

class Scenario {

  public function __construct() {



  }


  public function get ($id = 1) {

    if ($id) {

      // check if a scenario of that id is available
      // load scenario data
      $this->data = [
        'id' => 1,
        'name' => 'World War 2 - Operation Sealion'
      ];

    } else {
      
      $this->data = ['message' => 'No scenario found'];

    }

    $this->responseJSON();
    exit;

  }


  private function responseJSON () {

    echo json_encode( $this->data );

  }

}

?>
