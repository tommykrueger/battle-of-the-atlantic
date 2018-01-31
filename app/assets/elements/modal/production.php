<div class="modal" id="modal-production">

  <div class="modal-header">

      <span class="modal-title">Production</span>
      <span class="modal-button modal-button-close" id="modal-btn-close">&times;</span>

  </div>

  <div class="modal-content">


    <div class="container">

      <div class="column medium-3">

        <p>Available Units</p>

        <ol class="unit-list unit-list-production">
          <li class="">Aircraft Carrier (Graf Zeppelin)</li>
          <li class="">Battleship (H)</li>
          <li class="">Battleship (Bismarck)</li>
          <li class="">Battlecruiser (Scharnhorst)</li>
          <li class="">Heavy Cruiser (P)</li>
          <li class="">Heavy Cruiser (Hipper)</li>
          <li class="">Light Crusier (Nürnberg)</li>
          <li class="">Destroyer (W)</li>
          <li class="">Destroyer (S)</li>
          <li class="">Electric Submarine (XXIII)</li>
          <li class="">Electric Submarine (XXI)</li>
          <li class="">Supply Submarine (VIIF)</li>
          <li class="">Submarine (VIID)</li>
          <li class="">Submarine (VIIC/42)</li>
          <li class="">Submarine (VIIC/41)</li>
          <li class="">Submarine (VIIC)</li>
          <li class="">Submarine (VIIB)</li>
          <li class="">Submarine (VIIA)</li>
          <li class="">Submarine (IXD)</li>
          <li class="">Submarine (IXC/40)</li>
          <li class="">Submarine (IXC)</li>
          <li class="">Submarine (IXB)</li>
          <li class="">Submarine (IXA)</li>
          <li class="">Coastal Submarine (IID)</li>
          <li class="">Coastal Submarine (IIC)</li>
          <li class="">Coastal Submarine (IIB)</li>
        </ol>

      </div>
      <div class="column medium-9">

          <div class="container">


            <ol class="production-list">

              <?php

                $unitsp = [];
                
                /*
                $unitsp = [
                [
                  'id' => 1,
                  'class' => 'Admiral Graf Spee',
                  'type' => 'Heavy Cruiser',
                  'group' => 'sea',
                  'progress' => 45,
                  'series' => '',
                  'step' => '1/1',
                  'cost' => 3.8
                ],
                [
                  'id' => 2,
                  'class' => 'Gneisenau',
                  'type' => 'Battlecruiser',
                  'group' => 'sea',
                  'progress' => 88,
                  'series' => '',
                  'step' => '1/1',
                  'cost' => 5.4
                ],
                [
                  'id' => 3,
                  'class' => 'Type VII',
                  'type' => 'U-Boat',
                  'group' => 'sea',
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
                  'progress' => 24,
                  'series' => '+3',
                  'step' => '1/4',
                  'cost' => 2.3
                ]
                ];
                */
              ?>



              <?php foreach ($unitsp as $unitp): ?>

                <li class="production-list-item type-<?= $unitp['group']?>" data-id="<?= $unitp['id']?>">

                  <span class="unit-image"></span>
                  <span class="unit-name">
                    <span class="unit-type"><?= $unitp['type']?></span>
                    <span class="unit-class"><?= $unitp['class']?></span>
                  </span>

                  <span class="progress progress-production">
                    <span class="progress-bar" style="width: <?= $unitp['progress']?>%"></span>
                    <span class="progress-percent"><?= $unitp['progress']?>%</span>
                  </span>

                  <span class="production-cost">
                    <span class="production-cost-value">-<?= $unitp['cost']?></span>/day
                    <span class="production-time">next ready at: 24/08/1941</span>
                  </span>

                  <span class="production-series"><?= $unitp['series']?></span>
                  <span class="production-step"><?= $unitp['step']?></span>

                  <span class="production-controls">
                    <span class="production-minus">-</span>
                    <span class="production-plus">+</span>
                  </span>
                  <span class="btn-delete">&times;</span>

                </li>

              <?php endforeach ?>

            </ol>


            <!--
            <div class="unit-detail">

              <div class="unit-detail-image">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Graf-Zeppelin-2.jpg" />
              </div>

              <div class="unit-detail-info">

                <h3 class="unit-name">CV Graf Zeppelin</h3>

                <span class="time">560 days</span>
                <span class="cost">6000</span>
                <span class="cost_per_tick">(-2)</span>

                <a href="#" class="button button-large" data-action="addUnitToProduction">Start Construction</a>

              </div>

            </div>
            -->



          </div>




          <div class="container">

            <?php
              $table = [
                'name',
                'type',
                'cost',
                'tonnage',
                'size',
                'speed',
                'visibility',
                'armor',
                'fire_range',
                'sea_attack',
                'air_attack',
                'sub_attack',
                'historical_year'
              ];


              $unit_properties = [
                'submarine' => [
                  'submergable'
                ]
              ]

            ?>

            <?php
              $units = [
                [
                  'id' => 1,
                  'name' => 'Graf Zeppelin',
                  'type' => 'Aircraft Carrier (CV)',
                  'cost' => 250000000,
                  'tonnage' => 33500,
                  'size' => 90,
                  'visibility' => 88,
                  'radar' => 20,
                  'armor' => 20,
                  'speed' => 35,
                  'range' => 14800,
                  'fire_range' => 140,
                  'sea_attack' => 92,
                  'air_attack' => 0,
                  'sub_attack' => 0,
                  'transport_capacity' => 800,
                  'crew' => 1720,
                  'aircraft' => 80,
                  'historical_year' => 1937,
                  'hanger' => 43
                ],
                [
                  'id' => 2,
                  'name' => 'Bismarck',
                  'type' => 'Battleship (BB)',
                  'cost' => 196000000,    // done
                  'tonnage' => 41700,     // done
                  'size' => 90,
                  'visibility' => 90,
                  'radar' => 10,
                  'armor' => 92,
                  'speed' => 30,          // done
                  'range' => 16430,
                  'fire_range' => 60,
                  'sea_attack' => 92,
                  'air_attack' => 0,
                  'sub_attack' => 0,
                  'transport_capacity' => 500,
                  'crew' => 2090,
                  'aircraft' => 4,        // 4 Arado sea planes
                  'historical_year' => 1936,
                  'hanger' => 0
                ],
                [
                  'id' => 3,
                  'name' => 'Typ VII',
                  'type' => 'Submarine (SS)',
                  'cost' => 196000000,    // done
                  'tonnage' => 1200,     // done
                  'size' => 2,
                  'visibility' => 3,
                  'radar' => 0,
                  'sonar' => 0,
                  'armor' => 92,
                  'speed' => 30,          // done
                  'range' => 12000,
                  'fire_range' => 60,
                  'sea_attack' => 92,
                  'air_attack' => 0,
                  'sub_attack' => 0,
                  'torpedoes' => 9,
                  'transport_capacity' => 500,
                  'crew' => 2090,
                  'aircraft' => 0,        // 4 Arado sea planes
                  'historical_year' => 1936,
                  'hanger' => 0
                ],
                [
                  'id' => 3,
                  'name' => 'Typ XII',
                  'type' => 'Submarine (SS)',
                  'cost' => 196000000,    // done
                  'tonnage' => 1620,     // done
                  'size' => 2,
                  'visibility' => 3,
                  'radar' => 0,
                  'sonar' => 0,
                  'armor' => 92,
                  'speed' => 17,          // done
                  'range' => 28700,        // km
                  'fire_range' => 60,
                  'sea_attack' => 92,
                  'air_attack' => 0,
                  'sub_attack' => 0,
                  'torpedoes' => 40,
                  'transport_capacity' => 500,
                  'crew' => 57,
                  'historical_year' => 1943,
                  'hanger' => 0,
                  'aircraft' => 0,
                  'properties' => [
                    'hull' => 'double_hull',
                    'propulsion' => 'diesel_electric',
                    'armament' => 'guided_torpedo'
                  ]
                ]
              ];
            ?>


            <!--
            <div class="production">
              <div class="production-header">
                <?php foreach ($table as $t): ?>
                  <div class="production-column"><?php echo $t?></div>
                <?php endforeach ?>
              </div>

              <?php foreach ($units as $unit): ?>
                <div class="production-row">

                  <?php foreach ($table as $t): ?>
                    <?php if ( isset($unit[$t]) ): ?>
                      <div class="production-column"><?php echo $unit[$t]?></div>
                    <?php endif ?>
                  <?php endforeach ?>

                </div>
              <?php endforeach ?>

            </div>
            -->

          </div>


      </div>

    </div>


  </div>

</div>
