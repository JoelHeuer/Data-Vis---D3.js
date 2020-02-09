/*  Wenn Fachbereich wie "Informatik" ausgewaehlt wird,
 *      -   werden die values geupdatet 
 *      -   value als array und die indizes stehen fuer: allgemein-informatik-mathe-...-
 */


/*===============================[GENERAL]==============================*/
const bundeslaenderNames = [
    "Mecklenburg-Vorpommern",
    "Schleswig-Holstein",
    "Niedersachsen",
    "Bremen",

    "Sachsen-Anhalt",
    "Brandenburg",
    "Berlin",
    "Nordrhein-Westfalen",

    "Hessen",
    "Thüringen",
    "Sachsen",
    "Rheinland-Pfalz",

    "Saarland",
    "Baden-Württemberg",
    "Bayern",
    "Hamburg"
];
const lenBundeslaenderNames = bundeslaenderNames.length;

/* possibilities for review_board in csv-files */
const reviewBoards = [
    "Alle",
    "Theologie",
    "Informatik",
    "Mathematik",
    "Sprachwissenschaften",
    "Psychologie"
];
const lenReviewBoards = reviewBoards.length;


/*  Strings for radar-chart axis-labels */
const RADAR_AXIS_LABELS = {
    BIP                 :   "BIP",
    INSTITUTE           :   "Institute",
    PROJEKTE            :   "Projekte",
    SPEZIALISIERUNG     :   "Spezialisierungen",
    FINANZIERUNGSDAUER  :   "Finanzierungsrate"
}

const CSV_KEYS = {
    BUNDESLAND              :   "bundesland",
    REVIEW_BOARD            :   "review_board",

    BIP                     :   "bip",
    MAX_BIP                 :   "max_bip",
    PER_BIP                 :   "%bip",
    
    ANZ_SUBJECT_AREA        :   "#subject_area",
    MAX_SUBJECT_AREA        :   "max_subject_area",
    PER_SUBJECT_AREA        :   "%subject_area",
    
    ANZ_INSTITUTION_ID      :   "#institution_id",
    MAX_INSTITUTION_ID      :   "max_institution_id",
    PER_INSTITUTION_ID      :   "%institution_id",

    ANZ_PROJECT_ID          :   "#project_id",
    MAX_PROJECT_ID          :   "max_project_id",
    PER_PROJECT_ID          :   "%project_id",

    AVG_FUNDATION_DUR       :   "average_fundation",
    MAX_AVG_FUNDATION_DUR   :   "max_average_fundation",
    PER_AVG_FUNDATION_DUR   :   "%average_fundation"
};

const csvKeys_value = [
    CSV_KEYS.PER_BIP,
    CSV_KEYS.PER_INSTITUTION_ID,
    CSV_KEYS.PER_PROJECT_ID,
    CSV_KEYS.PER_SUBJECT_AREA,
    CSV_KEYS.PER_AVG_FUNDATION_DUR
];

const csvKeys_valueAbsolute = [
    CSV_KEYS.BIP,
    CSV_KEYS.ANZ_INSTITUTION_ID,
    CSV_KEYS.ANZ_PROJECT_ID,
    CSV_KEYS.ANZ_SUBJECT_AREA,
    CSV_KEYS.AVG_FUNDATION_DUR
];

/*==============================[EXPORT_D3_all.csv]=============================*/
/**
 *  variable for imported csv-Data (EXPORT_D3_all.csv)
 */
let supportData = [];

/**
 * creates new array for supportData based on csv-file
 */
