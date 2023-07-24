import React from 'react';
import { useEffect } from 'react';
import './css/Board.css';                                                                                                   
import up from './change/Up';
import down from './change/Down';
import left from './change/Left';
import right  from './change/Right';
import data from './Data';
import collision from './../sound/collision.mp3';
import {motion} from 'framer-motion';

// win condition       partial
// lose condition
// illeagel move        done
// smooth animation
// more themes
// particle effect
// celebration

// pizza hut
// gartic phone

export default function Board() {
    const [arr,setArr] = React.useState([
        0,0,2,2,
        0,0,0,0,
        2,2,0,0,
        0,0,0,0
    ]) ;
    const [particle,setParticle] = React.useState([]) ;
    const [animationKey,setAnimationKey] = React.useState(1)

    const b = arr.map( (item,index) => {
        const name = particle.includes(index) ? "box myElement" : "box"
        return (
            <div className={name} 
                key={`box-${index}-${animationKey}`} 
                style={
                    {
                        color: data[item][0] , 
                        backgroundColor: data[item][1],
                        border:`5px solid ${data[item][0]}`  
                    }
                }
            >
                {item? item : " "}
            </div>
        )
    })
    useEffect( () => {
        document.addEventListener("keydown",keyDown,true)
        return () => {
            document.removeEventListener('keydown', keyDown,true); }
        },[] );   

    function keyDown(event) {
        console.log(event.key)
        const keysss = {
            "w" : up,
            "s" : down,
            "a" : left,
            "d" : right
        }
        if (keysss.hasOwnProperty(event.key)) {
            setArr( (arr) =>  {
                const result = keysss[event.key](arr)
                setAnimationKey((prevKey) => prevKey+1)
                
 
                if (!arr.every((element, index) => element === result.ans[index])) {

                    var randomNumber = Math.floor(Math.random() * 16);
                    while(result.ans[randomNumber]!==0) {
                        randomNumber = Math.floor(Math.random() * 16)
                    }

                    result.ans[randomNumber] = 2
                    result.effect.push(randomNumber)
                    setParticle(result.effect)
                    // new Audio(collision).play()
                    return result.ans
                }
                else{
                    setParticle([])
                    return arr
                }
            })
        } 
    }

    return (
        <div className='Board'>
            <nav>
                <heading>2048</heading>
                <div className='score'>
                    <div className='curr-score'>
                        <div><p>SCORE</p></div>
                        <div><p>0675</p></div>
                    </div>
                    <div className='best-score'>
                        <div><p>BEST</p></div>
                        <div><p>56556</p></div>
                    </div>
                </div>
            </nav>
            <info>
                <div className='info'>
                    <div>
                        <p>Play 2048 online</p>
                        <p>Join the numbers and get to the 2048 tile!</p>
                    </div>
                    <div className='new-game'>
                        <p>New Game </p>
                    </div>
                </div>
            </info>
            <main>
                <div className='board'>
                    {b}
                </div>

            </main>
        </div>
    )
}