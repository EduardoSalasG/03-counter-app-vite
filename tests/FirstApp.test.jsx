import {render} from '@testing-library/react'
import { FirstApp } from '../src/FirstApp'

describe('Pruebas en <FirstApp/>>', () => { 
    
    test('Debe hacer match con el snapshot', () => { 
        
        const title = 'Hola, Soy Nombre'
        const {container} = render(<FirstApp title={title}/>)

        expect(container).toMatchSnapshot();
     })

     test('Debe mostrar el título en el h1', () => { 
        const  title = 'Hola, soy Nombre';
        const {container, getByText} = render(<FirstApp title={title}/>)

        expect(getByText(title)).toBeTruthy();

        const h1 = container.querySelector('h1');
        expect(h1.innerHTML).toContain(title);

      })

 })