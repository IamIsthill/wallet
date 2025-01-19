import { LOG_TOKEN } from "../contants";

export function isUserLoggedIn() {
    const token = localStorage.getItem(LOG_TOKEN)
    if (token !== null || token === 'yes') {
        return true
    } else {
        return false
    }
}