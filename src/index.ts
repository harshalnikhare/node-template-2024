import sequelize from "./db-connection";
import Person from "./models/person";
import { add } from "./utils";

(async () => {
  await sequelize.sync();

  Person.create({
    name: "Alex",
  });

  console.log("sum", add(1, 3));
})();
