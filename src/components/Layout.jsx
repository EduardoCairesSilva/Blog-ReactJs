
import Tags from "./Tags";
import Latest from "./Latest";
import Header from "./Header";
import FormBase from "./FormBase";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

export default function Layout({ children, showSideBar }) {

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [query, setQuery] = useState(searchParams.get('query'));

  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Header className="flex items-center p-3 shadow-md dark:bg-slate-900 dark:text-white border-b">
        <h1 className="ml-5 font-bold text-2xl">
          <Link to="/">FS34Blog</Link>
        </h1>
        <FormBase className="ml-5" sendTo="search">
          <input type="text"
            onChange={(event) => setQuery(event.target.value)}
            value={query}
            className="border px-2 py-1 rounded"
            name="query" />
          <button className="
          border rounded
          px-2 py-1 ml-2
           border-black
           dark:bg-white
           dark:text-black 
           dark:border-black
           dark:hover:bg-gray-300
          ">
            Pesquisar
          </button>
        </FormBase>

        <button
          onClick={toggleTheme}
          className="
          border rounded
          px-2 py-1 ml-auto
           border-black 
           dark:bg-white
           dark:text-black
           dark:border-black
           dark:hover:bg-gray-300
           ">
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </button>

      </Header>
      <div className='flex px-20 py-10 gap-20 dark:bg-slate-950 dark:text-white'>
        <div>
          {children}
        </div>

        {showSideBar && (
          <div>
            <div className="dark:text-black">
              <Tags />
              <Latest />
            </div>
          </div>
        )}
      </div>
    </>
  )
}
