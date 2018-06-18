export const formatDate = (date) => {
    var d = new Date(date);
    let day = d.getDate()
    let month = d.getMonth()
    let year = d.getFullYear()
    let hours = d.getHours()
    let min = d.getMinutes()
    return `${day}/${month + 1}/${year} at ${(hours < 10 ? "0"+hours : hours)}:${(min < 10 ? "0"+min : min)}`
}