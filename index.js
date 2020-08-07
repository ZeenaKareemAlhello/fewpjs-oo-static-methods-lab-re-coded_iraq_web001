class Formatter {

  static capitalize(name){
 return name.charAt(0).toUpperCase()+name.slice(1)
  }
  static sanitize(name){
 return  name.replace(/[^A-Za-z-d-\s']+/g, '')
  }
  static titleize(name) {
   
}