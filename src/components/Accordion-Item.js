import React from 'react'

import { ReactComponent as Bowl } from '../images/bowl.svg'
import { ReactComponent as Delete } from '../images/delete.svg'
import { ReactComponent as Snack } from '../images/snack.svg'

function AccordionItem ({ id, food, foodType }) {
  const isEntree = foodType === 'Entree'

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="mb-0">
          <button
            className="btn btn-link btn-block text-left"
            type="button"
            data-toggle="collapse"
            data-target={"#accordion" + id}
            aria-expanded="true"
            aria-controls="collapseOne">
            { foodType }
          </button>
        </h2>
      </div>
      <div
        id={"accordion" + id}
        className={"collapse " + (isEntree ? "show" : '')}
        data-parent={"#accordionParent" + id}>
        <div className="card-body">
            <ul className="list-group">
              {
                food.map((entree, index) => {
                  return (
                    <li
                      key={ index }
                      className="list-group-item">
                      { isEntree ? <Bowl className="svg" /> : <Snack className="svg" /> }
                      <span className="list-group-item-text pl-2">{ entree }</span>
                      <Delete className="svg svg-delete float-right" />
                    </li>
                  )
                })
              }
            </ul>
        </div>
      </div>
    </div>
  )
}

export default AccordionItem