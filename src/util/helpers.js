export const formatDate = (date) => {
    var d = new Date(date);
    let day = d.getDate()
    let month = d.getMonth()
    let year = d.getFullYear()
    let hours = d.getHours()
    let min = d.getMinutes()
    return `${day}/${month + 1}/${year} at ${(hours < 10 ? "0"+hours : hours)}:${(min < 10 ? "0"+min : min)}`
}

export const toggleBtnLoader = (btnElement) => {
    const loaderGif = document.querySelector('.loader-gif')
    if(loaderGif) {
        if (btnElement.style.display === "none") {
            loaderGif.style.display = "none";
            btnElement.style.display = "inline-block";
        } else {
            btnElement.style.display = "none";
            loaderGif.style.display = "inline-block";
        }
    }
}