import { createRoot } from 'react-dom/client'

function App() {
	return (
		<form action="api/onboarding">
			<div>
				<label htmlFor="usernameInput">Username:</label>
				<input id="usernameInput" name="username" />
			</div>
			{/* 🐨 add appropriate inputs for:
				- password
				- age (accepting numbers from 0 to 200)
				- photo (restricts the input to only accept image files)
				- color
				- startDate
			 */}			 
			 <div>
				<label htmlFor='password'>Password:</label>
				<input type="password" name='password' id='password'/>
			 </div>

			 <div>
				<label htmlFor='age'>Age:</label>
				<input type="number" min={0} max={200} name='age' id='age'/>
			 </div>

			 <div>
				<label htmlFor=''>Photo</label>
				<input type="file" name='profilePhoto' id='profilePhoto' accept='image/*'/>
			 </div>

			 <div>
				<label htmlFor='favColor'>Favorite Color:</label>
				<input type="color" name='favColor' id='favColor'/>
			 </div>

			 <div>
				<label htmlFor='startDate'>Start Date:</label>
				<input type="date" name='startDate' id='startData'/>
			 </div>
			<button type="submit">Submit</button>
		</form>
	)
}

const rootEl = document.createElement('div')
document.body.append(rootEl)
createRoot(rootEl).render(<App />)
