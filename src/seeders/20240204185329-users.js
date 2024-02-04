'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Users', [
      {
        nome: 'João Silva',
        email: 'joao.silva@example.com',
        password: 123456
      },
      {
        nome: 'Maria Oliveira',
        email: 'maria.oliveira@example.com',
        password: 789012
      },
      {
        nome: 'Carlos Santos',
        email: 'carlos.santos@example.com',
        password: 345678
      },
      {
        nome: 'Ana Pereira',
        email: 'ana.pereira@example.com',
        password: 901234
      },
      {
        nome: 'Fernando Souza',
        email: 'fernando.souza@example.com',
        password: 567890
      },
      {
        nome: 'Lúcia Lima',
        email: 'lucia.lima@example.com',
        password: 123789
      },
      {
        nome: 'Rafael Costa',
        email: 'rafael.costa@example.com',
        password: 456012
      },
      {
        nome: 'Lissandra Freljord',
        email: 'lissandra.freljord@example.com',
        password: 890123
      },
      {
        nome: 'Gustavo Santos',
        email: 'gustavo.santos@example.com',
        password: 234567
      },
      {
        nome: 'Carolina Lima',
        email: 'carolina.lima@example.com',
        password: 678901
      },
    ],
      {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Users', null, {});

  }
};
