import React from "react";

const Loading = () => {
    return (
        <>
            <div className="fixed inset-0 flex flex-col w-full justify-center items-center bg-blue-300 bg-opacity-50">
                <div className="loading-container">
                    <h2 className="loading-text">Loading...</h2>
                </div>
                <div className="custom-loader"></div>
            </div>
        </>
    );
};

export default Loading;
