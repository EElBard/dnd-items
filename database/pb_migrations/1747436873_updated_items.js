/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_710432678")

  // add field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "select2363381545",
    "maxSelect": 1,
    "name": "type",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Adventuring Gear",
      "Equipment Pack",
      "Poison",
      "Simple Melee Weapon",
      "Tool",
      "Mount",
      "Martial Melee Weapon",
      "Gemstone",
      "Ammunition",
      "Arcane Focus",
      "Wondrous Item",
      "Weapon",
      "Armor"
    ]
  }))

  // add field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "select3082862150",
    "maxSelect": 1,
    "name": "rarity",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Common",
      "Uncommon",
      "Rare",
      "Very Rare",
      "Legendary",
      "Artifact",
      "Varies"
    ]
  }))

  // add field
  collection.fields.addAt(10, new Field({
    "hidden": false,
    "id": "bool1244087440",
    "name": "requires_attunement",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(11, new Field({
    "hidden": false,
    "id": "number662189661",
    "max": 100,
    "min": -100,
    "name": "magic_bonus",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // update field
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
      "Healing",
      "Warding"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_710432678")

  // remove field
  collection.fields.removeById("select2363381545")

  // remove field
  collection.fields.removeById("select3082862150")

  // remove field
  collection.fields.removeById("bool1244087440")

  // remove field
  collection.fields.removeById("number662189661")

  // update field
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
})
