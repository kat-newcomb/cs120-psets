import './App.css'

// Create an object with properties to represent the number value displayed
// on the block and a background color (as a hex color)
function Color(value, bgcolor)
{
    this.value = value;
    this.bgcolor = bgcolor;
}

// Create an array of nine of the objects (use any color combinations you want)
// call it MyColors
var MyColors = [new Color(1, "#111111"),
                new Color(2, "#1F3A93"),
                new Color(3, "#A91B3D"),
                new Color(4, "#D4A017"),
                new Color(5, "#111111"),
                new Color(6, "#1F3A93"),
                new Color(7, "#A91B3D"),
                new Color(8, "#D4A017"),
                new Color(9, "#111111")];

// Create a JSX component to represent one block. Note that the background
// color should be a property (attribute) and the number value should be
// contained. I.e., <Block bgcolor="#000">4</Block>
// When a block is clicked, it should pop up the value on the face of the block
function Block({bgcolor, children})
{
    const showValue = () => alert(children);
    return <div className="block" style={{backgroundColor: bgcolor}} onClick={showValue}>{children}</div>
}

// Now create a component called ColorGrid that creates the grid of blocks.
// It should take a property/attribute which is the array of color objects
// <ColorGrid colorArray = MyColors />
function ColorGrid({colorArray})
{
    return <div className="grid">
            {colorArray.map((item, i) => <Block key={i} bgcolor={item.bgcolor}>{item.value}</Block>)}
           </div>
}

function App() {
  return (
    <div className="App">
      <h1>Color Grid</h1>
      <ColorGrid colorArray={MyColors} />
    </div>
  );
}
export default App;
