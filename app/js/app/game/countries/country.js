/*
 * Define the country object skeleton
 */
 export default class Country {


   constructor(options = {}) {

     this.definition = {
       type: 'country',
       locale: 'en',
       integrity: 1000, // the current integrity (if the integrity of a nation falls)
       settings: {

         ai: {
           status: 1, // this country uses an ai agent
           agent: ['default', ''] // the name of the agent this country is playing with.
         }

       },
       places: [
         {
           id: 1,
           name: 'Liverpool',
           position: ['lat', 'lon'],
           harbor_size: 10,
           airfield_size: 2
         }
       ],
       production: {
         status: 'active',
         queue: []
       },
       units: [
         {
           id: 1,
           name: 'Victorious',
           type: 'Aircraft Carrier',
           class: 'Illustrious',
           status: [ // either one
             'producing',
             'training',
             'moving',
             'fighting',
             'repairing',
             'waiting'
           ],
           action: [''], // the mission of this units
           place: 1, // the origin harbor
           target: {
             place: 0, // id
             position: ['lat', 'lon']
           },
           properties: {
             tonnage: 56000,
             crew: 1800,
             air_attack: 60, // the sum of the air group defined planes
             sea_attack: 5,
             sub_attack: 0,
             air_defence: 40,
             sea_defence: 5,
             sub_defence: 0,
             visibility: 80,
             speed: 25,
             armor: 20
           },
           components: {
             radar: 1,
             sonar: 0
           },
           air_group: {
             seaplane: 0,
             fighter: 25,
             dive_bomber: 20,
             torpedo_bomber: 20
           }
         }
       ],
       fleets: [],
       research: []
     }

   }


   getDefinition() {

     return this.definition;

   }



   getCapital () {

     return this.capital;

   }

 }
