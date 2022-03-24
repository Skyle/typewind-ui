import ButtonSection from "./components/ButtonSection";
import Header from "./components/Header";
import InputSection from "./components/InputSection";
import ListSection from "./components/ListSection";
import MenuSection from "./components/MenuSection";
import gh from "../src/bilder/gh.png";

function App() {
  return (
    <div>
      <Header></Header>
      <main className="px-2 md:px-4 grid gap-8 justify-items-center pb-8">
        <div className="md:pt-6">
          <ButtonSection></ButtonSection>
        </div>
        <div>
          <InputSection></InputSection>
        </div>
        <div>
          <MenuSection></MenuSection>
        </div>
        <div>
          <ListSection></ListSection>
        </div>
        <div>
          <a href="https://github.com/Skyle/typewind-ui" target="_blank">
            <img src={gh} height={64} width={64} alt="" />
          </a>
        </div>
      </main>
    </div>
  );
}

export default App;
