
document.getElementsByClassName('r')[0].classList.add("hidden");
document.getElementsByClassName('l')[0].classList.add("hidden");
// let img = document.getElementsByTagName("img")
//  for(let i = 0; i< image.length; i++)

// for(var i = 0; i< image.length; i++){

 function growImg(img) {

     var image = document.getElementsByClassName('gridImg');
     var i ;
     for (i = 0; i < img.length; i++) {
     	 image[i].classList.toggle("grow") ;
     
};








//      var imgStyle = document.getElementsByTagName('img')
//      for(var i = 0; i<imgStyle.length; i++) {
//        if (imgStyle[i].className == "gridImg grow") {
//             document.getElementsByClassName('r')[0].style.display = "inline-block";
//             document.getElementsByClassName('l')[0].style.display = "inline-block";
// 	     } 
//       else if( imgStyle.item(i).className !== "gridImg grow"){
//         document.getElementsByClassName('r')[0].style.display = "none";
//         document.getElementsByClassName('l')[0].style.display = "none";
//       } };

      document.getElementById('modal').classList.toggle('box');
};
// let img = document.getElementsByTagName("img")
 
//   img[0].addEventListener('click', growImg);

  //  document.querySelectorAll('.grid').forEach(item =>{item.addEventListener('click', growImg);

  // });

// let img = document.getElementsByTagName("img")
 
//   img.addEventListener('click', growImg[i],i);


var img = document.getElementsByTagName("img")
var i ;
for (i = 0; i < img.length; i++) {
  img[i].addEventListener('click', growImg);
};

  
  		
  	

  
  // let img = document.getElementsByTagName("img")
  // for(var i = 0; i< img.length; i++) {
  // img[i].addEventListener('click', growImg)
 
  		
  // 	}
  // img[i].addEventListener('click', growImg);


// for(var i = 0;i < 10;i++) {
//     try{throw i}
//     catch(ii) {
//         setTimeout(function(){
//             console.log(ii);
//         },1000);
//     }
// }



// var object = ['foo', 'bar'], i;  
// try { 
//     for (i = 0, len = object.length; i <len; i++) {  
//         // do something that throws an exception 
//     } 
// } 
// catch (e) {   
//     // handle exception  
// } 

// var imgStyle = document.getElementsByTagName('img')
//      for(var i = 0; i<imgStyle.length; i++) {
//        if (growImg == true) {
//             document.getElementsByClassName('r')[0].style.display = "inline-block";
//             document.getElementsByClassName('l')[0].style.display = "inline-block";
   
// 	     } 

      
//       else if( growImg == false){
//         document.getElementsByClassName('r')[0].style.display = "none";
//         document.getElementsByClassName('l')[0].style.display = "none";
//       } };

// document.querySelectorAll('.grid').forEach(item =>{item.addEventListener('click', growImg);

//   });
// var slides = document.getElementsByClassName("slide");
// for (var i = 0; i < slides.length; i++) {
//    Distribute(slides.item(i));
// }

// const fruits = ["apple", "orange", "cherry"];
// fruits.forEach(myFunction);

// function myFunction(item, index) {
//   text += index + ": " + item + "<br>"; 
// }

// let img2 = document.getElementsByClassName("img");

// Array.from(img2).forEach((item) => {
   
//     console.log(item + "hello");
// });






// <img src="BCover.jpg" id="ImgGallery" onclick="rotateGallery()"/>


// var counter = 0,
//     gallery = ["BCover.jpg", "MechGP.jpg", "Mech2.jpg", "Mech3.jpg", "Mech4.jpg", "MCA1.png"],
//     rotateGallery = function () {
//         document.getElementById("ImgGallery").src = gallery[counter];
//         counter++;
//         if (counter >= gallery.length) {
//             counter = 0;
//         }
//     };