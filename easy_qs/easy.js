//
var majorityElement = function (nums) {
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    if (obj.hasOwnProperty(nums[i])) {
      obj[nums[i]] += 1;
    } else {
      obj[nums[i]] = 1;
    }
  }

  for (const key in obj) {
    if (obj[key] > nums.length / 2) {
      // console.log('this is key of obj', key);
      return parseInt(key);
    }
  }
  // return 'no majority found'
};

// console.log(majorityElement([1,2,1,2,2,3]));

//2774.

// Array.prototype.upperBound = function (target) {
//   let left = 0;
//   let right = this.length;

//   while (left < right) {
//     let mid = Math.floor((left + right) / 2);

//     if (this[mid] < target) {
//       left = mid + 1;
//     } else {
//       right = mid;
//     }
//   }
//   return right;
// };

// [1, 4, 5].upperBound(2); // -1

//    [3, 4, 6, 6, 6, 6, 7].upperBound(6); // 5
// //  l         m         r

const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return right;
};

// console.log("index is", binarySearch([3, 4, 6, 6, 6, 6, 7], 7)); //5
// console.log("index is", binarySearch([1, 4, 5], 2)); //-1

//Hacker rank problem:

function plusMinus(arr) {
  // Write your code here
  let pluses = 0;
  let negatives = 0;
  let zeros = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeros += 1;
    } else if (arr[i] < 0) {
      negatives += 1;
    } else if (arr[i] > 0) {
      pluses += 1;
    }
  }
  let plusRatio = (pluses / arr.length).toFixed(6);
  let minusRatio = (negatives / arr.length).toFixed(6);
  let zeroRatio = (zeros / arr.length).toFixed(6);

  return [plusRatio, minusRatio, zeroRatio];
}

// console.log(plusMinus([-1, -2, 1, 2, 4, 5, 0, 0]));

function generateStaircase(n) {
  const staircase = [];

  // Build the 2D array
  for (let i = 0; i < n; i++) {
    const row = [];

    // Add spaces
    for (let j = 0; j < n - i - 1; j++) {
      row.push(" ");
    }

    // Add hashtags
    for (let k = 0; k < i + 1; k++) {
      row.push("#");
    }

    staircase.push(row);
  }

  // Print the 2D array
  for (let i = 0; i < n; i++) {
    console.log(staircase[i].join(""));
  }
}

// Example usage:
// generateStaircase(5); // Change the argument to the desired height (e.g., 5)

// async function sleep(millis) {
//     await(setTimeout(100))
// }

function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making request to ${location}`);
    if (location === "Google") {
      resolve("Google says hi!");
    } else {
      reject("We can only talk to Google");
    }
  });
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log("processing response");
    resolve(`Extra information + ${response}`);
  });
}

// makeRequest("Facebook")
//   .then((response) => {
//     console.log("Response received");
//   })
//   .then((processedResponse) => {
//     console.log(processedResponse);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//Async and await helps to make promises easier to use.

async function doWork() {
  try {
    const response = await makeRequest("Google");
    console.log("Response received");

    const processedRequest = await processRequest(response);
    console.log(processedRequest);
  } catch (error) {
    console.log(error);
  }
}

doWork();
