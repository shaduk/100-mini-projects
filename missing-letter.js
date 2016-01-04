/* Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
  var first = str[0].charCodeAt(0);
  var ans;
  for(var i = 0; i < str.length; i++)
    {
       if(String.fromCharCode(first) === str[i])
         {
            first = first + 1;
         }
       else
         {
            ans = String.fromCharCode(first);
         }
        
    }
  return ans;
}

fearNotLetter("abce");