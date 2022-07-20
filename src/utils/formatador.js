import moment from "moment-timezone"
const timezone = "Europe/London"

export function formatarData(data){
    return moment.tz(data, timezone).format("DD/MM/YYYY")
}

export function formatarDataHTML(data) {
    return moment.tz(data, timezone).format("yyyy-MM-DD")
}