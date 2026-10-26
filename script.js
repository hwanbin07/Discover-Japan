
/* ==========================================
   DISCOVER JAPAN - COMPLETE SCRIPT
   ========================================== */

/* CITY INFORMATION */

const cities = {
    Japan: {
        title: "Discover Japan",
        subtitle: "Experience the beauty, culture, and flavors of Japan.",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=2000&q=85"
    },
    Tokyo: {
        title: "Discover Tokyo",
        subtitle: "Explore the exciting streets, delicious food, and traditions of Tokyo.",
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=2000&q=85"
    },
    Osaka: {
        title: "Discover Osaka",
        subtitle: "Enjoy Osaka's lively streets, famous street food, and historic landmarks.",
        image: "https://images.unsplash.com/photo-1590559899731-a382839e5549?auto=format&fit=crop&w=2000&q=85"
    },
    Fukuoka: {
        title: "Discover Fukuoka",
        subtitle: "Experience local food, welcoming neighborhoods, and peaceful attractions.",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=2000&q=85"
    },
    Okinawa: {
        title: "Discover Okinawa",
        subtitle: "Discover beautiful beaches, island cuisine, and Ryukyu traditions.",
        image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=2000&q=85"
    }
};

/* TRAVEL INFORMATION */

const travelInfo = {
    Japan: {
        stay: {
            title: "Where to Stay in Japan",
            items: [
                {
                    name: "Tokyo Hotels",
                    description: "Stay in convenient accommodation close to transportation and attractions.",
                    images: [
                        "images/tokyo-hotel-1.jpg",
                        "images/tokyo-hotel-2.jpg"
                    ]
                },
                {
                    name: "Hilton Okinawa Chatan Resort",
                    description: "Enjoy resort-style accommodation and access to Okinawa's attractions.",
                    images: [
                        "images/hilton-resort-1.jpg",
                        "images/hilton-resort-2.jpg"
                    ]
                }
            ]
        },
        food: {
            title: "Must-Try Food in Japan",
            items: [
                {
                    name: "Sushi",
                    description: "Enjoy Japanese vinegared rice paired with fresh fish and other ingredients.",
                    image: "images/tokyo-sushi.jpg"
                },
                {
                    name: "Ramen",
                    description: "Try Japanese noodles served in a variety of flavorful broths.",
                    image: "images/tokyo-ramen.jpg"
                },
                {
                    name: "Takoyaki",
                    description: "Taste Osaka's famous round snacks traditionally filled with octopus.",
                    image: "images/osaka-takoyaki.jpg"
                }
            ]
        },
        culture: {
            title: "Discover Japanese Culture",
            items: [
                {
                    name: "Traditional Temples",
                    description: "Discover Japan's historic temples and spiritual traditions.",
                    image: "images/japan-temples.jpg"
                },
                {
                    name: "Japanese Festivals",
                    description: "Experience seasonal celebrations and traditional performances.",
                    image: "images/japan-festivals.jpg"
                },
                {
                    name: "Traditional Arts",
                    description: "Learn about traditional Japanese arts, crafts, and customs.",
                    image: "images/japan-traditional-arts.jpg"
                }
            ]
        }
    },

    Tokyo: {
        stay: {
            title: "Where to Stay in Tokyo",
            items: [
                {
                    name: "Shibuya Hotels",
                    description: "Stay near shopping, entertainment, and Tokyo's famous crossing.",
                    images: [
                        "images/shibuya-hotel-1.jpg",
                        "images/shibuya-hotel-2.jpg"
                    ]
                },
                {
                    name: "Tokyo Hotels",
                    description: "Choose convenient accommodation for exploring the city.",
                    images: [
                        "images/tokyo-hotel-1.jpg",
                        "images/tokyo-hotel-2.jpg"
                    ]
                }
            ]
        },
        food: {
            title: "Must-Try Food in Tokyo",
            items: [
                {
                    name: "Sushi",
                    description: "Try sushi restaurants ranging from casual spots to traditional counters.",
                    image: "images/tokyo-sushi.jpg"
                },
                {
                    name: "Monjayaki",
                    description: "A savory, soft-textured dish associated with Tokyo's Tsukishima area.",
                    image: "images/tokyo-monjayaki.jpg"
                },
                {
                    name: "Ramen",
                    description: "Discover different noodle styles and regional broth flavors.",
                    image: "images/tokyo-ramen.jpg"
                }
            ]
        },
        culture: {
            title: "Discover Tokyo",
            items: [
                {
                    name: "Senso-ji Temple",
                    description: "Visit one of Tokyo's best-known traditional temples.",
                    image: "images/sensoji-temple.jpg"
                },
                {
                    name: "Shibuya Crossing",
                    description: "Experience the energy of one of the world's busiest crossings.",
                    image: "images/shibuya-crossing.jpg"
                },
                {
                    name: "Meiji Shrine",
                    description: "Explore a peaceful shrine surrounded by greenery.",
                    image: "images/meiji-shrine.jpg"
                }
            ]
        }
    },

    Osaka: {
        stay: {
            title: "Where to Stay in Osaka",
            items: [
                {
                    name: "Osaka Hotels",
                    description: "Stay near popular attractions, shopping, and dining areas.",
                    images: [
                        "images/osaka-hotel-1.jpg",
                        "images/osaka-hotel-2.jpg"
                    ]
                },
                {
                    name: "Umeda Hotels",
                    description: "Choose a convenient base near major transportation connections.",
                    images: [
                        "images/umeda-hotel-1.jpg",
                        "images/umeda-hotel-2.jpg"
                    ]
                }
            ]
        },
        food: {
            title: "Must-Try Food in Osaka",
            items: [
                {
                    name: "Takoyaki",
                    description: "Round batter snacks traditionally filled with octopus.",
                    image: "images/osaka-takoyaki.jpg"
                },
                {
                    name: "Okonomiyaki",
                    description: "A savory pancake made with cabbage and various toppings.",
                    image: "images/osaka-okonomiyaki.jpg"
                },
                {
                    name: "Kushikatsu",
                    description: "Skewered ingredients coated in breadcrumbs and deep-fried.",
                    image: "images/osaka-kushikatsu.jpg"
                }
            ]
        },
        culture: {
            title: "Discover Osaka",
            items: [
                {
                    name: "Osaka Castle",
                    description: "Explore one of the city's best-known historic landmarks.",
                    image: "images/osaka-castle.jpg"
                },
                {
                    name: "Dotonbori",
                    description: "See colorful signs, lively streets, and famous food spots.",
                    image: "images/dotonbori.jpg"
                },
                {
                    name: "Shinsekai",
                    description: "Discover a retro neighborhood known for its distinctive atmosphere.",
                    image: "images/shinsekai.jpg"
                }
            ]
        }
    },

    Fukuoka: {
        stay: {
            title: "Where to Stay in Fukuoka",
            items: [
                {
                    name: "Hakata Hotels",
                    description: "Stay near the main station for convenient transportation.",
                    images: [
                        "images/hakata-hotel-1.jpg",
                        "images/hakata-hotel-2.jpg"
                    ]
                },
                {
                    name: "Tenjin Hotels",
                    description: "Choose a central area with shops, cafes, and restaurants.",
                    images: [
                        "images/tenjin-hotel-1.jpg",
                        "images/tenjin-hotel-2.jpg"
                    ]
                }
            ]
        },
        food: {
            title: "Must-Try Food in Fukuoka",
            items: [
                {
                    name: "Hakata Ramen",
                    description: "Known for its thin noodles and rich pork-bone broth.",
                    image: "images/fukuoka-ramen.jpg"
                },
                {
                    name: "Motsunabe",
                    description: "A hot pot dish made with offal, vegetables, and broth.",
                    image: "images/motsunabe.jpg"
                },
                {
                    name: "Mentaiko",
                    description: "Seasoned pollock roe often served with rice or noodles.",
                    image: "images/mentaiko.jpg"
                }
            ]
        },
        culture: {
            title: "Discover Fukuoka",
            items: [
                {
                    name: "Ohori Park",
                    description: "Enjoy a relaxing walk around the scenic park lake.",
                    image: "images/ohori-park.jpg"
                },
                {
                    name: "Kushida Shrine",
                    description: "Discover a historic shrine connected to local festivals.",
                    image: "images/kushida-shrine.jpg"
                },
                {
                    name: "Yatai Food Stalls",
                    description: "Experience Fukuoka's outdoor food-stall culture in the evening.",
                    image: "images/yatai-stalls.jpg"
                }
            ]
        }
    },

    Okinawa: {
        stay: {
            title: "Where to Stay in Okinawa",
            items: [
                {
                    name: "Naha City Hotels",
                    description: "Stay near Kokusai Street, restaurants, shopping, and public transportation.",
                    images: [
                        "images/naha-hotel-1.jpg",
                        "images/naha-hotel-2.jpg"
                    ]
                },
                {
                    name: "Hilton Okinawa Chatan Resort",
                    description: "Enjoy resort-style pools and convenient access to Mihama American Village.",
                    images: [
                        "images/hilton-resort-1.jpg",
                        "images/hilton-resort-2.jpg"
                    ]
                }
            ]
        },
        food: {
            title: "Must-Try Food in Okinawa",
            items: [
                {
                    name: "Okinawa Soba",
                    description: "A local noodle dish with a distinctive wheat-based noodle.",
                    image: "images/okinawa-soba.jpg"
                },
                {
                    name: "Goya Champuru",
                    description: "A stir-fried dish commonly made with bitter melon and tofu.",
                    image: "images/goya-champuru.jpg"
                },
                {
                    name: "Taco Rice",
                    description: "Rice topped with taco-seasoned ingredients and typical taco toppings.",
                    image: "images/taco-rice.jpg"
                }
            ]
        },
        culture: {
            title: "Discover Okinawa",
            items: [
                {
                    name: "Shuri Castle",
                    description: "Learn about the history of the Ryukyu Kingdom.",
                    image: "images/shuri-castle.jpg"
                },
                {
                    name: "Traditional Ryukyu Culture",
                    description: "Discover local music, dance, crafts, and island traditions.",
                    image: "images/ryukyu-culture.jpg"
                },
                {
                    name: "Okinawa Beaches",
                    description: "Enjoy the island's coastal scenery and beautiful ocean views.",
                    image: "images/okinawa-beaches.jpg"
                }
            ]
        }
    }
};

