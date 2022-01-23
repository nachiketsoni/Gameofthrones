

var content= [
    {heading:"Winter Is Here", video:"got.mp4", rate:8.7, name:"Winterfell", name2:"A Knight Of <br> The Seven Kingdom",name3:"The Long night",name4:"Last Of The Stark",name5:"The Bells",name6:"The Iron Thrones", Image: "https://static.wikia.nocookie.net/gameofthrones/images/9/94/804_Ghost_Profile.png",Image2: "https://i.pinimg.com/564x/29/58/34/2958349bedcb0808f91c05c7eb6c6623.jpg",Image3:"https://i.pinimg.com/564x/81/a9/fb/81a9fb6d763c2c74b98f63fc309924ce.jpg",Image4:"https://i.pinimg.com/564x/6f/4a/44/6f4a44d74e26d86e83ae715b9f6a452b.jpg",Image5:"https://i.pinimg.com/564x/7c/5c/6f/7c5c6f59569f02cfdeec8097530cc320.jpg",Image6:"https://i.pinimg.com/564x/f9/f2/0e/f9f20ea61501ef1e6ba5b676f36aee47.jpg" },
    {heading:"The End begins",video:"page2.mp4",rate:7.9, name:"Winterfell", name2:"A Knight Of <br> The Seven Kingdom",name3:"The Long night",name4:"Last Of The Stark",name5:"The Bells",name6:"The Iron Thrones", Image: "https://i.pinimg.com/564x/03/d1/6c/03d16ceadf7f5d3860a8bbbbe883c88c.jpg",Image2: "https://i.pinimg.com/564x/5f/95/68/5f956857c064aa6f6875b7187e3c3187.jpg",Image3:"https://i.pinimg.com/564x/f8/b2/26/f8b226654274372aab196b225b1d4070.jpg",Image4:"https://i.pinimg.com/564x/27/c2/5d/27c25da0d7b262a7da8579544035effe.jpg",Image5:"https://i.pinimg.com/564x/1b/ee/95/1bee95b9066799c46cd7e721f78b9453.jpg",Image6:"https://i.pinimg.com/564x/70/4d/df/704ddfdf8f7f801f27c3ead0c4ddde95.jpg" },
    {heading:"All Men Must Die",video:"page3.mp4",rate:9, name:"Winterfell", name2:"A Knight Of <br> The Seven Kingdom",name3:"The Long night",name4:"Last Of The Stark",name5:"The Bells",name6:"The Iron Thrones", Image: "https://i.pinimg.com/564x/8a/38/80/8a388050270f841a31ea7fbca99de7ef.jpg",Image2: "https://i.pinimg.com/564x/15/f4/e0/15f4e01d3913ef1ab79232ea49112be5.jpg",Image3:"https://i.pinimg.com/564x/e6/a3/e4/e6a3e4fea1129987212abd46785aff46.jpg",Image4:"https://i.pinimg.com/564x/bd/33/48/bd334810d2031926b4246fe66e2069a9.jpg",Image5:"https://i.pinimg.com/564x/c2/d4/64/c2d46412e320fe4222e0d2737efc9ad0.jpg",Image6:"https://i.pinimg.com/564x/4b/54/88/4b5488bdfb256f6356da45e0b7cb677d.jpg"  }
];

var clutter = "";

