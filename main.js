const cntnr = document.getElementsByClassName("container")[0].style;
const page = document.getElementsByClassName("page");

const [wdth, hght] = [`${innerWidth}px`, `${innerHeight}px`];

cntnr.width = wdth;

for (let i = 0; i < page.length; i++) {
  let pg = page[i].style;
  pg.height = hght;
}