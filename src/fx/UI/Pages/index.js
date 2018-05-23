import _ from "lodash";


let PageList = {};


export const add = (pageClass, connectedPage) => {
    
    PageList[pageClass.PageKey] = {
        pageComponent: connectedPage, 
        pageClass,  
        pageRoute: `GET ${pageClass.Route}`, 
        pageRequiresAuth: pageClass.RequiresAuthentication
    };

}

export const RouteMap = () => {

    const map = _.mapValues(PageList, (element) => element.pageComponent)
    return (map)
 };

export const Routes = () => {

    const map = _.mapValues(PageList, (element) => element.pageRoute)
    return (map) 

} 

export const PageClass = () => {
    const map = _.mapValues(PageList, (element) => element.pageClass)
    return (map) 
    
}

