import { FC } from 'react';
import { MenuItem } from '../menu-item/menu-item.component'
import { Pizza } from '../types/pizza';

interface MenuListProps {
   items: Pizza[];
}

export const MenuList: FC<MenuListProps> = ({ items }) => {
   return (
      <div className="flex flex-wrap gap-10 justify-center">
         {items.map(({ image, ...pizza }) => (
            <MenuItem {...pizza}
               imagePath={`/assect/pizza/` + image}
               key={`pizza-${pizza.id}`}
            />
         ))}
      </div>
   )


}