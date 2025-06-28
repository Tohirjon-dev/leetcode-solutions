/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    for(let i=0;i<haystack.length;i++){
     let word = haystack.slice(i,needle.length+i);
     if(word === needle)
      return i;
    } 
    return -1;
  };