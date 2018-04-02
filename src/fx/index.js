import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { Link, withRouter } from 'react-router-dom';
import { isUndefined } from "util";
import _ from "lodash";

import UI from "../components/UI";
import * as redux from "./redux";

import actions from "../actions";

import yup from "yup";

export default React;




const connectFx = (mapStateToProps) => {
    return(
        connect(
            mapStateToProps,
            (dispatch) => {
                return(
                    bindActionCreators(
                        {
                            ...actions
                        },
                        dispatch
                    )
                )
            }
        )
    )
}



yup.match = function (key, message, func) {
    message = message || 'Values do not match';
    func = func || function (value) {
      return value === this.options.context[key];
    }
  
    return yup.mixed().test('match', message, func);
  };


export const fx = {
    react: React,
    bindActionCreators,
    connect,
    connectFx,
    Link,
    withRouter,
    utils: {
        isUndefined
    },
    _,
    UI,
    redux,
    yup

}
