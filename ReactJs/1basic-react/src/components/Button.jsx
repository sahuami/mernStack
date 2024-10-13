function doSomething(){
    console.log("Hello amit")
}

function printBye(){
    console.log("Bye amit")
}

function handleMouseOver(){
    console.log("handleMouseOver")
}

function onDoubleClick(){
    console.log("you Double Click")
}
export default function Button(){

return (
    <div>
        <button onClick ={doSomething} >Click me!</button>
        <h2 onClick ={printBye}> this is bye para</h2 >
        <h3 onMouseOver ={handleMouseOver}>today's VS Code</h3>
        
        <button onDoubleClick ={onDoubleClick }>Double click me!</button>



    </div>
);

}