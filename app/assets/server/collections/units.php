<?php

include_once ('./framework/collection.php');

class UnitsCollection extends Collection {


  public function __construct() {

    parent::__construct();

    $this->data = [

      [
        'id' => 1,
        'name' => 'Bismarck',
        'type' => 'Battleship',
        'type_class' => 'BB',
        'image' => ''
      ],
      [
        'id' => 2,
        'name' => 'Graf Zeppelin',
        'type' => 1,
        'type_class' => 'CV',
        'image' => 'https://upload.wikimedia.org/wikipedia/commons/9/99/Graf-Zeppelin-2.jpg'
      ],


    ];

  }


}

?>
