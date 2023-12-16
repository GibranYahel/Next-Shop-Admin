import { useState } from "react";

const usePagination = () => {

    const [ offset, setOffset ] = useState(5);

    const handlePrev = () => {
        if (offset <= 0) return;
        setOffset(offset - 5);
        console.log(`Changed: ${offset}`);
    };

    const handleNext = () => {
        if (offset >= 35) return;
        setOffset(offset + 5);
        console.log(`Changed: ${offset}`);
    };

    return {
        //Properties
        offset,

        //Methods
        handleNext,
        handlePrev,
    }
}

export default usePagination;