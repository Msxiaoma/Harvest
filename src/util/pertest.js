class PerTest {
  constructor() {
    this.data = []
  }
 get testStart() {
    if (window.performance || window.webkitPerformance) {
      var perf = window.performance || window.webkitPerformance
      var timing = perf.timing
      var navi = perf.navigation
      return new Promise((resolve, reject) => {
        var timer = setInterval(() => {
          if (0 !== timing.loadEventEnd) {
            clearInterval(timer)
            let data = [
              timing.domLoading - timing.fetchStart, // 白屏时间
              timing.loadEventEnd - timing.fetchStart, // 获取页面加载时间
              timing.domContentLoadedEventEnd - timing.fetchStart, // fetchStart是指在浏览器发起任何请求之前的时间值  获取DOM加载时间
              timing.domainLookupEnd - timing.domainLookupStart, // DNS
              timing.connectEnd - timing.connectStart, // TCP
              timing.responseEnd - timing.responseStart, // Request
            ]
            resolve(data)
          }
        })
      })
    }
  }
}
export default new PerTest()
