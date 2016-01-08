angular.module('app.create', [])

.controller('CreateTripController', function ($scope, $http) {
  // variable to determine if the form is completed
  // if it's false, the form with show
  // if true, the form will hide and the right side of page will populate
  $scope.formCompleted = false;
  // this function is to 
    // 1. hide the form
    // 2. trigger the search *** TODO
  $scope.startItinerary = function () {
    console.log('start itinerary');
    if (!$scope.itineraryName || !$scope.city || !$scope.state) {
      return;
    } else {
      $scope.formCompleted = true;
      $http.get('/activities/' + $scope.city + ',' + $scope.state)
      // $http.get('/activities/')
        .success(function (data) {
          console.log(data);
          $scope.activities = data;
        });
    }
  };

  $scope.itinerary = []; 

  var response = {
    "meta": {
      "code": 200,
      "requestId": "568ebf8d498ec4e2251e83ce"
    },
    "response": {
      "venues": [
        {
          "id": "4c4dcde9ea24c9b6b9ccac14",
          "name": "Pilsen",
          "contact": {},
          "location": {
            "lat": 41.857863272470325,
            "lng": -87.65763759613037,
            "cc": "US",
            "city": "Chicago",
            "state": "IL",
            "country": "United States",
            "formattedAddress": [
              "Chicago, IL",
              "United States"
            ]
          },
          "categories": [
            {
              "id": "4f2a25ac4b909258e854f55f",
              "name": "Neighborhood",
              "pluralName": "Neighborhoods",
              "shortName": "Neighborhood",
              "icon": {
                "prefix": "https://ss3.4sqi.net/img/categories_v2/parks_outdoors/neighborhood_",
                "suffix": ".png"
              },
              "primary": true
            }
          ],
          "verified": false,
          "stats": {
            "checkinsCount": 11621,
            "usersCount": 1636,
            "tipCount": 14
          },
          "allowMenuUrlEdit": true,
          "specials": {
            "count": 0,
            "items": []
          },
          "hereNow": {
            "count": 0,
            "summary": "Nobody here",
            "groups": []
          },
          "referralId": "v-1452195725",
          "venueChains": []
        },
        {
          "id": "4f5afbafe4b04e12651eef2c",
          "name": "Tequila Bar & Restaurant",
          "contact": {},
          "location": {
            "lat": 41.853106,
            "lng": -87.646424,
            "cc": "US",
            "state": "Illinois",
            "country": "United States",
            "formattedAddress": [
              "Illinois",
              "United States"
            ]
          },
          "categories": [
            {
              "id": "4bf58dd8d48988d116941735",
              "name": "Bar",
              "pluralName": "Bars",
              "shortName": "Bar",
              "icon": {
                "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/pub_",
                "suffix": ".png"
              },
              "primary": true
            }
          ],
          "verified": false,
          "stats": {
            "checkinsCount": 38,
            "usersCount": 27,
            "tipCount": 1
          },
          "allowMenuUrlEdit": true,
          "specials": {
            "count": 0,
            "items": []
          },
          "hereNow": {
            "count": 0,
            "summary": "Nobody here",
            "groups": []
          },
          "referralId": "v-1452195725",
          "venueChains": []
        },
        {
          "id": "4b7a0419f964a520371f2fe3",
          "name": "CTA Bus 8",
          "contact": {
            "phone": "8889687282",
            "formattedPhone": "(888) 968-7282",
            "twitter": "cta"
          },
          "location": {
            "crossStreet": "Halsted",
            "lat": 41.85369190555328,
            "lng": -87.64651179313658,
            "postalCode": "60608",
            "cc": "US",
            "city": "Chicago",
            "state": "IL",
            "country": "United States",
            "formattedAddress": [
              "Halsted",
              "Chicago, IL 60608",
              "United States"
            ]
          },
          "categories": [
            {
              "id": "4bf58dd8d48988d12b951735",
              "name": "Bus Line",
              "pluralName": "Bus Lines",
              "shortName": "Bus",
              "icon": {
                "prefix": "https://ss3.4sqi.net/img/categories_v2/travel/busstation_",
                "suffix": ".png"
              },
              "primary": true
            }
          ],
          "verified": false,
          "stats": {
            "checkinsCount": 3749,
            "usersCount": 794,
            "tipCount": 11
          },
          "url": "http://www.transitchicago.com",
          "specials": {
            "count": 0,
            "items": []
          },
          "hereNow": {
            "count": 0,
            "summary": "Nobody here",
            "groups": []
          },
          "referralId": "v-1452195725",
          "venueChains": []
        },
        {
          "id": "4e9313198231bf0d17a65375",
          "name": "HCSC OSC",
          "contact": {},
          "location": {
            "address": "955 W Cermak Rd",
            "lat": 41.84980493421343,
            "lng": -87.6494446224005,
            "postalCode": "60608",
            "cc": "US",
            "city": "Chicago",
            "state": "IL",
            "country": "United States",
            "formattedAddress": [
              "955 W Cermak Rd",
              "Chicago, IL 60608",
              "United States"
            ]
          },
          "categories": [
            {
              "id": "4bf58dd8d48988d124941735",
              "name": "Office",
              "pluralName": "Offices",
              "shortName": "Office",
              "icon": {
                "prefix": "https://ss3.4sqi.net/img/categories_v2/building/default_",
                "suffix": ".png"
              },
              "primary": true
            }
          ],
          "verified": false,
          "stats": {
            "checkinsCount": 22,
            "usersCount": 8,
            "tipCount": 0
          },
          "specials": {
            "count": 0,
            "items": []
          },
          "hereNow": {
            "count": 0,
            "summary": "Nobody here",
            "groups": []
          },
          "referralId": "v-1452195725",
          "venueChains": []
        },
        {
          "id": "4ba2a35bf964a520920b38e3",
          "name": "CTA Bus 62",
          "contact": {
            "phone": "8889687282",
            "formattedPhone": "(888) 968-7282",
            "twitter": "cta"
          },
          "location": {
            "crossStreet": "Archer",
            "lat": 41.846235508818104,
            "lng": -87.64837861061096,
            "postalCode": "60632",
            "cc": "US",
            "city": "Chicago",
            "state": "IL",
            "country": "United States",
            "formattedAddress": [
              "Archer",
              "Chicago, IL 60632",
              "United States"
            ]
          },
          "categories": [
            {
              "id": "4bf58dd8d48988d12b951735",
              "name": "Bus Line",
              "pluralName": "Bus Lines",
              "shortName": "Bus",
              "icon": {
                "prefix": "https://ss3.4sqi.net/img/categories_v2/travel/busstation_",
                "suffix": ".png"
              },
              "primary": true
            }
          ],
          "verified": false,
          "stats": {
            "checkinsCount": 539,
            "usersCount": 121,
            "tipCount": 2
          },
          "url": "http://www.transitchicago.com",
          "specials": {
            "count": 0,
            "items": []
          },
          "hereNow": {
            "count": 0,
            "summary": "Nobody here",
            "groups": []
          },
          "referralId": "v-1452195725",
          "venueChains": []
        },
        {
          "id": "55356320498eb65835b26b0b",
          "name": "South Side Smoke Shop Stop",
          "contact": {},
          "location": {
            "lat": 41.849632153161735,
            "lng": -87.65115737915039,
            "cc": "US",
            "city": "Chicago",
            "state": "IL",
            "country": "United States",
            "formattedAddress": [
              "Chicago, IL",
              "United States"
            ]
          },
          "categories": [
            {
              "id": "4bf58dd8d48988d1ff941735",
              "name": "Miscellaneous Shop",
              "pluralName": "Miscellaneous Shops",
              "shortName": "Shop",
              "icon": {
                "prefix": "https://ss3.4sqi.net/img/categories_v2/shops/default_",
                "suffix": ".png"
              },
              "primary": true
            }
          ],
          "verified": false,
          "stats": {
            "checkinsCount": 1,
            "usersCount": 1,
            "tipCount": 0
          },
          "allowMenuUrlEdit": true,
          "specials": {
            "count": 0,
            "items": []
          },
          "hereNow": {
            "count": 0,
            "summary": "Nobody here",
            "groups": []
          },
          "referralId": "v-1452195725",
          "venueChains": []
        },
        {
          "id": "4c63184fec94a5938def2aca",
          "name": "Collection Art Gallery",
          "contact": {},
          "location": {
            "lat": 41.853252938459875,
            "lng": -87.64676597488956,
            "postalCode": "60608",
            "cc": "US",
            "city": "Chicago",
            "state": "IL",
            "country": "United States",
            "formattedAddress": [
              "Chicago, IL 60608",
              "United States"
            ]
          },
          "categories": [
            {
              "id": "4bf58dd8d48988d1e2931735",
              "name": "Art Gallery",
              "pluralName": "Art Galleries",
              "shortName": "Art Gallery",
              "icon": {
                "prefix": "https://ss3.4sqi.net/img/categories_v2/arts_entertainment/artgallery_",
                "suffix": ".png"
              },
              "primary": true
            }
          ],
          "verified": false,
          "stats": {
            "checkinsCount": 13,
            "usersCount": 8,
            "tipCount": 0
          },
          "specials": {
            "count": 0,
            "items": []
          },
          "hereNow": {
            "count": 0,
            "summary": "Nobody here",
            "groups": []
          },
          "referralId": "v-1452195725",
          "venueChains": []
        },
        {
          "id": "4f5aa851e4b01014b92316cd",
          "name": "Crystal-Eyez Makeup & Beauty Lounge",
          "contact": {
            "phone": "8665705755",
            "formattedPhone": "(866) 570-5755",
            "twitter": "bisicrystaleyez",
            "facebook": "123807444300970",
            "facebookUsername": "bisicrystaleyez",
            "facebookName": "Crystal-Eyez Makeup & Beauty Lounge"
          },
          "location": {
            "address": "1933 S Archer Ave",
            "crossStreet": "State",
            "lat": 41.85332184842588,
            "lng": -87.6503117767515,
            "postalCode": "60616",
            "cc": "US",
            "neighborhood": "South Loop",
            "city": "Chicago",
            "state": "IL",
            "country": "United States",
            "formattedAddress": [
              "1933 S Archer Ave (State)",
              "Chicago, IL 60616",
              "United States"
            ]
          },
          "categories": [
            {
              "id": "4bf58dd8d48988d110951735",
              "name": "Salon / Barbershop",
              "pluralName": "Salons / Barbershops",
              "shortName": "Salon / Barbershop",
              "icon": {
                "prefix": "https://ss3.4sqi.net/img/categories_v2/shops/salon_barber_",
                "suffix": ".png"
              },
              "primary": true
            }
          ],
          "verified": false,
          "stats": {
            "checkinsCount": 34,
            "usersCount": 13,
            "tipCount": 0
          },
          "url": "http://www.crystal-eyez.com",
          "hasMenu": true,
          "menu": {
            "type": "Products",
            "label": "Products",
            "anchor": "View Products",
            "url": "https://foursquare.com/v/crystaleyez-makeup--beauty-lounge/4f5aa851e4b01014b92316cd/menu",
            "mobileUrl": "https://foursquare.com/v/4f5aa851e4b01014b92316cd/device_menu"
          },
          "allowMenuUrlEdit": true,
          "specials": {
            "count": 0,
            "items": []
          },
          "hereNow": {
            "count": 0,
            "summary": "Nobody here",
            "groups": []
          },
          "referralId": "v-1452195725",
          "venueChains": []
        },
        {
          "id": "4cc5066101fb236a8071afba",
          "name": "Rá",
          "contact": {},
          "location": {
            "crossStreet": "belmont st",
            "lat": 41.8519127368927,
            "lng": -87.64535844326019,
            "postalCode": "60608",
            "cc": "US",
            "city": "Chicago",
            "state": "IL",
            "country": "United States",
            "formattedAddress": [
              "Chicago, IL 60608",
              "United States"
            ]
          },
          "categories": [
            {
              "id": "4bf58dd8d48988d111941735",
              "name": "Japanese Restaurant",
              "pluralName": "Japanese Restaurants",
              "shortName": "Japanese",
              "icon": {
                "prefix": "https://ss3.4sqi.net/img/categories_v2/food/japanese_",
                "suffix": ".png"
              },
              "primary": true
            }
          ],
          "verified": false,
          "stats": {
            "checkinsCount": 5,
            "usersCount": 5,
            "tipCount": 1
          },
          "allowMenuUrlEdit": true,
          "specials": {
            "count": 0,
            "items": []
          },
          "hereNow": {
            "count": 0,
            "summary": "Nobody here",
            "groups": []
          },
          "referralId": "v-1452195725",
          "venueChains": []
        },
        {
          "id": "51c7131f5019c02f1ebc645e",
          "name": "Pope Business Center",
          "contact": {
            "phone": "3128902615",
            "formattedPhone": "(312) 890-2615",
            "twitter": "exavierpope"
          },
          "location": {
            "address": "2150 S Canalport Ave Ste 5C-4",
            "crossStreet": "Intersection of Cermak/Canalport/Morgan",
            "lat": 41.85306857448913,
            "lng": -87.65061020851135,
            "postalCode": "60608",
            "cc": "US",
            "city": "Chicago",
            "state": "IL",
            "country": "United States",
            "formattedAddress": [
              "2150 S Canalport Ave Ste 5C-4 (Intersection of Cermak/Canalport/Morgan)",
              "Chicago, IL 60608",
              "United States"
            ]
          },
          "categories": [
            {
              "id": "4bf58dd8d48988d171941735",
              "name": "Event Space",
              "pluralName": "Event Spaces",
              "shortName": "Event Space",
              "icon": {
                "prefix": "https://ss3.4sqi.net/img/categories_v2/building/eventspace_",
                "suffix": ".png"
              },
              "primary": true
            }
          ],
          "verified": false,
          "stats": {
            "checkinsCount": 26,
            "usersCount": 2,
            "tipCount": 1
          },
          "specials": {
            "count": 0,
            "items": []
          },
          "hereNow": {
            "count": 0,
            "summary": "Nobody here",
            "groups": []
          },
          "referralId": "v-1452195725",
          "venueChains": []
        },
        {
          "id": "4ff8a71de4b0fecb2668e291",
          "name": "The Opera Lofts",
          "contact": {},
          "location": {
            "lat": 41.8500981545735,
            "lng": -87.6445497088174,
            "postalCode": "60616",
            "cc": "US",
            "city": "Chicago",
            "state": "IL",
            "country": "United States",
            "formattedAddress": [
              "Chicago, IL 60616",
              "United States"
            ]
          },
          "categories": [
            {
              "id": "4d954b06a243a5684965b473",
              "name": "Residential Building (Apartment / Condo)",
              "pluralName": "Residential Buildings (Apartments / Condos)",
              "shortName": "Residential",
              "icon": {
                "prefix": "https://ss3.4sqi.net/img/categories_v2/building/apartment_",
                "suffix": ".png"
              },
              "primary": true
            }
          ],
          "verified": false,
          "stats": {
            "checkinsCount": 14,
            "usersCount": 13,
            "tipCount": 0
          },
          "specials": {
            "count": 0,
            "items": []
          },
          "hereNow": {
            "count": 0,
            "summary": "Nobody here",
            "groups": []
          },
          "referralId": "v-1452195725",
          "venueChains": []
        },
        {
          "id": "4ed3f69d7ee5be844f4b0ba0",
          "name": "Cathay Bank",
          "contact": {},
          "location": {
            "lat": 41.85105306480588,
            "lng": -87.64454007264298,
            "postalCode": "60616",
            "cc": "US",
            "city": "Chicago",
            "state": "IL",
            "country": "United States",
            "formattedAddress": [
              "Chicago, IL 60616",
              "United States"
            ]
          },
          "categories": [
            {
              "id": "4bf58dd8d48988d10a951735",
              "name": "Bank",
              "pluralName": "Banks",
              "shortName": "Bank",
              "icon": {
                "prefix": "https://ss3.4sqi.net/img/categories_v2/shops/financial_",
                "suffix": ".png"
              },
              "primary": true
            }
          ],
          "verified": false,
          "stats": {
            "checkinsCount": 11,
            "usersCount": 6,
            "tipCount": 0
          },
          "allowMenuUrlEdit": true,
          "specials": {
            "count": 0,
            "items": []
          },
          "hereNow": {
            "count": 0,
            "summary": "Nobody here",
            "groups": []
          },
          "referralId": "v-1452195725",
          "venueChains": []
        },
        {
          "id": "504b572de4b09ab3b35c5564",
          "name": "Amtrak 303",
          "contact": {},
          "location": {
            "lat": 41.849504,
            "lng": -87.64141,
            "postalCode": "60616",
            "cc": "US",
            "city": "Chicago",
            "state": "IL",
            "country": "United States",
            "formattedAddress": [
              "Chicago, IL 60616",
              "United States"
            ]
          },
          "categories": [
            {
              "id": "4bf58dd8d48988d1fc931735",
              "name": "Light Rail Station",
              "pluralName": "Light Rail Stations",
              "shortName": "Light Rail",
              "icon": {
                "prefix": "https://ss3.4sqi.net/img/categories_v2/travel/lightrail_",
                "suffix": ".png"
              },
              "primary": true
            }
          ],
          "verified": false,
          "stats": {
            "checkinsCount": 15,
            "usersCount": 15,
            "tipCount": 0
          },
          "specials": {
            "count": 0,
            "items": []
          },
          "hereNow": {
            "count": 0,
            "summary": "Nobody here",
            "groups": []
          },
          "referralId": "v-1452195725",
          "venueChains": []
        },
        {
          "id": "4d25f6c0e7a6a35d2ccddd62",
          "name": "Lakefront Roofing Supply - South Location",
          "contact": {
            "phone": "3122750270",
            "formattedPhone": "(312) 275-0270"
          },
          "location": {
            "address": "977 W Cermak Rd",
            "lat": 41.85163392044528,
            "lng": -87.65135715758652,
            "postalCode": "60608",
            "cc": "US",
            "city": "Chicago",
            "state": "IL",
            "country": "United States",
            "formattedAddress": [
              "977 W Cermak Rd",
              "Chicago, IL 60608",
              "United States"
            ]
          },
          "categories": [
            {
              "id": "4bf58dd8d48988d112951735",
              "name": "Hardware Store",
              "pluralName": "Hardware Stores",
              "shortName": "Hardware",
              "icon": {
                "prefix": "https://ss3.4sqi.net/img/categories_v2/shops/hardware_",
                "suffix": ".png"
              },
              "primary": true
            }
          ],
          "verified": false,
          "stats": {
            "checkinsCount": 11,
            "usersCount": 5,
            "tipCount": 0
          },
          "allowMenuUrlEdit": true,
          "specials": {
            "count": 0,
            "items": []
          },
          "hereNow": {
            "count": 0,
            "summary": "Nobody here",
            "groups": []
          },
          "referralId": "v-1452195725",
          "venueChains": []
        },
        {
          "id": "526a81e811d2992588d252c9",
          "name": "ADmirable",
          "contact": {},
          "location": {
            "lat": 41.850751,
            "lng": -87.657516,
            "cc": "US",
            "city": "Chicago",
            "state": "IL",
            "country": "United States",
            "formattedAddress": [
              "Chicago, IL",
              "United States"
            ]
          },
          "categories": [
            {
              "id": "4bf58dd8d48988d130941735",
              "name": "Building",
              "pluralName": "Buildings",
              "shortName": "Building",
              "icon": {
                "prefix": "https://ss3.4sqi.net/img/categories_v2/building/default_",
                "suffix": ".png"
              },
              "primary": true
            }
          ],
          "verified": false,
          "stats": {
            "checkinsCount": 1,
            "usersCount": 1,
            "tipCount": 0
          },
          "specials": {
            "count": 0,
            "items": []
          },
          "hereNow": {
            "count": 0,
            "summary": "Nobody here",
            "groups": []
          },
          "referralId": "v-1452195725",
          "venueChains": []
        },
        {
          "id": "4eca8b877bebb084a4306730",
          "name": "Brothers Health Collective",
          "contact": {
            "phone": "3123206876",
            "formattedPhone": "(312) 320-6876",
            "twitter": "brothershealthc"
          },
          "location": {
            "address": "2150 S Canalport Ave Ste 5B1",
            "crossStreet": "Cermak",
            "lat": 41.85326036930971,
            "lng": -87.65039563179016,
            "postalCode": "60608",
            "cc": "US",
            "city": "Chicago",
            "state": "IL",
            "country": "United States",
            "formattedAddress": [
              "2150 S Canalport Ave Ste 5B1 (Cermak)",
              "Chicago, IL 60608",
              "United States"
            ]
          },
          "categories": [],
          "verified": false,
          "stats": {
            "checkinsCount": 8,
            "usersCount": 3,
            "tipCount": 0
          },
          "specials": {
            "count": 0,
            "items": []
          },
          "hereNow": {
            "count": 0,
            "summary": "Nobody here",
            "groups": []
          },
          "referralId": "v-1452195725",
          "venueChains": []
        },
        {
          "id": "520dae12498e29ba35a6252a",
          "name": "Divvy Station",
          "contact": {
            "phone": "8555534889",
            "formattedPhone": "(855) 553-4889",
            "twitter": "divvybikes"
          },
          "location": {
            "address": "2500 S. Archer Ave.",
            "crossStreet": "Halsted St & Archer Ave",
            "lat": 41.847115565094995,
            "lng": -87.64642872395126,
            "cc": "US",
            "city": "Chicago",
            "state": "IL",
            "country": "United States",
            "formattedAddress": [
              "2500 S. Archer Ave. (Halsted St & Archer Ave)",
              "Chicago, IL",
              "United States"
            ]
          },
          "categories": [
            {
              "id": "4e4c9077bd41f78e849722f9",
              "name": "Bike Rental / Bike Share",
              "pluralName": "Bike Rentals / Bike Shares",
              "shortName": "Bike",
              "icon": {
                "prefix": "https://ss3.4sqi.net/img/categories_v2/shops/bikeshop_",
                "suffix": ".png"
              },
              "primary": true
            }
          ],
          "verified": true,
          "stats": {
            "checkinsCount": 10,
            "usersCount": 3,
            "tipCount": 0
          },
          "url": "http://divvybikes.com",
          "specials": {
            "count": 0,
            "items": []
          },
          "storeId": "98",
          "hereNow": {
            "count": 0,
            "summary": "Nobody here",
            "groups": []
          },
          "referralId": "v-1452195725",
          "venueChains": [
            {
              "id": "556ce2a7aceaff43eb04b498"
            }
          ]
        },
        {
          "id": "4bf1f66ba09076b0c3f529d4",
          "name": "Growing Station",
          "contact": {},
          "location": {
            "address": "21st Street",
            "crossStreet": "Sangamon",
            "lat": 41.85483173406248,
            "lng": -87.64985411400883,
            "postalCode": "60608",
            "cc": "US",
            "city": "Chicago",
            "state": "IL",
            "country": "United States",
            "formattedAddress": [
              "21st Street (Sangamon)",
              "Chicago, IL 60608",
              "United States"
            ]
          },
          "categories": [
            {
              "id": "4bf58dd8d48988d15a941735",
              "name": "Garden",
              "pluralName": "Gardens",
              "shortName": "Garden",
              "icon": {
                "prefix": "https://ss3.4sqi.net/img/categories_v2/parks_outdoors/garden_",
                "suffix": ".png"
              },
              "primary": true
            }
          ],
          "verified": false,
          "stats": {
            "checkinsCount": 44,
            "usersCount": 6,
            "tipCount": 0
          },
          "specials": {
            "count": 0,
            "items": []
          },
          "hereNow": {
            "count": 0,
            "summary": "Nobody here",
            "groups": []
          },
          "referralId": "v-1452195725",
          "venueChains": []
        },
        {
          "id": "54cc5c54498e9ab7862b1242",
          "name": "Hammerhead",
          "contact": {},
          "location": {
            "lat": 41.84674758141953,
            "lng": -87.64764281566582,
            "cc": "US",
            "city": "Chicago",
            "state": "IL",
            "country": "United States",
            "formattedAddress": [
              "Chicago, IL",
              "United States"
            ]
          },
          "categories": [
            {
              "id": "4bf58dd8d48988d130941735",
              "name": "Building",
              "pluralName": "Buildings",
              "shortName": "Building",
              "icon": {
                "prefix": "https://ss3.4sqi.net/img/categories_v2/building/default_",
                "suffix": ".png"
              },
              "primary": true
            }
          ],
          "verified": false,
          "stats": {
            "checkinsCount": 2,
            "usersCount": 2,
            "tipCount": 0
          },
          "specials": {
            "count": 0,
            "items": []
          },
          "hereNow": {
            "count": 0,
            "summary": "Nobody here",
            "groups": []
          },
          "referralId": "v-1452195725",
          "venueChains": []
        },
        {
          "id": "4eda8110f790c04545da1f99",
          "name": "World Financial Group - Chinatown",
          "contact": {},
          "location": {
            "lat": 41.84798595774905,
            "lng": -87.6446942511894,
            "postalCode": "60616",
            "cc": "US",
            "city": "Chicago",
            "state": "IL",
            "country": "United States",
            "formattedAddress": [
              "Chicago, IL 60616",
              "United States"
            ]
          },
          "categories": [
            {
              "id": "4bf58dd8d48988d124941735",
              "name": "Office",
              "pluralName": "Offices",
              "shortName": "Office",
              "icon": {
                "prefix": "https://ss3.4sqi.net/img/categories_v2/building/default_",
                "suffix": ".png"
              },
              "primary": true
            }
          ],
          "verified": false,
          "stats": {
            "checkinsCount": 4,
            "usersCount": 4,
            "tipCount": 0
          },
          "specials": {
            "count": 0,
            "items": []
          },
          "hereNow": {
            "count": 0,
            "summary": "Nobody here",
            "groups": []
          },
          "referralId": "v-1452195725",
          "venueChains": []
        },
        {
          "id": "529b0882498e7f51a4606f57",
          "name": "Panorama after hours",
          "contact": {},
          "location": {
            "lat": 41.85265201402048,
            "lng": -87.65399218178632,
            "cc": "US",
            "city": "Chicago",
            "state": "IL",
            "country": "United States",
            "formattedAddress": [
              "Chicago, IL",
              "United States"
            ]
          },
          "categories": [
            {
              "id": "4bf58dd8d48988d11f941735",
              "name": "Nightclub",
              "pluralName": "Nightclubs",
              "shortName": "Nightclub",
              "icon": {
                "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/nightclub_",
                "suffix": ".png"
              },
              "primary": true
            }
          ],
          "verified": false,
          "stats": {
            "checkinsCount": 6,
            "usersCount": 6,
            "tipCount": 0
          },
          "allowMenuUrlEdit": true,
          "specials": {
            "count": 0,
            "items": []
          },
          "hereNow": {
            "count": 0,
            "summary": "Nobody here",
            "groups": []
          },
          "referralId": "v-1452195725",
          "venueChains": []
        },
        {
          "id": "514534dae4b021dad49a7fa5",
          "name": "Pilsen Senior Residential",
          "contact": {},
          "location": {
            "address": "2021 S Morgan St",
            "crossStreet": "21st Street",
            "lat": 41.854294144818965,
            "lng": -87.65096694910883,
            "postalCode": "60608",
            "cc": "US",
            "city": "Chicago",
            "state": "IL",
            "country": "United States",
            "formattedAddress": [
              "2021 S Morgan St (21st Street)",
              "Chicago, IL 60608",
              "United States"
            ]
          },
          "categories": [
            {
              "id": "4d954b06a243a5684965b473",
              "name": "Residential Building (Apartment / Condo)",
              "pluralName": "Residential Buildings (Apartments / Condos)",
              "shortName": "Residential",
              "icon": {
                "prefix": "https://ss3.4sqi.net/img/categories_v2/building/apartment_",
                "suffix": ".png"
              },
              "primary": true
            }
          ],
          "verified": false,
          "stats": {
            "checkinsCount": 22,
            "usersCount": 2,
            "tipCount": 0
          },
          "specials": {
            "count": 0,
            "items": []
          },
          "hereNow": {
            "count": 0,
            "summary": "Nobody here",
            "groups": []
          },
          "referralId": "v-1452195725",
          "venueChains": []
        },
        {
          "id": "4f91bd9b7beb818efa883f8e",
          "name": "Baskin-Robbins",
          "contact": {
            "phone": "3122253211",
            "formattedPhone": "(312) 225-3211",
            "twitter": "baskinrobbins"
          },
          "location": {
            "address": "2477 S Archer Ave",
            "lat": 41.847052258576674,
            "lng": -87.64617819306952,
            "postalCode": "60616",
            "cc": "US",
            "city": "Chicago",
            "state": "IL",
            "country": "United States",
            "formattedAddress": [
              "2477 S Archer Ave",
              "Chicago, IL 60616",
              "United States"
            ]
          },
          "categories": [
            {
              "id": "4bf58dd8d48988d1c9941735",
              "name": "Ice Cream Shop",
              "pluralName": "Ice Cream Shops",
              "shortName": "Ice Cream",
              "icon": {
                "prefix": "https://ss3.4sqi.net/img/categories_v2/food/icecream_",
                "suffix": ".png"
              },
              "primary": true
            }
          ],
          "verified": true,
          "stats": {
            "checkinsCount": 68,
            "usersCount": 44,
            "tipCount": 0
          },
          "url": "http://www.baskinrobbins.com",
          "hasMenu": true,
          "menu": {
            "type": "Menu",
            "label": "Menu",
            "anchor": "View Menu",
            "url": "https://foursquare.com/v/baskinrobbins/4f91bd9b7beb818efa883f8e/menu",
            "mobileUrl": "https://foursquare.com/v/4f91bd9b7beb818efa883f8e/device_menu"
          },
          "allowMenuUrlEdit": true,
          "specials": {
            "count": 0,
            "items": []
          },
          "storeId": "1045",
          "hereNow": {
            "count": 0,
            "summary": "Nobody here",
            "groups": []
          },
          "referralId": "v-1452195725",
          "venueChains": [
            {
              "id": "556e146fa7c82e6b725097d1"
            }
          ]
        },
        {
          "id": "512af1bbe4b034d2bc619572",
          "name": "Ryan Henry's Tattoo Studio",
          "contact": {},
          "location": {
            "lat": 41.852855514529,
            "lng": -87.65065381643532,
            "postalCode": "60608",
            "cc": "US",
            "city": "Chicago",
            "state": "IL",
            "country": "United States",
            "formattedAddress": [
              "Chicago, IL 60608",
              "United States"
            ]
          },
          "categories": [
            {
              "id": "4bf58dd8d48988d1de931735",
              "name": "Tattoo Parlor",
              "pluralName": "Tattoo Parlors",
              "shortName": "Tattoo",
              "icon": {
                "prefix": "https://ss3.4sqi.net/img/categories_v2/shops/tattoos_",
                "suffix": ".png"
              },
              "primary": true
            }
          ],
          "verified": false,
          "stats": {
            "checkinsCount": 11,
            "usersCount": 5,
            "tipCount": 0
          },
          "allowMenuUrlEdit": true,
          "specials": {
            "count": 0,
            "items": []
          },
          "hereNow": {
            "count": 0,
            "summary": "Nobody here",
            "groups": []
          },
          "referralId": "v-1452195725",
          "venueChains": []
        },
        {
          "id": "51e0985a498ed2d903161043",
          "name": "URI-EICHEN gallery",
          "contact": {
            "phone": "3128527717",
            "formattedPhone": "(312) 852-7717"
          },
          "location": {
            "address": "2101 S Halsted St",
            "lat": 41.85407858226795,
            "lng": -87.64643835972693,
            "postalCode": "60608",
            "cc": "US",
            "city": "Chicago",
            "state": "IL",
            "country": "United States",
            "formattedAddress": [
              "2101 S Halsted St",
              "Chicago, IL 60608",
              "United States"
            ]
          },
          "categories": [
            {
              "id": "4bf58dd8d48988d1e2931735",
              "name": "Art Gallery",
              "pluralName": "Art Galleries",
              "shortName": "Art Gallery",
              "icon": {
                "prefix": "https://ss3.4sqi.net/img/categories_v2/arts_entertainment/artgallery_",
                "suffix": ".png"
              },
              "primary": true
            }
          ],
          "verified": false,
          "stats": {
            "checkinsCount": 7,
            "usersCount": 7,
            "tipCount": 0
          },
          "specials": {
            "count": 0,
            "items": []
          },
          "hereNow": {
            "count": 0,
            "summary": "Nobody here",
            "groups": []
          },
          "referralId": "v-1452195725",
          "venueChains": []
        },
        {
          "id": "4d939668a8a95941daec2878",
          "name": "The Shred Authority",
          "contact": {
            "phone": "3128422900",
            "formattedPhone": "(312) 842-2900",
            "twitter": "shredauthority"
          },
          "location": {
            "address": "2416 S Archer Ave",
            "crossStreet": "at S Normal Ave",
            "lat": 41.849925639942875,
            "lng": -87.64133593186781,
            "postalCode": "60616",
            "cc": "US",
            "city": "Chicago",
            "state": "IL",
            "country": "United States",
            "formattedAddress": [
              "2416 S Archer Ave (at S Normal Ave)",
              "Chicago, IL 60616",
              "United States"
            ]
          },
          "categories": [
            {
              "id": "4bf58dd8d48988d124941735",
              "name": "Office",
              "pluralName": "Offices",
              "shortName": "Office",
              "icon": {
                "prefix": "https://ss3.4sqi.net/img/categories_v2/building/default_",
                "suffix": ".png"
              },
              "primary": true
            }
          ],
          "verified": false,
          "stats": {
            "checkinsCount": 37,
            "usersCount": 10,
            "tipCount": 1
          },
          "url": "http://www.shredauthority.com",
          "specials": {
            "count": 0,
            "items": []
          },
          "hereNow": {
            "count": 0,
            "summary": "Nobody here",
            "groups": []
          },
          "referralId": "v-1452195725",
          "venueChains": []
        },
        {
          "id": "54e6457f498ef965ac7c1abc",
          "name": "The Practice!",
          "contact": {},
          "location": {
            "lat": 41.853352,
            "lng": -87.650402,
            "cc": "US",
            "city": "Chicago",
            "state": "IL",
            "country": "United States",
            "formattedAddress": [
              "Chicago, IL",
              "United States"
            ]
          },
          "categories": [
            {
              "id": "52e81612bcbc57f1066b7a39",
              "name": "Mental Health Office",
              "pluralName": "Mental Health Offices",
              "shortName": "Mental Health",
              "icon": {
                "prefix": "https://ss3.4sqi.net/img/categories_v2/building/medical_doctorsoffice_",
                "suffix": ".png"
              },
              "primary": true
            }
          ],
          "verified": false,
          "stats": {
            "checkinsCount": 2,
            "usersCount": 1,
            "tipCount": 0
          },
          "specials": {
            "count": 0,
            "items": []
          },
          "hereNow": {
            "count": 0,
            "summary": "Nobody here",
            "groups": []
          },
          "referralId": "v-1452195725",
          "venueChains": []
        },
        {
          "id": "4dc31a3fc65b89d3ca332ee4",
          "name": "Vasectomy Clinics Of Chicago",
          "contact": {},
          "location": {
            "address": "505 N Lake Shore Dr",
            "lat": 41.844808,
            "lng": -87.65359,
            "postalCode": "60611",
            "cc": "US",
            "city": "Chicago",
            "state": "IL",
            "country": "United States",
            "formattedAddress": [
              "505 N Lake Shore Dr",
              "Chicago, IL 60611",
              "United States"
            ]
          },
          "categories": [
            {
              "id": "4bf58dd8d48988d177941735",
              "name": "Doctor's Office",
              "pluralName": "Doctor's Offices",
              "shortName": "Doctor's Office",
              "icon": {
                "prefix": "https://ss3.4sqi.net/img/categories_v2/building/medical_doctorsoffice_",
                "suffix": ".png"
              },
              "primary": true
            }
          ],
          "verified": false,
          "stats": {
            "checkinsCount": 7,
            "usersCount": 6,
            "tipCount": 0
          },
          "specials": {
            "count": 0,
            "items": []
          },
          "hereNow": {
            "count": 0,
            "summary": "Nobody here",
            "groups": []
          },
          "referralId": "v-1452195725",
          "venueChains": []
        },
        {
          "id": "4cc8aab65c17b60c79a40405",
          "name": "CTA Bus Stop",
          "contact": {
            "phone": "8889687282",
            "formattedPhone": "(888) 968-7282",
            "twitter": "cta"
          },
          "location": {
            "address": "Halsted Orange Line Station",
            "crossStreet": "Southwestbound",
            "lat": 41.846651107926455,
            "lng": -87.64814257621764,
            "postalCode": "60616",
            "cc": "US",
            "city": "Chicago",
            "state": "IL",
            "country": "United States",
            "formattedAddress": [
              "Halsted Orange Line Station (Southwestbound)",
              "Chicago, IL 60616",
              "United States"
            ]
          },
          "categories": [
            {
              "id": "4bf58dd8d48988d1fe931735",
              "name": "Bus Station",
              "pluralName": "Bus Stations",
              "shortName": "Bus Station",
              "icon": {
                "prefix": "https://ss3.4sqi.net/img/categories_v2/travel/busstation_",
                "suffix": ".png"
              },
              "primary": true
            }
          ],
          "verified": false,
          "stats": {
            "checkinsCount": 230,
            "usersCount": 46,
            "tipCount": 0
          },
          "url": "http://www.transitchicago.com",
          "specials": {
            "count": 0,
            "items": []
          },
          "hereNow": {
            "count": 0,
            "summary": "Nobody here",
            "groups": []
          },
          "referralId": "v-1452195725",
          "venueChains": []
        },
        {
          "id": "5282b870498e8a963b4cf20a",
          "name": "Divvy Station",
          "contact": {
            "phone": "8555534889",
            "formattedPhone": "(855) 553-4889",
            "twitter": "divvybikes"
          },
          "location": {
            "address": "1125 W. Cullerton St.",
            "crossStreet": "May St & Cullerton St",
            "lat": 41.855306,
            "lng": -87.65351,
            "cc": "US",
            "city": "Chicago",
            "state": "IL",
            "country": "United States",
            "formattedAddress": [
              "1125 W. Cullerton St. (May St & Cullerton St)",
              "Chicago, IL",
              "United States"
            ]
          },
          "categories": [
            {
              "id": "4e4c9077bd41f78e849722f9",
              "name": "Bike Rental / Bike Share",
              "pluralName": "Bike Rentals / Bike Shares",
              "shortName": "Bike",
              "icon": {
                "prefix": "https://ss3.4sqi.net/img/categories_v2/shops/bikeshop_",
                "suffix": ".png"
              },
              "primary": true
            }
          ],
          "verified": true,
          "stats": {
            "checkinsCount": 1,
            "usersCount": 1,
            "tipCount": 0
          },
          "url": "http://divvybikes.com",
          "specials": {
            "count": 0,
            "items": []
          },
          "storeId": "331",
          "hereNow": {
            "count": 0,
            "summary": "Nobody here",
            "groups": []
          },
          "referralId": "v-1452195725",
          "venueChains": [
            {
              "id": "556ce2a7aceaff43eb04b498"
            }
          ]
        }
      ],
      "confident": false,
      "geocode": {
        "what": "",
        "where": "chicago il",
        "feature": {
          "cc": "US",
          "name": "Chicago",
          "displayName": "Chicago, IL, United States",
          "matchedName": "Chicago, IL, United States",
          "highlightedName": "<b>Chicago</b>, <b>IL</b>, United States",
          "woeType": 7,
          "slug": "chicago-illinois",
          "id": "geonameid:4887398",
          "longId": "72057594042815334",
          "geometry": {
            "center": {
              "lat": 41.85003,
              "lng": -87.65005
            },
            "bounds": {
              "ne": {
                "lat": 42.023134999999996,
                "lng": -87.52366099999999
              },
              "sw": {
                "lat": 41.644286,
                "lng": -87.940101
              }
            }
          }
        },
        "parents": []
      }
    }
  }

  $scope.venues = response.response.venues;

  $scope.addToTrip = function(){
    console.log(this.activity);
    $scope.itinerary.push(this.activity);
  }
});

