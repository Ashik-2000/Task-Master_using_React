export default function Header() {
    return (
        <nav className="fixed top-0 z-50 w-full !bg-[#0A192F] py-6 md:py-8">
            <div className="container mx-auto flex items-center justify-between gap-x-6">
                <a
                    href="/"
                    className="font-serif text-2xl font-bold text-white"
                >
                    Task Master
                </a>
            </div>
        </nav>
    );
}
