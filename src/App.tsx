import ButtonSection from "./components/ButtonSection";
import Header from "./components/Header";
import InputSection from "./components/InputSection";
import MenuSection from "./components/MenuSection";

function App() {
  return (
    <div>
      <Header></Header>
      <main className="px-2 md:px-4 grid gap-8 justify-items-center">
        <div className="md:pt-6">
          <ButtonSection></ButtonSection>
        </div>
        <div>
          <InputSection></InputSection>
        </div>
        <div>
          <MenuSection></MenuSection>
        </div>
      </main>
    </div>
  );
}

export default App;
