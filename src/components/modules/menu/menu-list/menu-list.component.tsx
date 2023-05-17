import pizzaMenu from '../../../../mocks/pizza.json'
import { MenuItem } from '../menu-item/menu-item.component'

export const MenuList = () => {
   return (
      <div className="flex flex-wrap gap-10">
         {pizzaMenu.map(({ image, ...pizza }) => (
            <MenuItem {...pizza} imagePath={`/assect/pizza/` + image} />
         ))}
      </div>
   )


}