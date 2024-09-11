function showTabContent(tab) {
    const contentItems = document.querySelectorAll('.about-page-tab-section-content-item');
    const tabs = document.querySelectorAll('.about-page-tab-section-tab');

    contentItems.forEach(item => {
        item.classList.remove('active');
    });

    tabs.forEach(tabItem => {
        tabItem.classList.remove('active');
    });

    document.getElementById(tab).classList.add('active');
    document.querySelector(`[onclick="showTabContent('${tab}')"]`).classList.add('active');
}
