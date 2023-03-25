import React from 'react';
import {
    BarSongTitle,
    BottomBar,
    Button,
    PlayList,
    Song,
    SongTitle,
} from './styles.js';
import  songList from './constants';

const buttonLabels = ['Not replaying', 'Replaying all', 'Replaying one'];

const PlayerProvider = ({ children }) => {
    return children;
};
const greenText = {
    'color': 'green',
    'font-size': "20px",
    'padding-top': '50px',
    'padding-right': '30px',
    'padding-bottom': '50px',
    'padding-left': '80px',
}
//const usePlayerContext = () => { };

const ControlBar = () => {
    let id=0;
   const changeMode=(id)=>{
    id=(id===0)?1:(id===1)?2:0;
   } 
    const author="Shakira";
    const songTitle="Hay Amores";
    const title = `${author} - ${songTitle}`;
    return (
        <BottomBar>
            <BarSongTitle data-testid="barTitle">{title}</BarSongTitle>
            <div>
                <Button data-testid="previousButton">Previous</Button>
                <Button data-testid="nextButton">Next</Button>
                <Button  onClick={changeMode(id)} data-testid="currentModeButton">{buttonLabels[(id===undefined)?0:id]}</Button>
            </div>
        </BottomBar>
    );
};

const Songs = () => {
    return (
        <PlayList>
            {songList.map(({ title, author, id }) => (
                <Song key={id}>
                    <SongTitle style={greenText} data-testid={id} active={false}>
                        {title}
                    </SongTitle>
                    <p>{author}</p>
                </Song>
            ))}
        </PlayList>
    );
};

export { PlayerProvider, Songs, ControlBar };