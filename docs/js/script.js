
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
    // If the map/search screen is shown, focus the building search input for convenience
    if (screenId === 'mapScreen') {
        const searchInput = document.getElementById('buildingSearch');
        if (searchInput) {
            // small delay ensures element is visible before focusing
            setTimeout(() => searchInput.focus(), 50);
        }
    }
}
function filterBuildings() {
    const searchInput = document.getElementById('buildingSearch').value.toLowerCase();
    const buildingItems = document.querySelectorAll('.building-item');
    
    buildingItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(searchInput)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}
// Add hover effects to building markers
document.addEventListener('DOMContentLoaded', function() {
    const markers = document.querySelectorAll('.building-marker');
    markers.forEach(marker => {
        marker.addEventListener('click', function() {
            alert('Building: ' + this.getAttribute('title') + '\n\nClick to view more details or get directions.');
        });
    });
});
