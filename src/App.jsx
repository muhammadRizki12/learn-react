import Card from './components/Card';
import Button from './components/Button';

function App() {
    return (
        <div className={'bg-slate-100 text-slate-800 tracking-tight antialiased flex items-center justify-center min-h-screen '}>
            <div className='flex max-w-md w-full'>
                <Card>
                    <Card.Title>Hello React</Card.Title>
                    <Card.Body>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et itaque repellendus eaque sapiente perspiciatis, aspernatur non,
                        animi repudiandae consequuntur voluptate debitis sunt corrupti aperiam reprehenderit provident praesentium magnam error. Cum!
                    </Card.Body>
                    <Card.Footer>
                        <Button>Register</Button>
                    </Card.Footer>
                </Card>
            </div>
        </div>
    );
}

export default App;
