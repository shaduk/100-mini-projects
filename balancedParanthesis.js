

function check(str)
{
	var stack = [];
    var map = {
    	")" : "(",
      "}" : "{",
      "]" : "["
    };
    
    for(var i = 0, len = str.length; i < len; i++)
    {
    		if(str[i] == "(" || str[i] == "{" || str[i] == "[")
        {
        		stack.push(str[i]);
        }
        else if(str[i] == ")" || str[i] == "}" || str[i] == "]")
        {
        	if(stack.length == 0 || map[str[i]] != stack[stack.length-1])
                return false
            else
                stack.pop()
        }
    }
    if(stack.length == 0)
        return true;
    else
        return false;
}