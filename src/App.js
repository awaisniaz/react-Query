import logo from './logo.svg';
import './App.css';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import Home from './components/Home';
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
      <Home/>
      
    </div>
    <ReactQueryDevtools initialIsOpen={false}  position='bottom-right'/>
    </QueryClientProvider>
  );
}

export default App;
