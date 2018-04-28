
import HashRouter from "./HashRouter";

var MockBrowser = require('mock-browser').mocks.MockBrowser,
mock = new MockBrowser();


var window = MockBrowser.createWindow();




// and in the run-code inside some object
//var doc = mock.getDocument(),
  //  div = doc.createElement('div'),
   // window = doc;




const routes =
    { 
        home: 'GET /',
      listContacts: 'GET /contacts',
      editContact: 'GET /contacts/:id',
    }
const aliases =
    {
      'GET /': 'listContacts',
        }
    

  describe(
      "HashRouter",
      () => {
        let hashRouter = null;

        beforeEach(
            () => {
                hashRouter = new HashRouter(routes, aliases)
            }
        )

        it(
            "LookupURI",
            () => {
                const x = hashRouter.LookupURI("/contacts/3");
                expect(x.name).toEqual("editContact");
                expect(x.options.id).toEqual("3");
            }
        )

        it(
            "MakeURI",
            () => {
                const x = hashRouter.MakeURI("editContact", {id:5});

                expect(x).toEqual("/contacts/5")
            }
        )

        it(
            "Navigate To",
            () => {
                const x = hashRouter.Actions.navigateTo("editContact", {id:"8"});

                expect(x.type).toEqual(hashRouter.Actions.NAVIGATE_TO);
                expect(x.payload.location.name).toEqual("editContact");
                expect(x.payload.location.options.id).toEqual("8");
            }
        )
      }
  )