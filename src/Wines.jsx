// src/WineriesSwiper.js
import "./Wines.css";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useRef, useState } from "react";

// Sample winery data
const wines = [
  {
    name: "Rocket Man",
    winery: "Château la Cafourche",
    region: "Bordeaux",
    cepages: "100% Merlot",
    terroir: "-",
    vinification: [
      "Maceration and pre-fermentation at cold temperature",
      "Fermentation with natural yeasts",
      "No sulfites added",
      "Aged on lees for 6 months",
    ],
    aromatics: "Powerful, juicy, silky",
    aperitif: "Red meats",
    servingTemperature: "14 - 16 degrees celsius",
    image: "/wines/ww1.png",
  },
  {
    name: "Cuvée Emma Red",
    winery: "Grains d’Estuaire",
    region: "Charente-Maritime",
    cepages: "100% Merlot",
    terroir: "Gravelly and clayey soils",
    vinification: [
      "Mechanical Harvest at cold temperature",
      "Aged on lees for 6 months",
    ],
    aromatics: "Dark fruits, well-balanced with acidity",
    aperitif: "Red meats",
    servingTemperature: "-",
    image: "/wines/ww2.png",
  },
  {
    name: "Cuvée Serge - Blaye Côtes de Bordeaux Rouge",
    winery: "Château Penaud",
    region: "Bordeaux",
    cepages: "70% Merlot, 30% Malbec",
    terroir: "-",
    vinification: [
      "Mechanical Harvest",
      "Skin contact for 3 weeks",
      "Alcoholic fermentation between 18 - 24 degrees celsius",
      "Slightly aged in old barrels for 12 months",
    ],
    aromatics: "Structured, full-bodied, well-balanced, silky tannins",
    aperitif: "Red meats and cheeses",
    servingTemperature: "18 - 20 degrees celsius",
    image: "/wines/ww3.png",
  },
  {
    name: "Pin Franc",
    winery: "Château Haut-Grelot",
    region: "Bordeaux",
    cepages: "100% Malbec",
    terroir: "Sandy, clayey and silty soils",
    vinification: [
      "Vinification in vats",
      "Maceration with cap punching",
      "Aging 12 months in vats, then 6 months in cement tanks",
    ],
    aromatics: "Red fruits, structured, high tannins",
    aperitif: "Deli meats, game dishes, chocolate",
    servingTemperature: "-",
    image: "/wines/ww4.png",
  },
  {
    name: "Cuvée Emma White",
    winery: "Grains d’Estuaire",
    region: "Charente-Maritime",
    cepages: "100% Sauvignon Blanc",
    terroir: "Gravelly and clayey soils",
    vinification: [
      "Manual Harvest at cold temperature",
      "Aging 8 months in oak barrels and on lees",
    ],
    aromatics: "Orange zest, caramel, peach",
    aperitif: "Fish, comté, goat cheese",
    servingTemperature: "-",
    image: "/wines/ww5.png",
  },
  {
    name: "Grains de Cocotte White Colombard",
    winery: "Grains d’Estuaire",
    region: "Charente-Maritime",
    cepages: "100% Colombard",
    terroir: "Clay-limestone soils",
    vinification: [
      "Direct pressing",
      "Low temperature fermentation",
      "Aged on lees for 5 months",
    ],
    aromatics: "Expressive, citrus, floral",
    aperitif: "Seafood",
    servingTemperature: "-",
    image: "/wines/ww6.png",
  },
  {
    name: "Cuvée Serge - Blaye Côtes de Bordeaux Blanc",
    winery: "Château Penaud",
    region: "Bordeaux",
    cepages: "90% Sauvignon Blanc, 10% Sémillon",
    terroir: "-",
    vinification: [
      "Mechanical Harvest at optimum ripeness",
      "Skin contact for 12 hours",
      "Alcoholic fermentation between 16 - 18 degrees celsius",
      "Aged on lees for 3 months",
    ],
    aromatics:
      "Expressive, well-balanced, elegant, exotic fruits, grapefruit, white peach, long aromatic finish",
    aperitif: "Seafood, asparagus",
    servingTemperature: "18 - 20 degrees celsius",
    image: "/wines/ww7.png",
  },
  {
    name: "Gris de Cocotte Rosé",
    winery: "Grains d’Estuaire",
    region: "Charente-Maritime",
    cepages: "100% Cabernet Sauvignon",
    terroir: "Sandy and silty soil",
    vinification: [
      "Disbudding and mechanical harvest",
      "Aged on fine lees for 6 months",
    ],
    aromatics: "Floral, keen and gourmet mouthfeel",
    aperitif: "Fish",
    servingTemperature: "-",
    image: "/wines/ww8.png",
  },
  {
    name: "Première Cuvée Red",
    winery: "Château Haut-Grelot",
    region: "Bordeaux",
    cepages: "70% Merlot, 30% Cabernet Sauvignon",
    terroir: "Gravelly, sandy and silty soils",
    vinification: [
      "Mechanical harvest",
      "Selective sorting",
      "Aged twice in wine barrels for 12 months",
    ],
    aromatics: "Red berries, vanilla, spice",
    aperitif: "Deli meats, Red meats, game dishes",
    servingTemperature: "-",
    image: "/wines/ww9.png",
  },
  {
    name: "Première Cuvée White",
    winery: "Château Haut-Grelot",
    region: "Bordeaux",
    cepages: "90% Sauvignon Blanc, 10% Sémillon",
    terroir: "-",
    vinification: [
      "Mechanical Harvest",
      "Selective sorting",
      "Aged in vats on fine lees for 3 months",
    ],
    aromatics: "Exotic fruits, grapefruit",
    aperitif: "Seafood, grilled fish",
    servingTemperature: "-",
    image: "/wines/ww10.png",
  },
  {
    name: "Chemin de l’Estuaire Red",
    winery: "Château Haut-Grelot",
    region: "Bordeaux",
    cepages: "100% Cabernet Sauvignon",
    terroir: "Gravelly, sandy and muddy soils",
    vinification: ["Aged for 16 months in 225l barrels"],
    aromatics: "Woody, vanilla, red fruits",
    aperitif: "Game dishes, mature red meats",
    servingTemperature: "-",
    image: "/wines/ww11.png",
  },
  {
    name: "Saumur Champigny Tradition",
    winery: "Domaine de La Cune",
    region: "Loire Valley",
    cepages: "100% Cabernet Franc",
    terroir: "Sand on sandstone and limestone clay",
    vinification: ["2 weeks of maceration", "Aged 10-12 months in vats"],
    aromatics: "Red fruits, well-balanced",
    aperitif: "Easy to match with different foods",
    servingTemperature: "14 - 16 degrees celsius",
    storage: "Max 8 years, Optimally 2-5 years",
    image: "/wines/ww12.png",
  },
  {
    name: "Coteaux de Saumur",
    winery: "Domaine de La Cune",
    region: "Loire Valley",
    cepages: "",
    terroir: "",
    vinification: "Late harvest",
    aromatics: "Exotic fruits, honey flavors",
    aperitif: "Foie gras, blue cheese",
    servingTemperature: "8 degrees celsius",
    storage: "Max 10 years",
    image: "/wines/ww13.png",
  },
  {
    name: "Crémant de Loire Rosé",
    winery: "Domaine de La Cune",
    region: "Loire Valley",
    cepages: "",
    terroir: "",
    vinification: "Sparkling wine brut (dry) or demi-sec (sweet)",
    aromatics: "Sparkling wine brut (dry) or demi-sec (sweet)",
    aperitif: "On its own, or paired with anything",
    servingTemperature: "18 degrees celsius",
    storage: "Max 5 years",
    image: "/wines/ww14.png",
  },
  {
    name: "Crémant de Loire Blanc",
    winery: "Domaine de La Cune",
    region: "Loire Valley",
    cepages: "85% Chenin Blanc, 15% Cabernet Franc",
    terroir: "Limestone and clay",
    vinification: "Hand picked",
    aromatics: "Sparkling wine brut (dry) or demi-sec (sweet)",
    aperitif: "On its own, or paired with anything",
    servingTemperature: "5-8 degrees celsius",
    storage: "Max 5 years",
    image: "/wines/ww15.png",
  },
  {
    name: "Saumur Champigny Charl’Anne",
    winery: "Domaine de La Cune",
    region: "Loire Valley",
    cepages: "100% Cabernet Franc",
    terroir: "Clay on limestone soil",
    vinification: "",
    aromatics:
      "Ripe cherries, black currant and spicy flavors; rich and full wine with a long aftertaste",
    aperitif: "Red meats and cheeses",
    servingTemperature: "18 degrees celsius",
    storage: "Max 10 years, optimally 3-8 years",
    image: "/wines/ww16.png",
  },
  {
    name: "Saumur Blanc La Favorite",
    winery: "Domaine de La Cune",
    region: "Loire Valley",
    cepages: "100% Chenin Blanc",
    terroir: "Limestone and clay",
    vinification:
      "Harvested by hand when grapes are very ripe, Fermentation in vat, Barrel aging for 8 months",
    aromatics: "Exotic, apple and pear flavors; smokey and woody aftertaste",
    aperitif: "Fish, scallops and cheeses",
    servingTemperature: "10-12 degrees celsius",
    storage: "Max 8 years, optimally 2-5 years",
    image: "/wines/ww17.png",
  },
  {
    name: "Saumur Blanc Tradition",
    winery: "Domaine de La Cune",
    region: "Loire Valley",
    cepages: "100% Chenin Blanc",
    terroir: "Limestone and clay",
    vinification:
      "Harvested by hand, Aging and fermentation in vat for 6 months",
    aromatics: "Citrus, apple and pear",
    aperitif: "Seafood and fish",
    servingTemperature: "8-10 degrees celsius",
    storage: "Max 5 years, optimally 1-3 years",
    image: "/wines/ww18.png",
  },
  {
    name: "Saumur Rosé Fantaisie",
    winery: "Domaine de La Cune",
    region: "Loire Valley",
    cepages: "100% Chenin Blanc",
    terroir: "Sand on sandstone",
    vinification: "Direct pressing in tank",
    aromatics: "Easy wine for the summer",
    aperitif: "Salads, BBQ and spicy foods",
    servingTemperature: "8-10 degrees celsius",
    storage: "Max 3 years",
    image: "/wines/ww19.png",
  },
  {
    name: "Saumur Champigny Fantaisie",
    winery: "Domaine de La Cune",
    region: "Loire Valley",
    cepages: "100% Cabernet Franc",
    terroir: "Sand on sandstone",
    vinification: "1 week of maceration, Aging 10-12 months in vat",
    aromatics: "Red fruits; light and fruity",
    aperitif: "BBQ",
    servingTemperature: "14 degrees celsius",
    storage: "Max 5 years",
    image: "/wines/ww20.png",
  },
  {
    name: "Saumur Champigny Hors Série",
    winery: "Domaine de La Cune",
    region: "Loire Valley",
    cepages: "100% Cabernet Franc",
    terroir: "Clay on limestone soil",
    vinification: "",
    aromatics: "Black currant and smokey flavors; full-bodied and tannic",
    aperitif: "Red meats, game, cheeses",
    servingTemperature: "18 degrees celsius",
    storage: "Max 12 years, optimally 3-10 years",
    image: "/wines/ww21.png",
  },
];

