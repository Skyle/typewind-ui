import Button from "./components/UI/Button";

function App() {
  return (
    <div>
      <header className="text-center pb-8 grid justify-center">
        <h1 className="text-5xl font-extralight py-4">Typewind UI</h1>
        <div className="relative">
          <h2 className="text-xl font-light pb-2">
            React UI Component Exhibition
          </h2>
          <div className="absolute -right-24 -top-1  text-sm font-extralight">
            * maybe Library
          </div>
        </div>

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
        <Button color="red"></Button>
      </main>
    </div>
  );
}

export default App;
