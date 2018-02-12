<?php

include_once ('./framework/collection.php');

class ScenarioCollection extends Collection {


  public function __construct() {

    parent::__construct();

    $this->data = [

      "id" => 1,
      "name" => "World War 2 - Operation Sealion",
  		"desc" => "After the Fall of France the German Army turns to Great Britain.",
  		"image" => "<path_to_image_file>",

  		"startDate" => "1939-09-1 00:00:00",
  		"endDate" => "1950-01-01 00:00:00",

      "available_countries" => [1, 2],

  		"conditions" => [
        "text" => "Defeat the Royal Air Force. A combined attack of planes, ships and amphibious operations is the key to victory.",
  			"win" => [
  				"control" => [12,13,14,15,16],
  				"units" => [
  					"sea" => 15,
  					"air" => 250
  				]
  			],
  			"lose" => []
      ],

  		"map" => [
  			"name" => "world-50m.json",
  			"type" => "geojson",
  			"scale" => 1000,
  			"scaleExtent" => [150, 5000],
  			"translate" => [0, 900]
  		],

      "countries" => [
  			[
  				"id" => 1,
  				"name" => "United Kingdom",
  				"locale" => "en",
          "capital" => 1,
  		    "fleets" => [1],
          "units" => [],
          "merchant_marine" => 360, // 3670,
          "places" => [1,2,3,4,5,6],
          "allow_convoys" => 1,
					"agressiveness" => 0,
					"population" => 47500000,
          "population_growth" => 0.0003,
					"manpower" => 0.05,
					"mobilization_level" => 1,
					"resources" => [
						"money" => 1000,
						"oil" => 10000,
						"iron" => 5000,
						"food" => 200000,
						"consumer_goods" => 3000,
						"war_supplies" => 1000
					]
  			],
        [
  				"id" => 2,
  				"name" => "Germany",
  				"locale" => "de",
          "capital" => 101,
  		    "fleets" => [1000, 1001, 1002, 1003, 1004, 1005],
          "units" => [],
          "merchant_marine" => 160, // 960
          "places" => [101, 102, 103, 104, 105, 106, 107, 108],
          "player" => true,

          // ignore certain graph nodes
          // "ignore" => [8, 9, 10, 11],
          "ignore" => [],
					"agressiveness" => 0,
					"population" => 79375000,
          "population_growth" => 0.0034,
					"manpower" => 0.1,
					"mobilization_level" => 5,
          "resources" => [
						"money" => 1000,
						"oil" => 10000,
						"iron" => 5000,
						"food" => 200000,
						"consumer_goods" => 3000,
						"war_supplies" => 1000
  				],
          "production" => [
            [
              'id' => 1,
              'name' => 'Prinz Eugen',
              'class' => 'Hipper',
              'type' => 'Heavy Cruiser',
              'group' => 'sea',
              'date' => '1936-04-23',
              'days' => 1520,
              'progress' => 78,
              'series' => 1,
              'step' => 1,
              'cost' => 3.8
            ],
            [
              'id' => 2,
              'class' => 'Gneisenau',
              'type' => 'Battlecruiser',
              'group' => 'sea',
              'date' => '1937-04-23',
              'days' => 1100,
              'progress' => 32,
              'series' => 1,
              'step' => 1,
              'cost' => 5.4
            ],
            [
              'id' => 3,
              'class' => 'Type VIIA',
              'type' => 'U-Boat',
              'group' => 'sea',
              'date' => '1939-06-11',
              'days' => 150,
              'progress' => 67,
              'series' => '+19',
              'step' => '4/19',
              'cost' => 0.6
            ],
            [
              'id' => 4,
              'class' => 'Admiral Hipper',
              'type' => 'Heavy Cruiser',
              'group' => 'sea',
              'date' => '1938-06-11',
              'days' => 980,
              'progress' => 4,
              'series' => '+1',
              'step' => '1/2',
              'cost' => 4.2
            ],
            [
              'id' => 5,
              'class' => 'Focke-Wulf 200 "Condor"',
              'type' => 'Naval Bomber',
              'group' => 'air',
              'date' => '1939-06-11',
              'days' => 150,
              'progress' => 84,
              'series' => '+268',
              'step' => '32/300',
              'cost' => 8.8
            ],
            [
              'id' => 6,
              'class' => 'Z-20',
              'type' => 'Destroyer',
              'group' => 'sea',
              'date' => '1939-06-11',
              'days' => 150,
              'progress' => 24,
              'series' => '+3',
              'step' => '1/4',
              'cost' => 2.3
            ]
          ]
  			]
  		],

      "fleets" => [
        [
          "id" => 1,
          "name" => "Home Fleet",
          "country" => "en",
          "harbor" => 4,
          "mission" => "Forced Engagement",
          "position" => [47.34164617, -7.26147461],
          "waypoints" => [
            [48.34164617, -9.26147461],
            [43.13306116, -11.40380859],
            [36.7036596, -10.61279297],
            [35.91574742, -5.64834595]
          ],
          "units" => [
            [
              "name" => "HMS Illustrious",
              "type" => "AircraftCarrier",
              "weight" => 90
            ]
          ]
        ],
  			[
          "id" => 2,
          "name" => "HX 21",
          "country" => "en",
  				"type" => "convoy",
          "position" => [59.920402576657004, -15.718906161819945],
          "waypoints" => [
  					[53.960477039743836, -3.6877663430591667]
          ],
          "units" => [
            [
              "name" => "Erebus",
              "type" => "merchant",
              "weight" => 1
            ],
  					[
  						"name" => "Albatros",
  						"type" => "merchant",
              "weight" => 1
  					]
          ]
        ],
  			[
          "id" => 3,
          "name" => "HX 22",
          "country" => "en",
  				"type" => "convoy",
          "position" => [55.81909576120421, -39.96075505036778],
          "waypoints" => [
  					[59.55844291409168, -31.52100025213261],
  		      [59.920402576657004, -23.97909170902884],
  		      [59.920402576657004, -15.718906161819945],
  		      [53.960477039743836, -3.6877663430591667]
  				],
          "units" => [
            [
              "name" => "Erebus",
              "type" => "merchant",
              "weight" => 1
            ],
  					[
  						"name" => "Albatros",
  						"type" => "merchant",
              "weight" => 1
  					]
          ]
        ],
  			[
          "id" => 4,
          "name" => "HX 23",
          "country" => "en",
  				"type" => "convoy",
          "position" => [46.01900429772899, -50.46555623540518],
          "waypoints" => [
  					[49.63371614120294, -46.15589421077445],
  		      [52.727738014744126, -43.82149394743281],
  		      [55.81909576120421, -39.96075505036778],
  		      [59.55844291409168, -31.52100025213261],
  		      [59.920402576657004, -23.97909170902884],
  		      [59.920402576657004, -15.718906161819945],
  		      [53.960477039743836, -3.6877663430591667]
  				],
          "units" => [
            [
              "name" => "Erebus",
              "type" => "merchant",
              "weight" => 1
            ],
  					[
  						"name" => "Albatros",
  						"type" => "merchant",
              "weight" => 1
  					]
          ]
        ],

        [
          "id" => 1000,
          "name" => "Kriegsmarineflotte",
          "country" => "de",
          "mission" => "Convoy Rading",
          "position" => [48.751280947995355, -15.674651385040738],
          "waypoints" => [
  					[35.91574742, -5.64834595]
  				],
          "units" => [
            [
              "name" => "Bismarck",
              "type" => "Battleship",
              "weight" => 90
            ]
          ]
        ],
        [
          "id" => 1001,
          "name" => "1. U-Bootflotte",
          "country" => "de",
          "mission" => "Convoy Rading",
          "position" => [46.04018214, -17.05078125],
          "waypoints" => [],
          "units" => [
            [
              "name" => "U-99",
              "type" => "Submarine",
              "weight" => 5
            ]
          ]
        ],
  			[
          "id" => 1002,
          "name" => "2. U-Bootflotte",
          "country" => "de",
          "mission" => "Seek and Destroy",
          "position" => [47.906923768098366, -8.516438107103777],
          "waypoints" => [
  					[47.906923768098366, -8.516438107103777]
  				],
          "units" => [
            [
              "name" => "U-100",
              "type" => "Submarine",
              "weight" => 5
            ]
          ]
        ],
  			[
          "id" => 1003,
          "name" => "3. U-Bootflotte",
          "country" => "de",
          "mission" => "Convoy Rading",
          "position" => [54.910032282781174, 7.39115555718762],
          "waypoints" => [],
          "units" => [
            [
              "name" => "U-56",
              "type" => "Submarine",
              "weight" => 5
            ]
          ]
        ],
  			[
          "id" => 1004,
          "name" => "4. U-Bootflotte",
          "country" => "de",
          "mission" => "Convoy Rading",
          "position" => [55.39846962140262, -29.202952148718758],
          "waypoints" => [],
          "units" => [
            [
              "name" => "U-112",
              "type" => "Submarine",
              "weight" => 5
            ],
  					[
              "name" => "U-117",
              "type" => "Submarine",
              "weight" => 5
            ],
  					[
              "name" => "U-124",
              "type" => "Submarine",
              "weight" => 5
            ]
          ]
        ],
        [
          "id" => 1005,
          "name" => "1. Kreuzergeschwader",
          "country" => "de",
          "mission" => "waiting",
          "position" => [18.621608873542876, -39.86539589534923],
          "waypoints" => [
            [18.621608873542876, -39.86539589534923],
            [4.3495632741827865, -27.098613532691243],
            [-12.385382842721484, -6.917176493357928]
          ],
          "units" => [
            [
              "name" => "Admiral Graf Spee",
              "type" => "HeavyCruiser",
              "weight" => 73
            ]
          ]
        ]


      ],

      "places" => [
        [
          "id" => 1,
          "name" => "London",
          "type" => "capital",
          "position" => [51.508530, -0.076132],
          "harbor" => 0,
          "air_field" => 10
        ],
        [
          "id" => 2,
          "name" => "Liverpool",
          "type" => "city",
          "position" => [53.41058, -2.97794],
          "harbor" => [4, 30],
          "air_field" => 10
        ],
        [
          "id" => 3,
          "name" => "Plymouth",
          "type" => "city",
          "position" => [50.376289,	-4.143841],
          "harbor" => [2, 16],
          "air_field" => 0
        ],
        [
          "id" => 4,
          "name" => "Scapa Flow",
          "type" => "island",
          "position" => [58.9667, -2.9833],
          "harbor" => [0, 2],
          "air_field" => 0
        ],
        [
          "id" => 5,
          "name" => "Gibraltar",
          "type" => "city",
          "position" => [36.14474, -5.35257],
          "harbor" => [0, 1],
          "air_field" => 0
        ],
        [
          "id" => 6,
          "name" => "Portsmouth",
          "type" => "city",
          "position" => [50.842991, -1.101002],
          "harbor" => [6, 24],
          "air_field" => 0
        ],

  			[
          "id" => 7,
          "name" => "Capetown",
          "type" => "city",
          "position" => [-33.922667, 18.416689],
          "harbor" => [0, 2],
          "air_field" => 0
        ],
  			[
          "id" => 8,
          "name" => "Freetown",
          "type" => "city",
          "position" => [8.483333, -13.233056],
          "harbor" => [0, 0],
          "air_field" => 0
        ],
  			[
          "id" => 9,
          "name" => "Halifax",
          "type" => "city",
          "position" => [44.64787, -63.57156],
          "harbor" => [0, 2],
          "air_field" => 0
        ],
  			[
          "id" => 10,
          "name" => "Sydney",
          "type" => "city",
          "position" => [46.13, -60.1829],
          "harbor" => [1, 12],
          "air_field" => 0
        ],


        [
          "id" => 101,
          "name" => "Berlin",
          "type" => "capital",
          "position" => [52.520645, 13.409779],
          "harbor" => 0,
          "air_field" => 10
        ],

  			[
          "id" => 102,
          "name" => "Wilhelmshaven",
          "type" => "city",
          "position" => [53.521944, 8.1075],
          "harbor" => [3, 10]
        ],
  			[
          "id" => 103,
          "name" => "Kiel",
          "type" => "city",
          "position" => [54.325278, 10.140556],
          "harbor" => [5, 15]
        ],
  			[
          "id" => 104,
          "name" => "Rostock",
          "type" => "city",
          "position" => [54.083333, 12.133333],
          "harbor" => [1, 8]
        ],
  			[
          "id" => 105,
          "name" => "Lübeck",
          "type" => "city",
          "position" => [53.866111, 10.683889],
          "harbor" => [0, 4]
        ],
  			[
          "id" => 106,
          "name" => "Hamburg",
          "type" => "city",
          "position" => [53.542222, 9.955833],
          "harbor" => [4, 22]
        ],
  			[
  				"id" => 107,
  				"name" => "Bremen",
  				"type" => "city",
  				"position" => [53.1125, 8.748611],
  				"harbor" => [2, 18]
  			],
        [
  				"id" => 108,
  				"name" => "Stettin",
  				"type" => "city",
  				"position" => [53.424722, 14.555278],
  				"harbor" => [1, 12]
  			],
        [
  				"id" => 109,
  				"name" => "Königsberg",
  				"type" => "city",
  				"position" => [54.733333, 20.483333],
  				"harbor" => [1, 6]
  			],


        [
          "id" => 206,
          "name" => "Paris",
          "type" => "city",
          "position" => [48.864716, 2.349014],
          "harbor" => 0,
          "air_field" => 10
        ]

      ],

      "research" => [

      ],

      "units" => [
        [
          "id" => 1,
          "name" => "Bismarck",
          "desc" => "The largest German Ship during World War 2"
        ],
        [
          "id" => 2,
          "name" => "U-99",
          "desc" => "..."
        ],
  			[
          "id" => 3,
          "name" => "IJN Akagi",
          "desc" => "The first Fleet aircraft Carrier Akagi",
  				"properties" => [
  					"tonnage" => 23000,
  					"sea_attack" => 4,
  					"air_attack" => 56,
  					"sub_attack" => 0,
  					"sea_defense" => 0,
  					"air_defence" => 24,
  					"sub_defence" => 0,
  					"sailors" => 1820
  				],
  				"planes" => [
  					[
  						"type" => "fighter",
  						"model" => "A6M",
  						"number" => 20
  					],
  					[
  						"type" => "torpedo",
  						"model" => "A6M",
  						"number" => 24
  					],
  					[
  						"type" => "bomb",
  						"model" => "A6M",
  						"number" => 18
  					]
  				],
  				"start_date" => "1923-02-11",
  				"place_origin" => "Tokyo"
        ]
      ],

  		"events" => [
  			[
  				"id" => 1,
  				"country" => 1,
  				"title" => "Eagle day",
  				"text" => "Event Text",
  				"image" => "events/01.jpg",
  				"date" => "1940-07-20",
  				"actions" => [
  					[
  						"name" => "Ok",
  						"action" => "close"
  					]
  				]
  			],
  			[
  				"id" => 2,
  				"country" => 2,
  				"title" => "Angriff auf London",
  				"text" => "Angriff auf London Text",
  				"image" => "events/02.jpg",
  				"date" => "1940-07-21",
  				"actions" => [
  					[
  						"name" => "We will defend ourselves",
  						"action" => "close"
  					]
  				]
  			]
  		],

      "constructions" => [],

      "sunk" => [

        [
          "id" => 1,
          "unit" => 1
        ]

      ]

      /*
  		"constructions" => [
  			[
  				"type" => "radar",
  				"model" => 1,
  				"ranges" => [
  					"low" => 0,
  					"high" => 0
  				],
  				"position" => [50.9643605716775, 0.8252309681701456]
  			],
  			[
  				"type" => "radar",
  				"model" => 1,
  				"ranges" => [
  					"low" => 0,
  					"high" => 0
  				],
  				"position" => [50.364944604632306, -4.20542334827339]
  			],
  			[
  				"type" => "air_field",
  				"model" => 1,
  				"position" => [50.69730199380155, 1.8126102873551393]
  			]
  		]
      */


    ];

  }



  public function get () {
    return $this->data;
  }


}

?>
