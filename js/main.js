import { saveRun } from "./storage.js";
import { loadMap, getUserLocation, currentLocation } from "./map.js";

const form = document.getElementById("form");
const locateBtn = document.getElementById("locateBtn");
const mapImg = document.getElementById("map");
const successMessage = document.getElementById("successMessage");

loadMap(mapImg);

if (locateBtn) {
    locateBtn.addEventListener("click", () => {
        getUserLocation(mapImg);
    });
}

if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const run = {
            distance: document.getElementById("distance").value,
            time: document.getElementById("time").value,
            date: document.getElementById("date").value,
            location: currentLocation
        };

        saveRun(run);

        successMessage.textContent = "Run saved successfully!";

        form.reset();
    });
}