import PlaceContentCenter from './components/placeContentCenter';
import Button from './components/Button';
import { useState } from 'react';

export default function App() {
    const [count, setCount] = useState(0);

    function handleClick() {
        const nextCount = count + 1;
        setCount((x) => x + 1);
        console.log({ count, nextCount });
    }

    return (
        <PlaceContentCenter>
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
        </PlaceContentCenter>
    );
}
