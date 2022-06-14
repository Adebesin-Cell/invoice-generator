import MobileMenu from "./components/mobileMenu/MobileMenu";
import { createIcons, icons } from "lucide";
import { useEffect } from "react";
import MainPage from "./components/body/Body";

function App() {
  useEffect(() => {
    createIcons({
      icons,
      "stroke-width": 1.5,
      nameAttr: "data-lucide",
    });
    window.lucide = {
      createIcons: createIcons,
      icons: icons,
    };
  }, []);

  return (
    <>
      <MobileMenu></MobileMenu>
      <MainPage />
    </>
  );
}

export default App;
