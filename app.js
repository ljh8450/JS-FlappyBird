document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid');
    const doodler = document.createElement('div');
    let doodlerLeftSpace = 50;
    let doodlerBottomSpace = 150;
    let isGameOver = false;
    let platformCount = 5;

    function createDoodler() {
       grid.appendChild(doodler);
       doodler.classList.add('doodler');
       doodler.style.left = doodlerLeftSpace + 'px';
       doodler.style.bottom = doodlerBottomSpace + 'px';

    }

    class Platform
    
    function createPlatforms() {
        for (let i=0; i < platformCount; i++){
            let platGap = 600 / platformCount;
            let newPlatButtom = 100 + i * platGap;
            let newPlatform = new platformCount();
        }
    }

    function start() {
        if (!isGameOver){
            createDoodler();
            createPlatforms();
        }
    }
    //attach to button
    start()


})