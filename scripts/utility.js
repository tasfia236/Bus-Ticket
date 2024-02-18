function Hide(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add = 'hidden';
}

function Show(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove = 'hidden';
}