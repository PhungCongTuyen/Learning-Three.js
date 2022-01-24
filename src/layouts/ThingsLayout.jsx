import React from "react";
import styles from "./things-layout.module.scss";
import {
    NavLink, Switch
} from "react-router-dom";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import PropTypes from "prop-types";

const ThingsLayout = ({children}) => {
    return (
        <div className={styles.thingsLayout}>
            <ul className={styles.listNav}>
                <NavLink to="/first-thing" exact>First Thing</NavLink>
                <NavLink to="/second-thing" exact>Second Thing</NavLink>
                <NavLink to="/third-thing" exact>Third Thing</NavLink>
            </ul>
            <div className={styles.content}>
                <TransitionGroup>
                    <CSSTransition
                        key={location.pathname}
                        classNames="fade"
                        timeout={300}
                    >
                        <Switch>
                            {children}
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        </div>
    );
};

ThingsLayout.propTypes = {
    children: PropTypes.any
};
export default ThingsLayout;