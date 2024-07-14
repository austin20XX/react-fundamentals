import { createRoot } from 'react-dom/client'

function App() {
	// 🐨 render a form
	//   🐨 render a "Username" label
	//   🐨 render an input with the name "username"
	// 💯 associate the label to the input using htmlFor and id attributes
	// 💯 explicitly set the button type appropriately
	return (<form name='userForm'>
		<label htmlFor='username'>Username:</label>
		<input type='text' id='username' name='username' />
		<button type='submit' name='submitButton'>Submit</button>
	</form>);
}

const rootEl = document.createElement('div')
document.body.append(rootEl)
createRoot(rootEl).render(<App />)
