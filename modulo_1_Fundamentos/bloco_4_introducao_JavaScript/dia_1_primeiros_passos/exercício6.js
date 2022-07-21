let estado = "aprovado";

switch (estado) {
    case "aprovado":
        console.log("Parabéns!Aprovado!");
        break;
    case "lista":
        console.log("Você está na nossa lista de espera.");
        break;
    case "reprovado":
         console.log("Você foi reprovado :(");
        break;
    default:
        console.log("não se aplica");
        break;
}