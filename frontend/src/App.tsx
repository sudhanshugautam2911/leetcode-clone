import { Card } from './components/Card';
import { Topbar } from './components/Topbar';

function App() {
  return (
    <div className='bg-zinc-900 h-screen'>
      <header>
        <Topbar />
      </header>
      <div className='flex justify-center'>
        <main className='max-w-screen-lg w-full '>
          <Card>
            HI there
          </Card>
        </main>
      </div>
    </div>
  )
}

export default App