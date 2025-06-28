const catalogs = {
    playstation: [
        { name: "PS5 Controller", original: "$70", discount: "$60" },
        { name: "PSN 12-Month Subscription", original: "$60", discount: "$49" }
    ],
    xbox: [
        { name: "Xbox Series X", original: "$499", discount: "$470" },
        { name: "Xbox Live Gold", original: "$60", discount: "$50" }
    ],
    giftcards: [
        { name: "Steam Gift Card $50", original: "$50", discount: "$47" },
        { name: "Amazon Gift Card $100", original: "$100", discount: "$95" }
    ],
    gamepasses: [
        { name: "Game Pass Ultimate 3 Months", original: "$45", discount: "$39" }
    ],
    zeebundle: [
        { name: "Zee 1 Year Bundle", original: "$20", discount: "$15" }
    ]
};

function showCatalog(category) {
    const container = document.getElementById("catalog");
    container.innerHTML = "";
    catalogs[category].forEach(item => {
        const el = document.createElement("div");
        el.className = "catalog-item";
        el.innerHTML = `
            <h3>${item.name}</h3>
            <p><span class="price-line">${item.original}</span> <span class="discount">${item.discount}</span></p>
        `;
        container.appendChild(el);
    });
}
