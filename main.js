// membuat sistem penggesran halaman untuk halaman header

const header = document.getElementsByClassName('header')[0];
const containerContent = document.getElementsByClassName('container-content')[0];
const pageBtn = document.getElementsByClassName('skip-btn')[0];
let biner = 0;

pageBtn.addEventListener('click', () => {
    biner++;
    if(biner == 1){

        // animasi membuka
        header.style.opacity = '0';
        header.style.transform = 'translateY(-700px)';
        header.style.visibility = 'hidden';
        header.style.transition = '1s';
        containerContent.style.visibility = 'visible';
    };
    if(biner == 2){

        // animasi menutup
        header.style.opacity = '1';
        header.style.transform = 'translateY(0)';
        header.style.visibility = 'visible';
        header.style.transition = '1s';
        setTimeout(() => {
            containerContent.style.visibility = 'hidden';
        }, 1000);
    };
    if(biner >= 2){biner *= 0;};

});



const btnLeft = document.getElementsByClassName('arrow-left')[0];
const btnRight = document.getElementsByClassName('arrow-right')[0];

const countObj = {
    count: 0,
    position: 0,
};

const contentObj = {
    dotSatu: document.getElementsByClassName('dot')[0],
    dotDua: document.getElementsByClassName('dot')[1],
    dotTiga: document.getElementsByClassName('dot')[2],

    func: (main, value1, value2) => {
        const ctnSatu = document.getElementsByClassName('ctn')[main];
        const ctnDua = document.getElementsByClassName('ctn')[value1];
        const ctnTiga = document.getElementsByClassName('ctn')[value2];
        
        setTimeout(() => {
            ctnSatu.style.opacity = '1';
            ctnSatu.style.transform = 'translateX(0)';
            ctnDua.style.transform = 'translateX(0)';
            ctnTiga.style.transform = 'translateX(0)';
        }, 10);

        ctnSatu.style.display = 'block';
        ctnDua.style.display = 'none';
        ctnTiga.style.display = 'none';

        ctnSatu.style.opacity = '0';
        ctnDua.style.opacity = '0';
        ctnTiga.style.opacity = '0';
        
        ctnSatu.style.transform = 'translateX(30px)';
        ctnDua.style.transform = 'translateX(30px)';
        ctnTiga.style.transform = 'translateX(30px)';
        
        ctnSatu.style.transition = '.3s';
        ctnDua.style.transition = '.3s';
        ctnTiga.style.transition = '.3s';
    },
};


const dotObj = {
    animasiOn: (value) => {
        const dot = document.getElementsByClassName('dot')[value];
        dot.style.transition = '.3s';
        dot.style.width = '15px';
    },
    animasiOff: (value) => {
        const dot = document.getElementsByClassName('dot')[value];
        dot.style.transition = '.3s';
        dot.style.width = '5px';
    },
};


btnRight.addEventListener('click', () => {
    countObj.count++;
    if(countObj.count > 2){
        countObj.count *= 0;
    };

    if(countObj.count == 0){
        
        contentObj.func(0, 1, 2);
        dotObj.animasiOn(0);
        dotObj.animasiOff(1);
        dotObj.animasiOff(2);
    };
    if(countObj.count == 1){
        
        contentObj.func(1, 0, 2);
        dotObj.animasiOff(0);
        dotObj.animasiOn(1);
        dotObj.animasiOff(2);
    };
    if(countObj.count == 2){
        
        contentObj.func(2, 1, 0);
        dotObj.animasiOff(0);
        dotObj.animasiOff(1);
        dotObj.animasiOn(2);
    };

    console.log(countObj.count , countObj.position);
});

btnLeft.addEventListener('click', () => {
    if(countObj.count >= 0 && countObj.count <= 3){
        
        countObj.count--;
        if(countObj.count < 0){
            countObj.count += 3;
        };

        if(countObj.count == 0){

            contentObj.func(0, 1, 2);
            dotObj.animasiOn(0);
            dotObj.animasiOff(1);
            dotObj.animasiOff(2);
            console.log('sekarang di nol');
        };

        if(countObj.count == 1){
            
            contentObj.func(1, 0, 2);
            dotObj.animasiOff(0);
            dotObj.animasiOn(1);
            dotObj.animasiOff(2);
            console.log('sekarang di satu');
        };

        if(countObj.count == 2){

            contentObj.func(2, 1, 0);
            dotObj.animasiOff(0);
            dotObj.animasiOff(1);
            dotObj.animasiOn(2);
        };
        
        // if(countObj.position > 0){
        //     countObj.count -= 1;
        // };
        
        // countObj.position--;
        console.log(countObj.count , countObj.position);
    };
});