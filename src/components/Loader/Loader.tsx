import React from 'react';
import { RotatingLines } from "react-loader-spinner"

import './loader.scss';

type LoaderProps = {
    children: JSX.Element;
    isLoading: boolean;
}

function Loader({ children, isLoading }: LoaderProps) {
    return (
        <>
            <div className={isLoading ? 'loader-wrapper' : ''}>
                <RotatingLines
                    strokeColor="grey"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="96"
                    visible={isLoading}
                />
            </div>
            {children}
        </>
    );
}

export default Loader;