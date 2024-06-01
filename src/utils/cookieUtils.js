export async function setCookie(name, value, days, secure = true, sameSite = 'None') {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    const secureFlag = secure ? ";secure" : "";
    const sameSiteFlag = sameSite ? `;SameSite=${sameSite}` : "";

    document.cookie = name + "=" + value + ";" + expires + ";path=/" + secureFlag + sameSiteFlag;
}

export function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

export function deleteCookie(name) {
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
    return document.cookie;
}