export function getRuns() {
    return JSON.parse(localStorage.getItem('runs')) || [];    
}

export function saveRun(run) {
    const runs = getRuns();
    runs.push(run);
    localStorage.setItem('runs', JSON.stringify(runs));
}