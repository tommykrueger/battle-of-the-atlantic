<?php

include_once ('./collections/cities.php');
include_once ('./collections/scenarios.php');
include_once ('./collections/units.php');


class Scenario {

  public function __construct() {

    $this->scenarioCollection = new ScenarioCollection();

  }


  public function get ($id = 1) {

    if ($id) {

      // check if a scenario of that id is available
      // load scenario data
      $this->data = $this->scenarioCollection->get();

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
