/* 
* Get wordpress api entry point (ES6) 
* @author: ciiber.co 
* @replaces: https://developer.wordpress.org/rest-api/using-the-rest-api/discovery/#element
*/

const apiRoot = [...document.querySelectorAll('link')].filter(li=>li.rel === "https://api.w.org/")[0].href