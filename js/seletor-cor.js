const botao = document.querySelector("#visualize");
const body = document.querySelector('body');

botao.addEventListener('click', function() {
  const box = document.getElementById("color");
  const selectedColor = box.value;

  body.style.backgroundColor = selectedColor;

  // Check if the selected color is valid
  const isValidColor = /^#[0-9A-F]{6}$/i.test(selectedColor) || isValidNamedColor(selectedColor);
  if (!isValidColor) {
    alert("Please, use a valid CSS color!");
  }
});

function isValidNamedColor(color) {
  const namedColors = [
    // English color names
    "aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black",
    "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse",
    "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan",
    "darkgoldenrod", "darkgray", "darkgreen", "darkgrey", "darkkhaki", "darkmagenta", "darkolivegreen",
    "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray",
    "darkslategrey", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dimgrey",
    "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite",
    "gold", "goldenrod", "gray", "green", "greenyellow", "grey", "honeydew", "hotpink", "indianred",
    "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue",
    "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightgrey",
    "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightslategrey",
    "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon",
    "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue",
    "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose",
    "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered",
    "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip",
    "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "rebeccapurple", "red", "rosybrown",
    "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver",
    "skyblue", "slateblue", "slategray", "slategrey", "snow", "springgreen", "steelblue", "tan",
    "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow",
    "yellowgreen",

    // Portuguese color names
    "branco", "preto", "cinza", "vermelho", "verde", "azul", "amarelo", "laranja", "rosa",
    "roxo", "marrom", "bege", "roxo", "violeta", "magenta", "ciano", "turquesa", "aqua",
    "azul-claro", "azul-escuro", "verde-claro", "verde-escuro", "amarelo-claro", "amarelo-escuro",
    "laranja-claro", "laranja-escuro", "rosa-claro", "rosa-escuro", "roxo-claro", "roxo-escuro", 
    "marrom-claro", "marrom-escuro", "bege-claro", "bege-escuro", "violeta-claro", "violeta-escuro", 
    "magenta-claro", "magenta-escuro", "ciano-claro", "ciano-escuro", "turquesa-claro", "turquesa-escuro", 
    "aqua-claro", "aqua-escuro", "vermelho-claro", "vermelho-escuro"
  ];

  return namedColors.includes(color.toLowerCase());
}

