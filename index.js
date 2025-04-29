
// document.addEventListener("DOMContentLoaded",function(){
//   let title = document.getElementById("title");
//   // console.log("H1 nek");
//   // console.log(title);
  
//   // title.innerHTML = 'Java Script';
  
//   // nếu để file bên trên thì dùng phương thức này 
//   let description = document.getElementById('description');
  
//   title.addEventListener('click',function(){
//     description.innerHTML='hehe';
  
//   });
// })


document.addEventListener("DOMContentLoaded", function(){
  let menutoggle= document.getElementById("menu-toggle");
  let mobilenav= document.getElementById("mobile-nav");
  let baricon= document.getElementById("bars-icon");
  let closeicon= document.getElementById("close-icon");
  


  menutoggle.addEventListener("click", function(){
    // add new class active in mobile nav class
    // nếu đã có active thì bỏ đi, nếu chưa có thì thêm vào 
    mobilenav.classList.toggle("active");

    if(mobilenav.classList.contains("active")){
      baricon.style.display = "none";
      closeicon.style.display= "block";
    }else{
      baricon.style.display = "block";
      closeicon.style.display="none";
    }


  });


});

