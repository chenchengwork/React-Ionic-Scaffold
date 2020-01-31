import React, { Fragment } from 'react';
import Router from './router';
import { IntlWrapper } from '@/lang';
import { globalBaseStyle } from '@/theme/globalBaseStyle';

const App: React.FC = () => {

    return (
        <Fragment>
            <IntlWrapper>
                <Router />
            </IntlWrapper>
            <style jsx global>{globalBaseStyle}</style>
        </Fragment>
    )
};

export default App;


