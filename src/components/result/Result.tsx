import React, { Component } from 'react';
import styles from './Result.module.css';

class Result extends Component<{src: string}, any> {

    render() {
        let { src } = this.props;
        return (
            <div className={styles.wrapper}>
                <img src={src} height={175} width={175}/>
            </div>
        );
    }
}

export default Result;
