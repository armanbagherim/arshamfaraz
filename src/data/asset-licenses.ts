/**
 * Asset provenance. Replace an image by swapping the file in `public/assets`
 * and updating the matching row here; nothing else in the code needs to change.
 */
export type AssetRow = {
  /** Path under /public */
  file: string;
  /** Original work title on Wikimedia Commons */
  source: string;
  url: string;
  license: string;
  author: string;
};

export const assetLicenses: AssetRow[] = [
  {
    "file": "public/assets/catalog/art-deco-70-pine-street_1920.jpg",
    "source": "Art Deco elevator entrances in lobby of 70 Pine Street, New York, New York - 20221123.jpg",
    "url": "https://commons.wikimedia.org/wiki/File:Art%20Deco%20elevator%20entrances%20in%20lobby%20of%2070%20Pine%20Street%2C%20New%20York%2C%20New%20York%20-%2020221123.jpg",
    "license": "CC BY-SA 4.0",
    "author": "Andre Carrotflower"
  },
  {
    "file": "public/assets/catalog/art-deco-copper_1920.jpg",
    "source": "Bullocks Wilshire elevator door.jpg",
    "url": "https://commons.wikimedia.org/wiki/File:Bullocks%20Wilshire%20elevator%20door.jpg",
    "license": "CC BY-SA 4.0",
    "author": "Craig Baker"
  },
  {
    "file": "public/assets/catalog/art-deco-elevator-hotel_1920.jpg",
    "source": "Elevator, Royal Hawaiian Hotel, Kalakaua Avenue, Waikiki, Honolulu, HI.jpg",
    "url": "https://commons.wikimedia.org/wiki/File:Elevator%2C%20Royal%20Hawaiian%20Hotel%2C%20Kalakaua%20Avenue%2C%20Waikiki%2C%20Honolulu%2C%20HI.jpg",
    "license": "CC BY-SA 2.0",
    "author": "w_lemay"
  },
  {
    "file": "public/assets/catalog/art-deco-elevator_lobby_1920.jpg",
    "source": "Elevator Lobby, Arizona Biltmore Hotel, Missouri Ave, Biltmore Area, Phoenix, AZ.jpg",
    "url": "https://commons.wikimedia.org/wiki/File:Elevator%20Lobby%2C%20Arizona%20Biltmore%20Hotel%2C%20Missouri%20Ave%2C%20Biltmore%20Area%2C%20Phoenix%2C%20AZ.jpg",
    "license": "CC BY-SA 2.0",
    "author": "w_lemay"
  },
  {
    "file": "public/assets/catalog/archive-otis-door-detail_1920.jpg",
    "source": "Interior view 1928-29 building, second floor, 1928 Otis elevator door detail - L. S. Ayres and Company Department Store, 1 West Washington Street, Indianapolis, Marion County, IN HABS IND,49-IND,45-40.tif",
    "url": "https://commons.wikimedia.org/wiki/File:Interior%20view%201928-29%20building%2C%20second%20floor%2C%201928%20Otis%20elevator%20door%20detail%20-%20L.%20S.%20Ayres%20and%20Company%20Department%20Store%2C%201%20West%20Washington%20Street%2C%20Indianapolis%2C%20Marion%20County%2C%20IN%20HABS%20IND%2C49-IND%2C45-40.tif",
    "license": "Public domain",
    "author": "—"
  },
  {
    "file": "public/assets/catalog/atnt-long-distance_1920.jpg",
    "source": "Art Deco Elevator Corridor AT&T Long Distance Building Lobby.jpg",
    "url": "https://commons.wikimedia.org/wiki/File:Art%20Deco%20Elevator%20Corridor%20AT%26T%20Long%20Distance%20Building%20Lobby.jpg",
    "license": "CC BY-SA 4.0",
    "author": "AnneRuthmann"
  },
  {
    "file": "public/assets/catalog/bronze-etch-dore_1920.jpg",
    "source": "Elevator Door, Lobby, Severance Hall, University Circle, Cleveland, OH.jpg",
    "url": "https://commons.wikimedia.org/wiki/File:Elevator%20Door%2C%20Lobby%2C%20Severance%20Hall%2C%20University%20Circle%2C%20Cleveland%2C%20OH.jpg",
    "license": "CC BY-SA 2.0",
    "author": "w_lemay"
  },
  {
    "file": "public/assets/catalog/bronze-heritage-doors_1920.jpg",
    "source": "Elevator doors, Marines' Memorial Hotel.JPG",
    "url": "https://commons.wikimedia.org/wiki/File:Elevator%20doors%2C%20Marines'%20Memorial%20Hotel.JPG",
    "license": "CC0",
    "author": "Wmpearl"
  },
  {
    "file": "public/assets/catalog/bronze-heritage-lift_1920.jpg",
    "source": "Brisbane City Hall lift interior.jpg",
    "url": "https://commons.wikimedia.org/wiki/File:Brisbane%20City%20Hall%20lift%20interior.jpg",
    "license": "CC BY-SA 4.0",
    "author": "Kgbo"
  },
  {
    "file": "public/assets/catalog/car-operating-panel_1920.jpg",
    "source": "1990 Dover-Miami Hydraulic Elevator - car operating panel.jpg",
    "url": "https://commons.wikimedia.org/wiki/File:1990%20Dover-Miami%20Hydraulic%20Elevator%20-%20car%20operating%20panel.jpg",
    "license": "CC0",
    "author": "Winnebaggo"
  },
  {
    "file": "public/assets/catalog/chrysler_1920.jpg",
    "source": "Chrysler Central Elevator 2019-10-03 20-18.jpg",
    "url": "https://commons.wikimedia.org/wiki/File:Chrysler%20Central%20Elevator%202019-10-03%2020-18.jpg",
    "license": "CC BY-SA 4.0",
    "author": "Axel Tschentscher"
  },
  {
    "file": "public/assets/catalog/destination-dispatch-doors_1920.jpg",
    "source": "DestinationDispatchElevator2.jpg",
    "url": "https://commons.wikimedia.org/wiki/File:DestinationDispatchElevator2.jpg",
    "license": "CC0",
    "author": "Raysonho @ Open Grid Scheduler / Grid Engine"
  },
  {
    "file": "public/assets/catalog/elevated-lobby_1920.jpg",
    "source": "Elevator lobby, Robert N.C. Nix Federal Building, Philadelphia, Pennsylvania LCCN2010718965.tif",
    "url": "https://commons.wikimedia.org/wiki/File:Elevator%20lobby%2C%20Robert%20N.C.%20Nix%20Federal%20Building%2C%20Philadelphia%2C%20Pennsylvania%20LCCN2010718965.tif",
    "license": "Public domain",
    "author": "Carol M. Highsmith"
  },
  {
    "file": "public/assets/catalog/elevator-buttons-detail_1920.jpg",
    "source": "Elevator Buttons, Asheville City Hall, Court Plaza, Asheville, NC - 53419618414.jpg",
    "url": "https://commons.wikimedia.org/wiki/File:Elevator%20Buttons%2C%20Asheville%20City%20Hall%2C%20Court%20Plaza%2C%20Asheville%2C%20NC%20-%2053419618414.jpg",
    "license": "CC BY-SA 2.0",
    "author": "w_lemay"
  },
  {
    "file": "public/assets/catalog/elevator-interior-gold_1920.jpg",
    "source": "Lift interior at Emporium Hotel South Bank, Brisbane.jpg",
    "url": "https://commons.wikimedia.org/wiki/File:Lift%20interior%20at%20Emporium%20Hotel%20South%20Bank%2C%20Brisbane.jpg",
    "license": "CC BY-SA 4.0",
    "author": "Kgbo"
  },
  {
    "file": "public/assets/catalog/elevator-interior-tv_1920.jpg",
    "source": "Lift car interior at The Terrace, Emporium Hotel South Bank 01.jpg",
    "url": "https://commons.wikimedia.org/wiki/File:Lift%20car%20interior%20at%20The%20Terrace%2C%20Emporium%20Hotel%20South%20Bank%2001.jpg",
    "license": "CC BY-SA 4.0",
    "author": "Kgbo"
  },
  {
    "file": "public/assets/catalog/glass-elevator-interior_1920.jpg",
    "source": "Lift 109 Battersea Power Station - 53077581728.jpg",
    "url": "https://commons.wikimedia.org/wiki/File:Lift%20109%20Battersea%20Power%20Station%20-%2053077581728.jpg",
    "license": "CC BY-SA 2.0",
    "author": "amandabhslater"
  },
  {
    "file": "public/assets/catalog/glass-elevator-structure_1920.jpg",
    "source": "Looking E- Lift 109 Battersea Power Station.jpg",
    "url": "https://commons.wikimedia.org/wiki/File:Looking%20E-%20Lift%20109%20Battersea%20Power%20Station.jpg",
    "license": "CC BY-SA 2.0",
    "author": "amandabhslater"
  },
  {
    "file": "public/assets/catalog/heritage-panel_1920.jpg",
    "source": "Budapest, Tátra utca 12a, 8.jpg",
    "url": "https://commons.wikimedia.org/wiki/File:Budapest%2C%20T%C3%A1tra%20utca%2012a%2C%208.jpg",
    "license": "CC BY-SA 4.0",
    "author": "Christo"
  },
  {
    "file": "public/assets/catalog/hydraulic-brass-cabin_1920.jpg",
    "source": "Schindler 330A hydraulic elevator interior with cascading doors.jpg",
    "url": "https://commons.wikimedia.org/wiki/File:Schindler%20330A%20hydraulic%20elevator%20interior%20with%20cascading%20doors.jpg",
    "license": "CC BY 4.0",
    "author": "Baron Maddock"
  },
  {
    "file": "public/assets/catalog/interior-modern-branch_1920.jpg",
    "source": "New childrens hospital helsinki elevator interior 01.jpg",
    "url": "https://commons.wikimedia.org/wiki/File:New%20childrens%20hospital%20helsinki%20elevator%20interior%2001.jpg",
    "license": "CC BY-SA 4.0",
    "author": "Sinikka Halme"
  },
  {
    "file": "public/assets/catalog/otis-hydrofit-panel_1920.jpg",
    "source": "Otis HydroFit elevator panel.jpg",
    "url": "https://commons.wikimedia.org/wiki/File:Otis%20HydroFit%20elevator%20panel.jpg",
    "license": "CC0",
    "author": "Winnebaggo"
  },
  {
    "file": "public/assets/catalog/tower-lift-facade_1920.jpg",
    "source": "Golden Crown China Hotel lift 12-09-2026.jpg",
    "url": "https://commons.wikimedia.org/wiki/File:Golden%20Crown%20China%20Hotel%20lift%2012-09-2026.jpg",
    "license": "CC BY-SA 4.0",
    "author": "LN9267"
  },
  {
    "file": "public/assets/catalog/vintage-wood-cabin_1920.jpg",
    "source": "Interior of a vintage Montgomery elevator with a modified controller.jpg",
    "url": "https://commons.wikimedia.org/wiki/File:Interior%20of%20a%20vintage%20Montgomery%20elevator%20with%20a%20modified%20controller.jpg",
    "license": "CC BY 4.0",
    "author": "Baron Maddock"
  },
  {
    "file": "public/assets/catalog/wooden-elevator-interior_1920.jpg",
    "source": "Cabine Haussmann .jpg",
    "url": "https://commons.wikimedia.org/wiki/File:Cabine%20Haussmann%20.jpg",
    "license": "CC BY-SA 4.0",
    "author": "Johannginger"
  },
  {
    "file": "public/assets/catalog/wooden-elevator-panels_1920.jpg",
    "source": "Cabine type.jpg",
    "url": "https://commons.wikimedia.org/wiki/File:Cabine%20type.jpg",
    "license": "CC BY-SA 4.0",
    "author": "Johannginger"
  },
  {
    "file": "public/assets/technical/elevator-machine-room_1920.jpg",
    "source": "Elevator machine room.jpg",
    "url": "https://commons.wikimedia.org/wiki/File:Elevator%20machine%20room.jpg",
    "license": "CC BY-SA 4.0",
    "author": "Filip.vidinovski"
  },
  {
    "file": "public/assets/technical/elevator-motor_1920.jpg",
    "source": "Elevator motor in machine room.jpg",
    "url": "https://commons.wikimedia.org/wiki/File:Elevator%20motor%20in%20machine%20room.jpg",
    "license": "CC BY 4.0",
    "author": "Darklanlan"
  },
  {
    "file": "public/assets/technical/hydraulic-plant_1920.jpg",
    "source": "20110712 bruxelles018.jpg",
    "url": "https://commons.wikimedia.org/wiki/File:20110712%20bruxelles018.jpg",
    "license": "CC BY-SA 3.0",
    "author": "Jean Housen"
  },
  {
    "file": "public/assets/materials/marble-white_1280.jpg",
    "source": "Marble001 8K Color.png",
    "url": "https://commons.wikimedia.org/wiki/File:Marble001%208K%20Color.png",
    "license": "CC0",
    "author": "ambientCG.com / Lennart Demes"
  },
  {
    "file": "public/assets/materials/marble-cream_1280.jpg",
    "source": "Marble002 8K Color.png",
    "url": "https://commons.wikimedia.org/wiki/File:Marble002%208K%20Color.png",
    "license": "CC0",
    "author": "ambientCG.com / Lennart Demes"
  },
  {
    "file": "public/assets/materials/marble-noir_1280.jpg",
    "source": "Marble005 8K Color.png",
    "url": "https://commons.wikimedia.org/wiki/File:Marble005%208K%20Color.png",
    "license": "CC BY-SA 4.0",
    "author": "Sinikka Halme"
  },
  {
    "file": "public/assets/materials/marble-green_1280.jpg",
    "source": "Marble004 8K Color.png",
    "url": "https://commons.wikimedia.org/wiki/File:Marble004%208K%20Color.png",
    "license": "CC0",
    "author": "ambientCG.com / Lennart Demes"
  },
  {
    "file": "public/assets/materials/travertine-ballast_1280.jpg",
    "source": "Travertine003 8K-PNG Color.png",
    "url": "https://commons.wikimedia.org/wiki/File:Travertine003%208K-PNG%20Color.png",
    "license": "CC0",
    "author": "ambientCG.com / Lennart Demes"
  },
  {
    "file": "public/assets/materials/leather_1280.jpg",
    "source": "Leather001 4K Color.png",
    "url": "https://commons.wikimedia.org/wiki/File:Leather001%204K%20Color.png",
    "license": "CC0",
    "author": "ambientCG.com / Lennart Demes"
  },
  {
    "file": "public/assets/materials/steel-plate_1280.jpg",
    "source": "MetalPlates001 4K Color.png",
    "url": "https://commons.wikimedia.org/wiki/File:MetalPlates001%204K%20Color.png",
    "license": "CC0",
    "author": "ambientCG.com / Lennart Demes"
  }
];

