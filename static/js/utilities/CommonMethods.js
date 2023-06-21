export const isStringEmpty = (str) => {
    if (str !== undefined && str !== null && str.length > 0) {
        return false;
    }

    return true;
}

export const isObjectEmpty = (obj) => {
    if (obj !== undefined && obj !== null && Object.keys(obj).length > 0) {
        return false;
    }

    return true;
}

export const isArrayEmpty = (arr) => {
    if (arr !== undefined && arr !== null && arr.length > 0) {
        return false;
    }

    return true;
}

export const getMonthName = (count) => {
    switch (count) {
        case 0:
            return "January"
        case 1:
            return "February"
        case 2:
            return "March"
        case 3:
            return "April"
        case 4:
            return "May"
        case 5:
            return "June"
        case 6:
            return "July"
        case 7:
            return "August"
        case 8:
            return "September"
        case 9:
            return "October"
        case 10:
            return "November"
        case 11:
            return "December"
        default:
            return "January"
    }
}