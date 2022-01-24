import React from "react";
import styles from "../interview.module.scss";
import PropTypes from "prop-types";

const CardInterview = ({onClick, image}) => {
    return (
        <button
            type="button"
            className={styles.cardInterview}
            onClick={onClick}
            style={{backgroundImage: `url(${image})`}}
        />
    );
};

CardInterview.propTypes = {
    onClick: PropTypes.func,
    image: PropTypes.string
};

export default CardInterview;