let img={
    1: {img: 'img/video/Group14900.png',
    play: 'img/video/play.svg',
    title: '3D Explain Video Toolkit',
    arrow:'img/video/ArrowSmallLeft.svg'},

    2: {img: 'img/video/Group4901.png',
    play: 'img/video/play.svg',
    title: 'Explainer Video Toolkit',
    arrow:'img/video/ArrowSmallLeft.svg'},
    
    3: {img: 'img/video/Group14906.png',
    play: 'img/video/play.svg',
    arrow:'img/video/ArrowSmallLeft.svg',
    title: 'Educational Video Toolkit'},
    4: {img: 'img/video/Group14904.png',
    play: 'img/video/play.svg',
    title: 'Teacher’s Video Message',
    arrow:'img/video/ArrowSmallLeft.svg'},

    5: {img: 'img/video/Group14903.png',
    play: 'img/video/play.svg',
    title: 'Online Education Promotion',
    arrow:'img/video/ArrowSmallLeft.svg'},
    
    6: {img: 'img/video/Group14902.png',
    play: 'img/video/play.svg',
    arrow:'img/video/ArrowSmallLeft.svg',
    title: 'Advanced Online Educational Platform'},
    7: {img: 'img/video/Group14905.png',
    play: 'img/video/play.svg',
    title: 'Online Educational Website Promotion',
    arrow:'img/video/ArrowSmallLeft.svg'},

    8: {img: 'img/video/Group14906.png',
    play: 'img/video/play.svg',
    title: 'Educational Platform Introduction',
    arrow:'img/video/ArrowSmallLeft.svg'},
    
    9: {img: 'img/video/Group14907.png',
    play: 'img/video/play.svg',
    arrow:'img/video/ArrowSmallLeft.svg',
    title: 'E-Learning Platform Promotion'},
    
    

}

let slideObj={
    1:{
   
            text: "I’m having so much fun creating my educational animation videos with Renderforest’s drag and drop features with its extensive library of templates and music library! My videos look amazing!",
            name: 'Gracy Y',
            aboutName: 'Book Author'
      
    },
    2:{
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
        name: 'slide 2',
        aboutName: 'for slide 2'
    },
    3:{
        text: "Review 1 - I’m having so much fun creating my educational animation videos with Renderforest’s drag and drop features with its extensive library of templates and music library! My videos look amazing!",
        name: 'slide 3',
        aboutName: 'for slide 3'
    },
}

let container =document.getElementById('container');

for(let key in img){
    console.log(img[key])
    let containerItem = document.createElement('div');
    let img1=document.createElement('img');
    let img2=document.createElement('img');

    let img3=document.createElement('img');
    let content=document.createElement('div')
    let title =document.createElement('p');
    let button =document.createElement('button');
    let btnTitle=document.createElement('span');
    let textWatchFull=document.createElement('p')
    img1.src=img[key].img;
    img2.src=img[key].play;
    img3.src=img[key].arrow;
    textWatchFull.innerHTML='Watch full video';
    title.innerHTML=img[key].title;

    containerItem.className="item-container";
    img1.className='video-img';
    img2.className='video-img-play';
    content.className='item-content';
    title.className='item-title';
    button.className='item-button-create';
    textWatchFull.className='text-full'
    

    containerItem.appendChild(img1);
    containerItem.appendChild(img2);
    containerItem.appendChild(textWatchFull);
    btnTitle.appendChild(img3);
    button.innerHTML='Create';

    button.appendChild(btnTitle);
    content.appendChild(title)
    content.appendChild(button);
    containerItem.appendChild(content);
    container.appendChild(containerItem);
    



}
document.addEventListener("scroll", handleScroll);

let scrollTopEl=document.getElementById('scrollTop');
scrollTopEl.addEventListener("click", scrolTop);


function handleScroll(){

    if (document.documentElement.scrollTop <1085) {
        scrollTopEl.className='none'
      } else {
        scrollTopEl.className ='circle';
     
      }
}


function scrolTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
/*
let slide1=document.getElementById('slide1');
slide1.addEventListener('click', slide('1'));
let slide2=document.getElementById('slide2');
slide2.addEventListener('click', slide('2'));
let slide3=document.getElementById('slide3');
slide3.addEventListener('click', slide('3'));
*/

function slide (id){
   
  let text=document.getElementById('l');

 text.innerHTML=slideObj[id].text;
 let name= document.getElementById('name');
 name.innerHTML=slideObj[id].name;
let aboutName= document.getElementById('about-name');
aboutName.innerHTML=slideObj[id].aboutName;

}