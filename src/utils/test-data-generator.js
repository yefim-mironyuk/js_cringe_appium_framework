const {faker} = require('@faker-js/faker');
let getGeneratedTask = () => ({
    generatedName: faker.name.firstName(),
    generatedDescription: faker.lorem.paragraph(),
    newName: faker.name.firstName() + "_RENAMED"
})

export default getGeneratedTask();
