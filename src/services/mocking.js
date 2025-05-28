import { faker } from "@faker-js/faker";
import { createHash } from "../utils/index.js";

class MockingService {
  static async generatePetsMocks(amount) {
    const pets = [];
    for (let i = 0; i < amount; i++) {
      pets.push({
        name: faker.animal.petName(),
        specie: faker.animal.type(),
        adopted: false,
        birthDate: faker.date.past(),
        image: "https://placekitten.com/200/300",
      });
    }

    return pets;
  }

  static async generateUsersMocks(amount) {
    const users = [];
    for (let i = 0; i < amount; i++) {
      users.push({
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        email: faker.internet.email(),
        password: await createHash("coder123"),
        role: i % 10 ? "user" : "admin",
        pets: [],
      });
    }

    return users;
  }
}

export default MockingService;
