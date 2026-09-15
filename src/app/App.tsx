import { Link, Route, Routes } from 'react-router-dom';
export default function App() {
  return (
    <>
      <header>
        <Link to="/">सनातन नेपाल · Sanatan Nepal</Link>
      </header>
      <main>
        <Routes>
          <Route
            path="*"
            element={
              <>
                <h1>A living constellation.</h1>
                <p>Explore Nepal’s scriptures, stories and sacred places.</p>
              </>
            }
          />
        </Routes>
      </main>
    </>
  );
}
