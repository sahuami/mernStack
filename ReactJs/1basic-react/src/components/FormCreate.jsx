function handleFormSubmit(event){
    console.log("form was submitted")
    event.preventDefault();
}

export default function FormCreate(){
    return(

        <form onClick={handleFormSubmit}>
            <input placeholder="write something"/>
            <button>Submit</button>
        </form>

    )
}