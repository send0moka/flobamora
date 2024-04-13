type accomodation = {
    title: string;
    address: string;
    imgURL: string[];
    desc: string;
    source: string;
    sourceURL: string;
    price: string;
    rating: string;
};

const accomodations: accomodation[] = [
    {
        title: "Menjaga Bay",
        address: "Kampung Menjaga, Macang Tanggar, Labuan Bajo, Indonesia, 86763",
        imgURL: [
            "https://raw.githubusercontent.com/sendomoka/flobamora/f749e611b9ab9e0ecba75e9a71f3e3ab7e4ac628/public/temp/1menjaga.webp",
            "https://raw.githubusercontent.com/sendomoka/flobamora/f749e611b9ab9e0ecba75e9a71f3e3ab7e4ac628/public/temp/2menjaga.webp",
            "https://raw.githubusercontent.com/sendomoka/flobamora/f749e611b9ab9e0ecba75e9a71f3e3ab7e4ac628/public/temp/3menjaga.webp",
            "https://raw.githubusercontent.com/sendomoka/flobamora/f749e611b9ab9e0ecba75e9a71f3e3ab7e4ac628/public/temp/4menjaga.jpg",
            "https://raw.githubusercontent.com/sendomoka/flobamora/f749e611b9ab9e0ecba75e9a71f3e3ab7e4ac628/public/temp/5menjaga.jpg"
        ],
        desc: "Get your trip off to a great start with a stay at this property, which offers free Wi-Fi in all rooms. Strategically situated in Macang Tanggar, allowing you access and proximity to local attractions and sights. Don't leave before paying a visit to the famous Komodo Airport. Rated with 5 stars, this high-quality property provides guests with access to massage, restaurant and outdoor pool on-site.",
        source: "Agoda",
        sourceURL: "https://www.agoda.com/menjaga-bay/hotel/labuan-bajo-id.html?finalPriceView=1&isShowMobileAppPrice=false&cid=1891460&numberOfBedrooms=&familyMode=false&adults=1&children=0&rooms=1&maxRooms=0&checkIn=2024-03-5&isCalendarCallout=false&childAges=&numberOfGuest=0&missingChildAges=false&travellerType=0&showReviewSubmissionEntry=false&currencyCode=IDR&isFreeOccSearch=false&tag=f71b0106-fb42-0cf2-b13e-84355fbe83c7&isCityHaveAsq=false&tspTypes=8&los=1&searchrequestid=b79856fd-9c8b-4be9-b908-71c3b15e6aaf&ds=Qyka%2F6AK92T1NJTz",
        price: "USD 153.57",
        rating: "9.1"
    },
    {
        title: "Zasgo Hotel",
        address: "Jalan Soekarno Hatta, Labuan Bajo, Labuan Bajo, Indonesia, 86763",
        imgURL: [
            "https://raw.githubusercontent.com/sendomoka/flobamora/f749e611b9ab9e0ecba75e9a71f3e3ab7e4ac628/public/temp/zasgo1.webp",
            "https://raw.githubusercontent.com/sendomoka/flobamora/f749e611b9ab9e0ecba75e9a71f3e3ab7e4ac628/public/temp/zasgo2.webp",
            "https://raw.githubusercontent.com/sendomoka/flobamora/f749e611b9ab9e0ecba75e9a71f3e3ab7e4ac628/public/temp/zasgo3.webp",
            "https://raw.githubusercontent.com/sendomoka/flobamora/f749e611b9ab9e0ecba75e9a71f3e3ab7e4ac628/public/temp/zasgo4.webp",
            "https://raw.githubusercontent.com/sendomoka/flobamora/f749e611b9ab9e0ecba75e9a71f3e3ab7e4ac628/public/temp/zasgo5.webp"
        ],
        desc: "The car parking and the Wi-Fi are always free, so you can stay in touch and come and go as you please. Strategically situated in Labuan Bajo, allowing you access and proximity to local attractions and sights. Don't leave before paying a visit to the famous Komodo Airport. This 4-star property features restaurant to make your stay more indulgent and memorable.",
        source: "Agoda",
        sourceURL: "https://www.agoda.com/zasgo-hotel/hotel/goron-talo-id.html?finalPriceView=1&isShowMobileAppPrice=false&cid=1908612&numberOfBedrooms=&familyMode=false&adults=1&children=0&rooms=1&maxRooms=0&checkIn=2024-03-5&isCalendarCallout=false&childAges=&numberOfGuest=0&missingChildAges=false&travellerType=0&showReviewSubmissionEntry=false&currencyCode=IDR&isFreeOccSearch=false&isCityHaveAsq=false&tspTypes=8&los=1&searchrequestid=67a49ea2-ba86-4154-ad86-af2794579029",
        price: "USD 40.35",
        rating: "8.4"
    },
    {
        title: "AYANA Komodo Waecicu Beach",
        address: "Pantai Waecicu, Labuan Bajo, Manggarai Barat, Nusa Tenggara Timur, Indonesia, 86554",
        imgURL: [
            "https://raw.githubusercontent.com/sendomoka/flobamora/f749e611b9ab9e0ecba75e9a71f3e3ab7e4ac628/public/temp/ayana1.webp",
            "https://raw.githubusercontent.com/sendomoka/flobamora/f749e611b9ab9e0ecba75e9a71f3e3ab7e4ac628/public/temp/ayana2.webp",
            "https://raw.githubusercontent.com/sendomoka/flobamora/f749e611b9ab9e0ecba75e9a71f3e3ab7e4ac628/public/temp/ayana3.webp",
            "https://raw.githubusercontent.com/sendomoka/flobamora/f749e611b9ab9e0ecba75e9a71f3e3ab7e4ac628/public/temp/ayana4.webp",
            "https://raw.githubusercontent.com/sendomoka/flobamora/f749e611b9ab9e0ecba75e9a71f3e3ab7e4ac628/public/temp/ayana5.webp"
        ],
        desc: "World-class Luxury with Gracious Indonesian Hospitality at Labuan Bajo Hotel. A perfectly balanced retreat sanctuary welcomes you to the heart of Komodo National Park. Experience and create lasting memories in the lap of luxury with state-of-the-art facilities and services while surrounded by unparalleled natural beauty at the best 5-star hotel in Labuan Bajo, AYANA Komodo Resort. Do you long for a private break-away where your thoughts can roam while kayaking around the Labuan Bajo Resort to a private island? Or do you want to mingle with otherguests and create wonderful new friendships on our bustling 250m long private jetty? The Labuan Bajo Hotel has what you need—and so much more.",
        source: "Traveloka",
        sourceURL: "https://www.traveloka.com/id-id/hotel/detail?spec=03-03-2024.04-03-2024.1.1.HOTEL.3000020012727.AYANA%20Komodo%20Waecicu%20Beach.1&contexts=%7B%22inventoryRateKey%22%3A%22povEwB3ZzsU2C6pd%2B6MdU13LUNuufACdbU0usK5vg0dM0tKsNUio4Rxug1zOzHJilcvZa8YdqqIySdppe7dolTIewZlxfjiOGz6oXLTucMvN0%2BgQ3yZPvZcoHwUFNN%2BZpcr%2F%2FNa8o9ElfN8zOYhzzZeg0X586laFpeUViPi9rxBJUdjfh7Kwv3D2AXvZD2TOIvEWeildVo7nbHxIWcXPVNGysXwP9P%2F6jQTjnyKeTv%2ByqYmxSenRKFEfSHS0XO3kZfZPEEhT4qTyZ4NnGlioFk6ay4RXlsebEjOdYqJCyZaMtDSNGh18CHz1fdeRO9FZFE1TgKa9ew4G5utQz7gGRWS6bi7h%2Fw2IxaeAsuP0oBoJvMSm%2BJYK0fG1rNkywkoSeOjRTl6ytxGba%2F42pjcyycAV0FLSWnDGKO8K5NDbch6ye8H8B7diudEPIK1xPvN%2BTW8Ky7dIz%2F8vuFaf4od3zzr6YNymnTk58iYKaBwFeu9eKx0jA7izbI%2B%2Bg2rqPRLdTEz1OwP3IrAA8Jugwb1nItK86GilTqHjHMsEEFrul1Z8CS%2FWFNqllBTLDfKALgAatbkPrlGHYMvOxUcd8gSuE9olaRmAWbSrbAx4lGVLBha%2FzTvZV0gOgy8QojE2ombEtMM9W5F3LU%2B3MiLXiG%2FcrZ%2BcjOcshP%2FlnzDiU9VoWjc%3D%22%7D&loginPromo=1&prevSearchId=1792396691774660037",
        price: "USD 285.83",
        rating: "9.0"
    },
    {
        title: "Loccal Collection Hotel Komodo",
        address: "Jl. Raya Binongko -  Kelurahan Labuan Bajo, Manggarai Barat - Nusa enggara Timur, Labuan Bajo, Manggarai Barat, Nusa Tenggara Timur, Indonesia, 86754",
        imgURL: [
            "https://raw.githubusercontent.com/sendomoka/flobamora/f749e611b9ab9e0ecba75e9a71f3e3ab7e4ac628/public/temp/loccal1.webp",
            "https://raw.githubusercontent.com/sendomoka/flobamora/f749e611b9ab9e0ecba75e9a71f3e3ab7e4ac628/public/temp/loccal2.webp",
            "https://raw.githubusercontent.com/sendomoka/flobamora/f749e611b9ab9e0ecba75e9a71f3e3ab7e4ac628/public/temp/loccal3.webp",
            "https://raw.githubusercontent.com/sendomoka/flobamora/f749e611b9ab9e0ecba75e9a71f3e3ab7e4ac628/public/temp/loccal4.webp",
            "https://raw.githubusercontent.com/sendomoka/flobamora/f749e611b9ab9e0ecba75e9a71f3e3ab7e4ac628/public/temp/loccal5.webp"
        ],
        desc: "Not only located within easy reach of various places of interests for your adventure, but staying at Loccal Collection Hotel Komodo will also give you a pleasant stay. This hotel is the perfect choice for couples seeking a romantic getaway or a honeymoon retreat. Enjoy the most memorable nights with your loved one by staying at Loccal Collection Hotel Komodo. Spa treatment is one of the main features of the hotel. Pamper yourself with the relaxing treatment that rejuvenates you.",
        source: "Traveloka",
        sourceURL: "https://www.traveloka.com/en-en/hotel/detail?spec=03-03-2024.04-03-2024.1.1.HOTEL.9000000966354.Loccal%20Collection%20Hotel%20Komodo.1&contexts=%7B%22inventoryRateKey%22%3A%22EPSy2lMQRUbs4Z%2BpcPzDIbq5l8JOBcwg%2FgAQ7s4L7YrH87ecHjJgWWYE139qp5Q3TNLSrDVIqOEcboNczsxyYpXL2WvGHaqiMknaaXu3aJUyHsGZcX44jhs%2BqFy07nDLzdPoEN8mT72XKB8FBTTfmaXK%2F%2FzWvKPRJXzfMzmIc82XoNF%2BfOpWhaXlFYj4va8Q5USsgtCsS0GG9hEGdGfATyLxFnopXVaO52x8SFnFz1TRsrF8D%2FT%2F%2Bo0E458ink7%2FsqmJsUnp0ShRH0h0tFzt5GX2TxBIU%2BKk8meDZxpYqBZOmsuEV5bHmxIznWKiQsmWjLQ0jRodfAh89X3XkTvRWRRNU4CmvXsOBubrUM%2B4BkUfut%2FyeYlVHq97pGyzXbiVF6SdGxy0EFSadsJgBu00ADqnDFN1iw7m5oI52bYX4d%2FAFdBS0lpwxijvCuTQ23IesnvB%2FAe3YrnRDyCtcT7zfv0rsDliuZML2axtjINmLrt%2ByLS3mEiQHWxlGEnqsEq8KMcXjTm43BkjSigWUMwXa0xM9TsD9yKwAPCboMG9ZyLSvOhopU6h4xzLBBBa7pdWfAkv1hTapZQUyw3ygC4AGrW5D65Rh2DLzsVHHfIErhPaJWkZgFm0q2wMeJRlSwYWv8072VdIDoMvEKIxNqJmxLTDPVuRdy1PtzIi14hv3K2fnIznLIT%2F5Z8w4lPVaFo3%22%7D&loginPromo=1&prevSearchId=1792393043425383516",
        price: "USD 110.33",
        rating: "8.3"
    },
    {
        title: "Meruorah Komodo Labuan Bajo",
        address: "Kawasan Marina Labuan Bajo, Jalan Soekarno Hatta, Labuan Bajo - Manggarai Barat, NTT 86711 Indonesia",
        imgURL: [
            "https://raw.githubusercontent.com/sendomoka/flobamora/f749e611b9ab9e0ecba75e9a71f3e3ab7e4ac628/public/temp/meruorah1.webp",
            "https://raw.githubusercontent.com/sendomoka/flobamora/f749e611b9ab9e0ecba75e9a71f3e3ab7e4ac628/public/temp/meruorah2.webp",
            "https://raw.githubusercontent.com/sendomoka/flobamora/f749e611b9ab9e0ecba75e9a71f3e3ab7e4ac628/public/temp/meruorah3.webp",
            "https://raw.githubusercontent.com/sendomoka/flobamora/f749e611b9ab9e0ecba75e9a71f3e3ab7e4ac628/public/temp/meruorah4.webp",
            "https://raw.githubusercontent.com/sendomoka/flobamora/f749e611b9ab9e0ecba75e9a71f3e3ab7e4ac628/public/temp/meruorah5.webp"
        ],
        desc: "Meruorah Komodo Labuan Bajo is a hotel near Airport, an ideal accommodation while waiting for your next flight. Enjoy a satisfying place to rest during your transit.From business event to corporate gathering, Meruorah Komodo Labuan Bajo provides complete services and facilities that you and your colleagues need.Whether you are planning an event or other special occasions, Meruorah Komodo Labuan Bajo is a great choice for you with a large and well-equipped function room to suit your requirements.",
        source: "Traveloka",
        sourceURL: "https://www.traveloka.com/en-en/hotel/detail?spec=03-03-2024.04-03-2024.1.1.HOTEL.9000000406691.Meruorah%20Komodo%20Labuan%20Bajo.1&contexts=%7B%22inventoryRateKey%22%3A%22povEwB3ZzsU2C6pd%2B6MdU2B9D%2BXTtnp8xBPheXkh8zdM0tKsNUio4Rxug1zOzHJilcvZa8YdqqIySdppe7dolTIewZlxfjiOGz6oXLTucMvN0%2BgQ3yZPvZcoHwUFNN%2BZpcr%2F%2FNa8o9ElfN8zOYhzzZeg0X586laFpeUViPi9rxDke8%2B9K%2FUKUmyQEgJqCfYRIvEWeildVo7nbHxIWcXPVNGysXwP9P%2F6jQTjnyKeTv%2ByqYmxSenRKFEfSHS0XO3kZfZPEEhT4qTyZ4NnGlioFk6ay4RXlsebEjOdYqJCyZaMtDSNGh18CHz1fdeRO9FZFE1TgKa9ew4G5utQz7gGRWS6bi7h%2Fw2IxaeAsuP0oBoJvMSm%2BJYK0fG1rNkywkoSeOjRTl6ytxGba%2F42pjcyycAV0FLSWnDGKO8K5NDbch6ye8H8B7diudEPIK1xPvN%2BTW8Ky7dIz%2F8vuFaf4od3zzr6YNymnTk58iYKaBwFeu9eKx0jA7izbI%2B%2Bg2rqPRLdTEz1OwP3IrAA8Jugwb1nItK86GilTqHjHMsEEFrul1Z8CS%2FWFNqllBTLDfKALgAatbkPrlGHYMvOxUcd8gSuE9olaRmAWbSrbAx4lGVLBha%2FzTvZV0gOgy8QojE2ombEtMM9W5F3LU%2B3MiLXiG%2FcrZ%2BcjOcshP%2FlnzDiU9VoWjc%3D%22%7D&loginPromo=1&prevSearchId=1792396691774660037",
        price: "USD 154.59",
        rating: "8.7"
    },
    {
        title: "Sudamala Resort",
        address: "Jl. Pantai Pede, Km. 3, Gorontalo, Labuan Bajo, Labuan Bajo, Manggarai Barat, Nusa Tenggara Timur, Indonesia, 86554",
        imgURL: [
            "https://raw.githubusercontent.com/sendomoka/flobamora/f749e611b9ab9e0ecba75e9a71f3e3ab7e4ac628/public/temp/sudamala1.webp",
            "https://raw.githubusercontent.com/sendomoka/flobamora/f749e611b9ab9e0ecba75e9a71f3e3ab7e4ac628/public/temp/sudamala2.webp",
            "https://raw.githubusercontent.com/sendomoka/flobamora/f749e611b9ab9e0ecba75e9a71f3e3ab7e4ac628/public/temp/sudamala3.webp",
            "https://raw.githubusercontent.com/sendomoka/flobamora/f749e611b9ab9e0ecba75e9a71f3e3ab7e4ac628/public/temp/sudamala4.webp",
            "https://raw.githubusercontent.com/sendomoka/flobamora/f749e611b9ab9e0ecba75e9a71f3e3ab7e4ac628/public/temp/sudamala5.webp"
        ],
        desc: "Whether you are planning an event or other special occasions, Sudamala Resort, Komodo, Labuan Bajo is a great choice for you with a large and well-equipped function room to suit your requirements. This resort is the perfect choice for couples seeking a romantic getaway or a honeymoon retreat. Enjoy the most memorable nights with your loved one by staying at Sudamala Resort, Komodo, Labuan Bajo. Sudamala Resort, Komodo, Labuan Bajo is the splendid choice for you who are seeking a luxurious treat for your holiday. Get pampered with the most excellent services and make your holiday memorable by staying here.",
        source: "Traveloka",
        sourceURL: "https://www.traveloka.com/en-en/hotel/indonesia/sudamala-resort-komodo-labuan-bajo-9000000724384?spec=03-03-2024.04-03-2024.1.1.HOTEL.9000000724384..1",
        price: "USD 134.55",
        rating: "9.1"
    },
]

export { accomodations };