content.forEach(function(elem,index){
    
    
    clutter += `<div class="m${index}" id="main">
    <audio  src="./gotmusic.mp3"></audio>
    <video autoplay muted loop id="Video">
    <source src="${elem.video}" type="video/mp4">
    </video>

    <div id="bg">
    
    <div id ="icon${index}" class="pause">
    <i id="mute" class="ri-volume-mute-fill"></i>
    </div>
    <div id="nav">
    <div id="logo">
    <img src="HBO.png" alt="">
    <button>Popular</button>
    </div>
    <div id="ctrg">
    
    <h4>Serial</h4>
    <h4>Movies</h4>
    <h4>Sports</h4>
    <h4>Series</h4>
    <h4>Kids</h4>
    <i class="ri-search-line"></i>
    <i class="ri-menu-3-line"></i>
    </div>          
    </div>
    <div id="line">
    <div class="point">Season 1</div>
    <div class="point">Season 2</div>
    <div class="point">Season 3</div>
    <div class="point">Season 4</div>
    <div class="point">Season 5</div>
    <div class="point">Season 6</div>
    <div class="point">Season 8</div>
    
    </div>
    <div  id="desc">
    <div id="star"  >
    <i class="ri-star-fill"></i>
    <i class="ri-star-fill"></i>
    <i class="ri-star-fill"></i>
    <i class="ri-star-half-line"></i>
    <i class="ri-star-line"></i>
    <h5>7.9/10</h5>
    </div>
    <h1  >${elem.heading}</h1>
    <p  >The final season depicts the culmination of the series' two primary conflicts: the Great War against the Army of the Dead, and the Last War for control of the Iron Throne.</p>
    <div id="watch">
    <div  id="play"><i class="ri-play-fill"></i></div>
    <h4  >Watch Trailer</h4>
    </div>
    </div>
    <div  class="card${index}"  id="cards">



    <div  class="cards">
    <img src="${elem.Image}" alt="">
    <i class="ri-bookmark-line"></i>
    <div class="name">
    <h3>Episode 1</h3>
    <h1>${elem.name}</h1>
    <i class="ri-star-fill"></i>
    <h5>8.7</h5>
    </div>
    </div>


    

    
    <div class="cards">
    <img src="${elem.Image2}" alt="">
    <i class="ri-bookmark-line"></i>
    <div class="name">
    <h3>Episode 2</h3>
    <h1>${elem.name2}</h1>
    <i class="ri-star-fill"></i>
    <h5>8.7</h5>
    </div>
    </div>


    

    
    <div class="cards">
    <img src="${elem.Image3}" alt="">
    <i class="ri-bookmark-line"></i>
    <div class="name">
    <h3>Episode 3</h3>
    <h1>${elem.name3}</h1>
    <i class="ri-star-fill"></i>
    <h5>8.7</h5>
    </div>
    </div>


    

    
    <div class="cards">
    <img src="${elem.Image4}" alt="">
    <i class="ri-bookmark-line"></i>
    <div class="name">
    <h3>Episode 4</h3>
    <h1>${elem.name4}</h1>
    <i class="ri-star-fill"></i>
    <h5>8.7</h5>
    </div>
    </div>


    

    
    <div class="cards">
    <img src="${elem.Image5}" alt="">
    <i class="ri-bookmark-line"></i>
    <div class="name">
    <h3>Episode 5</h3>
    <h1>${elem.name5}</h1>
    <i class="ri-star-fill"></i>
    <h5>8.7</h5>
    </div>
    </div>


    

    
    <div class="cards">
    <img src="${elem.Image6}" alt="">
    <i class="ri-bookmark-line"></i>
    <div class="name">
    <h3>Episode 6</h3>
    <h1>${elem.name6}</h1>
    <i class="ri-star-fill"></i>
    <h5>8.7</h5>
    </div>
    </div>




    
    </div>
    </div>
    </div>`
})
document.querySelector("#full").innerHTML = clutter;



// var cards = [
//     {episode:"Episode 1", name:"Winterfell", rate:8.7,Image: "https://static.wikia.nocookie.net/gameofthrones/images/9/94/804_Ghost_Profile.png"},
//     {episode:"Episode 2", name:"A Knight Of <br> The Seven Kingdom", rate:7.9, Image: "https://i.pinimg.com/564x/29/58/34/2958349bedcb0808f91c05c7eb6c6623.jpg"},
//     {episode:"Episode 3", name:"The Lost Knight",           rate:9},
//     {episode:"Episode 4", name:"Last Of The Stark",                 rate:9.5},
//     {episode:"Episode 5", name:"The Bells",                 rate:7},
//     {episode:"Episode 6", name:"The Iron Thrones",              rate:8.9},
            
            
//         ]
        // var clutter2 = "";
        // cards.forEach(function (elem,index) {
            
            
            
        //     clutter2 += `<div class="cards">
        //     <img src="${elem.Image}" alt="">
            
        //     <i class="ri-bookmark-line"></i>
        //     <div class="name">
        //     <h3>${elem.episode}</h3>
            
        //     <h1>${elem.name}</h1>
            
        //     <i class="ri-star-fill"></i>
        //     <h5>${elem.rate}</h5>
        //     </div>
        //     </div>`
        // });
        
        // document.querySelector("#cards").innerHTML = clutter2;
        var audio = document.querySelector("audio")
        var pause = document.querySelector(".pause ")
        flag = 0


        
        window.addEventListener("click", function(dets){
            console.log(dets.target.className)
            if(dets.target.className === "pause" || dets.target.id === "mute"  ){

            
            if( flag === 0){
                audio.load();
                audio.play();
                document.querySelector("#main #bg>#icon0").innerHTML =  `<i id="mute" class="ri-volume-up-fill"></i>`
                document.querySelector("#main #bg>#icon1").innerHTML =  `<i id="mute" class="ri-volume-up-fill"></i>`
                document.querySelector("#main #bg>#icon2").innerHTML =  `<i id="mute" class="ri-volume-up-fill"></i>`

                flag = 1 ;
                
            }

            else if( flag != 0 ){
                
                audio.load();
                audio.pause();
                document.querySelector("#main #bg>#icon0").innerHTML =  `<i id="mute" class="ri-volume-mute-fill"></i>`
                document.querySelector("#main #bg>#icon1").innerHTML =  `<i id="mute" class="ri-volume-mute-fill"></i>`
                document.querySelector("#main #bg>#icon2").innerHTML =  `<i id="mute" class="ri-volume-mute-fill"></i>`

                flag = 0
               
            }
            else{
               
            }
        }
            
        })

        // var tl = gsap.timeline({
        //     scrollTrigger:{
        //     trigger:".card1",
        //     markers:true,
        //     start: "top center"
            
        // }});
        // tl
        // .from(".card1",{
        //     y:"50px",
        //     opacity:0,
            
        //     duration:2,
        // })
        
        
        
        
      