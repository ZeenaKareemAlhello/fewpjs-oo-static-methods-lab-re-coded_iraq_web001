class Formatter {

  static capitalize(name){
 return name.charAt(0).toUpperCase()+name.slice(1)
  }
  static sanitize(name){
 return  name.replace(/[^A-Za-z-d-\s']+/g, '')
  }
  static titleize(name) {
    let text=''
   let a=name.split(' ')
   console.log(a)
   for (let i=0; i <a.length; ++i)
{ if( a[i]!== 'a'||'an'|| 'but'|| 'of'|| 'and'|| 'for'|| 'at'|| 'by'||'from')
{ 
  if(i==a.length-1){
    text += a[i].charAt(0).toUpperCase()+a[i].slice(1);
   
  }
  else{
     text += a[i].charAt(0).toUpperCase()+a[i].slice(1)+' ';
  }
  
}
  else{
    text +=a[i];
  }

return text
}