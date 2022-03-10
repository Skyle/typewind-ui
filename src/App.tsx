import Button from "./components/UI/Button";

function App() {
  return (
    <div>
      <header>
        <h1 className="text-4xl font-extralight text-center py-4">
          Typewind UI
        </h1>
        <h2 className="text-xl font-light text-center">
          experimental UI lib for react, based on tailwindcss and Typescript
        </h2>
      </header>
      <main>
        <Button></Button>
      </main>
    </div>
  );
}

export default App;
