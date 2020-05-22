function bai2(text_1, text_2)
{
    var len_long, len_short;
    if(text_1.length>=text_2.length)
    {
        len_long = text_1.length;
        text_long = text_1;
        len_short = text_2.length;
        text_short = text_2;
    }
    else if(text_1.length<text_2.length)
    {
        len_short = text_1.length;
        text_short = text_1;
        len_long = text_2.length;
        text_long = text_2;
    }
    for (i = 0; i < len_short; i++) 
    {
        for (j = 0; j < len_long; j++) 
        {
            if(text_short[i] === text_long[j])
            {
                check = true;
                break;
            }
            else{
                check = false
            }
        }

    }
    console.log(check);
}
