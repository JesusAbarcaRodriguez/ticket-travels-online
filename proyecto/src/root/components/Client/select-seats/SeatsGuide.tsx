export default function SeatsGuide() {
    return (
        <div className="mt-4 mb-4 flex flex-row">
            <div className="flex items-center w-auto">
                <label className="mr-2">Your Seats:</label>
                <div className=" w-8 h-8 seat-selected"></div>
            </div>
            <div className="flex items-center w-auto">
                <label className="mr-2">Blocked Seats:</label>
                <div className=" w-8 h-8 seat-blocked"></div>
            </div>
            <div className="flex items-center w-auto">
                <label className="mr-2">Sold Seats:</label>
                <div className=" w-8 h-8 seat-sold"></div>
            </div>
        </div>
    );
}
