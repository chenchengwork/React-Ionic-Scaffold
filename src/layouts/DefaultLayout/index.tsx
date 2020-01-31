import React from 'react';

const DefaultLayout: React.FC = ({children}) => {

    return (
        <div className="default-layout">
            {children}
            {/*language=SCSS*/}
            <style jsx>{`
                .default-layout{
                    position: fixed;
                    width: 100%;
                    height: 100%;
                    overflow: auto;
                }
            `}</style>
        </div>
    )
};

export default DefaultLayout;
