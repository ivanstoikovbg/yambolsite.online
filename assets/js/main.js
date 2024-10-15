document.addEventListener('DOMContentLoaded', function () {
    const sitesList = document.getElementById('sitesList');
    const municipalSites = [
        { name: 'Община Ямбол', url: 'https://www.yambol.bg/', logo: './assets/img/Община Ямбол.png' },
        { name: 'ВиК Ямбол', url: 'https://vik-yambol.bg/', logo: './assets/img/ВиК Ямбол.png' },
        { name: 'Градски транспорт Ямбол', url: 'https://transport.yambol.bg/', logo:'./assets/img/Градски транспорт Ямбол.png' },
        { name: 'Информация за чистотата на въздуха и температурата в града', url: 'https://air.yambol.bg/portal/home', logo: './assets/img/Въздух и температура Ямбол.png' },
        { name: 'ФК Ямбол 1915', url: 'https://fcyambol1915.com/', logo: './assets/img/fk-arena-1915.png' },
    ];

    municipalSites.forEach((site, index) => {
        const listItem = document.createElement('li');
        listItem.className = 'bg-white p-6 rounded-md shadow-md transform transition-transform overflow-hidden hover:shadow-lg hover:scale-105 hover:rotate-2 hover:ring-4 ring-blue-500';
        listItem.style.animationDelay = `${index * 100}ms`;

        const link = document.createElement('a');
        link.href = site.url;
        link.className = 'flex flex-col items-center justify-center h-full text-center transition-transform';

        const logoContainer = document.createElement('div');
        logoContainer.className = 'w-32 h-32 mb-4 overflow-hidden rounded-full transition-transform hover:rotate-6 hover:scale-110';

        const logo = document.createElement('img');
        logo.src = site.logo;
        logo.alt = `${site.name} лого`;
        logo.className = 'w-full h-full object-cover rounded-full border-4 border-blue-500 transition-transform hover:rotate-12';

        const name = document.createElement('span');
        name.textContent = site.name;
        name.className = 'text-lg font-semibold text-blue-500 mt-2';

        logoContainer.appendChild(logo);
        link.appendChild(logoContainer);
        link.appendChild(name);
        listItem.appendChild(link);
        sitesList.appendChild(listItem);
    });
});
