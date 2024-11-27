// Toggle Side Panel Visibility
function toggleSidePanel() {
    const sidePanel = document.getElementById("side-panel");
    if (sidePanel.style.left === "0px") {
        sidePanel.style.left = "-250px";
    } else {
        sidePanel.style.left = "0px";
    }
}

// Load Content in Main Dashboard
function loadContent(type) {
    const dashboard = document.getElementById("main-dashboard");
    dashboard.innerHTML = ""; // Clear previous content

    if (type === "clubs") {
        for (let i = 1; i <= 10; i++) {
            const clubPanel = document.createElement("div");
            clubPanel.className = "club-panel";

            const clubName = document.createElement("p");
            clubName.textContent = `Club ${i}`;

            const joinButton = document.createElement("button");
            joinButton.textContent = "+Join Club";

            clubPanel.appendChild(clubName);
            clubPanel.appendChild(joinButton);
            dashboard.appendChild(clubPanel);
        }
    } else {
        const message = document.createElement("p");
        switch (type) {
            case "challenges":
                message.textContent = "Explore monthly reading challenges!";
                break;
            case "recommendations":
                message.textContent = "Find your next favorite book!";
                break;
            case "reviews":
                message.textContent = "Read and share book reviews.";
                break;
            case "podcasts":
                message.textContent = "Tune into exciting book-related podcasts.";
                break;
            default:
                message.textContent = "Content not available.";
        }
        dashboard.appendChild(message);
    }
}
