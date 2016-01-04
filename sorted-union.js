function unite(arr1) {
  var args = Array.prototype.slice.call(arguments);
  var array = [];
  for(var k = 0; k < args.length; k++)
    {
      array.concat(args[i]);
    }
  var ans = [];
  for(var i = 0; i < array.length; i++)
    {
        var count = 0;
      
        for(var j = 0; j < ans.length; j++)
          {
            if(array[i] === ans[j])
              {
              count = 1;
              break;
              }
          }
       if(count === 0)
         {
            ans.push(array[i]);
         }
      
    }
  
  return ans;
}

unite([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);