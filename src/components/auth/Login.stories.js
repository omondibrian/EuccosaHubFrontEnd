import Login from './Login'
import { withDesign } from 'storybook-addon-designs'



export default  {
  title: 'Example/Login',
  component: Login,
  decorators: [withDesign],
};

export const LoginPage = () => <Login  />;

LoginPage.parameters = {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Dy1ewi9vPzrN2s215vujSE/EuccosaHub?node-id=53%3A0',
    },
  }





  
