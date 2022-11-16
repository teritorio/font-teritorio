export type TeritorioId =
  | "accessories"
  | "advertising_board"
  | "aerodrome"
  | "agrarian"
  | "alcohol"
  | "alpine_hut"
  | "amenity"
  | "animal_boarding"
  | "animal_shelter"
  | "antiques"
  | "apartment_rental"
  | "apartment_resort"
  | "aquarium"
  | "archaeological_site"
  | "art"
  | "arts_centre"
  | "artwork"
  | "athletics"
  | "atm"
  | "attraction"
  | "badminton"
  | "bag"
  | "bakery"
  | "bank"
  | "bar"
  | "basket_maker"
  | "basketball"
  | "bbq"
  | "beach_resort"
  | "beach"
  | "beachvolleyball"
  | "bed"
  | "beekeeper"
  | "bench"
  | "beverages"
  | "bicycle_docking_station"
  | "bicycle_parking"
  | "bicycle_rental"
  | "bicycle_shop"
  | "billiards"
  | "bird_hide"
  | "bmx"
  | "board_map"
  | "books"
  | "border_control"
  | "boules"
  | "boutique"
  | "bowling_alley"
  | "brewery"
  | "brownfield"
  | "bullfighting"
  | "bullring"
  | "bus_station"
  | "bus_stop"
  | "butcher"
  | "cafe"
  | "camera"
  | "camp_site"
  | "canoe"
  | "car_parts"
  | "car_pooling"
  | "car_rental"
  | "car_repair"
  | "car"
  | "caravan_site"
  | "carpet"
  | "casino"
  | "castle_wall"
  | "castle"
  | "caterer"
  | "catering"
  | "cathedral"
  | "cave_entrance"
  | "cemetery"
  | "chalet"
  | "chapel"
  | "charging_station"
  | "charity"
  | "cheese"
  | "chemist"
  | "child_youth_centre"
  | "chocolate"
  | "church_heritage"
  | "church"
  | "cinema"
  | "city_gate"
  | "city_wall"
  | "climbing_adventure"
  | "climbing"
  | "clinic"
  | "clothes"
  | "coffee"
  | "college"
  | "community_centre"
  | "compressed_air"
  | "computer"
  | "confectionery"
  | "container"
  | "convenience"
  | "copyshop"
  | "cosmetics"
  | "courthouse"
  | "coworking_space"
  | "craft"
  | "culture_shopping"
  | "culture"
  | "cycle_barrier"
  | "cycling"
  | "defibrillator"
  | "deli"
  | "dentist"
  | "disabled_home"
  | "distillery"
  | "diving"
  | "dock"
  | "doctors"
  | "dog_excrement"
  | "doityourself"
  | "dojo"
  | "dressmaker"
  | "drinking_water"
  | "dry_cleaning"
  | "education"
  | "elderly_nursing_home"
  | "electronics"
  | "embassy"
  | "erotic"
  | "estate_agent"
  | "extra-abbey"
  | "extra-aeroport"
  | "extra-aesthetic"
  | "extra-ambassador"
  | "extra-apple"
  | "extra-balneotherapy"
  | "extra-bicycle_repair"
  | "extra-bike_ride"
  | "extra-bungee_jumping"
  | "extra-cannabis"
  | "extra-cannery_maker_prestige"
  | "extra-cannery_maker"
  | "extra-canyoning"
  | "extra-city"
  | "extra-craft_prestige"
  | "extra-craft"
  | "extra-delivery"
  | "extra-disabled"
  | "extra-dog_allowed"
  | "extra-drive"
  | "extra-equipment_rental"
  | "extra-escape_game"
  | "extra-family"
  | "extra-ferme_decouverte"
  | "extra-fish_market"
  | "extra-flower_village"
  | "extra-food_truck"
  | "extra-food"
  | "extra-france_services"
  | "extra-ganaderia"
  | "extra-giving_box"
  | "extra-golf"
  | "extra-guided_hikes"
  | "extra-guided_tour"
  | "extra-hiking_biking"
  | "extra-hiking_forest"
  | "extra-hiking"
  | "extra-holy_well"
  | "extra-house_painter"
  | "extra-industrial_warehouse"
  | "extra-joiner"
  | "extra-kitchen_designer"
  | "extra-laboratory"
  | "extra-leaf"
  | "extra-leisure_supply"
  | "extra-local_authority"
  | "extra-local_shop_prestige"
  | "extra-lost_property"
  | "extra-major_projects"
  | "extra-medical_supply"
  | "extra-motorway"
  | "extra-mountain_bike"
  | "extra-multimedia_library"
  | "extra-natural_site"
  | "extra-nature_reserve"
  | "extra-notary"
  | "extra-office"
  | "extra-organic_store"
  | "extra-other_sports"
  | "extra-oyster_hut"
  | "extra-paddle"
  | "extra-picnic_prestige"
  | "extra-pine_forest"
  | "extra-pins"
  | "extra-podiatrist"
  | "extra-point"
  | "extra-polling_station"
  | "extra-recycling"
  | "extra-reflexology"
  | "extra-restaurant_prestige"
  | "extra-restricted"
  | "extra-roadworks"
  | "extra-shared_garden"
  | "extra-speleology"
  | "extra-sports_and_leisures"
  | "extra-spot_surf"
  | "extra-strawberry"
  | "extra-surfhouses"
  | "extra-terra_aventura"
  | "extra-thermal_establishment"
  | "extra-thermal_station"
  | "extra-to_take_away"
  | "extra-town"
  | "extra-trip"
  | "extra-unavoidable"
  | "extra-unesco_site"
  | "extra-unusual_accommodation"
  | "extra-usefull"
  | "extra-vineyard"
  | "extra-water_sports"
  | "extra-water_tour"
  | "extra-whelk"
  | "extra-WIFI"
  | "extra-zip_line"
  | "fabric"
  | "farm"
  | "fast_food"
  | "ferry_terminal"
  | "fire_station"
  | "firepit"
  | "fishing_shop"
  | "fishing"
  | "fitness_centre"
  | "florist"
  | "food_bank"
  | "food_court"
  | "free_flying"
  | "frozen_food"
  | "fuel"
  | "furniture"
  | "futsal"
  | "gallery"
  | "garden"
  | "general"
  | "gift"
  | "golf_course_minor"
  | "golf_course"
  | "grave_yard"
  | "greengrocer"
  | "grinding_mill"
  | "guest_house"
  | "gymnastics"
  | "hairdresser"
  | "halt"
  | "handball"
  | "handicraft"
  | "hardware"
  | "healthcare_centre"
  | "hearing_aids"
  | "heritage"
  | "hifi"
  | "horse_racing"
  | "horse_riding"
  | "hospital"
  | "hostel"
  | "hosting"
  | "hotel"
  | "ice_cream"
  | "ice_hockey"
  | "ice_rink"
  | "interior_decoration"
  | "jeweller"
  | "jewelry"
  | "juvenile_youth_centre"
  | "karting"
  | "kindergarten"
  | "kiosk"
  | "kitesurfing"
  | "lamps"
  | "laundry"
  | "lavoir"
  | "leather"
  | "leisure"
  | "library"
  | "life_ring"
  | "lifeguard_base"
  | "lighthouse_minor"
  | "lighthouse"
  | "local_shop"
  | "lower_secondary_education"
  | "luthier"
  | "mall"
  | "marina"
  | "marketplace"
  | "massage"
  | "memorial"
  | "miniature_golf"
  | "mobile_phone"
  | "mobility"
  | "monastery"
  | "monument"
  | "motel"
  | "motocross"
  | "motor"
  | "motorcycle_parking"
  | "motorcycle_repair"
  | "motorcycle"
  | "motorway_junction"
  | "mountain_pass"
  | "mountain_rescue"
  | "multi"
  | "museum"
  | "music"
  | "musical_instrument"
  | "nature"
  | "newsagent"
  | "nightclub"
  | "nurse"
  | "office"
  | "oil_mill"
  | "optician"
  | "orienteering"
  | "outdoor"
  | "paddle_tennis"
  | "paintball"
  | "park"
  | "parking"
  | "pastry"
  | "pelota"
  | "perfume"
  | "perfumery"
  | "pet_grooming"
  | "pet"
  | "pharmacy"
  | "photo"
  | "photographer"
  | "physiotherapist"
  | "picnic_site"
  | "picnic_table"
  | "pitch"
  | "place_of_worship"
  | "playground"
  | "police"
  | "polling_station"
  | "post_box"
  | "post_office"
  | "pottery"
  | "pre_primary_school"
  | "primary_education"
  | "prison"
  | "products"
  | "pub"
  | "public_bath"
  | "public_bookcase"
  | "public_landmark"
  | "racquet"
  | "recycling_centre"
  | "remarkable"
  | "resort"
  | "restaurant"
  | "retail"
  | "retirement_home"
  | "rowing"
  | "rugby_league"
  | "rugby_union"
  | "rugby"
  | "running"
  | "safety"
  | "sailing"
  | "sanitary_dump_station"
  | "school"
  | "scuba_diving"
  | "sculptor"
  | "seafood"
  | "second_hand"
  | "services_shopping"
  | "services"
  | "shelter"
  | "shoemaker"
  | "shoes"
  | "shooting"
  | "shopping"
  | "shower"
  | "skateboard"
  | "soccer"
  | "social_information"
  | "social_services"
  | "sport_practice"
  | "sports_centre"
  | "sports"
  | "spring"
  | "squash"
  | "stadium"
  | "station"
  | "stationery"
  | "stile"
  | "subway_entrance"
  | "supermarket"
  | "surf_school"
  | "surf"
  | "surfing"
  | "swimming_area"
  | "swimming_centre"
  | "swimming_pool"
  | "swimming"
  | "table_soccer"
  | "table_tennis"
  | "tailor"
  | "tattoo"
  | "taxi"
  | "telephone"
  | "tennis"
  | "theatre"
  | "theme_park"
  | "ticket"
  | "tobacco"
  | "toilets"
  | "toll_booth"
  | "tourism_information_terminal"
  | "tower"
  | "townhall"
  | "toys"
  | "train_station_entrance"
  | "tram_stop"
  | "travel_agency"
  | "trinquete"
  | "university"
  | "upper_secondary_education"
  | "vending_machine"
  | "veterinary"
  | "video_games"
  | "video"
  | "viewpoint"
  | "volleyball"
  | "waste_basket"
  | "waste_disposal"
  | "watches"
  | "water_park"
  | "water_rescue_station"
  | "water_ski"
  | "waterfall"
  | "wayside_cross"
  | "wayside_shrine"
  | "weapons"
  | "wholesale"
  | "wilderness_hut"
  | "wildlife_hide"
  | "winery"
  | "winter_sports"
  | "yoga"
  | "zoo";

