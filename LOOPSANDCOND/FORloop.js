for(let i=1;i<11;i++)
{
    console.log(i);
}

let arr=[1,2,3,4,5]
for(let a of arr)  //If you use the 'in' instead of 'of' it print index in case of array or list. In case of map print 'key value'
{
    console.log(a)
}

let map={name:"employee name", id:"454" , phone:"4233543"}
for(let key in map)
{
    console.log(key,": ",map[key])
}
