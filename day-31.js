// https://www.codewars.com/kata/singleton-pattern/train/javascript

// Singleton Pattern

function Singleton() {
  return Singleton.object || (Singleton.object = this);
} 

/*****************************************************************/

// https://www.codewars.com/kata/588a00ad70720f2cd9000005/train/javascript

// Simple Web Framework #1: Create a basic router

class Router {
    
    constructor() {
        this.routes = new Map();
    }  
        
    bind(url, method, action) {
        this.routes.set(url + ":" + method, action);
    }
    
    runRequest(url, method) {
        if (!this.routes.has(url + ":" + method)) {
            return "Error 404: Not Found";
        }
        return this.routes.get(url + ":" + method)();
    }
    
}
