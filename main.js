function changeTab(tabName) {
    // Hide all content divs
    document.getElementById('homeContent').style.display = 'none';
    document.getElementById('coursesContent').style.display = 'none';
    document.getElementById('likeContent').style.display = 'none';
    document.getElementById('profileContent').style.display = 'none';

    // Deactivate all tabs
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));

    // Show the selected content and activate the corresponding tab
    document.getElementById(tabName + 'Content').style.display = 'block';
    document.querySelector('.tab[onclick="changeTab(\'' + tabName + '\')"]').classList.add('active');
}