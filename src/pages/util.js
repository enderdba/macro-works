const cHeight = (h) => {
    if (h >= 137 && h < 155) {
        return 1300;
    }
    if (h >= 155 && h < 167) {
        return 1400;
    }
    if (h >= 167 && h < 179) {
        return 1600;
    }
    if (h >= 179 && h < 192) {
        return 1800;
    }
    if (h >= 192 && h < 214) {
        return 2000;
    }
}

const cHeightm = (h) => {
    if (h >= 60 && h < 175) {
        return 1800;
    }
    if (h >= 175 && h < 191) {
        return 2200;
    }
    if (h >= 191 && h < 245) {
        return 2500;
    }
    return 0
}

const cWeight = (c, g) => {
    if (c >= g) {
        let differs = c - g;
        if (differs > 5) {
            return (differs * 100)
        } else {
            return 0
        }
    } else {
        let differs = g - c;
        if (differs > 5) {
            return -(differs * 100)
        } else {
            return 0
        }
    }
}

const cActivity = a => {
    switch (a) {
        case "Moderate":
            return 100
        case "Heavy":
            return 250
        default:
            return 0
    }
}

const cActivitym = a => {
    switch (a) {
        case "Moderate":
            return 200
        case "Heavy":
            return 500
        default:
            return 0
    }
}

const cLifting = a => {
    switch (a) {
        case "3x/week":
            return 100
        case "4-5x/week":
            return 200
        case "6x/week":
            return 300
        default:
            return 0
    }
}

const cLiftingm = a => {
    switch (a) {
        case "3x/week":
            return 200
        case "4-5x/week":
            return 400
        case "6x/week":
            return 600
        default:
            return 0
    }
}

const cCardio = (a, b) => {
    switch (a) {
        case "1-2x/week":
            switch (b) {
                case "30-45 min":
                    return 100
                case "60 min":
                    return 100;
                default:
                    return 0;
            }
        case "3x/week":
            switch (b) {
                case "20 min":
                    return 50
                case "30-45 min":
                    return 100;
                case "60 min":
                    return 150;
                default:
                    return 0;
            }
        case "4-5x/week":
            switch (b) {
                case "20 min":
                    return 100
                case "30-45 min":
                    return 150;
                case "60 min":
                    return 200;
                default:
                    return 0;
            }
        case "6x/week":
            switch (b) {
                case "20 min":
                    return 150
                case "30-45 min":
                    return 200;
                case "60 min":
                    return 250;
                default:
                    return 0;
            }
        default:
            return 0
    }
}

const cCardiom = (a, b) => {
    switch (a) {
        case "1-2x/week":
            switch (b) {
                case "30-45 min":
                    return 200
                case "60 min":
                    return 300;
                default:
                    return 0;
            }
        case "3x/week":
            switch (b) {
                case "20 min":
                    return 100
                case "30-45 min":
                    return 200;
                case "60 min":
                    return 300;
                default:
                    return 0;
            }
        case "4-5x/week":
            switch (b) {
                case "20 min":
                    return 200
                case "30-45 min":
                    return 300;
                case "60 min":
                    return 400;
                default:
                    return 0;
            }
        case "6x/week":
            switch (b) {
                case "20 min":
                    return 300
                case "30-45 min":
                    return 400;
                case "60 min":
                    return 500;
                default:
                    return 0;
            }
        default:
            return 0
    }
}

const cPercentage = (d, c) => {
    switch (d) {
        case "Inconsistent":
            return {
                carb: (50 / 100) * c,
                fat: (25 / 100) * c,
                protein: (25 / 100) * c
            }
        case "Balanced":
            return {
                carb: (50 / 100) * c,
                fat: (25 / 100) * c,
                protein: (25 / 100) * c
            }
        case "Paleo":
            return {
                carb: (50 / 100) * c,
                fat: (25 / 100) * c,
                protein: (25 / 100) * c
            }
        case "Keto":
            return {
                carb: (40 / 100) * c,
                fat: (40 / 100) * c,
                protein: (20 / 100) * c
            }
        case "Vegan or Vegetarian":
            return {
                carb: (50 / 100) * c,
                fat: (30 / 100) * c,
                protein: (20 / 100) * c
            }
    }
}

const cTotal = (p) => {
    return {
        carb: (p.carb / 4).toFixed(2) + "g C",
        fat: (p.fat / 9).toFixed(2) + "g F",
        protein: (p.protein / 4).toFixed(2) + "g P"
    }
}

export { cHeight, cHeightm, cWeight, cActivity, cActivitym, cLifting, cLiftingm, cPercentage, cCardio, cCardiom, cTotal }