import uniloc from "./uniloc";

export default class Decoder {

    static routes = null;
    static aliases = null;
    static decoder = null;

    constructor(routes, aliases){

        Decoder.routes = routes;
        Decoder.aliases = aliases;
        
        Decoder.decoder = uniloc(routes, aliases);
      
      }    

      LookupURI = (uri, method) => Decoder.decoder.lookupURI(uri, method);
      static LookupURI = (uri, method) => Decoder.decoder.lookupURI(uri, method);
    
      MakeURI = (name, options) => Decoder.Router.makeURI(name, options);
      static MakeURI = (name, options) => Decoder.decoder.makeURI(name, options);  
    


      static BuildHREF = (name, options) => {
        var newURI = Decoder.MakeURI(name, options);
        return(window.location.pathname + window.location.search + '#' + newURI);
      }
      
      BuildHREF = Decoder.BuildHREF;
}