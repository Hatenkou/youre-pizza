import { Footer } from "./components/footer/footer.component";
import { Header } from "./components/header/header.component";
import { MenuList } from "./components/modules/menu/menu-list/menu-list.component";
import pizzaMenu from '@app/mocks/pizza.json'

export const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="mx-12 mb-24">
        <MenuList items={pizzaMenu} />
      </div>
      <Footer />
    </div>
  );
}