export type TeritorioKey =
  | "Accessories"
  | "AdvertisingBoard"
  | "Aerodrome"
  | "Agrarian"
  | "Alcohol"
  | "AlpineHut"
  | "Amenity"
  | "AnimalBoarding"
  | "AnimalShelter"
  | "Antiques"
  | "ApartmentRental"
  | "ApartmentResort"
  | "Aquarium"
  | "ArchaeologicalSite"
  | "Art"
  | "ArtsCentre"
  | "Artwork"
  | "Athletics"
  | "Atm"
  | "Attraction"
  | "Badminton"
  | "Bag"
  | "Bakery"
  | "Bank"
  | "Bar"
  | "BasketMaker"
  | "Basketball"
  | "Bbq"
  | "BeachResort"
  | "Beach"
  | "Beachvolleyball"
  | "Bed"
  | "Beekeeper"
  | "Bench"
  | "Beverages"
  | "BicycleDockingStation"
  | "BicycleParking"
  | "BicycleRental"
  | "BicycleShop"
  | "Billiards"
  | "BirdHide"
  | "Bmx"
  | "BoardMap"
  | "Books"
  | "BorderControl"
  | "Boules"
  | "Boutique"
  | "BowlingAlley"
  | "Brewery"
  | "Brownfield"
  | "Bullfighting"
  | "Bullring"
  | "BusStation"
  | "BusStop"
  | "Butcher"
  | "Cafe"
  | "Camera"
  | "CampSite"
  | "Canoe"
  | "CarParts"
  | "CarPooling"
  | "CarRental"
  | "CarRepair"
  | "Car"
  | "CaravanSite"
  | "Carpet"
  | "Casino"
  | "CastleWall"
  | "Castle"
  | "Caterer"
  | "Catering"
  | "Cathedral"
  | "CaveEntrance"
  | "Cemetery"
  | "Chalet"
  | "Chapel"
  | "ChargingStation"
  | "Charity"
  | "Cheese"
  | "Chemist"
  | "ChildYouthCentre"
  | "Chocolate"
  | "ChurchHeritage"
  | "Church"
  | "Cinema"
  | "CityGate"
  | "CityWall"
  | "ClimbingAdventure"
  | "Climbing"
  | "Clinic"
  | "Clothes"
  | "Coffee"
  | "College"
  | "CommunityCentre"
  | "CompressedAir"
  | "Computer"
  | "Confectionery"
  | "Container"
  | "Convenience"
  | "Copyshop"
  | "Cosmetics"
  | "Courthouse"
  | "CoworkingSpace"
  | "Craft"
  | "CultureShopping"
  | "Culture"
  | "CycleBarrier"
  | "Cycling"
  | "Defibrillator"
  | "Deli"
  | "Dentist"
  | "DisabledHome"
  | "Distillery"
  | "Diving"
  | "Dock"
  | "Doctors"
  | "DogExcrement"
  | "Doityourself"
  | "Dojo"
  | "Dressmaker"
  | "DrinkingWater"
  | "DryCleaning"
  | "Education"
  | "ElderlyNursingHome"
  | "Electronics"
  | "Embassy"
  | "Erotic"
  | "EstateAgent"
  | "ExtraAbbey"
  | "ExtraAeroport"
  | "ExtraAesthetic"
  | "ExtraAmbassador"
  | "ExtraApple"
  | "ExtraBalneotherapy"
  | "ExtraBicycleRepair"
  | "ExtraBikeRide"
  | "ExtraBungeeJumping"
  | "ExtraCannabis"
  | "ExtraCanneryMakerPrestige"
  | "ExtraCanneryMaker"
  | "ExtraCanyoning"
  | "ExtraCity"
  | "ExtraCraftPrestige"
  | "ExtraCraft"
  | "ExtraDelivery"
  | "ExtraDisabled"
  | "ExtraDogAllowed"
  | "ExtraDrive"
  | "ExtraEquipmentRental"
  | "ExtraEscapeGame"
  | "ExtraFamily"
  | "ExtraFermeDecouverte"
  | "ExtraFishMarket"
  | "ExtraFlowerVillage"
  | "ExtraFoodTruck"
  | "ExtraFood"
  | "ExtraFranceServices"
  | "ExtraGanaderia"
  | "ExtraGivingBox"
  | "ExtraGolf"
  | "ExtraGuidedHikes"
  | "ExtraGuidedTour"
  | "ExtraHikingBiking"
  | "ExtraHikingForest"
  | "ExtraHiking"
  | "ExtraHolyWell"
  | "ExtraHousePainter"
  | "ExtraIndustrialWarehouse"
  | "ExtraJoiner"
  | "ExtraKitchenDesigner"
  | "ExtraLaboratory"
  | "ExtraLeaf"
  | "ExtraLeisureSupply"
  | "ExtraLocalAuthority"
  | "ExtraLocalShopPrestige"
  | "ExtraLostProperty"
  | "ExtraMajorProjects"
  | "ExtraMedicalSupply"
  | "ExtraMotorway"
  | "ExtraMountainBike"
  | "ExtraMultimediaLibrary"
  | "ExtraNaturalSite"
  | "ExtraNatureReserve"
  | "ExtraNotary"
  | "ExtraOffice"
  | "ExtraOrganicStore"
  | "ExtraOtherSports"
  | "ExtraOysterHut"
  | "ExtraPaddle"
  | "ExtraPicnicPrestige"
  | "ExtraPineForest"
  | "ExtraPins"
  | "ExtraPodiatrist"
  | "ExtraPoint"
  | "ExtraPollingStation"
  | "ExtraRecycling"
  | "ExtraReflexology"
  | "ExtraRestaurantPrestige"
  | "ExtraRestricted"
  | "ExtraRoadworks"
  | "ExtraSharedGarden"
  | "ExtraSpeleology"
  | "ExtraSportsAndLeisures"
  | "ExtraSpotSurf"
  | "ExtraStrawberry"
  | "ExtraSurfhouses"
  | "ExtraTerraAventura"
  | "ExtraThermalEstablishment"
  | "ExtraThermalStation"
  | "ExtraToTakeAway"
  | "ExtraTown"
  | "ExtraTrip"
  | "ExtraUnavoidable"
  | "ExtraUnescoSite"
  | "ExtraUnusualAccommodation"
  | "ExtraUsefull"
  | "ExtraVineyard"
  | "ExtraWaterSports"
  | "ExtraWaterTour"
  | "ExtraWhelk"
  | "ExtraWifi"
  | "ExtraZipLine"
  | "Fabric"
  | "Farm"
  | "FastFood"
  | "FerryTerminal"
  | "FireStation"
  | "Firepit"
  | "FishingShop"
  | "Fishing"
  | "FitnessCentre"
  | "Florist"
  | "FoodBank"
  | "FoodCourt"
  | "FreeFlying"
  | "FrozenFood"
  | "Fuel"
  | "Furniture"
  | "Futsal"
  | "Gallery"
  | "Garden"
  | "General"
  | "Gift"
  | "GolfCourseMinor"
  | "GolfCourse"
  | "GraveYard"
  | "Greengrocer"
  | "GrindingMill"
  | "GuestHouse"
  | "Gymnastics"
  | "Hairdresser"
  | "Halt"
  | "Handball"
  | "Handicraft"
  | "Hardware"
  | "HealthcareCentre"
  | "HearingAids"
  | "Heritage"
  | "Hifi"
  | "HorseRacing"
  | "HorseRiding"
  | "Hospital"
  | "Hostel"
  | "Hosting"
  | "Hotel"
  | "IceCream"
  | "IceHockey"
  | "IceRink"
  | "InteriorDecoration"
  | "Jeweller"
  | "Jewelry"
  | "JuvenileYouthCentre"
  | "Karting"
  | "Kindergarten"
  | "Kiosk"
  | "Kitesurfing"
  | "Lamps"
  | "Laundry"
  | "Lavoir"
  | "Leather"
  | "Leisure"
  | "Library"
  | "LifeRing"
  | "LifeguardBase"
  | "LighthouseMinor"
  | "Lighthouse"
  | "LocalShop"
  | "LowerSecondaryEducation"
  | "Luthier"
  | "Mall"
  | "Marina"
  | "Marketplace"
  | "Massage"
  | "Memorial"
  | "MiniatureGolf"
  | "MobilePhone"
  | "Mobility"
  | "Monastery"
  | "Monument"
  | "Motel"
  | "Motocross"
  | "Motor"
  | "MotorcycleParking"
  | "MotorcycleRepair"
  | "Motorcycle"
  | "MotorwayJunction"
  | "MountainPass"
  | "MountainRescue"
  | "Multi"
  | "Museum"
  | "Music"
  | "MusicalInstrument"
  | "Nature"
  | "Newsagent"
  | "Nightclub"
  | "Nurse"
  | "Office"
  | "OilMill"
  | "Optician"
  | "Orienteering"
  | "Outdoor"
  | "PaddleTennis"
  | "Paintball"
  | "Park"
  | "Parking"
  | "Pastry"
  | "Pelota"
  | "Perfume"
  | "Perfumery"
  | "PetGrooming"
  | "Pet"
  | "Pharmacy"
  | "Photo"
  | "Photographer"
  | "Physiotherapist"
  | "PicnicSite"
  | "PicnicTable"
  | "Pitch"
  | "PlaceOfWorship"
  | "Playground"
  | "Police"
  | "PollingStation"
  | "PostBox"
  | "PostOffice"
  | "Pottery"
  | "PrePrimarySchool"
  | "PrimaryEducation"
  | "Prison"
  | "Products"
  | "Pub"
  | "PublicBath"
  | "PublicBookcase"
  | "PublicLandmark"
  | "Racquet"
  | "RecyclingCentre"
  | "Remarkable"
  | "Resort"
  | "Restaurant"
  | "Retail"
  | "RetirementHome"
  | "Rowing"
  | "RugbyLeague"
  | "RugbyUnion"
  | "Rugby"
  | "Running"
  | "Safety"
  | "Sailing"
  | "SanitaryDumpStation"
  | "School"
  | "ScubaDiving"
  | "Sculptor"
  | "Seafood"
  | "SecondHand"
  | "ServicesShopping"
  | "Services"
  | "Shelter"
  | "Shoemaker"
  | "Shoes"
  | "Shooting"
  | "Shopping"
  | "Shower"
  | "Skateboard"
  | "Soccer"
  | "SocialInformation"
  | "SocialServices"
  | "SportPractice"
  | "SportsCentre"
  | "Sports"
  | "Spring"
  | "Squash"
  | "Stadium"
  | "Station"
  | "Stationery"
  | "Stile"
  | "SubwayEntrance"
  | "Supermarket"
  | "SurfSchool"
  | "Surf"
  | "Surfing"
  | "SwimmingArea"
  | "SwimmingCentre"
  | "SwimmingPool"
  | "Swimming"
  | "TableSoccer"
  | "TableTennis"
  | "Tailor"
  | "Tattoo"
  | "Taxi"
  | "Telephone"
  | "Tennis"
  | "Theatre"
  | "ThemePark"
  | "Ticket"
  | "Tobacco"
  | "Toilets"
  | "TollBooth"
  | "TourismInformationTerminal"
  | "Tower"
  | "Townhall"
  | "Toys"
  | "TrainStationEntrance"
  | "TramStop"
  | "TravelAgency"
  | "Trinquete"
  | "University"
  | "UpperSecondaryEducation"
  | "VendingMachine"
  | "Veterinary"
  | "VideoGames"
  | "Video"
  | "Viewpoint"
  | "Volleyball"
  | "WasteBasket"
  | "WasteDisposal"
  | "Watches"
  | "WaterPark"
  | "WaterRescueStation"
  | "WaterSki"
  | "Waterfall"
  | "WaysideCross"
  | "WaysideShrine"
  | "Weapons"
  | "Wholesale"
  | "WildernessHut"
  | "WildlifeHide"
  | "Winery"
  | "WinterSports"
  | "Yoga"
  | "Zoo";

