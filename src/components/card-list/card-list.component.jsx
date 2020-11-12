import React from 'react';
import './card-list.styles.css' ;
import {Card} from '../card/card.component';

export const CardList = (props)=>{   //functional component

return <div className='card-list'>
    {props.monsters.map(monster=><Card key = {monster.id} monster = {monster}></Card>) }
    {/*[<h1>Hey</h1>,<h1>Hi</h1>,<h1>Hello</h1>,<h1>Hehaga</h1>]*/}
    
        
</div> ;

}