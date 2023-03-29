const loadingPercentageBar = document.querySelector('.current-percentage')
const amountOfRequests = 10
let currentRequest = 0

export function showSpinner() {
    document.querySelector('.loading').style.display = 'block'
}

export function hideSpinner() {
    document.querySelector('.loading').style.display = 'none'
}

export function addRequest() {
    const percentage = 100 / amountOfRequests * currentRequest
    currentRequest++
    loadingPercentageBar.style.width = `${percentage}%`
}
