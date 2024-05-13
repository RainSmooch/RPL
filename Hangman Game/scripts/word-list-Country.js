const wordList = [
    {
        word: "Argentina",
        hint: "A country in South America known for tango, beef, and Patagonia."
    },
    {
        word: "Australia",
        hint: "A country and continent known for its vast Outback, kangaroos, and Sydney Opera House."
    },
    {
        word: "Brazil",
        hint: "A large country in South America known for its Amazon Rainforest, carnival, and soccer."
    },
    {
        word: "Canada",
        hint: "A North American country known for its vast wilderness, maple syrup, and ice hockey."
    },
    {
        word: "China",
        hint: "The world's most populous country known for the Great Wall, pandas, and Chinese cuisine."
    },
    {
        word: "France",
        hint: "A European country known for its art, culture, wine, and Eiffel Tower."
    },
    {
        word: "Germany",
        hint: "A European country known for its history, beer, sausages, and Oktoberfest."
    },
    {
        word: "India",
        hint: "A South Asian country known for its diversity, curry, Bollywood, and Taj Mahal."
    },
    {
        word: "Italy",
        hint: "A European country known for its art, history, pasta, pizza, and landmarks like the Colosseum."
    },
    {
        word: "Japan",
        hint: "An East Asian country known for its technology, sushi, samurai, and cherry blossoms."
    },
    {
        word: "Mexico",
        hint: "A North American country known for its culture, cuisine, mariachi music, and ancient ruins."
    },
    {
        word: "Russia",
        hint: "The largest country in the world known for its history, literature, vodka, and Siberian wilderness."
    },
    {
        word: "South Africa",
        hint: "A country in southern Africa known for its diverse culture, wildlife, and Nelson Mandela."
    },
    {
        word: "Spain",
        hint: "A European country known for its culture, cuisine, Flamenco music, and historic landmarks."
    },
    {
        word: "United Kingdom",
        hint: "A country in Europe consisting of England, Scotland, Wales, and Northern Ireland, known for its history, royalty, tea, and Big Ben."
    },
    {
        word: "United States",
        hint: "A North American country known for its diversity, freedom, culture, and landmarks like the Statue of Liberty and Grand Canyon."
    },
    {
        word: "Egypt",
        hint: "A country in North Africa known for its ancient civilization, pyramids, and Nile River."
    },
    {
        word: "Greece",
        hint: "A European country known for its ancient history, mythology, Mediterranean cuisine, and islands like Santorini."
    },
    {
        word: "Turkey",
        hint: "A transcontinental country located mainly on the Anatolian Peninsula, known for its history, culture, cuisine, and landmarks like Hagia Sophia."
    },
    {
        word: "Thailand",
        hint: "A Southeast Asian country known for its tropical beaches, ornate temples, and spicy cuisine."
    },
    {
        word: "Vietnam",
        hint: "A Southeast Asian country known for its history, cuisine, natural landscapes, and landmarks like Ha Long Bay."
    },
    {
        word: "New Zealand",
        hint: "A country in the southwestern Pacific Ocean known for its stunning landscapes, Maori culture, and adventure sports."
    },
    {
        word: "Switzerland",
        hint: "A European country known for its mountains, chocolate, watches, and neutrality."
    },
    {
        word: "Norway",
        hint: "A Scandinavian country known for its fjords, Northern Lights, and outdoor activities."
    },
    {
        word: "Sweden",
        hint: "A Scandinavian country known for its innovation, design, and natural beauty."
    },
    {
        word: "Denmark",
        hint: "A Scandinavian country known for its history, fairy tales, design, and quality of life."
    },
    {
        word: "Finland",
        hint: "A Nordic country known for its saunas, lakes, Northern Lights, and education system."
    },
    {
        word: "Ireland",
        hint: "A European country known for its lush green landscapes, pubs, folklore, and Guinness."
    },
    {
        word: "Portugal",
        hint: "A European country known for its history, port wine, beaches, and Fado music."
    },
    {
        word: "Netherlands",
        hint: "A European country known for its tulip fields, windmills, canals, and cycling culture."
    },
    {
        word: "Belgium",
        hint: "A European country known for its chocolate, waffles, beer, and medieval towns."
    },
    {
        word: "Austria",
        hint: "A European country known for its classical music, Alpine landscapes, and historic cities like Vienna."
    },
    {
        word: "Czech Republic",
        hint: "A European country known for its historic architecture, beer, and Bohemian culture."
    },
    {
        word: "Poland",
        hint: "A European country known for its history, medieval architecture, pierogies, and Solidarity movement."
    },
    {
        word: "South Korea",
        hint: "An East Asian country known for its technology, K-pop, kimchi, and vibrant culture."
    },
    {
        word: "North Korea",
        hint: "An East Asian country known for its secrecy, authoritarian regime, and nuclear program."
    },
    {
        word: "Saudi Arabia",
        hint: "A country in the Middle East known for its oil reserves, deserts, and Islamic holy sites."
    },
    {
        word: "Iran",
        hint: "A country in the Middle East known for its ancient civilization, Persian culture, and Islamic architecture."
    },
    {
        word: "Iraq",
        hint: "A country in the Middle East known for its ancient history, Mesopotamian civilization, and recent conflicts."
    },
    {
        word: "Israel",
        hint: "A country in the Middle East known for its biblical history, diverse culture, and conflict with Palestine."
    },
    {
        word: "Pakistan",
        hint: "A South Asian country known for its history, culture, and conflicts with India."
    },
    {
        word: "Bangladesh",
        hint: "A South Asian country known for its population density, rivers, and history."
    },
    {
        word: "Sri Lanka",
        hint: "An island country in South Asia known for its beaches, tea plantations, and ancient ruins."
    },
    {
        word: "Afghanistan",
        hint: "A landlocked country in South Asia known for its rugged mountains, history, and conflict."
    },
    {
        word: "Nepal",
        hint: "A South Asian country known for its Himalayan mountains, temples, and trekking."
    },
    {
        word: "Bhutan",
        hint: "A small South Asian country known for its Gross National Happiness index, Buddhist culture, and Himalayan landscapes."
    },
    {
        word: "Myanmar",
        hint: "A Southeast Asian country known for its diverse culture, temples, and recent political history."
    },
    {
        word: "Cambodia",
        hint: "A Southeast Asian country known for its temples, Khmer Empire ruins, and tragic recent history."
    },
    {
        word: "Laos",
        hint: "A Southeast Asian country known for its mountainous terrain, French colonial architecture, and Buddhist monasteries."
    },
    {
        word: "Philippines",
        hint: "An archipelagic country in Southeast Asia known for its islands, beaches, and diverse culture."
    },
    {
        word: "Malaysia",
        hint: "A Southeast Asian country known for its diverse culture, cuisine, and modern cities like Kuala Lumpur."
    },
    {
        word: "Singapore",
        hint: "A city-state in Southeast Asia known for its modern skyline, cleanliness, and multiculturalism."
    },
    {
        word: "Indonesia",
        hint: "A Southeast Asian country known for its thousands of islands, volcanoes, and diverse culture."
    },
    {
        word: "Vietnam",
        hint: "A Southeast Asian country known for its history, cuisine, natural landscapes, and landmarks like Ha Long Bay."
    },
    {
        word: "Brunei",
        hint: "A small Southeast Asian country known for its oil wealth and monarchy."
    },
    {
        word: "Fiji",
        hint: "An island country in the South Pacific known for its stunning beaches, coral reefs, and clear waters."
    },
    {
        word: "Tonga",
        hint: "A Polynesian kingdom in the South Pacific known for its coral reefs, beaches, and rugby."
    },
    {
        word: "Samoa",
        hint: "A Polynesian island nation in the South Pacific known for its traditional culture, natural beauty, and rugby."
    },
    {
        word: "New Zealand",
        hint: "A country in the southwestern Pacific Ocean known for its stunning landscapes, Maori culture, and adventure sports."
    },
    {
        word: "Vanuatu",
        hint: "A South Pacific island nation known for its volcanic landscapes, coral reefs, and Melanesian culture."
    },
    {
        word: "Solomon Islands",
        hint: "A Pacific island country known for its tropical forests, coral reefs, and World War II history."
    },
    {
        word: "Kiribati",
        hint: "A Pacific island nation known for its coral atolls, fishing, and rising sea levels."
    },
    {
        word: "Palau",
        hint: "A Pacific island country known for its clear blue waters, coral reefs, and Micronesian culture."
    },
    {
        word: "Micronesia",
        hint: "A region of islands in the western Pacific Ocean known for its tropical beauty and diverse cultures."
    },
    {
        word: "Marshall Islands",
        hint: "A Pacific island country known for its atolls, marine life, and US military presence."
    },
    {
        word: "Nauru",
        hint: "A small island country in the Pacific Ocean known for its phosphate mining and birdlife."
    },
    {
        word: "Papua New Guinea",
        hint: "A country in the southwestern Pacific known for its rainforests, tribal cultures, and coral reefs."
    },
    {
        word: "Timor-Leste",
        hint: "A Southeast Asian nation known for its rugged landscapes, beaches, and colonial history."
    },
];
