import _ from "lodash";


let PageList = {};


export const add = (pageKey, pageComponent, pageRoute, pageRequiresAuth = false) => {
    
    PageList[pageKey] = {pageComponent, pageRoute, pageRequiresAuth};

}

export const Components = () => {

    const map = _.mapValues(PageList, (element) => element.pageComponent)
    return (map)
 };

export const Routes = () => {

    const map = _.mapValues(PageList, (element) => element.pageRoute)
    return (map) 

} 