function initSupportData(csv){

    let bundesland = csv[0][CSV_KEYS.BUNDESLAND]

    let newArray = [
        {   axis: RADAR_AXIS_LABELS.BIP,                value: [],  valueAbsolute: [],  name: bundesland    },
        {   axis: RADAR_AXIS_LABELS.INSTITUTE,          value: [],  valueAbsolute: [],  name: bundesland    },
        {   axis: RADAR_AXIS_LABELS.PROJEKTE,           value: [],  valueAbsolute: [],  name: bundesland    },
        {   axis: RADAR_AXIS_LABELS.SPEZIALISIERUNG,    value: [],  valueAbsolute: [],  name: bundesland    } ,
        {   axis: RADAR_AXIS_LABELS.FINANZIERUNGSDAUER, value: [],  valueAbsolute: [],  name: bundesland    },
    ];
    let lenNewArray = newArray.length;

    /*  fill value-array vertically */


    // for each position in value-array
    for(let i_reviewBoard =0; i_reviewBoard <lenReviewBoards; i_reviewBoard++){
        // for each entry in newArray
        for(let i_keys =0; i_keys < lenNewArray; i_keys++){
            newArray[i_keys].value[i_reviewBoard]           = csv[i_reviewBoard][csvKeys_value[i_keys]];
            newArray[i_keys].valueAbsolute[i_reviewBoard]   = csv[i_reviewBoard][csvKeys_valueAbsolute[i_keys]];

        }
    }
    
    supportData = newArray;

}

/*=======================[EXPORT_D3_compressed_percentage.csv]======================*/


