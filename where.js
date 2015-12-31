/* Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the property and it's value, that was passed on as the second argument. */

function where(collection, source) {
  var arr = [];
  // What's in a name?
  var keys_source = Object.keys(source);
  for(var i = 0; i < collection.length;i++)
    {
       var keys_coll = Object.keys(collection[i]);
       var sum = 0;
       for(var j = 0; j < keys_coll.length; j++)
         {
            
            for(var k = 0; k < keys_source.length; k++)
              {
                 if(keys_source[k] == keys_coll[j])
                   {
                     if(source[keys_source[k]] == collection[i][keys_coll[j]])
                       {
                         sum = sum + 1;
                       }
                   }
              }
            
         }
        if(sum == keys_source.length)
              {
                arr.push(collection[i]);
              }
    }
  return arr;
}

where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });