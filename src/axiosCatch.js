export function axiosCatch(error, dispatch) {
    let message = "";
    // console.log(error);
    let res = error.response.data.errors;
    for (const key in res) {
        if (res.hasOwnProperty(key)) {
            const element = res[key];
            message += element + ` `;
        }
    }
    if (message.length < 1) message = error;
    dispatch("snackbarError", message);
}
