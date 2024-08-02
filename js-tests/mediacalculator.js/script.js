// notas ficticias

const notas = [3.4, 4.5, 7.5, 8.3, 9.3, 2.6, 10.0, 1.79];

const notasAcima = notas.filter((notas) => notas >= 6);

const notasAbaixo = notas.filter((notas) => notas < 6);

console.log(`
        Notas tiradas acima da média: ${notasAcima}
        --
        Notas Abaixo da media foram: ${notasAbaixo}
        --
        Todas as suas notas foram: ${notas}
    `);
