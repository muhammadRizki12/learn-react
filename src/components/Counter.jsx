import { useState } from 'react';
import Button from './Button';

export default function Counter({ initialState }) {
    const [count, setCount] = useState(initialState);

    function handleClick() {
        setCount((x) => x + 1);
    }

    return (
        <div>
            <h1 className='text-5xl font-bold'>{count}</h1>
            <div className='mt-5 flex items-center gap-x-2'>
                <Button onClick={handleClick}>+1</Button>
                <Button
                    onClick={() => {
                        handleClick();
                        handleClick();
                        handleClick();
                    }}>
                    +3
                </Button>
            </div>
        </div>
    );
}
