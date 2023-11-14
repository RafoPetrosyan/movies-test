export const padTo2Digits = (num) => {
    return num.toString().padStart(2, '0');
}

export const convertMsToTime = (milliseconds) => {
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);

    seconds = seconds % 60;
    minutes = minutes % 60;

    hours = hours % 24;

    let result = '';

    if (hours > 0) {
        result += `${hours}h `;
    }

    if (minutes > 0) {
        result += `${minutes}m `;
    }

    if (seconds > 0 || result === '') {
        result += `${seconds}s`;
    }

    return result.trim();
}

