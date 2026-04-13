import {saveRun, getRuns} from "./storage.js";
import { loadMap, getUserLocation, currentLocation } from "./map.js";
import { loadVideos } from "./youtube.js";

const form = document.getElementById('form');
const runsList = document.getElementById('runs');
const locateBtn = document.getElementById('locateBtn');
const mapImg = document.getElementById('map');

loadVideos();
loadMap(mapImg);
displayRuns();

locateBtn.addEventListener('click', () => {
    getUserLocation(mapImg);
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const run = {
        distance: document.getElementById('distance').value,
        time: document.getElementById('time').value,
        date: document.getElementById('date').value,
        location: currentLocation
    };

    saveRun(run);
    displayRuns();
    form.reset();
});

function displayRuns() {
    const runs = getRuns();
    runsList.innerHTML = '';

    runs.forEach(run => {
        const li = document.createElement('li');

        let mapPreview = '';

        if (run.location.lat && run.location.lat) {
            const token = "pk.eyJ1IjoicHJpdmFycmVudGlpIiwiYSI6ImNtbm5tbXFubjF5ZWcycXBrcGE1aW45b28ifQ.3s-NA2RSbcxmJKwXZHrrDQ";

            mapPreview = `
                <img 
                    src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s+2563EB(${run.location.lng},${run.location.lat})/${run.location.lng},${run.location.lat},12/300x200?access_token=${token}" 
                    alt="Run map"
                    style="width:100%; border-radius:8px; margin-top:10px;"
                />
            `;
        }

        li.innerHTML = `
            <div class="run-card">
                <h3>${run.date}</h3>
                <p>Distance: ${run.distance} km</p>
                <p>Time: ${run.time} min</p>
                ${mapPreview}
            </div>
        `;
        runsList.appendChild(li);
    });
}