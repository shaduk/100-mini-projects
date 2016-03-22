function func(s, a, b)
{
    var match_empty=/^$/ ;
    if (s.match(match_empty))
    {
        return -1;
    }
    else
    {
        var i=0;
        var aIndex=-1;
        var bIndex=-1;

        while ((aIndex==-1) && (bIndex==-1) && (i<s.length))
        {
            if (s.substring(i, i+1) == a)
                aIndex=i;
        	if (s.substring(i, i+1) == b)
                bIndex=i;
        	i++;
        }

        if (aIndex != -1)
        {
            if (bIndex == -1)
                return aIndex;
        	else
                return Math.min(aIndex, bIndex);
        }
        else
        {
            if (bIndex != -1)
                return bIndex;       
	      else
                return -1;
        }
    }
};

function mfunc(s, a, b)
{
    f = s.split("");
    var aindex = f.indexOf(a);
    var bindex = f.indexOf(b);
    if(aindex == -1 || bindex == -1)
        return Math.max(aindex, bindex)
    return Math.min(aindex, bindex);
}