export enum Teritorio {
  Accessories = "accessories",
  AdvertisingBoard = "advertising_board",
  Aerodrome = "aerodrome",
  Agrarian = "agrarian",
  Alcohol = "alcohol",
  AlpineHut = "alpine_hut",
  Amenity = "amenity",
  AnimalBoarding = "animal_boarding",
  AnimalShelter = "animal_shelter",
  Antiques = "antiques",
  ApartmentRental = "apartment_rental",
  ApartmentResort = "apartment_resort",
  Aquarium = "aquarium",
  ArchaeologicalSite = "archaeological_site",
  Art = "art",
  ArtsCentre = "arts_centre",
  Artwork = "artwork",
  Athletics = "athletics",
  Atm = "atm",
  Attraction = "attraction",
  Badminton = "badminton",
  Bag = "bag",
  Bakery = "bakery",
  Bank = "bank",
  Bar = "bar",
  BasketMaker = "basket_maker",
  Basketball = "basketball",
  Bbq = "bbq",
  BeachResort = "beach_resort",
  Beach = "beach",
  Beachvolleyball = "beachvolleyball",
  Bed = "bed",
  Beekeeper = "beekeeper",
  Bench = "bench",
  Beverages = "beverages",
  BicycleDockingStation = "bicycle_docking_station",
  BicycleParking = "bicycle_parking",
  BicycleRental = "bicycle_rental",
  BicycleShop = "bicycle_shop",
  Billiards = "billiards",
  BirdHide = "bird_hide",
  Bmx = "bmx",
  BoardMap = "board_map",
  Books = "books",
  BorderControl = "border_control",
  Boules = "boules",
  Boutique = "boutique",
  BowlingAlley = "bowling_alley",
  Brewery = "brewery",
  Brownfield = "brownfield",
  Bullfighting = "bullfighting",
  Bullring = "bullring",
  BusStation = "bus_station",
  BusStop = "bus_stop",
  Butcher = "butcher",
  Cafe = "cafe",
  Camera = "camera",
  CampSite = "camp_site",
  Canoe = "canoe",
  CarParts = "car_parts",
  CarPooling = "car_pooling",
  CarRental = "car_rental",
  CarRepair = "car_repair",
  Car = "car",
  CaravanSite = "caravan_site",
  Carpet = "carpet",
  Casino = "casino",
  CastleWall = "castle_wall",
  Castle = "castle",
  Caterer = "caterer",
  Catering = "catering",
  Cathedral = "cathedral",
  CaveEntrance = "cave_entrance",
  Cemetery = "cemetery",
  Chalet = "chalet",
  Chapel = "chapel",
  ChargingStation = "charging_station",
  Charity = "charity",
  Cheese = "cheese",
  Chemist = "chemist",
  ChildYouthCentre = "child_youth_centre",
  Chocolate = "chocolate",
  ChurchHeritage = "church_heritage",
  Church = "church",
  Cinema = "cinema",
  CityGate = "city_gate",
  CityWall = "city_wall",
  ClimbingAdventure = "climbing_adventure",
  Climbing = "climbing",
  Clinic = "clinic",
  Clothes = "clothes",
  Coffee = "coffee",
  College = "college",
  CommunityCentre = "community_centre",
  CompressedAir = "compressed_air",
  Computer = "computer",
  Confectionery = "confectionery",
  Container = "container",
  Convenience = "convenience",
  Copyshop = "copyshop",
  Cosmetics = "cosmetics",
  Courthouse = "courthouse",
  CoworkingSpace = "coworking_space",
  Craft = "craft",
  CultureShopping = "culture_shopping",
  Culture = "culture",
  CycleBarrier = "cycle_barrier",
  Cycling = "cycling",
  Defibrillator = "defibrillator",
  Deli = "deli",
  Dentist = "dentist",
  DisabledHome = "disabled_home",
  Distillery = "distillery",
  Diving = "diving",
  Dock = "dock",
  Doctors = "doctors",
  DogExcrement = "dog_excrement",
  Doityourself = "doityourself",
  Dojo = "dojo",
  Dressmaker = "dressmaker",
  DrinkingWater = "drinking_water",
  DryCleaning = "dry_cleaning",
  Education = "education",
  ElderlyNursingHome = "elderly_nursing_home",
  Electronics = "electronics",
  Embassy = "embassy",
  Erotic = "erotic",
  EstateAgent = "estate_agent",
  ExtraAbbey = "extra-abbey",
  ExtraAeroport = "extra-aeroport",
  ExtraAesthetic = "extra-aesthetic",
  ExtraAmbassador = "extra-ambassador",
  ExtraApple = "extra-apple",
  ExtraBalneotherapy = "extra-balneotherapy",
  ExtraBicycleRepair = "extra-bicycle_repair",
  ExtraBikeRide = "extra-bike_ride",
  ExtraBungeeJumping = "extra-bungee_jumping",
  ExtraCannabis = "extra-cannabis",
  ExtraCanneryMakerPrestige = "extra-cannery_maker_prestige",
  ExtraCanneryMaker = "extra-cannery_maker",
  ExtraCanyoning = "extra-canyoning",
  ExtraCity = "extra-city",
  ExtraCraftPrestige = "extra-craft_prestige",
  ExtraCraft = "extra-craft",
  ExtraDelivery = "extra-delivery",
  ExtraDisabled = "extra-disabled",
  ExtraDogAllowed = "extra-dog_allowed",
  ExtraDrive = "extra-drive",
  ExtraEquipmentRental = "extra-equipment_rental",
  ExtraEscapeGame = "extra-escape_game",
  ExtraFamily = "extra-family",
  ExtraFermeDecouverte = "extra-ferme_decouverte",
  ExtraFishMarket = "extra-fish_market",
  ExtraFlowerVillage = "extra-flower_village",
  ExtraFoodTruck = "extra-food_truck",
  ExtraFood = "extra-food",
  ExtraFranceServices = "extra-france_services",
  ExtraGanaderia = "extra-ganaderia",
  ExtraGivingBox = "extra-giving_box",
  ExtraGolf = "extra-golf",
  ExtraGuidedHikes = "extra-guided_hikes",
  ExtraGuidedTour = "extra-guided_tour",
  ExtraHikingBiking = "extra-hiking_biking",
  ExtraHikingForest = "extra-hiking_forest",
  ExtraHiking = "extra-hiking",
  ExtraHolyWell = "extra-holy_well",
  ExtraHousePainter = "extra-house_painter",
  ExtraIndustrialWarehouse = "extra-industrial_warehouse",
  ExtraJoiner = "extra-joiner",
  ExtraKitchenDesigner = "extra-kitchen_designer",
  ExtraLaboratory = "extra-laboratory",
  ExtraLeaf = "extra-leaf",
  ExtraLeisureSupply = "extra-leisure_supply",
  ExtraLocalAuthority = "extra-local_authority",
  ExtraLocalShopPrestige = "extra-local_shop_prestige",
  ExtraLostProperty = "extra-lost_property",
  ExtraMajorProjects = "extra-major_projects",
  ExtraMedicalSupply = "extra-medical_supply",
  ExtraMotorway = "extra-motorway",
  ExtraMountainBike = "extra-mountain_bike",
  ExtraMultimediaLibrary = "extra-multimedia_library",
  ExtraNaturalSite = "extra-natural_site",
  ExtraNatureReserve = "extra-nature_reserve",
  ExtraNotary = "extra-notary",
  ExtraOffice = "extra-office",
  ExtraOrganicStore = "extra-organic_store",
  ExtraOtherSports = "extra-other_sports",
  ExtraOysterHut = "extra-oyster_hut",
  ExtraPaddle = "extra-paddle",
  ExtraPicnicPrestige = "extra-picnic_prestige",
  ExtraPineForest = "extra-pine_forest",
  ExtraPins = "extra-pins",
  ExtraPodiatrist = "extra-podiatrist",
  ExtraPoint = "extra-point",
  ExtraPollingStation = "extra-polling_station",
  ExtraRecycling = "extra-recycling",
  ExtraReflexology = "extra-reflexology",
  ExtraRestaurantPrestige = "extra-restaurant_prestige",
  ExtraRestricted = "extra-restricted",
  ExtraRoadworks = "extra-roadworks",
  ExtraSharedGarden = "extra-shared_garden",
  ExtraSpeleology = "extra-speleology",
  ExtraSportsAndLeisures = "extra-sports_and_leisures",
  ExtraSpotSurf = "extra-spot_surf",
  ExtraStrawberry = "extra-strawberry",
  ExtraSurfhouses = "extra-surfhouses",
  ExtraTerraAventura = "extra-terra_aventura",
  ExtraThermalEstablishment = "extra-thermal_establishment",
  ExtraThermalStation = "extra-thermal_station",
  ExtraToTakeAway = "extra-to_take_away",
  ExtraTown = "extra-town",
  ExtraTrip = "extra-trip",
  ExtraUnavoidable = "extra-unavoidable",
  ExtraUnescoSite = "extra-unesco_site",
  ExtraUnusualAccommodation = "extra-unusual_accommodation",
  ExtraUsefull = "extra-usefull",
  ExtraVineyard = "extra-vineyard",
  ExtraWaterSports = "extra-water_sports",
  ExtraWaterTour = "extra-water_tour",
  ExtraWhelk = "extra-whelk",
  ExtraWifi = "extra-WIFI",
  ExtraZipLine = "extra-zip_line",
  Fabric = "fabric",
  Farm = "farm",
  FastFood = "fast_food",
  FerryTerminal = "ferry_terminal",
  FireStation = "fire_station",
  Firepit = "firepit",
  FishingShop = "fishing_shop",
  Fishing = "fishing",
  FitnessCentre = "fitness_centre",
  Florist = "florist",
  FoodBank = "food_bank",
  FoodCourt = "food_court",
  FreeFlying = "free_flying",
  FrozenFood = "frozen_food",
  Fuel = "fuel",
  Furniture = "furniture",
  Futsal = "futsal",
  Gallery = "gallery",
  Garden = "garden",
  General = "general",
  Gift = "gift",
  GolfCourseMinor = "golf_course_minor",
  GolfCourse = "golf_course",
  GraveYard = "grave_yard",
  Greengrocer = "greengrocer",
  GrindingMill = "grinding_mill",
  GuestHouse = "guest_house",
  Gymnastics = "gymnastics",
  Hairdresser = "hairdresser",
  Halt = "halt",
  Handball = "handball",
  Handicraft = "handicraft",
  Hardware = "hardware",
  HealthcareCentre = "healthcare_centre",
  HearingAids = "hearing_aids",
  Heritage = "heritage",
  Hifi = "hifi",
  HorseRacing = "horse_racing",
  HorseRiding = "horse_riding",
  Hospital = "hospital",
  Hostel = "hostel",
  Hosting = "hosting",
  Hotel = "hotel",
  IceCream = "ice_cream",
  IceHockey = "ice_hockey",
  IceRink = "ice_rink",
  InteriorDecoration = "interior_decoration",
  Jeweller = "jeweller",
  Jewelry = "jewelry",
  JuvenileYouthCentre = "juvenile_youth_centre",
  Karting = "karting",
  Kindergarten = "kindergarten",
  Kiosk = "kiosk",
  Kitesurfing = "kitesurfing",
  Lamps = "lamps",
  Laundry = "laundry",
  Lavoir = "lavoir",
  Leather = "leather",
  Leisure = "leisure",
  Library = "library",
  LifeRing = "life_ring",
  LifeguardBase = "lifeguard_base",
  LighthouseMinor = "lighthouse_minor",
  Lighthouse = "lighthouse",
  LocalShop = "local_shop",
  LowerSecondaryEducation = "lower_secondary_education",
  Luthier = "luthier",
  Mall = "mall",
  Marina = "marina",
  Marketplace = "marketplace",
  Massage = "massage",
  Memorial = "memorial",
  MiniatureGolf = "miniature_golf",
  MobilePhone = "mobile_phone",
  Mobility = "mobility",
  Monastery = "monastery",
  Monument = "monument",
  Motel = "motel",
  Motocross = "motocross",
  Motor = "motor",
  MotorcycleParking = "motorcycle_parking",
  MotorcycleRepair = "motorcycle_repair",
  Motorcycle = "motorcycle",
  MotorwayJunction = "motorway_junction",
  MountainPass = "mountain_pass",
  MountainRescue = "mountain_rescue",
  Multi = "multi",
  Museum = "museum",
  Music = "music",
  MusicalInstrument = "musical_instrument",
  Nature = "nature",
  Newsagent = "newsagent",
  Nightclub = "nightclub",
  Nurse = "nurse",
  Office = "office",
  OilMill = "oil_mill",
  Optician = "optician",
  Orienteering = "orienteering",
  Outdoor = "outdoor",
  PaddleTennis = "paddle_tennis",
  Paintball = "paintball",
  Park = "park",
  Parking = "parking",
  Pastry = "pastry",
  Pelota = "pelota",
  Perfume = "perfume",
  Perfumery = "perfumery",
  PetGrooming = "pet_grooming",
  Pet = "pet",
  Pharmacy = "pharmacy",
  Photo = "photo",
  Photographer = "photographer",
  Physiotherapist = "physiotherapist",
  PicnicSite = "picnic_site",
  PicnicTable = "picnic_table",
  Pitch = "pitch",
  PlaceOfWorship = "place_of_worship",
  Playground = "playground",
  Police = "police",
  PollingStation = "polling_station",
  PostBox = "post_box",
  PostOffice = "post_office",
  Pottery = "pottery",
  PrePrimarySchool = "pre_primary_school",
  PrimaryEducation = "primary_education",
  Prison = "prison",
  Products = "products",
  Pub = "pub",
  PublicBath = "public_bath",
  PublicBookcase = "public_bookcase",
  PublicLandmark = "public_landmark",
  Racquet = "racquet",
  RecyclingCentre = "recycling_centre",
  Remarkable = "remarkable",
  Resort = "resort",
  Restaurant = "restaurant",
  Retail = "retail",
  RetirementHome = "retirement_home",
  Rowing = "rowing",
  RugbyLeague = "rugby_league",
  RugbyUnion = "rugby_union",
  Rugby = "rugby",
  Running = "running",
  Safety = "safety",
  Sailing = "sailing",
  SanitaryDumpStation = "sanitary_dump_station",
  School = "school",
  ScubaDiving = "scuba_diving",
  Sculptor = "sculptor",
  Seafood = "seafood",
  SecondHand = "second_hand",
  ServicesShopping = "services_shopping",
  Services = "services",
  Shelter = "shelter",
  Shoemaker = "shoemaker",
  Shoes = "shoes",
  Shooting = "shooting",
  Shopping = "shopping",
  Shower = "shower",
  Skateboard = "skateboard",
  Soccer = "soccer",
  SocialInformation = "social_information",
  SocialServices = "social_services",
  SportPractice = "sport_practice",
  SportsCentre = "sports_centre",
  Sports = "sports",
  Spring = "spring",
  Squash = "squash",
  Stadium = "stadium",
  Station = "station",
  Stationery = "stationery",
  Stile = "stile",
  SubwayEntrance = "subway_entrance",
  Supermarket = "supermarket",
  SurfSchool = "surf_school",
  Surf = "surf",
  Surfing = "surfing",
  SwimmingArea = "swimming_area",
  SwimmingCentre = "swimming_centre",
  SwimmingPool = "swimming_pool",
  Swimming = "swimming",
  TableSoccer = "table_soccer",
  TableTennis = "table_tennis",
  Tailor = "tailor",
  Tattoo = "tattoo",
  Taxi = "taxi",
  Telephone = "telephone",
  Tennis = "tennis",
  Theatre = "theatre",
  ThemePark = "theme_park",
  Ticket = "ticket",
  Tobacco = "tobacco",
  Toilets = "toilets",
  TollBooth = "toll_booth",
  TourismInformationTerminal = "tourism_information_terminal",
  Tower = "tower",
  Townhall = "townhall",
  Toys = "toys",
  TrainStationEntrance = "train_station_entrance",
  TramStop = "tram_stop",
  TravelAgency = "travel_agency",
  Trinquete = "trinquete",
  University = "university",
  UpperSecondaryEducation = "upper_secondary_education",
  VendingMachine = "vending_machine",
  Veterinary = "veterinary",
  VideoGames = "video_games",
  Video = "video",
  Viewpoint = "viewpoint",
  Volleyball = "volleyball",
  WasteBasket = "waste_basket",
  WasteDisposal = "waste_disposal",
  Watches = "watches",
  WaterPark = "water_park",
  WaterRescueStation = "water_rescue_station",
  WaterSki = "water_ski",
  Waterfall = "waterfall",
  WaysideCross = "wayside_cross",
  WaysideShrine = "wayside_shrine",
  Weapons = "weapons",
  Wholesale = "wholesale",
  WildernessHut = "wilderness_hut",
  WildlifeHide = "wildlife_hide",
  Winery = "winery",
  WinterSports = "winter_sports",
  Yoga = "yoga",
  Zoo = "zoo",
}