/* PAGE ELEMENTS */

let currentCity = "Japan";

const heroImage = document.getElementById("hero-image");
const heroTitle = document.getElementById("hero-title");
const heroSubtitle = document.getElementById("hero-subtitle");

const infoPanel = document.getElementById("info-panel");
const infoTitle = document.getElementById("info-title");
const infoContent = document.getElementById("info-content");
const closePanel = document.getElementById("close-panel");

const sectionLabel = document.getElementById("section-label");
const sectionTitle = document.getElementById("section-title");
const sectionDescription = document.getElementById("section-description");

const nextButton = document.getElementById("next-button");
const nextWrap = document.querySelector(".next-wrap");
const homeLink = document.getElementById("home-link");

/* CHANGE CITY */

function changeCity(city) {
    if (!cities[city]) return;

    currentCity = city;

    if (heroImage) {
        heroImage.src = cities[city].image;
        heroImage.alt = cities[city].title;
    }

    if (heroTitle) {
        heroTitle.textContent = cities[city].title;
    }

    if (heroSubtitle) {
        heroSubtitle.textContent = cities[city].subtitle;
    }

    if (infoPanel) {
        infoPanel.hidden = true;
    }

    if (nextWrap) {
        nextWrap.classList.remove("menu-open");
    }

    if (nextButton) {
        nextButton.setAttribute("aria-expanded", "false");
    }

    if (sectionLabel) {
        sectionLabel.textContent =
            city === "Japan"
                ? "DISCOVER JAPAN"
                : "WELCOME TO " + city.toUpperCase();
    }

    if (sectionTitle) {
        sectionTitle.textContent =
            city === "Japan" ? "Discover Japan" : "Discover " + city;
    }

    if (sectionDescription) {
        sectionDescription.textContent =
            city === "Japan"
                ? "Choose a category below to start planning your Japanese adventure."
                : cities[city].subtitle;
    }
}

