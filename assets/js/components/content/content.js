import React from 'react';
import {Route, Switch} from 'react-router-dom';
import '../../App.css';
import Lexemes from "../lexemes/lexemes";
import Palette from "../palette/palette";
import XkcdPassword from "../xkcdPassword/xkcdPassword";

const Content = (props) => {
    return (
        <div className='content card'>
            <Switch>
                <Route
                    path="/xkcdPassword"
                    component={XkcdPassword}
                />
                <Route
                    path="/lexemes"
                    component={Lexemes}
                />
                <Route
                    path="/"
                    component={Palette}
                />
            </Switch>
        </div>
    );
};

export default Content;
