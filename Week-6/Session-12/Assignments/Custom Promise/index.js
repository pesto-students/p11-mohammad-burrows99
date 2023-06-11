class CustomPromise {
    constructor(executor) {
      this.state = 'pending';
      this.value = undefined;
      this.error = undefined;
      this.onFulfilledCallbacks = [];
      this.onRejectedCallbacks = [];
  
      const resolve = (value) => {
        if (this.state === 'pending') {
          this.state = 'fulfilled';
          this.value = value;
          this.onFulfilledCallbacks.forEach((callback) => callback(this.value));
        }
      };
  
      const reject = (reason) => {
        if (this.state === 'pending') {
          this.state = 'rejected';
          this.error = reason;
          this.onRejectedCallbacks.forEach((callback) => callback(this.error));
        }
      };
  
      try {
        executor(resolve, reject);
      } catch (error) {
        reject(error);
      }
    }
  
    then(onFulfilled, onRejected) {
      return new CustomPromise((resolve, reject) => {
        const handleFulfillment = (value) => {
          try {
            resolve(onFulfilled(value));
          } catch (error) {
            reject(error);
          }
        };
  
        const handleRejection = (reason) => {
          try {
            if (typeof onRejected === 'function') {
              resolve(onRejected(reason));
            } else {
              reject(reason);
            }
          } catch (error) {
            reject(error);
          }
        };
  
        if (this.state === 'fulfilled') {
          handleFulfillment(this.value);
        } else if (this.state === 'rejected') {
          handleRejection(this.error);
        } else {
          this.onFulfilledCallbacks.push(handleFulfillment);
          this.onRejectedCallbacks.push(handleRejection);
        }
      });
    }
  
    catch(onRejected) {
      return this.then(undefined, onRejected);
    }
  
    static resolve(value) {
      return new CustomPromise((resolve) => {
        resolve(value);
      });
    }
  
    static reject(reason) {
      return new CustomPromise((resolve, reject) => {
        reject(reason);
      });
    }
  }

// Create a new CustomPromise that resolves after 1 second
const myPromise = new CustomPromise((resolve, reject) => {
    setTimeout(() => {
      resolve("Success!");
    }, 1000);
  });
  
  // Handle the fulfilled state
  myPromise
    .then((result) => {
      console.log(result); // Output: Success!
    })
    .catch((error) => {
      console.error(error);
    });
  
  // Create a new CustomPromise that rejects immediately
  const myRejectedPromise = new CustomPromise((resolve, reject) => {
    reject("Error!");
  });
  
  // Handle the rejected state
  myRejectedPromise.catch((error) => {
    console.error(error); // Output: Error!
  });

//To test code, copy paste this code in console tab in browser devtools