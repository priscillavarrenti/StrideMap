import { getRuns } from "./storage.js";

const routesList = document.getElementById("routesList");
const runs = getRuns();

if (!runs.length) {
    routesList.innerHTML = "<p>No saved routes yet.</p>";
} else {
    runs.forEach(run => {
        const card = document.createElement("div");
        card.classList.add("route-card");

        let mapPreview = "";

        if (run.location && run.location.lat && run.location.lng) {
            const token = "pk.eyJ1IjoicHJpdmFycmVudGlpIiwiYSI6ImNtbm5tbXFubjF5ZWcycXBrcGE1aW45b28ifQ.3s-NA2RSbcxmJKwXZHrrDQ";

            mapPreview = `
                <img 
                    src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s+2563EB(${run.location.lng},${run.location.lat})/${run.location.lng},${run.location.lat},12/300x200?access_token=${token}" 
                    alt="Run map"
                    class="route-map"
                />
            `;
        }

        card.innerHTML = `
            <h3>${run.date}</h3>
            <p>Distance: ${run.distance} km</p>
            <p>Time: ${run.time} min</p>
            ${mapPreview}
        `;

        routesList.appendChild(card);
    });
}