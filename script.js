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
            title: "ឈុតស៊ូស៊ីប្រណិត",
            desc: "ជម្រើសពិសេសចុងភៅសម្រាប់ នីហ្គីរី ម៉ាគីរ៉ូល និងសាស៊ីមីស្រស់ៗ ជូនរ៉មជាមួយវ៉ាសាប៊ិ។"
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
            title: "សាច់គោ ប៊ូហ្គីញ៉ុង",
            desc: "ស៊ុបសាច់គោបែបបារាំងបុរាណ រំងាស់ជាមួយស្រាក្រហម ផ្សិត និងការ៉ុត យ៉ាងឈ្ងុយឆ្ងាញ់។"
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
            title: "ម៉ាត់ឆា ឡាតេ",
            desc: "តែបៃតងជប៉ុនលំដាប់ថ្នាក់ថ្វាយព្រះសង្ឃ វាយលាយជាមួយទឹកដោះគោអូត និងទឹកឃ្មុំធម្មជាតិ។"
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
            title: "ផាត់ថៃ",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
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
            title: "អ៊ីតាលី កាបូណារ៉ា",
            desc: "ប៉ាស្តាបែប រ៉ូម៉ាំង ពិតប្រាកដ ចម្អិនជាមួយសាច់ជ្រូកបំពងស្រួយ ផ្នែកលឿងនៃស៊ុត និងឈីស Pecorino Romano។"
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
            title: "ម៉ូហ៊ីតូ បុរាណ",
            desc: "ការលាយបញ្ចូលគ្នាដ៏ស្រស់ស្រាយនៃស្រា រ៉ាំ សរ ទឹកក្រូចឆ្មារស្រស់ ស្លឹកជីអង្កាម និងសូដា។"
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
    // Translate Title and Subtitle
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
    langToggleBtn.innerText = currentLanguage === "en" ? "ភាសាខ្មែរ" : "English";
    
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