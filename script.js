const customDropdown = document.getElementById('dropdown');

customDropdown.addEventListener('click', function () {
    this.classList.toggle('open');
});

// Close the dropdown if user clicks outside of it
window.addEventListener('click', function (event) {
    if (!customDropdown.contains(event.target)) {
        customDropdown.classList.remove('open');
    }
});
