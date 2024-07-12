import { createRoot } from 'react-dom/client'

// 🐨 create a component called "Box" which accepts style (defaults to {}), className (defaults to ''), and children props.
// 🐨 Make it render a div with the style, className, and children applied.
// 🐨 Also automatically add the fontStyle: 'italic' style to the style prop so consumers don't have to provide that
// 🐨 And automatically add the "box" className to the className prop so consumers don't have to provide that as well.

// 💯 as a bonus, have this accept any number of additional props (typed as React.ComponentProps<'div'>)
// and apply those to the rendered div as well.

const Box = (props: React.ComponentProps<"div">) => {
	const {
		className,
		style = {},
		children
	} = props;

	return  <div
		className={`box ${className}`}
		style={{ fontStyle: 'italic', backgroundColor: style.backgroundColor || 'none' }}
	>
		{children}
	</div> ;
}

// 🐨 update all of these to use the <Box> component with the appropriate props.

const smallBox = (
	<Box
		className="box--small"
		style={{ backgroundColor: 'lightblue' }}
	>
		small lightblue box
	</Box>
)
const mediumBox = (
	<Box
		className="box--medium"
		style={{ backgroundColor: 'pink' }}
	>
		medium pink box
	</Box>
)
const largeBox = (
	<Box
		className="box--large"
		style={{ backgroundColor: 'orange' }}
	>
		large orange box
	</Box>
)
const sizelessColorlessBox = (
	<div className="box" >
		sizeless colorless box
	</div>
)

function App() {
	return (
		<div>
			{smallBox}
			{mediumBox}
			{largeBox}
			{sizelessColorlessBox}
		</div>
	)
}

const rootEl = document.createElement('div')
document.body.append(rootEl)
createRoot(rootEl).render(<App />)
