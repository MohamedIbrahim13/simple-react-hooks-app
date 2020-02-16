import React,{useState,useEffect} from 'react';
import uuid from 'uuid/v1';
import NewSongForm from './NewSongForm';

const SongsList=()=> {
    const [songs,setSongs]=useState([
        {title:'Familiar',id:uuid()},
        {title:'Strange Weather',id:uuid()},
        {title:'Me & The Devil',id:uuid()}
    ]);
    const addSong=(title)=>{
        setSongs([...songs,{title,id:uuid()}])
    }
    const [like,setLike]=useState(100);
    useEffect(()=>{
        console.log('Likes added to ', like)
    })
    return (
        <div className="song-list">
            <ul>
                {songs.map(song=>{
                    return(
                        <li key={song.id}>{song.title}</li>
                    )
                })}
            </ul>
            <NewSongForm addSong={addSong} />
            <button onClick={()=>setLike(like+1)}>{like}</button>
            
        </div>
    )
}

export default SongsList
