/*
 * Define the country research skeleton
 */
 export default class Research {


   constructor(options = {}) {

     this.defaultResearchTime = 365; // in days; can be changed by researching

     this.definition = [
       {
         id: 1,
         name: 'Weapon Systems',
         groups: [
           {
             id: 1,
             name: 'Torpedo Technology',
             techs: [
               {
                 id: 1,
                 name: 'WW1 Torpedo',
                 days: 180,
                 year: 1918,
                 depends: []
               },
               {
                 id: 2,
                 name: 'Optical Torpedo',
                 days: 365,
                 year: 1933,
                 depends: []
               },
               {
                 id: 3,
                 name: 'Acoustic Torpedo',
                 days: 365,
                 year: 1934,
                 depends: []
               },
               {
                 id: 4,
                 name: 'Steerable Torpedo',
                 days: 450,
                 year: 1943,
                 depends: []
               }
             ]
           }
         ]
       },
       {
         id: 2,
         name: 'Navy',
         groups: [
           {
             id: 1,
             name: 'Submarines',
             techs: [
               {
                 id: 1,
                 name: 'Coastal Submarine',
                 days: 180,
                 year: 1934,
                 depends: [],
                 classes: [
                   {
                     locale: 'de',
                     name: 'U-Boot-Klasse II'
                   }
                 ]
               },
               {
                 id: 2,
                 name: 'Long Range Submarine',
                 days: 365,
                 year: 1934,
                 depends: [1],
                 classes: [
                   {
                     locale: 'de',
                     name: 'U-Boot-Klasse VII'
                   }
                 ]
               },
               {
                 id: 3,
                 name: 'Open Seas Submarine',
                 days: 365,
                 year: 1938,
                 depends: [2],
                 countries: [],
                 classes: [
                   {
                     locale: 'de',
                     name: 'U-Boot-Klasse IX'
                   }
                 ]
               },
               {
                 id: 4,
                 name: 'Electric Submarine',
                 days: 720,
                 year: 1943,
                 depends: [3, 4],
                 countries: ['de'],
                 classes: [
                   {
                     locale: 'de',
                     name: 'U-Boot-Klasse XXI'
                   }
                 ]
               }
             ]
           }
         ]
       },
       {
         id: 3,
         name: 'Naval Tactics',
         groups: []
       },
       {
         id: 4,
         name: 'Air Tactics',
         groups: []
       },
       {
         id: 5,
         name: 'Industry',
         groups: []
       },
       {
         id: 6,
         name: 'Air Force',
         groups: []
       }
     ];


   }


   getDefinition() {

     return this.definition;

   }


   defineCountrySpecificResearch() {

     // for germany
     // - Supply Submarines
     // - Pocket Battleships


     // Jäger-Leitsystem - Radar-System

   }

 }
