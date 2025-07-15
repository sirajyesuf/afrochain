import Header from '@/app/components/Header';
import Hero from '@/app/components/Hero';
import Stats from './components/Stats';
import Showcase from './components/Showcase';


function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Stats />
      <Showcase />
    </div>
  );
}

export default App;