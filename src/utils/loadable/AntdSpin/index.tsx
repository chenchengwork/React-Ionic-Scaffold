/**
 * Created by chencheng on 17-9-13.
 */
import React from 'react';
import { Icon } from 'antd-mobile';
import styles from './index.scss';
import * as PropTypes from 'prop-types';

export default function BoxSpin({ style = {}, spinProps = {}}) {
    style = Object.assign({
        position: 'relative',
        width: '100%',
        minHeight: 200,
        textAlign: 'center',
    }, style);

    return (
        <div style={style} className={styles.center}>
            <Icon type="loading" />
        </div>
    );
}

BoxSpin.propTypes = {
    style: PropTypes.object,
    spinProps: PropTypes.object
};
