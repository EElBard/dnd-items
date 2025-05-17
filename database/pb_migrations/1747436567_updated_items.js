/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_710432678")

  // add field
  collection.fields.addAt(5, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1602912115",
    "max": 0,
    "min": 0,
    "name": "source",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "number130897217",
    "max": 9999999,
    "min": 0,
    "name": "weight",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "select1874629670",
    "maxSelect": 2,
    "name": "tags",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Utility",
      "Damage",
      "Combat",
      "Exploration",
      "Movement",
      "Consumable",
      "Common Ingredient",
      "Healing"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_710432678")

  // remove field
  collection.fields.removeById("text1602912115")

  // remove field
  collection.fields.removeById("number130897217")

  // remove field
  collection.fields.removeById("select1874629670")

  return app.save(collection)
})
