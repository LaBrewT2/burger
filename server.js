var orm = require("./config/orm.js");

// Find all the pets ordering by the lowest price to the highest price.
orm.selectAndOrder("burger_name", "burger", "price");

// Find a pet in the pets table by an animal_name of Rachel.
orm.selectWhere("burger", "burger_name", "Rachel");

// Find the buyer with the most pets.
orm.findWhoHasMost("buyer_name", "buyer_id", "buyers", "pets");
