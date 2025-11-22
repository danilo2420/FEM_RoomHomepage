
// This is a new typography script that takes into account the fact that
// different sections of a page break at different points. 
// Note: typography CSS classes have to start with "tp".
//       Avoid creating other CSS classes that start with "tp", as it might lead to errors.

// Data object: describe the different elements that change typographies here
const dataObject = [
    {
        "selector": ".element1",
        "cutPoints": [600, 1100],
        "tps": ["tp3", "tp2", "tp1"],
        "currentVersion": ""
    },
    {
        "selector": ".element2",
        "cutPoints": [800, 1300],
        "tps": ["tp3", "tp2", "tp1"],
        "currentVersion": ""
    }
]

// Main 
export function runTypographiesScript() {
    window.onload = loadTypographies;
    window.onresize = loadTypographies;
}

function loadTypographies() {
    const currentWidth = window.innerWidth;

    // Iterate through every element and change their typography
    for (const data of dataObject) {
        if (changesVersion(data, currentWidth)) {
            const element = document.querySelector(data.selector);
            
            const typography = getTypography(data, currentWidth);
            applyTypography(element, typography);
        }
    }
}

function changesVersion(data, currentWidth) {
    // Get information from data
    let currentVersion = data.currentVersion;
    const cutPoints = data.cutPoints;

    // Calculate new version
    let newVersion = "";

    if (currentWidth < cutPoints[0]) {
        newVersion = "mobile";
    } else if (currentWidth < cutPoints[1]) {
        newVersion = "tablet";
    } else {
        newVersion = "desktop";
    }

    // Compare new version to current version
    if (newVersion == currentVersion) {
        return false;
    }

    // Update current version and return result
    data.currentVersion = newVersion;
    return true;
}

function getTypography(data, windowSize) {
    const typographies = data.tps;
    const cutPoints = data.cutPoints;

    if (windowSize < cutPoints[0]) { // Mobile version
        return typographies[0];

    } else if (windowSize < cutPoints[1]) { // Tablet version
        return typographies[1];

    } else { // Desktop version
        return typographies[2];
    }
}

function applyTypography(element, typography) {
    // Remove all typographies
    const initialClassList = element.classList;
    for (const c of element.classList) {
        if (c.startsWith("tp")) {
            element.classList.remove(c);
        }
    }

    // Add new typography
    element.classList.add(typography);
}
