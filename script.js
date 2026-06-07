// Menu Data Array supporting both English and Khmer
const menu = [
    {
        id: 1,
        category: "asian",
        price: "$24.00",
        img: "./images/sushi.jpg",
        en: {
            title: "Sushi Platter",
            desc: "A premium selection of chef's choice nigiri, maki rolls, and fresh sashimi served with wasabi."
        },
        km: {
            title: "ß₧êß₧╗ß₧Åß₧ƒßƒèß₧╝ß₧ƒßƒèß₧╕ß₧ößƒÆß₧Üß₧Äß₧╖ß₧Å",
            desc: "ß₧çß₧ÿßƒÆß₧Üß₧╛ß₧ƒß₧ûß₧╖ß₧ƒßƒüß₧ƒß₧àß₧╗ß₧äß₧ùßƒàß₧ƒß₧ÿßƒÆß₧Üß₧╢ß₧ößƒï ß₧ôß₧╕ß₧áßƒÆß₧éß₧╕ß₧Üß₧╕ ß₧ÿßƒëß₧╢ß₧éß₧╕ß₧Üßƒëß₧╝ß₧¢ ß₧ôß₧╖ß₧äß₧ƒß₧╢ß₧ƒßƒèß₧╕ß₧ÿß₧╕ß₧ƒßƒÆß₧Üß₧ƒßƒïßƒù ß₧çß₧╝ß₧ôß₧Üßƒëß₧ÿß₧çß₧╢ß₧ÿß₧╜ß₧Öß₧£ßƒëß₧╢ß₧ƒß₧╢ß₧ößƒèß₧╖ßƒö"
        }
    },
    {
        id: 2,
        category: "europe",
        price: "$28.50",
        img: "./images/beef.jpg",
        en: {
            title: "Beef Bourguignon",
            desc: "Traditional French beef stew braised in rich red wine, lardons, mushrooms, and carrots."
        },
        km: {
            title: "ß₧ƒß₧╢ß₧àßƒïß₧éßƒä ß₧ößƒèß₧╝ß₧áßƒÆß₧éß₧╕ß₧ëßƒëß₧╗ß₧ä",
            desc: "ß₧ƒßƒèß₧╗ß₧öß₧ƒß₧╢ß₧àßƒïß₧éßƒäß₧ößƒéß₧öß₧öß₧╢ß₧Üß₧╢ßƒåß₧äß₧öß₧╗ß₧Üß₧╢ß₧Ä ß₧Üßƒåß₧äß₧╢ß₧ƒßƒïß₧çß₧╢ß₧ÿß₧╜ß₧Öß₧ƒßƒÆß₧Üß₧╢ß₧ÇßƒÆß₧Üß₧áß₧ÿ ß₧òßƒÆß₧ƒß₧╖ß₧Å ß₧ôß₧╖ß₧äß₧Çß₧╢ß₧Üßƒëß₧╗ß₧Å ß₧Ößƒëß₧╢ß₧äß₧êßƒÆß₧äß₧╗ß₧Öß₧åßƒÆß₧äß₧╢ß₧ëßƒïßƒö"
        }
    },
    {
        id: 3,
        category: "drinks",
        price: "$5.50",
        img: "./images/latte.jpg",
        en: {
            title: "Matcha Latte",
            desc: "Ceremonial grade Japanese green tea whisked with steamed oat milk and raw honey."
        },
        km: {
            title: "ß₧ÿßƒëß₧╢ß₧Åßƒïß₧åß₧╢ ß₧íß₧╢ß₧Åßƒü",
            desc: "ß₧Åßƒéß₧ößƒâß₧Åß₧äß₧çß₧ößƒëß₧╗ß₧ôß₧¢ßƒåß₧èß₧╢ß₧ößƒïß₧ÉßƒÆß₧ôß₧╢ß₧Çßƒïß₧ÉßƒÆß₧£ß₧╢ß₧Öß₧ûßƒÆß₧Üßƒçß₧ƒß₧äßƒÆß₧â ß₧£ß₧╢ß₧Öß₧¢ß₧╢ß₧Öß₧çß₧╢ß₧ÿß₧╜ß₧Öß₧æß₧╣ß₧Çß₧èßƒäßƒçß₧éßƒäß₧óß₧╝ß₧Å ß₧ôß₧╖ß₧äß₧æß₧╣ß₧Çß₧âßƒÆß₧ÿß₧╗ßƒåß₧Æß₧ÿßƒÆß₧ÿß₧çß₧╢ß₧Åß₧╖ßƒö"
        }
    },
    {
        id: 4,
        category: "asian",
        price: "$16.50",
        img: "./images/padthai.jpg",
        en: {
            title: "Pad Thai",
            desc: "Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "ß₧òß₧╢ß₧Åßƒïß₧Éßƒâ",
            desc: "ß₧ÿß₧╕ß₧åß₧╢ß₧Éßƒâß₧çß₧╢ß₧ÿß₧╜ß₧Öß₧Åßƒàß₧áßƒèß₧╝ ß₧öß₧äßƒÆß₧éß₧╢ ß₧ƒß₧ÄßƒÆß₧Åßƒéß₧Çß₧öß₧ÄßƒÆß₧Åß₧╗ßƒç ß₧ôß₧╖ß₧äß₧æß₧╣ß₧Çß₧çßƒÆß₧Üß₧¢ß₧Çßƒïß₧óßƒåß₧ûß₧╖ß₧¢ß₧æß₧╗ßƒåß₧çß₧╝ß₧Üß₧óßƒéß₧ÿßƒö"
        }
    },
    {
        id: 5,
        category: "europe",
        price: "$19.00",
        img: "./images/carbonara.jpg",
        en: {
            title: "Italian Carbonara",
            desc: "Authentic Roman pasta made with crispy guanciale, egg yolks, and Pecorino Romano cheese."
        },
        km: {
            title: "ß₧óßƒèß₧╕ß₧Åß₧╢ß₧¢ß₧╕ ß₧Çß₧╢ß₧öß₧╝ß₧Äß₧╢ß₧Üßƒëß₧╢",
            desc: "ß₧ößƒëß₧╢ß₧ƒßƒÆß₧Åß₧╢ß₧ößƒéß₧ö ß₧Üßƒëß₧╝ß₧ÿßƒëß₧╢ßƒåß₧ä ß₧ûß₧╖ß₧Åß₧ößƒÆß₧Üß₧╢ß₧Çß₧è ß₧àß₧ÿßƒÆß₧óß₧╖ß₧ôß₧çß₧╢ß₧ÿß₧╜ß₧Öß₧ƒß₧╢ß₧àßƒïß₧çßƒÆß₧Üß₧╝ß₧Çß₧ößƒåß₧ûß₧äß₧ƒßƒÆß₧Üß₧╜ß₧Ö ß₧òßƒÆß₧ôßƒéß₧Çß₧¢ß₧┐ß₧äß₧ôßƒâß₧ƒßƒèß₧╗ß₧Å ß₧ôß₧╖ß₧äß₧êß₧╕ß₧ƒ Pecorino Romanoßƒö"
        }
    },
    {
        id: 6,
        category: "drinks",
        price: "$9.00",
        img: "./images/mojito.jpg",
        en: {
            title: "Classic Mojito",
            desc: "Refreshing blend of white rum, fresh lime juice, muddled mint leaves, and sparkling soda."
        },
        km: {
            title: "ß₧ÿßƒëß₧╝ß₧áßƒèß₧╕ß₧Åß₧╝ ß₧öß₧╗ß₧Üß₧╢ß₧Ä",
            desc: "ß₧Çß₧╢ß₧Üß₧¢ß₧╢ß₧Öß₧öß₧ëßƒÆß₧àß₧╝ß₧¢ß₧éßƒÆß₧ôß₧╢ß₧èßƒÅß₧ƒßƒÆß₧Üß₧ƒßƒïß₧ƒßƒÆß₧Üß₧╢ß₧Öß₧ôßƒâß₧ƒßƒÆß₧Üß₧╢ ß₧Üßƒëß₧╢ßƒå ß₧ƒß₧Ü ß₧æß₧╣ß₧Çß₧ÇßƒÆß₧Üß₧╝ß₧àß₧åßƒÆß₧ÿß₧╢ß₧Üß₧ƒßƒÆß₧Üß₧ƒßƒï ß₧ƒßƒÆß₧¢ß₧╣ß₧Çß₧çß₧╕ß₧óß₧äßƒÆß₧Çß₧╢ß₧ÿ ß₧ôß₧╖ß₧äß₧ƒß₧╝ß₧èß₧╢ßƒö"
        }
    }
];

