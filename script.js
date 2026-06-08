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
        price: "$9.99",
        img: "./images/food/04.បុកល្ហុងគ្រឿងសមុទ្រ.jpg",
        en: {
            title: "Green Papaya with Seafood Salad",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "បុកល្ហុងគ្រឿងសមុទ្រ",
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
    },
    {
        id: 7,
        category: "asian",
        price: "$9.99",
        img: "./images/food/04.បុកល្ហុងគ្រឿងសមុទ្រ.jpg",
        en: {
            title: "Green Papaya with Seafood Salad",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "បុកល្ហុងគ្រឿងសមុទ្រ",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 8,
        category: "asian",
        price: "$9.99",
        img: "./images/food/04.បុកល្ហុងគ្រឿងសមុទ្រ.jpg",
        en: {
            title: "Green Papaya with Seafood Salad",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "បុកល្ហុងគ្រឿងសមុទ្រ",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 9,
        category: "asian",
        price: "$7.5",
        img: "./images/food/09.ស្ងោរងាំងូវមាន់ស្រែ.jpg",
        en: {
            title: "Khmer Chicken Sour Soup with Lime Pickle",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "ស្ងោរងាំងូវមាន់ស្រែ",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 10,
        category: "asian",
        price: "$6.00",
        img: "./images/food/10.Pork Stomach Soup with Green Pepper Corn.jpg",
        en: {
            title: "Pork Stomach Soup with Green Pepper Corn",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "ស៊ុបក្រពះជ្រូកម្រេចខ្ចី",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 11,
        category: "asian",
        price: "$9.99",
        img: "./images/food/04.បុកល្ហុងគ្រឿងសមុទ្រ.jpg",
        en: {
            title: "Green Papaya with Seafood Salad",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "បុកល្ហុងគ្រឿងសមុទ្រ",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 12,
        category: "asian",
        price: "$5.75",
        img: "./images/food/12.ស៊ុបក្ដាម.jpg",
        en: {
            title: "Crab Meat Soup",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "ស៊ុបក្ដាម",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 13,
        category: "asian",
        price: "$9.99",
        img: "./images/food/04.បុកល្ហុងគ្រឿងសមុទ្រ.jpg",
        en: {
            title: "Green Papaya with Seafood Salad",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "បុកល្ហុងគ្រឿងសមុទ្រ",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 14,
        category: "asian",
        price: "$9.99",
        img: "./images/food/04.បុកល្ហុងគ្រឿងសមុទ្រ.jpg",
        en: {
            title: "Green Papaya with Seafood Salad",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "បុកល្ហុងគ្រឿងសមុទ្រ",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 15,
        category: "asian",
        price: "$9.99",
        img: "./images/food/04.បុកល្ហុងគ្រឿងសមុទ្រ.jpg",
        en: {
            title: "Green Papaya with Seafood Salad",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "បុកល្ហុងគ្រឿងសមុទ្រ",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 16,
        category: "asian",
        price: "$9.99",
        img: "./images/food/04.បុកល្ហុងគ្រឿងសមុទ្រ.jpg",
        en: {
            title: "Green Papaya with Seafood Salad",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "បុកល្ហុងគ្រឿងសមុទ្រ",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 17,
        category: "asian",
        price: "$9.99",
        img: "./images/food/04.បុកល្ហុងគ្រឿងសមុទ្រ.jpg",
        en: {
            title: "Green Papaya with Seafood Salad",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "បុកល្ហុងគ្រឿងសមុទ្រ",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 18,
        category: "asian",
        price: "$9.99",
        img: "./images/food/04.បុកល្ហុងគ្រឿងសមុទ្រ.jpg",
        en: {
            title: "Green Papaya with Seafood Salad",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "បុកល្ហុងគ្រឿងសមុទ្រ",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 19,
        category: "asian",
        price: "$9.99",
        img: "./images/food/04.បុកល្ហុងគ្រឿងសមុទ្រ.jpg",
        en: {
            title: "Green Papaya with Seafood Salad",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "បុកល្ហុងគ្រឿងសមុទ្រ",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 20,
        category: "asian",
        price: "$9.99",
        img: "./images/food/04.បុកល្ហុងគ្រឿងសមុទ្រ.jpg",
        en: {
            title: "Green Papaya with Seafood Salad",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "បុកល្ហុងគ្រឿងសមុទ្រ",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 21,
        category: "asian",
        price: "$12.00",
        img: "./images/food/21.ឆាក្ដាមសេះជាមួយពងទាប្រៃ.jpg",
        en: {
            title: "Stir Fried Horse  Crab with Salty Egg",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "ឆាក្ដាមសេះជាមួយពងទាប្រៃ",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 22,
        category: "asian",
        price: "$12.00",
        img: "./images/food/22.ក្ដាមសេះឆាការី.jpg",
        en: {
            title: "Stir Fried Horse Crab with Curry Sauce",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "ក្ដាមសេះឆាការី",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 23,
        category: "asian",
        price: "$9.99",
        img: "./images/food/04.បុកល្ហុងគ្រឿងសមុទ្រ.jpg",
        en: {
            title: "Green Papaya with Seafood Salad",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "បុកល្ហុងគ្រឿងសមុទ្រ",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 24,
        category: "asian",
        price: "$9.99",
        img: "./images/food/04.បុកល្ហុងគ្រឿងសមុទ្រ.jpg",
        en: {
            title: "Green Papaya with Seafood Salad",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "បុកល្ហុងគ្រឿងសមុទ្រ",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 25,
        category: "asian",
        price: "$9.99",
        img: "./images/food/04.បុកល្ហុងគ្រឿងសមុទ្រ.jpg",
        en: {
            title: "Green Papaya with Seafood Salad",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "បុកល្ហុងគ្រឿងសមុទ្រ",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 26,
        category: "asian",
        price: "$9.99",
        img: "./images/food/04.បុកល្ហុងគ្រឿងសមុទ្រ.jpg",
        en: {
            title: "Green Papaya with Seafood Salad",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "បុកល្ហុងគ្រឿងសមុទ្រ",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 27,
        category: "asian",
        price: "$9.99",
        img: "./images/food/04.បុកល្ហុងគ្រឿងសមុទ្រ.jpg",
        en: {
            title: "Green Papaya with Seafood Salad",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "បុកល្ហុងគ្រឿងសមុទ្រ",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 28,
        category: "asian",
        price: "$9.99",
        img: "./images/food/04.បុកល្ហុងគ្រឿងសមុទ្រ.jpg",
        en: {
            title: "Green Papaya with Seafood Salad",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "បុកល្ហុងគ្រឿងសមុទ្រ",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 29,
        category: "asian",
        price: "$9.99",
        img: "./images/food/04.បុកល្ហុងគ្រឿងសមុទ្រ.jpg",
        en: {
            title: "Green Papaya with Seafood Salad",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "បុកល្ហុងគ្រឿងសមុទ្រ",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 30,
        category: "asian",
        price: "$9.99",
        img: "./images/food/04.បុកល្ហុងគ្រឿងសមុទ្រ.jpg",
        en: {
            title: "Green Papaya with Seafood Salad",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "បុកល្ហុងគ្រឿងសមុទ្រ",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 31,
        category: "asian",
        price: "$6.00",
        img: "./images/food/31.ឆ្អឹងជំនីជ្រូកបំពងខ្ទឹមស.jpg",
        en: {
            title: "Deep-Fried Pork Ribs",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "ឆ្អឹងជំនីជ្រូកបំពងខ្ទឹមស",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 32,
        category: "asian",
        price: "$9.99",
        img: "./images/food/04.បុកល្ហុងគ្រឿងសមុទ្រ.jpg",
        en: {
            title: "Green Papaya with Seafood Salad",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "បុកល្ហុងគ្រឿងសមុទ្រ",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 33,
        category: "asian",
        price: "$9.99",
        img: "./images/food/04.បុកល្ហុងគ្រឿងសមុទ្រ.jpg",
        en: {
            title: "Green Papaya with Seafood Salad",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "បុកល្ហុងគ្រឿងសមុទ្រ",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 34,
        category: "asian",
        price: "$9.99",
        img: "./images/food/04.បុកល្ហុងគ្រឿងសមុទ្រ.jpg",
        en: {
            title: "Green Papaya with Seafood Salad",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "បុកល្ហុងគ្រឿងសមុទ្រ",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 35,
        category: "asian",
        price: "$9.99",
        img: "./images/food/04.បុកល្ហុងគ្រឿងសមុទ្រ.jpg",
        en: {
            title: "Green Papaya with Seafood Salad",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "បុកល្ហុងគ្រឿងសមុទ្រ",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 36,
        category: "asian",
        price: "$9.99",
        img: "./images/food/04.បុកល្ហុងគ្រឿងសមុទ្រ.jpg",
        en: {
            title: "Green Papaya with Seafood Salad",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "បុកល្ហុងគ្រឿងសមុទ្រ",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 37,
        category: "asian",
        price: "$9.99",
        img: "./images/food/04.បុកល្ហុងគ្រឿងសមុទ្រ.jpg",
        en: {
            title: "Green Papaya with Seafood Salad",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "បុកល្ហុងគ្រឿងសមុទ្រ",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 38,
        category: "asian",
        price: "$5.50",
        img: "./images/food/38.សាឡាដពិសេសវាតា.jpg",
        en: {
            title: "Veata's Salad ( Fried Salmon, Grilled Chicken & Tuna )",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "សាឡាដពិសេសវាតា",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 39,
        category: "asian",
        price: "$9.99",
        img: "./images/food/04.បុកល្ហុងគ្រឿងសមុទ្រ.jpg",
        en: {
            title: "Green Papaya with Seafood Salad",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "បុកល្ហុងគ្រឿងសមុទ្រ",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 40,
        category: "western",
        price: "$5.00",
        img: "./images/food/40.សាឡាដជាមួយបង្គារបំពងម្សៅ.jpg",
        en: {
            title: "Prawn Tempura Salad",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "សាឡាដជាមួយបង្គារបំពងម្សៅ",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 41,
        category: "western",
        price: "$5.00",
        img: "./images/food/41.Tuna Salad.jpg",
        en: {
            title: "Tuna Salad",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "សាឡាដត្រីធូណា",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 42,
        category: "western",
        price: "$5.00",
        img: "./images/food/42.មឹកបំពងស្រួយ.jpg",
        en: {
            title: "Crispy Calamari",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "មឹកបំពងស្រួយ",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 43,
        category: "western",
        price: "$5.00",
        img: "./images/food/43.បង្គារបំពងកំទិចនំបុ័ង.jpg",
        en: {
            title: "Crispy Prawn Tempura",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "បង្គារបំពងកំទិចនំបុ័ង",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 44,
        category: "western",
        price: "$2.50",
        img: "./images/food/44.ដំឡូងបំពង.jpg",
        en: {
            title: "French Fries",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "ដំឡូងបំពង",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 45,
        category: "western",
        price: "$9.99",
        img: "./images/food/45.Spaghetti Seafood.jpg",
        en: {
            title: "Spaghetti Seafood",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "ស្ពាហ្គាទីគ្រឿងសមុទ្រ",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 46,
        category: "western",
        price: "$6.00",
        img: "./images/food/46.Spaghetti Cabonara.jpg",
        en: {
            title: "Spaghetti Cabonara",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "ស្ពាហ្គាទីកាបូណារ៉ា",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 47,
        category: "western",
        price: "$5.00",
        img: "./images/food/47.Spaghetti Bolognese.jpg",
        en: {
            title: "Spaghetti Bolognese",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "ស្ពាហ្គាទីបូឡូញេស",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 48,
        category: "western",
        price: "$5.50",
        img: "./images/food/48.បឺហ្គឺសាច់គោ.jpg",
        en: {
            title: "Beef Burger",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "បឺហ្គឺសាច់គោ",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 49,
        category: "western",
        price: "$5.50",
        img: "./images/food/49.បឺហ្គឺបង្គា.jpg",
        en: {
            title: "Prawn Katsu Burger",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "បឺហ្គឺបង្គា",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 50,
        category: "western",
        price: "$5.00",
        img: "./images/food/50.សាំងវិចក្លឹប.jpg",
        en: {
            title: "Club Sandwich",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "សាំងវិចក្លឹប",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 51,
        category: "asian",
        price: "$9.99",
        img: "./images/food/04.បុកល្ហុងគ្រឿងសមុទ្រ.jpg",
        en: {
            title: "Green Papaya with Seafood Salad",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "បុកល្ហុងគ្រឿងសមុទ្រ",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 52,
        category: "western",
        price: "$12.00",
        img: "./images/food/52.Australia BeefRibeye Steak (300g).jpg",
        en: {
            title: "Australia BeefRibeye Steak (300g)",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "ស្តេកសាច់គោអូស្រ្តាលី",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 53,
        category: "asian",
        price: "$9.99",
        img: "./images/food/04.បុកល្ហុងគ្រឿងសមុទ្រ.jpg",
        en: {
            title: "Green Papaya with Seafood Salad",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "បុកល្ហុងគ្រឿងសមុទ្រ",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 54,
        category: "western",
        price: "$13.50",
        img: "./images/food/54.Australia Lamb.jpg",
        en: {
            title: "Australia Lamb Rack (280g)",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "ស្តេកសាច់ឆ្អឹងជំនីចៀមអាំង",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },
    {
        id: 55,
        category: "western",
        price: "$15.00",
        img: "./images/food/55.Salmon Steak (250G).jpg",
        en: {
            title: "Salmon Steak (250G)",
            desc: "( Salmon, Crab & Prawn ), Stir-fried rice noodles with tofu, shrimp, bean sprouts, and a tangy tamarind sauce."
        },
        km: {
            title: "ស្តេកត្រីសាលម៉ុន (250G)",
            desc: "មីឆាថៃជាមួយតៅហ៊ូ បង្គា សណ្តែកបណ្តុះ និងទឹកជ្រលក់អំពិលទុំជូរអែម។"
        }
    },


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
            
            <div class="img-container">
                <img src="${item.img}" alt="${langData.title}" class="item-img">
            </div>
            <div class="item-info">
                <div class="item-header">
                    <h3>${langData.title}</h3>
                </div>
                <p class="item-text">${langData.desc}</p>
                <h3 class="price">${item.price}</h3>
            </div>
        </article>`;
    });

    menuContainer.innerHTML = displayMenu.join("");
}

// Function to translate static sidebar headings and filter button texts
function updateUIStrings() {
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
    langToggleBtn.innerText = currentLanguage === "en" ? "KHMER" : "ENGLISH";
    
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