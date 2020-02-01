/*  Wenn Fachbereich wie "Informatik" ausgewaehlt wird,
 *  werden die values geupdatet.
 */

var bundeslaenderObjectData = [
    // Mecklenburg-Vorpommern
    [
        {   axis: "BIP", value: 0.22, name: "Mecklenburg-Vorpommern"   },
        {   axis: "Institute", value: 0.43, name: "Mecklenburg-Vorpommern"   },
        {   axis: "Projekte", value: 0.27 , name: "Mecklenburg-Vorpommern"    },
        {   axis: "Forscher", value: 0.64, name: "Mecklenburg-Vorpommern"     },
        {   axis: "Spezialisierung", value: 0.06, name: "Mecklenburg-Vorpommern"     }
    ],
    // Schleswig-Holstein,
    [
        {   axis: "BIP", value: 0.43, name: "Schleswig-Holstein"     },
        {   axis: "Institute", value: 0.65, name: "Schleswig-Holstein"       },
        {   axis: "Projekte", value: 0.34, name: "Schleswig-Holstein"       },
        {   axis: "Forscher", value: 0.05 , name: "Schleswig-Holstein"      },
        {   axis: "Spezialisierung", value: 0.33 , name: "Schleswig-Holstein"      }
    ],
    // Niedersachsen
    [
        {   axis: "BIP", value: 0.22, name: "Niedersachsen"       },
        {   axis: "Institute", value: 0.43 , name: "Niedersachsen"    },
        {   axis: "Projekte", value: 0.58  , name: "Niedersachsen"   },
        {   axis: "Forscher", value: 0.95  , name: "Niedersachsen"   },
        {   axis: "Spezialisierung", value: 0.12 , name: "Niedersachsen"    }
    ],
    //  Bremen
    [
        {   axis: "BIP", value: 0.44 , name: "Bremen"    },
        {   axis: "Institute", value: 0.76  , name: "Bremen"     },
        {   axis: "Projekte", value: 0.44   , name: "Bremen"    },
        {   axis: "Forscher", value: 0.34    , name: "Bremen"   },
        {   axis: "Spezialisierung", value: 0.36   , name: "Bremen"    }
    ],
    // Sachsen-Anhalt
    [
        {   axis: "BIP", value: 0.97  , name: "Sachsen-Anhalt"      },
        {   axis: "Institute", value: 0.54   , name: "Sachsen-Anhalt"    },
        {   axis: "Projekte", value: 0.33 , name: "Sachsen-Anhalt"      },
        {   axis: "Forscher", value: 0.43 , name: "Sachsen-Anhalt"      },
        {   axis: "Spezialisierung", value: 0.32 , name: "Sachsen-Anhalt"      }
    ],
    // Brandenburg
    [
        {   axis: "BIP", value: 0.08 , name: "Brandenburg"      },
        {   axis: "Institute", value: 0.08 , name: "Brandenburg"      },
        {   axis: "Projekte", value: 0.56 , name: "Brandenburg"     },
        {   axis: "Forscher", value: 0.32 , name: "Brandenburg"     },
        {   axis: "Spezialisierung", value: 0.65 , name: "Brandenburg"     }
    ],
  
    //  Berlin
    [
        {   axis: "BIP", value: 0.65 , name: "Berlin"      },
        {   axis: "Institute", value: 0.97 , name: "Berlin"      },
        {   axis: "Projekte", value: 0.32 , name: "Berlin"     },
        {   axis: "Forscher", value: 0.13 , name: "Berlin"     },
        {   axis: "Spezialisierung", value: 0.64 , name: "Berlin"     }
    ],
    // Nordrhein-Westfalen
    [
        {   axis: "BIP", value: 0.23 , name: "Nordrhein-Westfalen"      },
        {   axis: "Institute", value: 0.45 , name: "Nordrhein-Westfalen"      },
        {   axis: "Projekte", value: 0.76 , name: "Nordrhein-Westfalen"     },
        {   axis: "Forscher", value: 0.13 , name: "Nordrhein-Westfalen"     },
        {   axis: "Spezialisierung", value: 0.67 , name: "Nordrhein-Westfalen"     }
    ],
    // Hessen
    [
        {   axis: "BIP", value: 0.98 , name: "Hessen"      },
        {   axis: "Institute", value: 0.45 , name: "Hessen"      },
        {   axis: "Projekte", value: 0.48 , name: "Hessen"     },
        {   axis: "Forscher", value: 0.24 , name: "Hessen"     },
        {   axis: "Spezialisierung", value: 0.56 , name: "Hessen"     }
    ],
    //  Thüringen
    [
        {   axis: "BIP", value: 0.65 , name: "Thüringen"      },
        {   axis: "Institute", value: 0.45 , name: "Thüringen"      },
        {   axis: "Projekte", value: 0.54 , name: "Thüringen"     },
        {   axis: "Forscher", value: 0.12 , name: "Thüringen"     },
        {   axis: "Spezialisierung", value: 0.32 , name: "Thüringen"     }
    ],
    // Sachsen
    [
        {   axis: "BIP", value: 0.65 , name: "Sachsen"      },
        {   axis: "Institute", value: 0.32 , name: "Sachsen"      },
        {   axis: "Projekte", value: 0.45 , name: "Sachsen"     },
        {   axis: "Forscher", value: 0.67 , name: "Sachsen"     },
        {   axis: "Spezialisierung", value: 0.24 , name: "Sachsen"     }
    ],
    //  Rheinland-Pfalz
    [
        {   axis: "BIP", value: 0.75 , name: "Rheinland-Pfalz"      },
        {   axis: "Institute", value: 0.12 , name: "Rheinland-Pfalz"      },
        {   axis: "Projekte", value: 0.76 , name: "Rheinland-Pfalz"     },
        {   axis: "Forscher", value: 0.32 , name: "Rheinland-Pfalz"     },
        {   axis: "Spezialisierung", value: 0.54 , name: "Rheinland-Pfalz"     }
    ],
    // Saarland
    [
        {   axis: "BIP", value: 0.87 , name: "Saarland"      },
        {   axis: "Institute", value: 0.32 , name: "Saarland"      },
        {   axis: "Projekte", value: 0.34 , name: "Saarland"     },
        {   axis: "Forscher", value: 0.76 , name: "Saarland"     },
        {   axis: "Spezialisierung", value: 0.23 , name: "Saarland"     }
    ],
    // Baden-Württemberg
    [
        {   axis: "BIP", value: 0.42 , name: "Baden-Württemberg"      },
        {   axis: "Institute", value: 0.12 , name: "Baden-Württemberg"      },
        {   axis: "Projekte", value: 0.46 , name: "Baden-Württemberg"     },
        {   axis: "Forscher", value: 0.87 , name: "Baden-Württemberg"     },
        {   axis: "Spezialisierung", value: 0.65 , name: "Baden-Württemberg"     }
    ],
    // Bayern
    [
        {   axis: "BIP", value: 0.75 , name: "Bayern"      },
        {   axis: "Institute", value: 0.34 , name: "Bayern"      },
        {   axis: "Projekte", value: 0.87 , name: "Bayern"     },
        {   axis: "Forscher", value: 0.96 , name: "Bayern"     },
        {   axis: "Spezialisierung", value: 0.23 , name: "Bayern"     }
    ],
    // Hamburg
    [
        {   axis: "BIP", value: 0.34 , name: "Hamburg"      },
        {   axis: "Institute", value: 0.37 , name: "Hamburg"      },
        {   axis: "Projekte", value: 0.23 , name: "Hamburg"     },
        {   axis: "Forscher", value: 0.23 , name: "Hamburg"     },
        {   axis: "Spezialisierung", value: 0.25 , name: "Hamburg"     }
    ],


]