var baner=document.getElementsByClassName("baner")[0];
var blocks= document.getElementsByClassName("blocks");
for(var i = 1; i< 400; i++){
     baner.innerHTML+=` <div class="blocks"></div>`;
     blocks[i].style.animationDelay = `${i * 0.05}s`
}
console.log(blocks);

