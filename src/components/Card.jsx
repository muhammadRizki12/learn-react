function Card({ children, title, footer }) {
    return (
        <div className='shadow'>
            <h1 className='text-2xl font-semibold'>{title}</h1>

            <div className='leading-relaxed'>{children}</div>

            <div className='bg-slate-50'>{footer}</div>
        </div>
    );
}

function Title({ children }) {
    return <h1 className='text-2xl p-4'>{children}</h1>;
}

function Footer({ children }) {
    return <div className='bg-slate-50 p-4'>{children}</div>;
}

function Body({ children }) {
    return <div className='leading-relaxed p-4'>{children}</div>;
}

Card.Title = Title;
Card.Footer = Footer;
Card.Body = Body;

export default Card;
