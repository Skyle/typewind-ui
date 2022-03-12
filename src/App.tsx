import Button from "./components/UI/Button";

function App() {
  return (
    <div>
      <header className="text-center pb-8">
        <h1 className="text-5xl font-extralight py-4">Typewind UI</h1>
        <h2 className="text-xl font-light pb-2">React UI Component Library</h2>
        <div className="font-light">
          <ul className="">
            <li>minimalistic styling with tailwindcss</li>
            <li>build with Typescript</li>
          </ul>
        </div>
      </header>
      <main className="px-2 flex space-x-2">
        <Button></Button>
        <Button color="green"></Button>
      </main>
    </div>
  );
}

export default App;
