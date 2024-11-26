const randomPic = document.querySelector('.images-container');
const imgbtn = document.querySelector('.btn');
imgbtn.addEventListener('click' , ()=>{
    imgnumb = 10;  // Change the number of images here to generate different numbers of images.
    imagespic();
    
});
function imagespic(){
    for (let index = 0; index < imgnumb; index++) {
        const img = document.createElement('img');
           img.src = `https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`;
        randomPic.append(img);
        
    }

}