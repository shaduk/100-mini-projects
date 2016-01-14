function drop(arr, func) {
  // Drop them elements.
  var ans = [];
  for(var i = 0; i < arr.length(); i++)
    {
      
      if(func(arr[i]))
        {
        ans.push(arr[i]);
        }
    }
  return ans;
}

drop([1, 2, 3], function(n) {return n < 3; });
