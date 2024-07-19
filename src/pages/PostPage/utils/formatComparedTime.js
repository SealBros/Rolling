import compareTime from "./compareTime";

const SEC = 1000;
const MIN = 60 * SEC;
const HOUR = 60 * MIN;
const DAY = 24 * HOUR;

function fitDigits(num) {
    if (num < 10) return `0${num}`;
    else return num;
}

function formatComparedTime(targetTime) {
    const comparedTime = compareTime(targetTime);

    if(comparedTime > 7 * DAY) {
        const date = new Date(targetTime);
        const month = fitDigits(date.getMonth() + 1);
        const day = fitDigits(date.getDate());
        // const hour = fitDigits(date.getHours());
        // const min = fitDigits(date.getMinutes());
        const dateFormat = `${date.getFullYear()}.${month}.${day}`;

        return dateFormat;
    }

    else if(comparedTime > 2 * DAY) return `${Math.floor(comparedTime / DAY)}일 전`;

    else if(comparedTime > DAY) return "어제";

    else if(comparedTime > HOUR) return `${Math.floor(comparedTime / HOUR)}시간 전`;

    else if(comparedTime > MIN) return `${Math.floor(compareTime / MIN)}분 전`;

    else return "방금 전";
}

export default formatComparedTime;