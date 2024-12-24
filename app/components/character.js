'use client'
import CharacterModel from './characterlogic';
import ModelCanvas from './canvas'

export default function Character() {
  return (
    <ModelCanvas>
        <CharacterModel></CharacterModel>
    </ModelCanvas>
  );
}