/** Company documents held in the project (not third-party assets). */
export const companyDocuments = [
  {
    file: "public/assets/brand/design-license.jpg",
    title: "پروانه واحد طراحی و مونتاژ آسانسور",
    detail: "سازمان صنایع و معادن استان تهران · شماره ۹۵۱۹۸ · ۱۳۹۷/۱۱/۰۸",
  },
  {
    file: "public/assets/brand/iseei-oath.jpg",
    title: "سوگندنامه عضویت در سندیکای صنایع آسانسور و پله برقی ایران (ISEEI)",
    detail: "سند داخلی مجموعه",
  },
];

/**
 * Technical references behind the numbers quoted in the catalog copy.
 * Claims without a source here are written as design proposals, not facts.
 */
export const technicalSources = [
  { claim: "EN 81-20:2020 / EN 81-50:2020 — safety and testing of new lifts", url: "https://webstore.ansi.org/standards/ds/dsen81202020" },
  { claim: "EN 81-28 — emergency communication", url: "https://elevatorworld.com/article/communication-systems-in-elevators-and-en-81-28/" },
  { claim: "EN 81-70:2021+A1:2022 — accessibility (handrail 900±25 mm, door 900 mm, car type 2)", url: "https://www.leia.co.uk/wp-content/uploads/2024/07/QTC-N2424-ELA_Information-Note-EN-81-70.pdf" },
  { claim: "75 kg per person and car area limits", url: "https://elevatorworld.com/article/rated-load-and-maximum-available-car-area/" },
  { claim: "Hydraulic speed ≈1 m/s and starting frequency", url: "https://blain.de/wp-content/uploads/2015/12/Why_hydraulic_elevators_are_so_popular-Part2.pdf" },
  { claim: "Machine-room-less (MRL) trade-offs", url: "https://www.tkelevator.com/us-en/company/insights/traction-conventional-vs-traction-mrl.html" },
  { claim: "Door types (centre opening, two-speed, telescopic)", url: "https://elevatorworld.com/article/vt-safety/" },
  { claim: "Automatic rescue device (ARD) behaviour", url: "https://www.ti.com/document-viewer/lit/html/SSZT421" },
  { claim: "PVD and brushed stainless finishes", url: "https://www.tbkmetal.com/products/stainless-steel-elevator-panels/" },
  { claim: "ISEEI official name", url: "http://iseei.net/" },
];
