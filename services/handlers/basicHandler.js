class Handler {
    constructor(successor = null) {
      this.successor = successor;
    }
  
    handleRequest(req) {
      if (this.successor) {
        this.successor.handleRequest(req);
      }
  
      return req;
    }
  }

  export default Handler