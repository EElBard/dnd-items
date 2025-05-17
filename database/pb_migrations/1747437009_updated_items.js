/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_710432678")

  // add field
  collection.fields.addAt(12, new Field({
    "hidden": false,
    "id": "bool1562261697",
    "name": "has_charges",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(13, new Field({
    "hidden": false,
    "id": "select1691949544",
    "maxSelect": 1,
    "name": "armor_type",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Breastplate",
      "Chain Mail",
      "Chain Shirt",
      "Half Plate",
      "Hide",
      "Leather",
      "Padded",
      "Plate",
      "Ring Mail",
      "Scale Mail",
      "Shield",
      "Spiked Armor",
      "Splint",
      "Studded Leather"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_710432678")

  // remove field
  collection.fields.removeById("bool1562261697")

  // remove field
  collection.fields.removeById("select1691949544")

  return app.save(collection)
})