export const TERITORIO_CODEPOINTS: { [key in Teritorio]: string } = {
  [Teritorio.Accessories]: "61697",
  [Teritorio.AdvertisingBoard]: "61698",
  [Teritorio.Aerodrome]: "61699",
  [Teritorio.Agrarian]: "61700",
  [Teritorio.Alcohol]: "61701",
  [Teritorio.AlpineHut]: "61702",
  [Teritorio.Amenity]: "61703",
  [Teritorio.AnimalBoarding]: "61704",
  [Teritorio.AnimalShelter]: "61705",
  [Teritorio.Antiques]: "61706",
  [Teritorio.ApartmentRental]: "61707",
  [Teritorio.ApartmentResort]: "61708",
  [Teritorio.Aquarium]: "61709",
  [Teritorio.ArchaeologicalSite]: "61710",
  [Teritorio.Art]: "61711",
  [Teritorio.ArtsCentre]: "61712",
  [Teritorio.Artwork]: "61713",
  [Teritorio.Athletics]: "61714",
  [Teritorio.Atm]: "61715",
  [Teritorio.Attraction]: "61716",
  [Teritorio.Badminton]: "61717",
  [Teritorio.Bag]: "61718",
  [Teritorio.Bakery]: "61719",
  [Teritorio.Bank]: "61720",
  [Teritorio.Bar]: "61721",
  [Teritorio.BasketMaker]: "61722",
  [Teritorio.Basketball]: "61723",
  [Teritorio.Bbq]: "61724",
  [Teritorio.BeachResort]: "61725",
  [Teritorio.Beach]: "61726",
  [Teritorio.Beachvolleyball]: "61727",
  [Teritorio.Bed]: "61728",
  [Teritorio.Beekeeper]: "61729",
  [Teritorio.Bench]: "61730",
  [Teritorio.Beverages]: "61731",
  [Teritorio.BicycleDockingStation]: "61732",
  [Teritorio.BicycleParking]: "61733",
  [Teritorio.BicycleRental]: "61734",
  [Teritorio.BicycleShop]: "61735",
  [Teritorio.Billiards]: "61736",
  [Teritorio.BirdHide]: "61737",
  [Teritorio.Bmx]: "61738",
  [Teritorio.BoardMap]: "61739",
  [Teritorio.Books]: "61740",
  [Teritorio.BorderControl]: "61741",
  [Teritorio.Boules]: "61742",
  [Teritorio.Boutique]: "61743",
  [Teritorio.BowlingAlley]: "61744",
  [Teritorio.Brewery]: "61745",
  [Teritorio.Brownfield]: "61746",
  [Teritorio.Bullfighting]: "61747",
  [Teritorio.Bullring]: "61748",
  [Teritorio.BusStation]: "61749",
  [Teritorio.BusStop]: "61750",
  [Teritorio.Butcher]: "61751",
  [Teritorio.Cafe]: "61752",
  [Teritorio.Camera]: "61753",
  [Teritorio.CampSite]: "61754",
  [Teritorio.Canoe]: "61755",
  [Teritorio.CarParts]: "61756",
  [Teritorio.CarPooling]: "61757",
  [Teritorio.CarRental]: "61758",
  [Teritorio.CarRepair]: "61759",
  [Teritorio.Car]: "61760",
  [Teritorio.CaravanSite]: "61761",
  [Teritorio.Carpet]: "61762",
  [Teritorio.Casino]: "61763",
  [Teritorio.CastleWall]: "61764",
  [Teritorio.Castle]: "61765",
  [Teritorio.Caterer]: "61766",
  [Teritorio.Catering]: "61767",
  [Teritorio.Cathedral]: "61768",
  [Teritorio.CaveEntrance]: "61769",
  [Teritorio.Cemetery]: "61770",
  [Teritorio.Chalet]: "61771",
  [Teritorio.Chapel]: "61772",
  [Teritorio.ChargingStation]: "61773",
  [Teritorio.Charity]: "61774",
  [Teritorio.Cheese]: "61775",
  [Teritorio.Chemist]: "61776",
  [Teritorio.ChildYouthCentre]: "61777",
  [Teritorio.Chocolate]: "61778",
  [Teritorio.ChurchHeritage]: "61779",
  [Teritorio.Church]: "61780",
  [Teritorio.Cinema]: "61781",
  [Teritorio.CityGate]: "61782",
  [Teritorio.CityWall]: "61783",
  [Teritorio.ClimbingAdventure]: "61784",
  [Teritorio.Climbing]: "61785",
  [Teritorio.Clinic]: "61786",
  [Teritorio.Clothes]: "61787",
  [Teritorio.Coffee]: "61788",
  [Teritorio.College]: "61789",
  [Teritorio.CommunityCentre]: "61790",
  [Teritorio.CompressedAir]: "61791",
  [Teritorio.Computer]: "61792",
  [Teritorio.Confectionery]: "61793",
  [Teritorio.Container]: "61794",
  [Teritorio.Convenience]: "61795",
  [Teritorio.Copyshop]: "61796",
  [Teritorio.Cosmetics]: "61797",
  [Teritorio.Courthouse]: "61798",
  [Teritorio.CoworkingSpace]: "61799",
  [Teritorio.Craft]: "61800",
  [Teritorio.CultureShopping]: "61801",
  [Teritorio.Culture]: "61802",
  [Teritorio.CycleBarrier]: "61803",
  [Teritorio.Cycling]: "61804",
  [Teritorio.Defibrillator]: "61805",
  [Teritorio.Deli]: "61806",
  [Teritorio.Dentist]: "61807",
  [Teritorio.DisabledHome]: "61808",
  [Teritorio.Distillery]: "61809",
  [Teritorio.Diving]: "61810",
  [Teritorio.Dock]: "61811",
  [Teritorio.Doctors]: "61812",
  [Teritorio.DogExcrement]: "61813",
  [Teritorio.Doityourself]: "61814",
  [Teritorio.Dojo]: "61815",
  [Teritorio.Dressmaker]: "61816",
  [Teritorio.DrinkingWater]: "61817",
  [Teritorio.DryCleaning]: "61818",
  [Teritorio.Education]: "61819",
  [Teritorio.ElderlyNursingHome]: "61820",
  [Teritorio.Electronics]: "61821",
  [Teritorio.Embassy]: "61822",
  [Teritorio.Erotic]: "61823",
  [Teritorio.EstateAgent]: "61824",
  [Teritorio.ExtraAbbey]: "61825",
  [Teritorio.ExtraAeroport]: "61826",
  [Teritorio.ExtraAesthetic]: "61827",
  [Teritorio.ExtraAmbassador]: "61828",
  [Teritorio.ExtraApple]: "61829",
  [Teritorio.ExtraBalneotherapy]: "61830",
  [Teritorio.ExtraBicycleRepair]: "61831",
  [Teritorio.ExtraBikeRide]: "61832",
  [Teritorio.ExtraBungeeJumping]: "61833",
  [Teritorio.ExtraCannabis]: "61834",
  [Teritorio.ExtraCanneryMakerPrestige]: "61835",
  [Teritorio.ExtraCanneryMaker]: "61836",
  [Teritorio.ExtraCanyoning]: "61837",
  [Teritorio.ExtraCity]: "61838",
  [Teritorio.ExtraCraftPrestige]: "61839",
  [Teritorio.ExtraCraft]: "61840",
  [Teritorio.ExtraDelivery]: "61841",
  [Teritorio.ExtraDisabled]: "61842",
  [Teritorio.ExtraDogAllowed]: "61843",
  [Teritorio.ExtraDrive]: "61844",
  [Teritorio.ExtraEquipmentRental]: "61845",
  [Teritorio.ExtraEscapeGame]: "61846",
  [Teritorio.ExtraFamily]: "61847",
  [Teritorio.ExtraFermeDecouverte]: "61848",
  [Teritorio.ExtraFishMarket]: "61849",
  [Teritorio.ExtraFlowerVillage]: "61850",
  [Teritorio.ExtraFoodTruck]: "61851",
  [Teritorio.ExtraFood]: "61852",
  [Teritorio.ExtraFranceServices]: "61853",
  [Teritorio.ExtraGanaderia]: "61854",
  [Teritorio.ExtraGivingBox]: "61855",
  [Teritorio.ExtraGolf]: "61856",
  [Teritorio.ExtraGuidedHikes]: "61857",
  [Teritorio.ExtraGuidedTour]: "61858",
  [Teritorio.ExtraHikingBiking]: "61859",
  [Teritorio.ExtraHikingForest]: "61860",
  [Teritorio.ExtraHiking]: "61861",
  [Teritorio.ExtraHolyWell]: "61862",
  [Teritorio.ExtraHousePainter]: "61863",
  [Teritorio.ExtraIndustrialWarehouse]: "61864",
  [Teritorio.ExtraJoiner]: "61865",
  [Teritorio.ExtraKitchenDesigner]: "61866",
  [Teritorio.ExtraLaboratory]: "61867",
  [Teritorio.ExtraLeaf]: "61868",
  [Teritorio.ExtraLeisureSupply]: "61869",
  [Teritorio.ExtraLocalAuthority]: "61870",
  [Teritorio.ExtraLocalShopPrestige]: "61871",
  [Teritorio.ExtraLostProperty]: "61872",
  [Teritorio.ExtraMajorProjects]: "61873",
  [Teritorio.ExtraMedicalSupply]: "61874",
  [Teritorio.ExtraMotorway]: "61875",
  [Teritorio.ExtraMountainBike]: "61876",
  [Teritorio.ExtraMultimediaLibrary]: "61877",
  [Teritorio.ExtraNaturalSite]: "61878",
  [Teritorio.ExtraNatureReserve]: "61879",
  [Teritorio.ExtraNotary]: "61880",
  [Teritorio.ExtraOffice]: "61881",
  [Teritorio.ExtraOrganicStore]: "61882",
  [Teritorio.ExtraOtherSports]: "61883",
  [Teritorio.ExtraOysterHut]: "61884",
  [Teritorio.ExtraPaddle]: "61885",
  [Teritorio.ExtraPicnicPrestige]: "61886",
  [Teritorio.ExtraPineForest]: "61887",
  [Teritorio.ExtraPins]: "61888",
  [Teritorio.ExtraPodiatrist]: "61889",
  [Teritorio.ExtraPoint]: "61890",
  [Teritorio.ExtraPollingStation]: "61891",
  [Teritorio.ExtraRecycling]: "61892",
  [Teritorio.ExtraReflexology]: "61893",
  [Teritorio.ExtraRestaurantPrestige]: "61894",
  [Teritorio.ExtraRestricted]: "61895",
  [Teritorio.ExtraRoadworks]: "61896",
  [Teritorio.ExtraSharedGarden]: "61897",
  [Teritorio.ExtraSpeleology]: "61898",
  [Teritorio.ExtraSportsAndLeisures]: "61899",
  [Teritorio.ExtraSpotSurf]: "61900",
  [Teritorio.ExtraStrawberry]: "61901",
  [Teritorio.ExtraSurfhouses]: "61902",
  [Teritorio.ExtraTerraAventura]: "61903",
  [Teritorio.ExtraThermalEstablishment]: "61904",
  [Teritorio.ExtraThermalStation]: "61905",
  [Teritorio.ExtraToTakeAway]: "61906",
  [Teritorio.ExtraTown]: "61907",
  [Teritorio.ExtraTrip]: "61908",
  [Teritorio.ExtraUnavoidable]: "61909",
  [Teritorio.ExtraUnescoSite]: "61910",
  [Teritorio.ExtraUnusualAccommodation]: "61911",
  [Teritorio.ExtraUsefull]: "61912",
  [Teritorio.ExtraVineyard]: "61913",
  [Teritorio.ExtraWaterSports]: "61914",
  [Teritorio.ExtraWaterTour]: "61915",
  [Teritorio.ExtraWhelk]: "61916",
  [Teritorio.ExtraWifi]: "61917",
  [Teritorio.ExtraZipLine]: "61918",
  [Teritorio.Fabric]: "61919",
  [Teritorio.Farm]: "61920",
  [Teritorio.FastFood]: "61921",
  [Teritorio.FerryTerminal]: "61922",
  [Teritorio.FireStation]: "61923",
  [Teritorio.Firepit]: "61924",
  [Teritorio.FishingShop]: "61925",
  [Teritorio.Fishing]: "61926",
  [Teritorio.FitnessCentre]: "61927",
  [Teritorio.Florist]: "61928",
  [Teritorio.FoodBank]: "61929",
  [Teritorio.FoodCourt]: "61930",
  [Teritorio.FreeFlying]: "61931",
  [Teritorio.FrozenFood]: "61932",
  [Teritorio.Fuel]: "61933",
  [Teritorio.Furniture]: "61934",
  [Teritorio.Futsal]: "61935",
  [Teritorio.Gallery]: "61936",
  [Teritorio.Garden]: "61937",
  [Teritorio.General]: "61938",
  [Teritorio.Gift]: "61939",
  [Teritorio.GolfCourseMinor]: "61940",
  [Teritorio.GolfCourse]: "61941",
  [Teritorio.GraveYard]: "61942",
  [Teritorio.Greengrocer]: "61943",
  [Teritorio.GrindingMill]: "61944",
  [Teritorio.GuestHouse]: "61945",
  [Teritorio.Gymnastics]: "61946",
  [Teritorio.Hairdresser]: "61947",
  [Teritorio.Halt]: "61948",
  [Teritorio.Handball]: "61949",
  [Teritorio.Handicraft]: "61950",
  [Teritorio.Hardware]: "61951",
  [Teritorio.HealthcareCentre]: "61952",
  [Teritorio.HearingAids]: "61953",
  [Teritorio.Heritage]: "61954",
  [Teritorio.Hifi]: "61955",
  [Teritorio.HorseRacing]: "61956",
  [Teritorio.HorseRiding]: "61957",
  [Teritorio.Hospital]: "61958",
  [Teritorio.Hostel]: "61959",
  [Teritorio.Hosting]: "61960",
  [Teritorio.Hotel]: "61961",
  [Teritorio.IceCream]: "61962",
  [Teritorio.IceHockey]: "61963",
  [Teritorio.IceRink]: "61964",
  [Teritorio.InteriorDecoration]: "61965",
  [Teritorio.Jeweller]: "61966",
  [Teritorio.Jewelry]: "61967",
  [Teritorio.JuvenileYouthCentre]: "61968",
  [Teritorio.Karting]: "61969",
  [Teritorio.Kindergarten]: "61970",
  [Teritorio.Kiosk]: "61971",
  [Teritorio.Kitesurfing]: "61972",
  [Teritorio.Lamps]: "61973",
  [Teritorio.Laundry]: "61974",
  [Teritorio.Lavoir]: "61975",
  [Teritorio.Leather]: "61976",
  [Teritorio.Leisure]: "61977",
  [Teritorio.Library]: "61978",
  [Teritorio.LifeRing]: "61979",
  [Teritorio.LifeguardBase]: "61980",
  [Teritorio.LighthouseMinor]: "61981",
  [Teritorio.Lighthouse]: "61982",
  [Teritorio.LocalShop]: "61983",
  [Teritorio.LowerSecondaryEducation]: "61984",
  [Teritorio.Luthier]: "61985",
  [Teritorio.Mall]: "61986",
  [Teritorio.Marina]: "61987",
  [Teritorio.Marketplace]: "61988",
  [Teritorio.Massage]: "61989",
  [Teritorio.Memorial]: "61990",
  [Teritorio.MiniatureGolf]: "61991",
  [Teritorio.MobilePhone]: "61992",
  [Teritorio.Mobility]: "61993",
  [Teritorio.Monastery]: "61994",
  [Teritorio.Monument]: "61995",
  [Teritorio.Motel]: "61996",
  [Teritorio.Motocross]: "61997",
  [Teritorio.Motor]: "61998",
  [Teritorio.MotorcycleParking]: "61999",
  [Teritorio.MotorcycleRepair]: "62000",
  [Teritorio.Motorcycle]: "62001",
  [Teritorio.MotorwayJunction]: "62002",
  [Teritorio.MountainPass]: "62003",
  [Teritorio.MountainRescue]: "62004",
  [Teritorio.Multi]: "62005",
  [Teritorio.Museum]: "62006",
  [Teritorio.Music]: "62007",
  [Teritorio.MusicalInstrument]: "62008",
  [Teritorio.Nature]: "62009",
  [Teritorio.Newsagent]: "62010",
  [Teritorio.Nightclub]: "62011",
  [Teritorio.Nurse]: "62012",
  [Teritorio.Office]: "62013",
  [Teritorio.OilMill]: "62014",
  [Teritorio.Optician]: "62015",
  [Teritorio.Orienteering]: "62016",
  [Teritorio.Outdoor]: "62017",
  [Teritorio.PaddleTennis]: "62018",
  [Teritorio.Paintball]: "62019",
  [Teritorio.Park]: "62020",
  [Teritorio.Parking]: "62021",
  [Teritorio.Pastry]: "62022",
  [Teritorio.Pelota]: "62023",
  [Teritorio.Perfume]: "62024",
  [Teritorio.Perfumery]: "62025",
  [Teritorio.PetGrooming]: "62026",
  [Teritorio.Pet]: "62027",
  [Teritorio.Pharmacy]: "62028",
  [Teritorio.Photo]: "62029",
  [Teritorio.Photographer]: "62030",
  [Teritorio.Physiotherapist]: "62031",
  [Teritorio.PicnicSite]: "62032",
  [Teritorio.PicnicTable]: "62033",
  [Teritorio.Pitch]: "62034",
  [Teritorio.PlaceOfWorship]: "62035",
  [Teritorio.Playground]: "62036",
  [Teritorio.Police]: "62037",
  [Teritorio.PollingStation]: "62038",
  [Teritorio.PostBox]: "62039",
  [Teritorio.PostOffice]: "62040",
  [Teritorio.Pottery]: "62041",
  [Teritorio.PrePrimarySchool]: "62042",
  [Teritorio.PrimaryEducation]: "62043",
  [Teritorio.Prison]: "62044",
  [Teritorio.Products]: "62045",
  [Teritorio.Pub]: "62046",
  [Teritorio.PublicBath]: "62047",
  [Teritorio.PublicBookcase]: "62048",
  [Teritorio.PublicLandmark]: "62049",
  [Teritorio.Racquet]: "62050",
  [Teritorio.RecyclingCentre]: "62051",
  [Teritorio.Remarkable]: "62052",
  [Teritorio.Resort]: "62053",
  [Teritorio.Restaurant]: "62054",
  [Teritorio.Retail]: "62055",
  [Teritorio.RetirementHome]: "62056",
  [Teritorio.Rowing]: "62057",
  [Teritorio.RugbyLeague]: "62058",
  [Teritorio.RugbyUnion]: "62059",
  [Teritorio.Rugby]: "62060",
  [Teritorio.Running]: "62061",
  [Teritorio.Safety]: "62062",
  [Teritorio.Sailing]: "62063",
  [Teritorio.SanitaryDumpStation]: "62064",
  [Teritorio.School]: "62065",
  [Teritorio.ScubaDiving]: "62066",
  [Teritorio.Sculptor]: "62067",
  [Teritorio.Seafood]: "62068",
  [Teritorio.SecondHand]: "62069",
  [Teritorio.ServicesShopping]: "62070",
  [Teritorio.Services]: "62071",
  [Teritorio.Shelter]: "62072",
  [Teritorio.Shoemaker]: "62073",
  [Teritorio.Shoes]: "62074",
  [Teritorio.Shooting]: "62075",
  [Teritorio.Shopping]: "62076",
  [Teritorio.Shower]: "62077",
  [Teritorio.Skateboard]: "62078",
  [Teritorio.Soccer]: "62079",
  [Teritorio.SocialInformation]: "62080",
  [Teritorio.SocialServices]: "62081",
  [Teritorio.SportPractice]: "62082",
  [Teritorio.SportsCentre]: "62083",
  [Teritorio.Sports]: "62084",
  [Teritorio.Spring]: "62085",
  [Teritorio.Squash]: "62086",
  [Teritorio.Stadium]: "62087",
  [Teritorio.Station]: "62088",
  [Teritorio.Stationery]: "62089",
  [Teritorio.Stile]: "62090",
  [Teritorio.SubwayEntrance]: "62091",
  [Teritorio.Supermarket]: "62092",
  [Teritorio.SurfSchool]: "62093",
  [Teritorio.Surf]: "62094",
  [Teritorio.Surfing]: "62095",
  [Teritorio.SwimmingArea]: "62096",
  [Teritorio.SwimmingCentre]: "62097",
  [Teritorio.SwimmingPool]: "62098",
  [Teritorio.Swimming]: "62099",
  [Teritorio.TableSoccer]: "62100",
  [Teritorio.TableTennis]: "62101",
  [Teritorio.Tailor]: "62102",
  [Teritorio.Tattoo]: "62103",
  [Teritorio.Taxi]: "62104",
  [Teritorio.Telephone]: "62105",
  [Teritorio.Tennis]: "62106",
  [Teritorio.Theatre]: "62107",
  [Teritorio.ThemePark]: "62108",
  [Teritorio.Ticket]: "62109",
  [Teritorio.Tobacco]: "62110",
  [Teritorio.Toilets]: "62111",
  [Teritorio.TollBooth]: "62112",
  [Teritorio.TourismInformationTerminal]: "62113",
  [Teritorio.Tower]: "62114",
  [Teritorio.Townhall]: "62115",
  [Teritorio.Toys]: "62116",
  [Teritorio.TrainStationEntrance]: "62117",
  [Teritorio.TramStop]: "62118",
  [Teritorio.TravelAgency]: "62119",
  [Teritorio.Trinquete]: "62120",
  [Teritorio.University]: "62121",
  [Teritorio.UpperSecondaryEducation]: "62122",
  [Teritorio.VendingMachine]: "62123",
  [Teritorio.Veterinary]: "62124",
  [Teritorio.VideoGames]: "62125",
  [Teritorio.Video]: "62126",
  [Teritorio.Viewpoint]: "62127",
  [Teritorio.Volleyball]: "62128",
  [Teritorio.WasteBasket]: "62129",
  [Teritorio.WasteDisposal]: "62130",
  [Teritorio.Watches]: "62131",
  [Teritorio.WaterPark]: "62132",
  [Teritorio.WaterRescueStation]: "62133",
  [Teritorio.WaterSki]: "62134",
  [Teritorio.Waterfall]: "62135",
  [Teritorio.WaysideCross]: "62136",
  [Teritorio.WaysideShrine]: "62137",
  [Teritorio.Weapons]: "62138",
  [Teritorio.Wholesale]: "62139",
  [Teritorio.WildernessHut]: "62140",
  [Teritorio.WildlifeHide]: "62141",
  [Teritorio.Winery]: "62142",
  [Teritorio.WinterSports]: "62143",
  [Teritorio.Yoga]: "62144",
  [Teritorio.Zoo]: "62145",
};
