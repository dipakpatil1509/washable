import M from 'materialize-css'
// Toasting Options
var toastOptions = {
    displayLength:2000,
    classes:"custom-toast",
    html:""
}

//Toast function takes string and Toast
export function toast(html) {
    toastOptions.html = html;
    M.toast(toastOptions);
}