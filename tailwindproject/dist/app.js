const toggle = document.getElementById("toggle");
const darkModeText = document.getElementById("darkModeText");
const lightModeText = document.getElementById("lightModeText");

const footer = document.querySelector(".footer");

const toggleBTNtext = document.querySelector(".btn-modes");

const columnHeaders = document.querySelectorAll(".column-headers");
const columnATags = document.querySelectorAll(".footer a");

const searchboxes = document.querySelector(".searches");
const apisearchbox = document.querySelector(".api");

const inputBox = document.querySelector(".searches .search-input");

const cards = document.querySelector(".cards");
const cardCount = document.querySelector(".count");

let arrOfCards = [
  {
    heading: "Card 1",
    paragraph:
      "This is the content of card 1.This is the content of card 10.This is the content of card 10.This is the content of card 10.",
  },
  {
    heading: "Card 2",
    paragraph: "This is the content of card 2.",
  },
  {
    heading: "Card 3",
    paragraph: "This is the content of card 3.",
  },
  {
    heading: "Card 4",
    paragraph: "This is the content of card 4.",
  },
  {
    heading: "Card 5",
    paragraph: "This is the content of card 5.",
  },
  {
    heading: "Card 6",
    paragraph: "This is the content of card 6.",
  },
  {
    heading: "Card 7",
    paragraph: "This is the content of card 7.",
  },
  {
    heading: "Card 8",
    paragraph: "This is the content of card 8.",
  },
  {
    heading: "Card 9",
    paragraph: "This is the content of card 9.",
  },
  {
    heading: "Card 10",
    paragraph: "This is the content of card 10.",
  },
];

cardCount.textContent = "Showing " + arrOfCards.length + " cards";

const targetElement = cards;
function Makecards(arr) {
  arr.forEach((card) => {
    // Create the card container element
    cardContainer = document.createElement("div");
    cardContainer.classList.add(
      "card",
      "flex",
      "flex-row",
      "justify-between",
      "items-center",
      "my-5",
      "h-max",
      "w-full",
      "rounded-[15px]",
      "border",
      "border-solid",
      "border-gray-400",
      "p-4"
    );

    const card_part = document.createElement("div");
    card_part.classList.add(
      "cardPart",
      "flex",
      "flex-col",
      "justify-center",
      "items-start",
      "mx-4",
      "h-full",
      "w-[90%]"
    );

    // Create the heading element
    const heading = document.createElement("h2");
    heading.textContent = card.heading;
    heading.classList.add("heading", "text-white", "font-bold");

    // Create the paragraph element
    const paragraph = document.createElement("p");
    paragraph.textContent = card.paragraph;
    paragraph.classList.add("para", "text-gray-400");

    // Append the heading and paragraph to the card container
    card_part.appendChild(heading);
    card_part.appendChild(paragraph);

    cardContainer.appendChild(card_part);

    const icon = document.createElement("i");
    icon.classList.add(
      "fa",
      "fa-angle-down",
      "fa-rotate-270",
      "text-blue-500",
      "text-[40px]",
      "mx-3"
    );
    cardContainer.appendChild(icon);
    // Append the card container to the target element
    targetElement.appendChild(cardContainer);
  });
}
// Assuming you have a target element with an ID where you want to append the generated HTML
// am just showing the intial cards
Makecards(arrOfCards);

console.log("subhan");

