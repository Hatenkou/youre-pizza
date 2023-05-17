import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FooterLink } from "./footer-link.component";

export default {
   title: 'footer/Footer Link',
   component: FooterLink,
} as ComponentMeta<typeof FooterLink>;

const Template: ComponentStory<typeof FooterLink> = (args) => (
   <ul>
      <FooterLink {...args} />
   </ul>

);

export const View = Template.bind({});
View.args = {
   href: 'tel:+044 123 45 67',
   children: '+044 123 45 67'
}