const WinesGallery = () => {
  const scrollTopBar = useRef(null);
  const [filteredWines, setFilteredWines] = useState(wines);

  const filterWines = (winery) => {
    if (winery === "All") {
      setFilteredWines(wines);
    } else {
      const newFilteredWines = wines.filter((wine) => wine.winery === winery);
      setFilteredWines(newFilteredWines);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || window.pageYOffset;
      if (scrollTopBar.current) {
        if (scrollPosition > 1200) {
          scrollTopBar.current.style.opacity = "1"; // Fade in the filter bar
        } else {
          scrollTopBar.current.style.opacity = "0"; // Fade out the filter bar
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // useEffect(() => {

  //   const vinBars = document.querySelectorAll(".vin-info");
  //   vinBars.forEach((vinBar) => {
  //     vinBar.addEventListener("click", function () {
  //       console.log("CLICKEDD!!!!", vinBar);
  //       const ariaLabel = vinBar.getAttribute("aria-label");
  //       const combinedClassName = `vin-content-${ariaLabel}`;
  //       const selectedElement = document.querySelector(`.${combinedClassName}`);
  //       selectedElement.style.opacity = 1;
  //     });
  //   });
    
  // }, []);

  const ScrollToTopButton = () => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Smooth scroll
      });
    };

    return (
      <button onClick={scrollToTop} className="scroll-top-button">
        Scroll to Top
      </button>
    );
  };

  return (
    <div className="hide-pc wines-section" id="winesSection">
      <div className="filter-bar">
        <div className="filter-button filter-button-1">
          <button onClick={() => filterWines("All")}>OUR WINES</button>
        </div>
        <div className="filter-button filter-button-1">
          <button onClick={() => filterWines("Château Haut-Grelot")}>
            CHATEAU HAUT-GRELOT
          </button>
        </div>
        <div className="filter-button filter-button-1">
          <button onClick={() => filterWines("Grains d’Estuaire")}>
            GRAINS D&apos;ESTUAIRE
          </button>
        </div>
        <div className="filter-button filter-button-1">
          <button onClick={() => filterWines("Château la Cafourche")}>
            CHATEAU LA CAFOURCHE
          </button>
        </div>
        <div className="filter-button filter-button-1">
          <button onClick={() => filterWines("Domaine de La Cune")}>
            DOMAINE DE LA CUNE
          </button>
        </div>
        <div className="filter-button filter-button-1">
          <button onClick={() => filterWines("Château Penaud")}>
            CHATEAU PENAUD
          </button>
        </div>
      </div>
      <swiper-container
        // style={
        //   {
        //   "--swiper-navigation-color": "#fff000",
        //   "--swiper-pagination-color": "#fff000"
        //   }}
        slides-per-view="1"
        space-between="20"
        scrollbar-clickable="true"
      >
        {filteredWines.map((wine, index) => (
          <swiper-slide key={index}>
            <div className="slide">
              <div className="wines-name">{wine.name.toUpperCase()}</div>
              <div className="slide slide-img">
                <div className="wine-bottle-top">
                  <div className="text-center text-mediumb">{wine.winery}</div>
                  <div className="text-start">{wine.cepages}</div>
                  <div className="text-center text-mediumb">{wine.region}</div>
                </div>
                <div className="wine-bottle-img">
                  <img
                    className="winery-img"
                    src={wine.image}
                    alt={wine.name}
                    width={"100%"}
                    height={"100%"}
                  />
                </div>
                <div className="wine-bottle-bottom">
                  <div className="text-center text-mediumb">
                    {wine.terroir != "-" ? wine.terroir : ""}
                  </div>
                  <div className="text-end">{wine.aromatics}</div>
                  <div className="text-start text-mediumb">{wine.aperitif}</div>
                  <div className="text-end">
                    {wine.servingTemperature != "-"
                      ? wine.servingTemperature
                      : ""}
                  </div>
                </div>
              </div>
            </div>

            <div className="vin-info" aria-label={index}>
              <div className={`vin-content vin-content-${index}`}>
                <p>{wine.vinification}</p>
              </div>
            </div>
          </swiper-slide>
        ))}
      </swiper-container>
      <div ref={scrollTopBar} className="scroll-top-bar">
        <ScrollToTopButton />
      </div>
    </div>
  );
};

export default WinesGallery;
