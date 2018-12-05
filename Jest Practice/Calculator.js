const add = (a,b) => 
{
    if(!b)
        return a;
    if(!a)
        return b;
    else
        return a+b;
};
const sub = (a,b) =>
{
    if(!b)
        return a;
    if(!a)
        return b;
    else
        return a-b;
} ;
const mul = (a,b) =>
{
    if(!b)
        return a;
    if(!a)
        return b;
    else
        return a*b;
};
const div = (a,b) =>
{
    if(!b)
        return a;
    if(!a)
        return b;
    else
        return a/b;
};

module.exports = {'add':add,'sub':sub,'mul':mul,'div':div}