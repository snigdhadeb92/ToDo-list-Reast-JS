import React, { useState } from 'react';

export const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e)=>{
       e.preventDefault();
       if(!title || !desc){
           alert("Please enter title and desc");
       }else{
       addTodo(title,desc);
       setTitle("");
       setDesc("");
      }
       
    }
    return (
        <div className='container my-3'>
            <h3 className='text-center'>Add a todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputTitle" className="form-label">Title</label>
                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title" aria-describedby="titleHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputNote" className="form-label">Note</label>
                    <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="desc"/>
                </div>
               
                <button type="submit" className="btn btn-sm btn-success">Submit</button>
            </form>
        </div>
    )
}
