import {
    IconBrandFacebook,
    IconBrandGithub,
    IconBrandTwitter,
} from '@tabler/icons-react';
import clsx from 'clsx';

export default function App() {
    let onClick = () => console.log('Login with another style...');
    let type = 'submit';

    return (
        <div className={'bg-slate-900 grid place-content-center min-h-screen '}>
            <div className='flex gap-x-2'>
                <Button
                    className={'bg-blue-600'}
                    onClick={() => console.log('Register')}
                    type='submit'
                >
                    <IconBrandFacebook />
                    Login
                </Button>
                <Button
                    className={'bg-sky-600'}
                    onClick={() => console.log('Register')}
                    type='reset'
                >
                    <IconBrandGithub />
                    Login
                </Button>

                {/* value == properti sama */}
                <Button
                    {...{
                        type,
                        onClick,
                    }}
                >
                    <IconBrandTwitter />
                    Login
                </Button>
            </div>
        </div>
    );
}

function Button(props) {
    const {
        className = 'bg-pink-600',
        children,
        text,
        type = 'submit',
    } = props;

    return (
        <button
            {...props}
            type={type}
            className={clsx(
                className,
                '[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 flex items-center gap-x-2 text-white px-4 py-2 rounded'
            )}
        >
            {text || children}
        </button>
    );
}
