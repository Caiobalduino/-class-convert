const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");

amount.addEventListener("input", () => {
  // Não permitimos a digitação de textos no input
  const hasCharactersRegex = /\D+/g;
  // \D → Representa qualquer caractere que não seja um dígito numérico
  // + → Indica que deve haver pelo menos um ou mais caracteres que não sejam números.
  // g (global) → Faz com que a busca ocorra em toda a string, e não apenas na primeira ocorrência.
  amount.value = amount.value.replace(hasCharactersRegex, ""); // troca qualquer letra por 'nada' -> ""
});

// Captura o submit do form
form.onsubmit = (e) => {
  e.preventDefault();

  
};
