<div class="modal" id="modal-research">

  <div class="modal-header">

      <span class="modal-title">Research</span>
      <span class="modal-button modal-button-close" id="modal-btn-close">&times;</span>

  </div>

  <div class="modal-content">

    <?php /* ?>
    <div class="tabs">

      <ul class="tabs-nav">
        <li class="tabs-nav-item" data-tab="tab-industry"><span>Industry</span></li>
        <li class="tabs-nav-item tabs-nav-item-is-active" data-tab="tab-navy"><span>Navy</span></li>
        <li class="tabs-nav-item" data-tab="tab-air-force"><span>Air Force</span></li>
        <li class="tabs-nav-item" data-tab="tab-army"><span>Army</span></li>
        <li class="tabs-nav-item" data-tab="tab-naval-tactics"><span>Naval Tactics</span></li>
        <li class="tabs-nav-item" data-tab="tab-air-tactics"><span>Air Tactics</span></li>
        <li class="tabs-nav-item" data-tab="tab-convoy-tactics"><span>Convoy Tactics</span></li>
        <li class="tabs-nav-item" data-tab="tab-weapon-systems"><span>Weapon Systems</span></li>
        <li class="tabs-nav-item" data-tab="tab-secret-weapons"><span>Secret Weapons</span></li>
      </ul>

      <div class="tab" id="tab-industry">

        Industry Tab Pane

      </div>

      <div class="tab tab-active" id="tab-navy">


        <div class="tabs tabs-vertical">

          <ul class="tabs-nav">
            <li class="tabs-nav-item tabs-nav-item-is-active" data-tab="tab-aircraft-carrier"><span>Aircraft Carrier</span></li>
            <li class="tabs-nav-item" data-tab="tab-battleship"><span>Battleship</span></li>
            <li class="tabs-nav-item" data-tab="tab-battlecruiser"><span>Battlecruiser</span></li>
            <li class="tabs-nav-item" data-tab="tab-cruiser"><span>Cruiser</span></li>
            <li class="tabs-nav-item" data-tab="tab-convoy-escorts"><span>Convoy Escorts</span></li>
            <li class="tabs-nav-item" data-tab="tab-destroyer"><span>Destroyer</span></li>
            <li class="tabs-nav-item" data-tab="tab-submarine"><span>Submarine</span></li>
          </ul>


          <div class="tab tab-active" id="tab-aircraft-carrier">

            <div class="technology-year" data-year="1936">

              <?php include_once('elements/components/technology.php') ?>

            </div>

            <div class="technology-year" data-year="1937">

              <?php include_once('elements/components/technology_01.php') ?>
              <?php include_once('elements/components/technology_02.php') ?>

            </div>

            <?php include_once('elements/components/technology_03.php') ?>
            <?php include_once('elements/components/technology_04.php') ?>

          </div>

          <div class="tab" id="tab-destroyer">

          </div>

          <div class="tab" id="tab-submarine">

          </div>

        </div>


      </div>

      <div class="tab" id="tab-air-force">

        Navy Tab Pane

      </div>

    </div>
    <?php */ ?>

    <div class="container tabs" data-component="tabs">

      <div class="column medium-3 large-3">

        <nav class="menu-research">
          <ul class="menu-research-list">
            <li class="menu-research-list-item menu-research-list-item-is-active" data-tab="#tab-industry"><span>Industry</span></li>

            <li class="menu-research-list-item expandable" data-expandable="true">
              <span class="expandable-control">Navy</span>
              <div class="expandable-area">
                <ul class="menu-research-sublist">
                  <li class="menu-research-sublist-item" data-tab="#tab-aircraft-carrier"><span>Aircraft Carrier</span></li>
                  <li class="menu-research-sublist-item" data-tab="#tab-battleship"><span>Battleship</span></li>
                  <li class="menu-research-sublist-item" data-tab="#tab-battlecruiser"><span>Battlecruiser</span></li>
                  <li class="menu-research-sublist-item" data-tab="#tab-cruiser"><span>Cruiser</span></li>
                  <li class="menu-research-sublist-item" data-tab="#tab-convoy-escorts"><span>Convoy Escorts</span></li>
                  <li class="menu-research-sublist-item" data-tab="#tab-destroyer"><span>Destroyer</span></li>
                  <li class="menu-research-sublist-item" data-tab="#tab-submarine"><span>Submarine</span></li>
                </ul>
              </div>
            </li>
            <li class="menu-research-list-item" data-tab="#tab-air-force"><span>Air Force</span></li>
            <li class="menu-research-list-item" data-tab="#tab-army"><span>Army</span></li>
            <li class="menu-research-list-item" data-tab="#tab-naval-tactics"><span>Naval Tactics</span></li>
            <li class="menu-research-list-item" data-tab="#tab-air-tactics"><span>Air Tactics</span></li>
            <li class="menu-research-list-item" data-tab="#tab-convoy-tactics"><span>Convoy Tactics</span></li>
            <li class="menu-research-list-item" data-tab="#tab-weapon-systems"><span>Weapon Systems</span></li>
            <li class="menu-research-list-item" data-tab="#tab-secret-weapons"><span>Secret Weapons</span></li>
          </ul>
        </nav>

      </div>


      <div class="column medium-9 large-9">

        <div class="tab tab-active" id="tab-industry">

          Industry Tab Pane

        </div>

        <div class="tab" id="tab-aircraft-carrier">

          <?php include_once('elements/components/techs/fleet-carrier.php') ?>
          <?php include_once('elements/components/techs/fleet-carrier-01.php') ?>
          <?php include_once('elements/components/techs/fleet-carrier-02.php') ?>

          <?php include_once('elements/components/techs/light-carrier-01.php') ?>
          <?php include_once('elements/components/techs/light-carrier-02.php') ?>

        </div>

        <div class="tab" id="tab-destroyer">

          Destroyer Tab Pane

        </div>

        <div class="tab" id="tab-submarine">

          <?php include_once('elements/components/techs/wolfpacks.php') ?>

        </div>


        <div class="tab" id="tab-air-force">

          <?php include_once('elements/components/techs/technology_03.php') ?>
          <?php include_once('elements/components/techs/technology_04.php') ?>

        </div>

        <div class="tab" id="tab-convoy-tactics">

          <?php include_once('elements/components/techs/advanced-convoy-protection.php') ?>

        </div>

      </div>


    </div>

  </div>

</div>


<!-- Naval Order of Battle -->