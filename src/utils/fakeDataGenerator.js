const { faker } = require('@faker-js/faker');

export function getGeneratedTask() {
    return {
        generatedName: faker.name.firstName(),
        generatedDescription: faker.lorem.paragraph(),
        newName: faker.name.firstName() + '_RENAMED',
    };
}
