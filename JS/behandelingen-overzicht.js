const behandelingenWrapper = document.querySelector('#services-row');

const behandelingenArray = [
    {
        'name' : 'Spierontspanners',
        'img' : '../IMG/behandelingen/spierontspanners.jpg',
        'url' : 'spierontspanners.html',
    },
    {
        'name' : 'Fillers',
        'img' : '../IMG/behandelingen/fillers.jpg',
        'url' : 'fillers.html',
    },
    {
        'name' : 'Collageen stimulatie',
        'img' : '../IMG/behandelingen/collageen_stimulatie.jpg',
        'url' : 'collageen.html',
    },
    {
        'name' : 'Volume-herstellende fillers',
        'img' : '../IMG/behandelingen/volume-fillers.jpg',
        'url' : 'volume-herstellende-fillers.html',
    },
    {
        'name' : 'Liquid face lift',
        'img' : '../IMG/behandelingen/liquid-facelift.jpg',
        'url' : 'liquid-face-lift.html',
    },
    {
        'name' : 'Skinboosters',
        'img' : '../IMG/behandelingen/skinboosters.jpg',
        'url' : 'skinboosters.html',
    },
    {
        'name' : 'Anti-transpiratie',
        'img' : '../IMG/behandelingen/transpiratie.jpg',
        'url' : 'anti-transpiratie.html',
    },
    {
        'name' : 'Hair fillers',
        'img' : '../IMG/behandelingen/hair-fillers.jpg',
        'url' : 'hair-fillers.html',
    },
    {
        'name' : 'Body -collageen stimulatie',
        'img' : '../IMG/behandelingen/body-collageen.jpg',
        'url' : 'body-collageen-stimulatie.html',
    },
    {
        'name' : 'Laserbehandelingen',
        'img' : '../IMG/behandelingen/laserbehandeling.jpg',
        'url' : 'laserbehandelingen.html',
    }
]

function createBehandeling() {
    for (let i = 0; i < behandelingenArray.length; i++) {
        const template = `
            <div class="service-wrapper">
                <div class="overlay">
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
            </div>
        `;
        behandelingenWrapper.insertAdjacentHTML("beforeend", template);
    };
};



$(document).ready(function() {
    createBehandeling();
});