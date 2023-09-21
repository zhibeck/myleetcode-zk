//Promises:
let p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a == 2) {
    //resolve
    resolve("Success");
  } else {
    //reject:
    reject("Failed");
  }
});

p.then((message) => {
  console.log("This is in the then" + message);
}).catch((message) => {
  console.log("This is in catch error" + message);
});
//

const userLeft = true;
const userWatchingCatMeme = false;

function watchTutorialsPromise() {
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: "User Left ); ",
        message: "sad",
      });
    } else if (userWatchingCatMeme) {
      reject({
        name: "User Watching a Cat meme",
        message: "Cats > Web development",
      });
    } else {
      resolve("Thumbs up, resolved");
    }
  });
}

watchTutorialsPromise()
  .then((message) => {
    console.log("Success" + message);
  })
  .catch((error) => {
    console.log(error.name + " " + error.message);
  });

//Promise.all:
//All of these promises are running at the same time:

const recordVideoOne = new Promise((resolve, reject) => {
  resolve("Video 1 was recorded");
});

const recordVideoTwo = new Promise((resolve, reject) => {
  resolve("Video 2 was recorded");
});
const recordVideoThree = new Promise((resolve, reject) => {
  resolve("Video 3 was recorded");
});

Promise.all([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
  (messages) => {
    console.log(messages);
  }
);
//Promise.race - returns only the promise, that is ready to be returned.
//
