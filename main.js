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