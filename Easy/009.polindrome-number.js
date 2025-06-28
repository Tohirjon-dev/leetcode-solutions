/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let ch = String(x);
    let left = 0;
    let right = ch.length - 1;
    while(right>left){
        if(ch[left] !== ch[right]){
            return false
        }
        left++;
        right--;
    }
    return true
};