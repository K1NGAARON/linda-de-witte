const behandelingenWrapper = document.querySelector('#services-row');

const behandelingenArray = [
    {
        'name' : 'Spierontspanners',
        'img' : '../IMG/behandelingen/spierontspanners.jpg',
        'url' : 'linda-de-witte/behandelingen/spierontspanners.html',
    },
    {
        'name' : 'Fillers',
        'img' : '../IMG/behandelingen/fillers.jpg',
        'url' : 'linda-de-witte/behandelingen/fillers.html',
    },
    {
        'name' : 'Collageen stimulatie',
        'img' : '../IMG/behandelingen/collageen_stimulatie.jpg',
        'url' : 'linda-de-witte/behandelingen/collageen.html',
    },
    {
        'name' : 'Volume-herstellende fillers',
        'img' : '../IMG/behandelingen/volume-fillers.jpg',
        'url' : 'linda-de-witte/behandelingen/volume-herstellende-fillers.html',
    },
    {
        'name' : 'Liquid face lift',
        'img' : '../IMG/behandelingen/liquid-facelift.jpg',
        'url' : 'linda-de-witte/behandelingen/liquid-face-lift.html',
    },
    {
        'name' : 'Skinboosters',
        'img' : '../IMG/behandelingen/skinboosters.jpg',
        'url' : 'linda-de-witte/behandelingen/skinboosters.html',
    },
    {
        'name' : 'Anti-transpiratie',
        'img' : '../IMG/behandelingen/transpiratie.jpg',
        'url' : 'linda-de-witte/behandelingen/anti-transpiratie.html',
    },
    {
        'name' : 'Hair fillers',
        'img' : '../IMG/behandelingen/hair-fillers.jpg',
        'url' : 'linda-de-witte/behandelingen/hair-fillers.html',
    },
    {
        'name' : 'Body -collageen stimulatie',
        'img' : '../IMG/behandelingen/body-collageen.jpg',
        'url' : 'linda-de-witte/behandelingen/body-collageen-stimulatie.html',
    },
    {
        'name' : 'Laserbehandelingen',
        'img' : '../IMG/behandelingen/laserbehandeling.jpg',
        'url' : 'linda-de-witte/behandelingen/laserbehandelingen.html',
    }
]

function createBehandeling() {
    for (let i = 0; i < behandelingenArray.length; i++) {
        const template = `
            <div class="service-wrapper">
                <img src="${behandelingenArray[i].img}" alt="${behandelingenArray[i].name}">
                <div class="service-content">
                    <h3>
                        ${behandelingenArray[i].name}
                    </h3>
                    <a class="primary-btn" href="${behandelingenArray[i].url}">
                        Meer info
                    </a>
                </div>
            </div>
        `;
        behandelingenWrapper.insertAdjacentHTML("beforeend", template);
    };
};



$(document).ready(function() {
    createBehandeling();
});