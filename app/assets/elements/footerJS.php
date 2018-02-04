<?php

  $translations_en = [
    'Sun' => 'Sun',
    'Autumn' => 'Autumn',
    'Today is the %s' => 'Today is the %s',
    '%s Ships have been sunk since %s' => '%s Ships have been sunk since %s'
  ];

  $translations_de = [
    'Sun' => 'Sonne',
    'Autumn' => 'Herbst',
    'Today is the %s' => 'Heute ist der %s',
    '%s Ships have been sunk since %s' => '%s Schiffe wurden versenkt seit %s',

    'Monday' => 'Montag',
    'Tuesday' => 'Dienstag',
    'Wednesday' => 'Mittwoch',
    'Thursday' => 'Donnerstag',
    'Friday' => 'Freitag',
    'Saturday' => 'Samstag',
    'Sunday' => 'Sonntag'
  ];

?>


<script type="text/javascript">

  var App = {};

  App.translations = JSON.parse('<?php echo json_encode($translations_de)?>');

</script>

<script type="text/javascript" src="./js/vendor.js"></script>
<script src="//d3js.org/d3.geo.projection.v0.min.js"></script>
<script type="text/javascript" src="./js/app.js"></script>
<script>require('js/app')</script>
