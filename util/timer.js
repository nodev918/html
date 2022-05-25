class timer {
  static wait(second) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve();
      }, second * 1000);
    });
  }
}

export { timer };
