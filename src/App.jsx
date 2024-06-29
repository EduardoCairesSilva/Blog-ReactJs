import Header from './components/Header';
import FormBase from './components/FormBase';
import { HiMagnifyingGlass } from "react-icons/hi2";
import PostHeader from './components/PostHeader';
import PostBody from './components/PostBody';

function App() {
    return (
        <div>
            <Header className="bg-white flex p-3 shadow-xl">
                <h1 className="ml-5 italic text-lg font-bold relative top-4">FS34Blog</h1>
                <FormBase className="ml-5">
                    < HiMagnifyingGlass className='relative top-6 left-1' />
                    <input type="text" className="rounded border-2 border-black" />
                    <button className="border-2 border-black rounded ml-3 w-24">Entrar</button>
                </FormBase>
            </Header>
            <PostHeader />
            <PostBody />
        </div>  
    );
}

export default App;
