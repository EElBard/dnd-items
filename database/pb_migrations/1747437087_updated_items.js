/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_710432678")

  // update field
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
      "Armor",
      "Potion",
      "Ring",
      "Rod",
      "Scroll",
      "Staff",
      "Wand"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_710432678")

  // update field
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

  return app.save(collection)
})
