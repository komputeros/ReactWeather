// function getTempCallback(location, callback) {
//   callback(undefined, 78);
//   callback("City not found");
// }
//
// getTempCallback('Philadelpgia', function(err, temp) {
//   if(err) {
//     console.log('error', err);
//   } else {
//     console.log('suces', temp);
//   }
//
// });
//
// function getTempPromise(location) {
//   return new Promise(function(resolve, reject) {
//     resolve(79);
//     reject('City not found');
//   });
// }
//
// getTempPromise('Philadelphia').then(function(temp) {
//   console.log('promise sucess', temp);
// }, function(err) {
//   console.log('promise error', err);
// });


function addPromise (a,b) {
  return new Promise(function(resolve, reject) {

    if (typeof a === 'number' && typeof b === 'number') {

      resolve(a+b);
    } else {
      reject('Error format');
    }
  });
}

  addPromise(4,'sdf').then(function(result){
    console.log("Suma: " + result);
  }, function(error) {
    console.log(error);
  });
