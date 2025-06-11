import Footer from './Footer';
import Header from './Header';
import HeroSection from './HeroSection';
import TastBoard from './task/TaskBoard';

function App() {
    return (
        <>
            <Header />
            <div className="flex flex-col items-center justify-center">
                <HeroSection />
                <TastBoard />
            </div>
            <Footer />
        </>
    );
}

export default App;
