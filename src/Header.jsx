import LogoSVG from './assets/lws-logo-en.svg';

export default function Header() {
    return (
        <nav className="fixed top-0 z-50 w-full !bg-[#0A192F] py-6 md:py-8">
            <div className="container mx-auto flex items-center justify-between gap-x-6">
                <a href="/">
                    <img className="h-[45px]" src={LogoSVG} alt="Lws" />
                </a>
            </div>
        </nav>
    );
}
