import Navbar from './components/Navbar';
import Hero from './components/Hero';
import News from './components/News';
import Trending from './components/Trending';

function App() {
  return (
    <div className="flex w-full items-center justify-center bg-off-white">
      <div className="mx-4 max-w-6xl sm:mx-8">
        <Navbar />
        <main>
          <div className="gap-6 sm:flex  sm:portrait:flex-col">
            <Hero />
            <News />
          </div>
          <Trending />
        </main>
      </div>
    </div>
  );
}

export default App;
