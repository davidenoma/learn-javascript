var myApp = {}

// (function(){
//     myApp.add = function (a,b) {
//         return a + b;
//     }
// })();


 
const promise = new Promise((resolve,reject)=>{
  if(true){
    resolve('Stuff worked ')
  }else{
    reject('Error, It broke')
  }
  
  
})
const promise2 = new Promise((resolve,reject)=>{
  setTimeout(resolve,100,'Hiii')
})

promise.then(result => result + '!')
.then(

  result1 => {
    throw Error
    console.log(result1)}
    ).catch(() => console.log('error!'))

const urls2 = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'

]
Promise.all(urls2.map(url => {
  return fetch(url).then(resp => resp.json).then(result => console.log(results))
}))