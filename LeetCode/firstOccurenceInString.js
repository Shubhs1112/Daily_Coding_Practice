// Find the Index of the First Occurrence in a String
// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack,
//  or -1 if needle is not part of haystack.


function strStr(haystack, needle){
    for( let i=0; i < haystack.length-needle.length+1; i++){
        if(haystack.charAt(i) == needle.charAt(0)){
            if(haystack.substring(i,needle.length+i) == needle){
                return i;
            }
        }
    }
    return -1
}

console.log(strStr('sadbutsad','sad'));
console.log(strStr('leetcode','leeto'));
