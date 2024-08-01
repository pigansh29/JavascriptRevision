// function purchasecake(){

//   setTimeout(() => {
//       console.log("Cake purchased")
//   }, 3000);
// }

// function curtaindec(){

//   setTimeout(() => {
//       console.log("Curtian Down")
//   }, 5000);
// }

// function ballons(){
//   setTimeout(() => {
//       console.log("ballons released")
//   },2000);
// }

// function cakecutting(){
//   setTimeout(() => {
//       console.log("Cake Cutting")
//   },7000);
// }

//  // callback hell


// console.log("Happy b'day by person 1");
// console.log("Happy b'day by person 2");
// console.log("Happy b'day by person 3");
// curtaindec();
// purchasecake();

// console.log("Happy b'day by person 4");
// console.log("Happy b'day by person 5");
// cakecutting();

// curtaindec();

// console.log("Happy b'day by person 6");
// cakecutting();
// ballons();

// console.log("Happy b'day by person 7");
// console.log("Happy b'day by person 8");

// cakecutting();

// console.log("Happy b'day by person 9");
// console.log("Happy b'day by person 10");




// .......................................................

// function purchasecake(callback) {
//   setTimeout(() => {
//     console.log("Cake purchased");
//   }, 2000);
//   callback();
// }

// function curtaindec(callback) {
//   setTimeout(() => {
//     console.log("curtain Down");
//   }, 2000);
//   callback();
// }
// function ballons(callback) {
//   setTimeout(() => {
//     console.log("Ballons released");
//   }, 2000);
//   callback();
// }
// function cakecutting() {
//   setTimeout(() => {
//     console.log("cake cutting");
//   }, 2000);

// }


// // call back hell
// purchasecake(()=>{
//   curtaindec(()=>{
//     ballons(()=>{
//       cakecutting();    
//     })
//     })
// })

//.............................................................
async function purchase(){
  return new Promise((resolve,reject)=>{
  setTimeout(()=>{
      console.log("Cake purchase")
      resolve()
  },5000)
})
}
async function curtain(){
  return new Promise((resolve,reject)=>{
  setTimeout(()=>{
      console.log("Curtain down")
      resolve()
  },5000)

})
}

async function balloons(){
  return new Promise((resolve,reject)=>{
  setTimeout(()=>{
      console.log("Balloons released")
      resolve()
  },5000)

})
}

async function cutting(){
  return new Promise((resolve,reject)=>{
  setTimeout(()=>{
      console.log("Cake cutting")
      resolve()
  },5000)

})
}

async function celeb(){
  try{
      await purchase()
      await curtain()
      await balloons()
      await cutting()
  } catch (e){
      console.log(e)
  }   
}
celeb()