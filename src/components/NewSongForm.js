import React,{useState} from 'react';

const NewSongForm = ({addSong}) => {
    const [title,setTitle]=useState('');
    const handleChange=(e)=>{
        setTitle(e.target.value);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        addSong(title);
        setTitle('');

    }
    return (
        <form onSubmit={handleSubmit}>
            <label>New Song : </label>
            <input type="text" value={title} required onChange={handleChange}/>
            <button type="submit">Add</button>
        </form>
    )
}

export default NewSongForm
