import { useMemo, useState } from 'react';

function sortMyArray (arr: number[]) {
    checkRender("sort My Array");
    return arr.sort();
}

export const LearningHooks = () => {
    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(0);
    const [myArray] = useState(() => sortMyArray([5, 4,1,2,6,3])); 
    checkRender("-");

    const sortedArray = useMemo(() => {
        return sortMyArray(myArray);
    }, [myArray]); // karena myArray tidak berubah maka sortMyArray tidak akan dipanggil ulang

    console.log("Sorted Array:", sortedArray);


    const reset = () => {
        checkRender("reset counters menggunakan useCallback");
        setCounter(0);
        setCounter2(0);
    }; 


    // const updatedCounter = useMemo(() => { // nilai dikalkulasikan ulang apabila dependency berubah
    //     checkRender("update Counter:" + counter);
    //     return counter * 4;
    // }, [counter]);
    
   

    // useEffect(() => { // use Effeect akan jalan apabila dependency berubah 
    //     checkRender("update Counter 2:" + counter2);
    // }, [counter2]);

    const checking = (a: number) => {
        checkRender("checking Called");
        return a >= 3;
    }

    if( checking(counter2) && checking(counter) ) {
        checkRender("Call Reset");
        reset();
    }
    return (<div>
        <h1>Learning React Hooks</h1>
        <button onClick={() => setCounter(counter + 1)}>
            counter {counter}
        </button>
        <button onClick={() => setCounter2(counter2 + 1)}>
            counter2 {counter2}
        </button>
        <br />
        <button onClick={reset}>Reset Counter</button>
    </div>)
}

function checkRender(label: string) {
    console.log("Rendering :", label, Math.random());
}

export default LearningHooks