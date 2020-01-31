import React, {Fragment} from 'react';
import {LocaleProvider} from "antd-mobile";
import {IntlProvider, useIntl} from 'react-intl';
import {EnumLangType} from '@/lang/EnumLangType';
import EnumEnv from '@/constants/EnumEnv';
import {langUtil} from '@/lang';

const {lang: currentLang} = EnumEnv.intl;

const lang = {
    [EnumLangType.zh]: {
        antdLocale: {},
        intlLocale: EnumLangType.zh,
        intlMessages: require('../../locales/zh.json'),
    },
    [EnumLangType.en]: {
        antdLocale: require('antd-mobile/lib/locale-provider/en_US').default,
        intlLocale: EnumLangType.en,
        intlMessages: require('../../locales/en.json'),
    },
};

const InitIntl: React.FC = ({children}) => {
    langUtil.setIntl(useIntl());

    return <Fragment>{children}</Fragment>
};

const IntlWrapper: React.FC = ({children}) => {
    const {antdLocale, intlLocale, intlMessages} = lang[currentLang];

    return (
        <LocaleProvider locale={antdLocale}>
            <IntlProvider locale={intlLocale} messages={{...intlMessages}}>
                <InitIntl>{children}</InitIntl>
            </IntlProvider>
        </LocaleProvider>
    );
};

export default IntlWrapper
