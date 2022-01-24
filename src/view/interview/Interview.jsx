import React, {useCallback} from "react";
import styles from "./interview.module.scss";
import CardInterview from "./component/CardInterview";
import {useHistory} from "react-router-dom";
import ROUTES from "../../routes/routes";

const Interview = () => {
    const history = useHistory();

    const handleChangeRoute = useCallback((path) => {
        history.push(path);
    }, []);

    return (
        <div className={styles.interviewContainer}>
            <div className={styles.interviewHeader}>
                <div className={styles.myName}>
                    TUYENPC
                </div>
                <div className={styles.interviewTitle}>
                    THREE JS EXAMPLE
                </div>
            </div>
            <div className={styles.interviewContent}>
                {Object.values(ROUTES).map((i) => {
                    if (i.thumb) {
                        return <CardInterview image={i.thumb} onClick={() => handleChangeRoute(i.path)}/>;
                    }
                    return null;
                })}
            </div>
        </div>
    );
};

export default Interview;