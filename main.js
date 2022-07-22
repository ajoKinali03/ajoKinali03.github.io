// membuat sistem penggesran halaman untuk halaman header

const header = document.getElementsByClassName('header')[0];
const containerContent = document.getElementsByClassName('container-content')[0];
const pageBtn = document.getElementsByClassName('skip-btn')[0];
let biner = 0;

pageBtn.addEventListener('click', () => {
    biner++;
    if(biner == 1){
        console.log(biner);
        // animasi membuka
        header.style.opacity = '0';
        header.style.transform = 'translateY(-700px)';
        header.style.visibility = 'hidden';
        header.style.transition = '1s';
        containerContent.style.visibility = 'visible';
    };
    if(biner == 2){
        console.log(biner);
        // animasi membuka
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


// cara kerja: yaitu ketika btn knn di tekan maka nilai index akan ditambahkan satu yang akan menjadi value dari array elements dan ketika btn kri di tekan maka nilai akan di kurangi satu dan ketika pada kontent tertentu dot akan berubah panjang nya sesuai urutan dari kontent.

const btnLeft = document.getElementsByClassName('arrow-left')[0];
const btnRight = document.getElementsByClassName('arrow-right')[0];


const countObj = {
    count: 1,
};

btnRight.addEventListener('click', () => {
    const dotStatus = document.getElementsByClassName('dot')[countObj.count];

    if(countObj.count == 0){
        document.getElementsByClassName('ctn')[0].style.display = 'block';
        document.getElementsByClassName('ctn')[1].style.display = 'none';
        document.getElementsByClassName('ctn')[2].style.display = 'none';
    };
    if(countObj.count == 1){
        document.getElementsByClassName('ctn')[0].style.display = 'none';
        document.getElementsByClassName('ctn')[1].style.display = 'block';
        document.getElementsByClassName('ctn')[2].style.display = 'none';
    };
    if(countObj.count == 2){
        document.getElementsByClassName('ctn')[0].style.display = 'none';
        document.getElementsByClassName('ctn')[1].style.display = 'none';
        document.getElementsByClassName('ctn')[2].style.display = 'block';
    };

    countObj.count++;
    if(countObj.count >= 3){
        countObj.count *= 0;
    };
});

btnLeft.addEventListener('click', () => {
    if(countObj.count >= 0 && countObj.count <= 3){
        const dotStatus = document.getElementsByClassName('dot')[countObj.count];
        if(countObj.count == 0){
            document.getElementsByClassName('ctn')[0].style.display = 'block';
            document.getElementsByClassName('ctn')[1].style.display = 'none';
            document.getElementsByClassName('ctn')[2].style.display = 'none';
        };
        if(countObj.count == 1){
            document.getElementsByClassName('ctn')[0].style.display = 'none';
            document.getElementsByClassName('ctn')[1].style.display = 'block';
            document.getElementsByClassName('ctn')[2].style.display = 'none';
        };
        if(countObj.count == 2){
            document.getElementsByClassName('ctn')[0].style.display = 'none';
            document.getElementsByClassName('ctn')[1].style.display = 'none';
            document.getElementsByClassName('ctn')[2].style.display = 'block';
        };

        if( countObj.count <= 0){
            countObj.count += 3;
        };
        countObj.count--;
    };
});
