import React from 'react'

import './Accordion.css'
import AccordionItem from './Accordion-Item'

function Accordion ({ id, entries, snacks, listName }) {
  return (
    <div className="col-sm">
      <h4 className="mt-4 mb-2 text-left">{ listName }</h4>

      <div
        className="accordion text-left"
        id={"accordionParent" + id}>
        <AccordionItem
          id={ id }
          food={ entries }
          foodType="Entree"
        />
        <AccordionItem
          id={ id }
          food={ snacks }
          foodType="Snack"/>
      </div>
    </div>
  )
}

export default Accordion