/* CREATE IMAGE */

function createImage(imagePath, altText, className) {
    const img = document.createElement("img");

    img.src = imagePath;
    img.alt = altText;
    img.loading = "lazy";

    if (className) {
        img.className = className;
    }

    if (className === "info-card-image") {
        img.style.display = "block";
        img.style.width = "100%";
        img.style.height = "228px";
        img.style.aspectRatio = "4 / 3";
        img.style.objectFit = "cover";
        img.style.objectPosition = "center";
        img.style.borderRadius = "8px";
    }

    img.onerror = function () {
        console.error("Image could not load:", imagePath);
        this.style.display = "none";
    };

    return img;
}

/* DISPLAY STAY, FOOD, AND CULTURE */

function showCategory(category) {
    const selected = travelInfo[currentCity]?.[category];

    if (!selected || !infoTitle || !infoContent || !infoPanel) {
        return;
    }

    infoTitle.textContent = selected.title;
    infoContent.replaceChildren();
    infoContent.dataset.category = category;

    selected.items.forEach((item) => {
        const isArray = Array.isArray(item);
        const name = isArray ? item[0] : item.name;
        const description = isArray ? item[1] : item.description;

        const card = document.createElement("article");
        card.className = "info-card";

        /* ACCOMMODATION IMAGES */

        if (!isArray && item.images) {
            const imageContainer = document.createElement("div");
            imageContainer.className = "hotel-images";

            item.images.forEach((imagePath, index) => {
                const img = createImage(
                    imagePath,
                    name + " photo " + (index + 1)
                );

                imageContainer.appendChild(img);
            });

            card.appendChild(imageContainer);
        }

        /* FOOD AND CULTURE IMAGES */

        else if (!isArray && item.image) {
            const img = createImage(
                item.image,
                name,
                "info-card-image"
            );

            card.appendChild(img);
        }

        const body = document.createElement("div");
        body.className = "info-card-body";

        const heading = document.createElement("h3");
        heading.textContent = name;

        const paragraph = document.createElement("p");
        paragraph.textContent = description;

        body.append(heading, paragraph);
        card.appendChild(body);

        infoContent.appendChild(card);
    });

    infoPanel.hidden = false;

    infoPanel.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

/* CITY MENU */

document.querySelectorAll("[data-city]").forEach((button) => {
    button.addEventListener("click", () => {
        changeCity(button.dataset.city);
    });
});

/* CATEGORY MENU */

document.querySelectorAll(".category-nav [data-category]").forEach((button) => {
    button.addEventListener("click", () => {
        showCategory(button.dataset.category);
    });
});

/* NEXT DROPDOWN */

if (nextButton && nextWrap) {
    nextButton.addEventListener("click", (event) => {
        event.stopPropagation();

        const isOpen = nextWrap.classList.toggle("menu-open");

        nextButton.setAttribute("aria-expanded", String(isOpen));
    });
}

/* HOME BUTTON */

if (homeLink) {
    homeLink.addEventListener("click", (event) => {
        event.preventDefault();

        changeCity("Japan");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

/* CLOSE INFORMATION PANEL */

if (closePanel) {
    closePanel.addEventListener("click", () => {
        if (infoPanel) {
            infoPanel.hidden = true;
        }
    });
}

/* CLOSE DROPDOWN WHEN CLICKING OUTSIDE */

document.addEventListener("click", (event) => {
    if (nextWrap && !nextWrap.contains(event.target)) {
        nextWrap.classList.remove("menu-open");

        if (nextButton) {
            nextButton.setAttribute("aria-expanded", "false");
        }
    }
});

/* CONTACT FORM - GOOGLE SHEETS */

const contactForm = document.getElementById("contact-form");
const contactStatus = document.getElementById("contact-status");

if (contactForm && contactStatus) {
    contactForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const submitButton = contactForm.querySelector(".submit-btn");
        const formData = new FormData(contactForm);

        const contactData = {
            name: String(formData.get("name") || "").trim(),
            email: String(formData.get("email") || "").trim(),
            gender: String(formData.get("gender") || "").trim(),
            contactNumber: String(
                formData.get("contactNumber") || ""
            ).trim(),
            message: String(formData.get("message") || "").trim()
        };

        if (
            !contactData.name ||
            !contactData.email ||
            !contactData.gender ||
            !contactData.contactNumber ||
            !contactData.message
        ) {
            contactStatus.textContent = "Please complete all fields.";
            return;
        }

        if (submitButton) {
            submitButton.disabled = true;
        }

        contactStatus.textContent = "Sending your message...";

        try {
            await fetch(
                "https://script.google.com/macros/s/AKfycbzl6Iih0Wbt3Rxqa8A-2eCM9Jwb_UtPLMlLOO1Djaz7SlnYk6puBmsOpjK9PMjnRmZN/exec",
                {
                    method: "POST",
                    mode: "no-cors",
                    headers: {
                        "Content-Type": "text/plain;charset=utf-8"
                    },
                    body: JSON.stringify(contactData)
                }
            );

            contactStatus.textContent =
                "Your request was sent. Check the Google Sheet to confirm it was saved.";

            contactForm.reset();

        } catch (error) {
            console.error("Contact form error:", error);

            contactStatus.textContent =
                "Unable to send your message. Please try again.";

        } finally {
            if (submitButton) {
                submitButton.disabled = false;
            }
        }
    });
}

/* INITIALIZE WEBSITE */

changeCity("Japan");