// Target UI elements
const menuContainer = document.getElementById("menu-container");
const filterBtns = document.querySelectorAll(".filter-btn");
const langToggleBtn = document.getElementById("lang-toggle");

// Current tracking states
let currentLanguage = "en"; // Options: 'en' or 'km'
let currentCategory = "all";

// Initial Load
window.addEventListener("DOMContentLoaded", function () {
    updateUIStrings();
    renderMenu();
});

// Main render function handles both language switching and filtering seamlessly
function renderMenu() {
    // 1. Filter items based on active category
    let filteredMenu = menu;
    if (currentCategory !== "all") {
        filteredMenu = menu.filter(item => item.category === currentCategory);
    }

    // 2. Generate HTML parsing the correct language node ('en' or 'km')
    let displayMenu = filteredMenu.map(function (item) {
        const langData = item[currentLanguage]; // Dynamically targets item.en or item.km
        
        return `<article class="menu-item">
            <img src="${item.img}" alt="${langData.title}" class="item-img">
            <div class="item-info">
                <div class="item-header">
                    <h3>${langData.title}</h3>
                    <span class="price">${item.price}</span>
                </div>
                <p class="item-text">${langData.desc}</p>
            </div>
        </article>`;
    });

    menuContainer.innerHTML = displayMenu.join("");
}

// Function to translate static sidebar headings and filter button texts
function updateUIStrings() {
    const titleEl = document.getElementById("sidebar-title");
    const subtitleEl = document.getElementById("sidebar-subtitle");
    titleEl.innerText = titleEl.getAttribute(`data-${currentLanguage}`);
    subtitleEl.innerText = subtitleEl.getAttribute(`data-${currentLanguage}`);

    // Translate all active category filter buttons
    filterBtns.forEach(btn => {
        btn.innerText = btn.getAttribute(`data-${currentLanguage}`);
    });
}

// Language Switch Event Listener
langToggleBtn.addEventListener("click", function () {
    // Toggle active state value
    currentLanguage = currentLanguage === "en" ? "km" : "en";
    
    // Style toggle indicator or text change if desired
    langToggleBtn.innerText = currentLanguage === "en" ? "ß₧ùß₧╢ß₧ƒß₧╢ß₧üßƒÆß₧ÿßƒéß₧Ü" : "English";
    
    // Update structural layout text and refresh menu
    updateUIStrings();
    renderMenu();
});

// Category Filter Configurations
filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        filterBtns.forEach(button => button.classList.remove("active"));
        e.currentTarget.classList.add("active");

        currentCategory = e.currentTarget.dataset.id;
        renderMenu();
    });
});
