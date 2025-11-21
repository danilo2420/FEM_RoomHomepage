
// This is a new typography script that takes into account the fact that
// different sections of a page break at different points. 

// Data object: describe the different elements that change typographies here
const dataObject = [
    {
        "selector": ".element1",
        "cutPoints": [600, 1100],
        "tps": ["tp3", "tp2", "tp1"]
    },
    {
        "selector": ".element2",
        "cutPoints": [800, 1300],
        "tps": ["tp3", "tp2", "tp1"]
    }
]

// Main 
export function runTypographiesScript() {
    window.onload = loadTypographies;
    window.onresize = loadTypographies;
}

function loadTypographies() {
    // Iterate through every element and change their typography
    for (const data of dataObject) {
        const element = document.querySelector(data.selector);

        const typography = getTypography(data, window.innerWidth);
        applyTypography(element, typography);
    }
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
