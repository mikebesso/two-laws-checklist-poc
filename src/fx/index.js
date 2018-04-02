import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { Link, withRouter } from 'react-router-dom';
import { isUndefined } from "util";
import _ from "lodash";

import UI from "../components/UI";
import * as redux from "./redux";



export default React;

export const fx = {
    react: React,
    bindActionCreators,
    connect,
    Link,
    withRouter,
    utils: {
        isUndefined
    },
    _,
    UI,
    redux

}