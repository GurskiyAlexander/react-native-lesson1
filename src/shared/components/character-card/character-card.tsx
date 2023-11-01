import classnames from 'classnames'
import './module.css';
import { CharacterModel } from '../characters-list/characters-list';

const deadCharacterStatus = 'Dead'
const unknownCharacterStatus = 'unknown'

type Props = {
  model: CharacterModel,
  onClick?: () => {}
}

export const CharacterCard = ({ model, onClick }: Props) => {
  return (
    <div
      className={classnames("card", { ["disabled"]: model.disabled })}
      onClick={onClick}
    >
      <div className={"image"}>
        <img src={model.image} alt={model.name} />
      </div>
      <div className={"content"}>
        <div>
          <h2 className={"name"}>{model.name}</h2>
          <div className={("secondaryText")}>
            <div
              className={classnames("dot", {
                ["danger"]: model.status === deadCharacterStatus,
                ["unknown"]: model.status === unknownCharacterStatus,
              })}
            />
            <span>{model.status}</span>
          </div>
        </div>
        <div className={"section"}>
          <div className={"secondaryText"}>Species:</div>
          <div>{model.species}</div>
        </div>
        <div className={"section"}>
          <div className={"secondaryText"}>Gender:</div>
          <div>{model.gender}</div>
        </div>
      </div>
    </div>
  )
}
