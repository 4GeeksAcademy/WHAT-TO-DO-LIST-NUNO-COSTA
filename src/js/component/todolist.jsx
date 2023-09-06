import React, {useState} from "react";


const Todolist = () => {
    const [inputValue, setInputValue] = useState("")
    const [toDos, setToDos] = useState([])
    const [activeIndex, setActiveIndex] = useState(true);

	return (
        <div  className="container border-rounded">
            <ul className="list-unstyled border rounded border-dark border-3 p-2">
                <li><input 
                type="text" className="w-100 p-2 bg-light" placeholder={toDos == 0 ? "No Task! Shall we add one?" : "Enter a task"}
                onChange={(e) => setInputValue(e.target.value)} 
                value={inputValue}
                onKeyUp={(e) =>{ 
                    if (  e.key === "Enter") {setToDos(toDos.concat(inputValue));
                    setInputValue("")}}
                    }/></li>
                <div className="">
                    {toDos.map((item, index)=> (
                        <li className="w-100 p-2 border-top border-dark border-1 d-flex p-2 justify-content-between"
                        onMouseOver={()=>{
                            setActiveIndex(index)
                        }}
                        >{item}{" "}
                        <i class={index == activeIndex ? 'fas fa-times': 'fas fa-times xHidden'}
                        onClick={
                            ()=>setToDos(toDos.filter((t, currentIndex) => index!= currentIndex))}
                            ></i></li>
                    ))}
                </div>
            </ul>
        <div className="container">
            <p>{toDos.length} items left</p>
        </div>
</div>
	);
};



export default Todolist;