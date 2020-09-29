import React from 'react';
import './App.css';

import Accordion from './components/Accordion'
import Navbar from './components/Navbar'

function sort(arr) {
  return arr.sort((a, b) => (a > b) - (a < b))
}

function App() {
  const data = [{
		"_id": "12345",
		"name": "Kristine & Angelo",
    "snacks": [
      "pizza",
      "curly fries",
      "brat",
      "red ribbon",
      "jollibee",
      "hotdog sandwich"
    ],
    "entries": [
      "mechado",
      "sinigang",
      "chicken curry",
      "pares",
      "steak",
      "fried chicken",
      "pork chop",
      "kare kare",
      "adobo chix/pork",
      "menudo",
      "chicken afritada",
      "mongo",
      "nilaga",
      "shrimp scampi",
      "pansit",
      "lumpia",
      "liempo",
      "chop suey",
      "beef salpicao",
      "trader joe dumpling",
      "trader joe veg"
    ]
	},
	{
		"_id": "12345678",
		"name": "Aaron",
    "snacks": [
      "pizza",
      "puffs",
      "yogurt",
      "fries"
    ],
    "entries": [
      "tinola",
      "sinigang",
      "macado",
      "beef steak",
      "nilaga",
      "picadillo"
    ]
  }]

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          {
            data.map((item, index) => {
              return (
                <Accordion
                  id={item._id}
                  key={ index }
                  listName={ item.name }
                  entries={ sort(item.entries) }
                  snacks={ sort(item.snacks) }
                />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default App;
