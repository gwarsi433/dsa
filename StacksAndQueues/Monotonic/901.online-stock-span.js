/*
 * @lc app=leetcode id=901 lang=javascript
 *
 * [901] Online Stock Span
 */

// @lc code=start

var StockSpanner = function() {
    this.stack=[]
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    let span =1
    while(this.stack.length && price>=this.stack[this.stack.length-1][0]){
        span += this.stack.pop()[1]
    }
    this.stack.push([price,span])
    return span
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
// @lc code=end
var stockSpanner= new StockSpanner();
console.log(stockSpanner.next(100))

