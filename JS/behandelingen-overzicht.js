const behandelingenWrapper = document.querySelector('#services-row');

const behandelingenArray = [
    {
        'name' : 'Behandeling 1',
        'img' : '../IMG/behandelingen/behandeling1.jpg',
        'url' : './behandelingen/behandeling1.html',
    },
    {
        'name' : 'Behandeling 2',
        'img' : '../IMG/behandelingen/behandeling2.jpg',
        'url' : '',
    },
    {
        'name' : 'Behandeling 3',
        'img' : '../IMG/behandelingen/behandeling3.jpg',
        'url' : '',
    },
    {
        'name' : 'Behandeling 4',
        'img' : '../IMG/behandelingen/behandeling4.jpg',
        'url' : '',
    },
    {
        'name' : 'Behandeling 5',
        'img' : '../IMG/behandelingen/behandeling5.jpg',
        'url' : '',
    },
    {
        'name' : 'Behandeling 6',
        'img' : '../IMG/behandelingen/behandeling6.jpg',
        'url' : '',
    },
    {
        'name' : 'Behandeling 7',
        'img' : '../IMG/behandelingen/behandeling7.jpg',
        'url' : '',
    },
    {
        'name' : 'Behandeling 8',
        'img' : '../IMG/behandelingen/behandeling8.jpg',
        'url' : '',
    },
    {
        'name' : 'Behandeling 9',
        'img' : '../IMG/behandelingen/behandeling9.jpg',
        'url' : '',
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