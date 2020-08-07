class Formatter {

  static capitalize(name){
 return name.charAt(0).toUpperCase()+name.slice(1)
  }
  static sanitize(name){
 return  name.replace(/[^A-Za-z-d-\s']+/g, '')
  }
  static titleize(string) {
    let words = string.split(' ');
   

    for (let n = 0; n < words.length; n++) {
      
       if( words[n]=== 'a'||'an'|| 'but'|| 'of'|| 'and'|| 'for'||'at'|| 'by'||'from'){
         words[n] = words[n]
       }
       else{
       
      words[n] = words[n].charAt(0).toUpperCase() + words[n].slice(1);
    }}
    return words.join(' ');
  }
}