var bundeslaenderObjectData = [
    // Mecklenburg-Vorpommern
    [
        {   axis: "BIP", value: [0.23 ,0.22], name: "Mecklenburg-Vorpommern"   },
        {   axis: "Institute", value: [0.54 ,0.43], name: "Mecklenburg-Vorpommern"   },
        {   axis: "Projekte", value: [0.64 ,0.27 ], name: "Mecklenburg-Vorpommern"    },
        {   axis: "Forscher", value: [0.47 ,0.64], name: "Mecklenburg-Vorpommern"     },
        {   axis: "Spezialisierung", value: [0.68 ,0.06], name: "Mecklenburg-Vorpommern"     }
    ],
    // Schleswig-Holstein,
    [
        {   axis: "BIP", value: [0.75 ,0.43], name: "Schleswig-Holstein"     },
        {   axis: "Institute", value: [0.50 ,0.65], name: "Schleswig-Holstein"       },
        {   axis: "Projekte", value: [0.10 ,0.34], name: "Schleswig-Holstein"       },
        {   axis: "Forscher", value: [0.25 ,0.05 ], name: "Schleswig-Holstein"      },
        {   axis: "Spezialisierung", value: [0.64 ,0.33 ], name: "Schleswig-Holstein"      }
    ],
    // Niedersachsen
    [
        {   axis: "BIP", value: [0.55 ,0.22], name: "Niedersachsen"       },
        {   axis: "Institute", value: [0.44 ,0.43 ], name: "Niedersachsen"    },
        {   axis: "Projekte", value: [0.55 ,0.58  ], name: "Niedersachsen"   },
        {   axis: "Forscher", value: [0.12 ,0.95  ], name: "Niedersachsen"   },
        {   axis: "Spezialisierung", value: [0.86 ,0.12 ], name: "Niedersachsen"    }
    ],
    //  Bremen
    [
        {   axis: "BIP", value: [0.68 ,0.44 ], name: "Bremen"    },
        {   axis: "Institute", value: [0.85 ,0.76 ], name: "Bremen"     },
        {   axis: "Projekte", value: [0.74 ,0.44   ], name: "Bremen"    },
        {   axis: "Forscher", value: [0.23 ,0.34    ], name: "Bremen"   },
        {   axis: "Spezialisierung", value: [0.65 ,0.36   ], name: "Bremen"    }
    ],
    // Sachsen-Anhalt
    [
        {   axis: "BIP", value: [0.55 ,0.97  ], name: "Sachsen-Anhalt"      },
        {   axis: "Institute", value: [0.54 ,0.54   ], name: "Sachsen-Anhalt"    },
        {   axis: "Projekte", value: [0.23 ,0.33 ], name: "Sachsen-Anhalt"      },
        {   axis: "Forscher", value: [0.41 ,0.43 ], name: "Sachsen-Anhalt"      },
        {   axis: "Spezialisierung", value: [0.75 ,0.32 ], name: "Sachsen-Anhalt"      }
    ],
    // Brandenburg
    [
        {   axis: "BIP", value: [0.55 ,0.08 ], name: "Brandenburg"      },
        {   axis: "Institute", value: [0.34 ,0.08 ], name: "Brandenburg"      },
        {   axis: "Projekte", value: [0.10 ,0.56 ], name: "Brandenburg"     },
        {   axis: "Forscher", value: [0.54 ,0.32 ], name: "Brandenburg"     },
        {   axis: "Spezialisierung", value: [0.65 ,0.65 ], name: "Brandenburg"     }
    ],
  
    //  Berlin
    [
        {   axis: "BIP", value: [0.57 ,0.65 ], name: "Berlin"      },
        {   axis: "Institute", value: [0.86 ,0.97 ], name: "Berlin"      },
        {   axis: "Projekte", value: [0.82 ,0.32 ], name: "Berlin"     },
        {   axis: "Forscher", value: [0.65 ,0.13 ], name: "Berlin"     },
        {   axis: "Spezialisierung", value: [0.10 ,0.64 ], name: "Berlin"     }
    ],
    // Nordrhein-Westfalen
    [
        {   axis: "BIP", value: [0.62 ,0.23 ], name: "Nordrhein-Westfalen"      },
        {   axis: "Institute", value: [0.32 ,0.45 ], name: "Nordrhein-Westfalen"      },
        {   axis: "Projekte", value: [0.10 ,0.76 ], name: "Nordrhein-Westfalen"     },
        {   axis: "Forscher", value: [0.20 ,0.13 ], name: "Nordrhein-Westfalen"     },
        {   axis: "Spezialisierung", value: [0.45 ,0.67 ], name: "Nordrhein-Westfalen"     }
    ],
    // Hessen
    [
        {   axis: "BIP", value: [0.3 ,0.98 ], name: "Hessen"      },
        {   axis: "Institute", value: [0.5 ,0.45 ], name: "Hessen"      },
        {   axis: "Projekte", value: [0.32 ,0.48 ], name: "Hessen"     },
        {   axis: "Forscher", value: [0.3 ,0.24 ], name: "Hessen"     },
        {   axis: "Spezialisierung", value: [0.52 ,0.56 ], name: "Hessen"     }
    ],
    //  Thueringen
    [
        {   axis: "BIP", value: [0.10 ,0.65 ], name: "Thüringen"      },
        {   axis: "Institute", value: [0.33 ,0.45 ], name: "Thüringen"      },
        {   axis: "Projekte", value: [0.54 ,0.54 ], name: "Thüringen"     },
        {   axis: "Forscher", value: [0.78 ,0.12 ], name: "Thüringen"     },
        {   axis: "Spezialisierung", value: [0.65 ,0.32 ], name: "Thüringen"     }
    ],
    // Sachsen
    [
        {   axis: "BIP", value: [0.34 ,0.65 ], name: "Sachsen"      },
        {   axis: "Institute", value: [0.25 ,0.32 ], name: "Sachsen"      },
        {   axis: "Projekte", value: [0.43 ,0.45 ], name: "Sachsen"     },
        {   axis: "Forscher", value: [0.63 ,0.67 ], name: "Sachsen"     },
        {   axis: "Spezialisierung", value: [0.42 ,0.24 ], name: "Sachsen"     }
    ],
    //  Rheinland-Pfalz
    [
        {   axis: "BIP", value: [0.95 ,0.75 ], name: "Rheinland-Pfalz"      },
        {   axis: "Institute", value: [0.36 ,0.12 ], name: "Rheinland-Pfalz"      },
        {   axis: "Projekte", value: [0.41 ,0.76 ], name: "Rheinland-Pfalz"     },
        {   axis: "Forscher", value: [0.24 ,0.32 ], name: "Rheinland-Pfalz"     },
        {   axis: "Spezialisierung", value: [0.02 ,0.54 ], name: "Rheinland-Pfalz"     }
    ],
    // Saarland
    [
        {   axis: "BIP", value: [0.05 ,0.87 ], name: "Saarland"      },
        {   axis: "Institute", value: [0.42 ,0.32 ], name: "Saarland"      },
        {   axis: "Projekte", value: [0.65 ,0.34 ], name: "Saarland"     },
        {   axis: "Forscher", value: [0.41 ,0.76 ], name: "Saarland"     },
        {   axis: "Spezialisierung", value: [0.42 ,0.23 ], name: "Saarland"     }
    ],
    // Baden-Württemberg
    [
        {   axis: "BIP", value: [0.75 ,0.42 ], name: "Baden-Württemberg"      },
        {   axis: "Institute", value: [0.45 ,0.12 ], name: "Baden-Württemberg"      },
        {   axis: "Projekte", value: [0.35 ,0.46 ], name: "Baden-Württemberg"     },
        {   axis: "Forscher", value: [0.44 ,0.87 ], name: "Baden-Württemberg"     },
        {   axis: "Spezialisierung", value: [0.45 ,0.65 ], name: "Baden-Württemberg"     }
    ],
    // Bayern
    [
        {   axis: "BIP", value: [0.13 ,0.75 ], name: "Bayern"      },
        {   axis: "Institute", value: [0.13 ,0.34 ], name: "Bayern"      },
        {   axis: "Projekte", value: [0.85 ,0.87 ], name: "Bayern"     },
        {   axis: "Forscher", value: [0.65 ,0.96 ], name: "Bayern"     },
        {   axis: "Spezialisierung", value: [0.02 ,0.23 ], name: "Bayern"     }
    ],
    // Hamburg
    [
        {   axis: "BIP", value: [0.85 ,0.34 ], name: "Hamburg"      },
        {   axis: "Institute", value: [0.6 ,0.37 ], name: "Hamburg"      },
        {   axis: "Projekte", value: [0.45 ,0.23 ], name: "Hamburg"     },
        {   axis: "Forscher", value: [0.52 ,0.23 ], name: "Hamburg"     },
        {   axis: "Spezialisierung", value: [0.04 ,0.25 ], name: "Hamburg"     }
    ],
]

