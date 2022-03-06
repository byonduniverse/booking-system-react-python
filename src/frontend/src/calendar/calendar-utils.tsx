

export function daysInMonth(month: number, year: number) {
    return new Date(year, month+1, 0).getDate();
}


export function getLang() {
    if (navigator.languages != undefined)
        return navigator.languages[0];
    return navigator.language;
}

