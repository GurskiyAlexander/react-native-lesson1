import classnames from 'classnames'
import { CharacterCard } from '../character-card/character-card'
import './module.css';


type Props = {
  characters: CharacterModel[],
  className: string
}

export type CharacterModel = {
  id: number, name: string, image: string, status: string, species: string, gender: string, disabled?: boolean
}

export const CharactersList = ({characters, className}: Props) => {
  return (
    <ul className={classnames("wrapper", className)}>
      {characters.map((item) => (
        <li key={item.id}>
          <CharacterCard
            model= { item }
          />
        </li>
      ))}
    </ul>
  )
}

