import PlaceContentCenter from './components/placeContentCenter';
import Counter from './components/Counter';

export default function App() {
    return (
        <PlaceContentCenter>
            <Counter initialState={10} />
        </PlaceContentCenter>
    );
}
