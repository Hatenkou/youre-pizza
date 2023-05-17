import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MenuItem } from "./menu-item.component";

export default {
   title: 'Menu/Menu Item',
   component: MenuItem,
} as ComponentMeta<typeof MenuItem>;

const Template: ComponentStory<typeof MenuItem> = (agrs) => <MenuItem{...agrs} />;

export const View = Template.bind({});

View.args = {
   imagePath: "/assect/pizza/carbonara.jpeg",
   weight: 555,
   title: 'Pizza Carbonara',
   ingredients: '(подвійна порція грибів), Гриби, Моцарела, Пепероні, Соус Альфредо',
   price: 215
}