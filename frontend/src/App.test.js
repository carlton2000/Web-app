import React from 'react';
import ReactDOM from 'react-dom';
import render from 'react-test-renderer';
import App from './App';
import Favorite from './components/Favorite';


it('Doesnt crash at all', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Test is working', () => {
	const component = render.create(<Favorite/>)
	let app = component.toJSON();
	expect(app).toMatchSnapshot();
	});
