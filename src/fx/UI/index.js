//import * as BS from "reactstrap";

import * as Bloomer from "bloomer";

import MenuBar from "./MenuBar";
import TabSet from "./TabSet";
import Markdown from "./Markdown";
import Stepper from "./Stepper";
import Loading from "./Loading";
import TagCloud from "./TagCloud";
import * as Icons from "./Icons";

import * as Pages from "./Pages";

import * as ShareButtons from "./ShareButtons";

export default {
    ...Bloomer,
    ...Icons,
    ...ShareButtons,
    //MenuBar,
    TabSet,
    Markdown,
    Stepper,
    //BS,
    Loading,
    TagCloud,
    Pages
}