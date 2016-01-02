/* Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.
*/

function isVowel(char)
{
  if (char.length == 1)
  {
    return /[aeiou]/.test(char);
  }
}

function translate(str) {
  
  var conso = "";
  for(var i = 0; i < str.length; i++)
    {
       if(isVowel(str[i]))
         {
           break;
         }
      else
        {
          conso = conso + str[i];
        }
    }
 
  if(conso === "")
    {
       str = str + "way";
    }
  else
    {
       str = str.replace(conso,"");
       str = str + conso + "ay";
    }
  return str;
}

translate("paragraphs")