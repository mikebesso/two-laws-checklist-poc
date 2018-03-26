import React from 'react'
import fontawesome from '@fortawesome/fontawesome'
import FA from '@fortawesome/react-fontawesome'

import solid from '@fortawesome/fontawesome-pro-solid'
import regular from '@fortawesome/fontawesome-pro-regular'

// Beverages
import fasCoffee from '@fortawesome/fontawesome-pro-solid/faCoffee'
import farCoffee from '@fortawesome/fontawesome-pro-regular/faCoffee'

import fasGlassMartini from '@fortawesome/fontawesome-pro-solid/faGlassMartini'
import farGlassMartini from '@fortawesome/fontawesome-pro-regular/faGlassMartini'

import fasBeer from '@fortawesome/fontawesome-pro-solid/faBeer'
import farBeer from '@fortawesome/fontawesome-pro-regular/faBeer'

// UI
import fasEdit from '@fortawesome/fontawesome-pro-solid/faPencil'
import farEdit from '@fortawesome/fontawesome-pro-regular/faPencil'


// Beverages
fontawesome.library.add(solid,  fasCoffee, fasGlassMartini, fasBeer);
fontawesome.library.add(regular,  farCoffee, farGlassMartini, farBeer);

// UI
fontawesome.library.add(solid,  fasEdit, farEdit);
fontawesome.library.add(regular,  fasEdit, farEdit);


const icons = { 
    solid:
    {
        beverages: {
            coffee: fasCoffee,
            martini: fasGlassMartini,
            beer: fasBeer
        }
    },
    regular:
    {
        beverages: {
            coffee: farCoffee,
            martini: farGlassMartini,
            beer: farBeer
        }            
    }

};

const iconSize = {
    x1: "1x",
    x2: "2x",
    x3: "3x"
}




const FontAwesome = (icon=icons.regular.beer, size=iconSize.x1) => {
    console.log(size);
    return(
        <FA 
            icon={farCoffee}
            size={iconSize.x2}
        />
    );
}
        

export {iconSize, icons};

export default FontAwesome;