/**
 * creates new array for d3-radar-chart 
 */
function initBundeslaenderObjectData(csv){
    let newArray = [];

    /* for all german states --> one array  */
    for(let i=0; i < lenBundeslaenderNames; i++){

        const bundesland = bundeslaenderNames[i];

        let currentBundesland = [
            {   axis: RADAR_AXIS_LABELS.BIP,            value: [],  valueAbsolute: [],  name:   bundesland  },
            {   axis: RADAR_AXIS_LABELS.INSTITUTE,          value: [],  valueAbsolute: [],  name:   bundesland  },
            {   axis: RADAR_AXIS_LABELS.PROJEKTE,           value: [],  valueAbsolute: [],  name:   bundesland  },
            {   axis: RADAR_AXIS_LABELS.SPEZIALISIERUNG,    value: [],  valueAbsolute: [],  name:   bundesland  } ,
            {   axis: RADAR_AXIS_LABELS.FINANZIERUNGSDAUER, value: [],  valueAbsolute: [],  name:   bundesland  },
        ];
        const lenCurrentBundesland = currentBundesland.length;

        /*  change value-arrays */
        const bundeslandEntries = csv.filter( entry => entry[CSV_KEYS.BUNDESLAND] == bundesland )

        // for each position in value-array
        for(let i_reviewBoard =0; i_reviewBoard < lenCurrentBundesland; i_reviewBoard++){
            // for each entry in currentBundesland
            for(let i_keys =0; i_keys < lenCurrentBundesland; i_keys++){
                currentBundesland[i_keys].value[i_reviewBoard]           = bundeslandEntries[i_reviewBoard][csvKeys_value[i_keys]];
                currentBundesland[i_keys].valueAbsolute[i_reviewBoard]   = bundeslandEntries[i_reviewBoard][csvKeys_valueAbsolute[i_keys]];

            }
        }

        newArray.push(currentBundesland);
    }

    
    bundeslaenderObjectData = newArray;
}
