let texto = "Olá, mundo!";
 
// 1. length
alert(texto.length); // Saída: 11
// Retorna o número de caracteres na string.
 
// 2. toUpperCase()
alert(texto.toUpperCase()); // Saída: "OLÁ, MUNDO!"
// Converte todos os caracteres para maiúsculas.
 
// 3. toLowerCase()
alert(texto.toLowerCase()); // Saída: "olá, mundo!"
// Converte todos os caracteres para minúsculas.
 
// 4. charAt(índice)
alert(texto.charAt(5)); // Saída: "m"
// Retorna o caractere em um índice específico (começando em 0).
 
// 5. indexOf(caractere)
alert(texto.indexOf("m")); // Saída: 5
// Retorna o índice da primeira ocorrência de um caractere específico.
 
// 6. lastIndexOf(caractere)
alert(texto.lastIndexOf("o")); // Saída: 9
// Retorna o índice da última ocorrência de um caractere específico.
 
// 7. slice(início, fim)
alert(texto.slice(5, 10)); // Saída: "mundo"
// Extrai uma parte da string, começando no índice "início" e indo até (mas não incluindo) o índice "fim".
 
// 8. substring(início, fim)
alert(texto.substring(5, 10)); // Saída: "mundo"
// Similar ao slice, mas o comportamento com índices negativos é diferente.
 
// 9. replace("antigo", "novo")
alert(texto.replace("mundo", "JavaScript")); // Saída: "Olá, JavaScript!"