// code that handles light/dark mode
function Light_dark() {
  const cardHeading = document.querySelectorAll(
    ".cards .card .cardPart .heading"
  );
  console.log(cardHeading);

  const cardPara = document.querySelectorAll(".cards .card .cardPart .para");
  console.log(cardPara);
  toggle.addEventListener("change", () => {
    if (toggle.checked) {
      document.body.classList.remove("bg-black");
      document.body.classList.add("bg-white");

      footer.classList.remove("bg-[#1D1D1F]", "text-gray-400");
      footer.classList.add("text-gray-900");
      footer.style.backgroundColor = "#F5F5F7";

      toggleBTNtext.classList.remove("text-white");
      toggleBTNtext.classList.add("text-black");

      searchboxes.classList.remove("text-gray-300");
      searchboxes.classList.add("text-gray-600");

      apisearchbox.style.backgroundColor = "#F5F5F7";

      darkModeText.classList.remove(
        "bg-black",
        "dark:bg-blue-500",
        "rounded-full"
      );
      lightModeText.classList.add(
        "bg-black",
        "dark:bg-blue-500",
        "rounded-full",
        "text-white"
      );

      columnHeaders.forEach((header) => {
        header.classList.remove("text-gray-200");
        header.classList.add("text-black");
      });

      columnATags.forEach((atag) => {
        atag.classList.remove(
          "hover:text-white",
          "hover:underline",
          "text-gray-400"
        );
        atag.classList.add("hover:text-black", "hover:underline", "text-black");
        atag.style.color = "black";
      });

      cards.classList.remove("text-gray-400");
      cards.classList.add("text-gray-800");

      cardHeading.forEach((heading) => {
        heading.classList.remove("text-white");
        heading.classList.add("text-black");
      });

      cardPara.forEach((heading) => {
        heading.classList.remove("text-gray-400");
        heading.classList.add("text-gray-800");
      });
    } else {
      console.log("Dark");

      document.body.classList.remove("bg-white");
      document.body.classList.add("bg-black");

      footer.classList.remove("bg-[#F5F5F7]", "text-gray-900");
      footer.classList.add("text-gray-400");
      footer.style.backgroundColor = "#1d1d1f";

      toggleBTNtext.classList.remove("text-black");
      toggleBTNtext.classList.add("text-white");

      searchboxes.classList.remove("text-gray-600");
      searchboxes.classList.add("text-gray-300");

      apisearchbox.style.backgroundColor = "#1d1d1f";

      lightModeText.classList.remove(
        "bg-black",
        "dark:bg-blue-500",
        "rounded-full"
      );
      darkModeText.classList.add(
        "bg-black",
        "dark:bg-blue-500",
        "rounded-full"
      );

      columnHeaders.forEach((header) => {
        header.classList.add("text-gray-200");
        header.classList.remove("text-black");
      });

      columnATags.forEach((atag) => {
        atag.style.color = "#cbd5e0";
        function handleMouseEnter(event) {
          event.target.style.color = "white";
        }

        // Function to handle mouseleave event
        function handleMouseLeave(event) {
          event.target.style.color = "";
        }

        // Attach event listeners
        atag.addEventListener("mouseenter", handleMouseEnter);
        atag.addEventListener("mouseleave", handleMouseLeave);
      });

      cards.classList.add("text-gray-400");
      cards.classList.remove("text-gray-800");

      cardHeading.forEach((heading) => {
        heading.classList.add("text-white");
        heading.classList.remove("text-black");
      });

      cardPara.forEach((heading) => {
        heading.classList.add("text-gray-400");
        heading.classList.remove("text-gray-800");
      });
    }
  });

  const Mycards = document.querySelectorAll(".cards .card");

  Mycards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "scale(1.05)";
      card.style.transition = "transform 0.3s ease";
      card.classList.add("border-blue-500", "border-10");

      card.classList.remove("border-gray-400");
      card.classList.add("border-blue-500", "border-10");
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "scale(1)";
      card.style.transition = "transform 0.3s ease";

      card.classList.remove("border-blue-500", "border-10");
      card.classList.add("border-gray-400");
    });
  });
}
Light_dark();
// code that maintains the search mechanism

function renderFilteredCards(filteredCards) {
  console.log(filteredCards.length);
  cardCount.textContent = "";
  cardCount.textContent = "Showing " + filteredCards.length + " cards";
  cards.innerHTML = ""; // Clear existing cards

  const newCount = document.createElement("h2");
  cards.appendChild(newCount);
  newCount.textContent = "Showing " + filteredCards.length + " cards";

  Makecards(filteredCards);
}

function filterCards(searchQuery) {
  const filteredCards = arrOfCards.filter((card) => {
    const headingText = card.heading.toLowerCase();
    return headingText.includes(searchQuery);
  });

  // console.log(filteredCards.length);

  renderFilteredCards(filteredCards);
}

inputBox.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const searchQuery = inputBox.value.trim().toLowerCase();
    filterCards(searchQuery);
  }
  Light_dark();
});












// javascript for media responsive navbar

const icon = document.querySelector(".navIcon");
const i = document.querySelector(".i");
const mobilemenu=document.querySelector(".mobile-menu")
console.log(mobilemenu);

icon.addEventListener("click", function() {
    if (i.classList.contains("fa-angle-down")) {

        i.classList.remove("fa-angle-down");
        i.classList.add("fa-angle-up");

        mobilemenu.classList.remove("mobile:hidden")        
        mobilemenu.classList.add("mobile:flex")

        console.log(12);

    } else 
    {
      console.log(32);
        i.classList.remove("fa-angle-up");
        i.classList.add("fa-angle-down");
        
        mobilemenu.classList.remove("mobile:flex")
        mobilemenu.classList.add("mobile:hidden")
    }
});



const footerp1icon = document.querySelectorAll(".p1icon");

const footerp2=document.querySelectorAll(".p2")

const footerp1=document.querySelectorAll(".p1")
console.log(footerp1);





footerp1icon.forEach((p1icon, index) => {
    p1icon.addEventListener("click", function() {
        const i = p1icon;

        if (i.classList.contains("fa-plus")) {
            i.classList.remove("fa-plus");
            i.classList.add("fa-xmark");

            footerp2[index].classList.remove("hidden");      
            footerp2[index].classList.add("flex","p-[13px]");

            
            footerp1[index].classList.remove("border-b");      
            footerp1[index].classList.add("border-none");

            console.log("Iteration:", iteration);

        } else {
            i.classList.remove("fa-xmark");
            i.classList.add("fa-plus");

            footerp2[index].classList.add("hidden");      
            footerp2[index].classList.remove("flex");
            
            footerp1[index].classList.remove("border-none");      
            footerp1[index].classList.add("border-b");
        }

    });
});



// responsive javascript for footers
