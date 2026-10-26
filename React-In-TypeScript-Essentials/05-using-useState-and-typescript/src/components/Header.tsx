import { type ReactNode } from 'react';

type Image = {
    src: string,
    alt: string
}

type HeaderProps = {
    image: Image;
    children: ReactNode;
}

function Header({ image, children }: HeaderProps) {
    return (
        <header>
            <img src={image.src} alt={image.alt} />
            {children}
        </header>
    );
}

export default Header;