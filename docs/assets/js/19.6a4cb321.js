(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{390:function(a,e,s){"use strict";s.r(e);var o=s(29),t=Object(o.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"principios-solid"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#principios-solid"}},[a._v("#")]),a._v(" Princípios SOLID")]),a._v(" "),s("p",[a._v("Adaptado de "),s("sup",{staticClass:"footnote-ref"},[s("a",{attrs:{href:"#fn1",id:"fnref1"}},[a._v("[1]")])]),a._v(".")]),a._v(" "),s("p",[a._v("SOLID são cinco princípios da programação orientada a objetos que facilitam no desenvolvimento de softwares, tornando-os fáceis de manter e estender. Esses princípios podem ser aplicados a qualquer linguagem de Programação Orientada a Objetos.")]),a._v(" "),s("p",[a._v("Michael Feathers criou esse  acrônimo após observar cinco princípios da orientação a objetos e design de código criados por Robert C. Martin (a.k.a. Uncle Bob) e abordados no artigo The Principles of OOD")]),a._v(" "),s("p",[a._v("S.O.L.I.D: Os 5 princípios da POO")]),a._v(" "),s("ol",[s("li",[a._v("S — Single Responsiblity Principle (Princípio da responsabilidade única)")]),a._v(" "),s("li",[a._v("O — Open-Closed Principle (Princípio Aberto-Fechado)")]),a._v(" "),s("li",[a._v("L — Liskov Substitution Principle (Princípio da substituição de Liskov)")]),a._v(" "),s("li",[a._v("I — Interface Segregation Principle (Princípio da Segregação da Interface)")]),a._v(" "),s("li",[a._v("D — Dependency Inversion Principle (Princípio da inversão da dependência)")])]),a._v(" "),s("p",[a._v("Esses princípios ajudam o programador a escrever códigos mais limpos, separando responsabilidades, diminuindo acoplamentos, facilitando na refatoração e estimulando o reaproveitamento do código.")]),a._v(" "),s("h2",{attrs:{id:"principio-da-responsabilidade-unica-srp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#principio-da-responsabilidade-unica-srp"}},[a._v("#")]),a._v(" Princípio da Responsabilidade Única (SRP)")]),a._v(" "),s("p",[a._v("Adaptado de "),s("sup",{staticClass:"footnote-ref"},[s("a",{attrs:{href:"#fn2",id:"fnref2"}},[a._v("[2]")])]),a._v(" e "),s("sup",{staticClass:"footnote-ref"},[s("a",{attrs:{href:"#fn1",id:"fnref1:1"}},[a._v("[1:1]")])]),a._v(".")]),a._v(" "),s("p",[a._v("Este princípio nada mais é do que uma perspectiva diferente para um dos mais fundamentais princípios da orientação a objetos: a coesão.")]),a._v(" "),s("p",[a._v("Esse princípio declara que uma classe deve ser especializada em um único assunto e possuir apenas uma responsabilidade dentro do software, ou seja, a classe deve ter uma única tarefa ou ação para executar.")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("Princípio da Responsabilidade Única")]),a._v(" "),s("p",[a._v("Uma classe deve ter um, e somente um, motivo para mudar.")])]),a._v(" "),s("p",[a._v("Vamos tentar entender o que isso significa e eventuais problemas causados pela violação deste princípio.")]),a._v(" "),s("h3",{attrs:{id:"alguns-problemas"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#alguns-problemas"}},[a._v("#")]),a._v(" Alguns Problemas")]),a._v(" "),s("p",[a._v("Quando estamos aprendendo programação orientada a objetos, sem sabermos, damos a uma classe mais de uma responsabilidade e acabamos criando classes que fazem de tudo ("),s("em",[a._v("God Class")]),a._v("). Num primeiro momento isso pode parecer eficiente, mas como as responsabilidades acabam se misturando, quando há necessidade de realizar alterações nessa classe, será difícil modificar uma dessas responsabilidades sem comprometer as outras. Toda alteração acaba sendo introduzida com um certo nível de incerteza em nosso sistema — principalmente se não existirem testes automatizados!")]),a._v(" "),s("p",[a._v("Alguns problemas decorrentes da utilização de "),s("em",[a._v("God Class")]),a._v(":")]),a._v(" "),s("ul",[s("li",[a._v("Dificuldade de compreensão e, portanto, dificuldade de manutenção.")]),a._v(" "),s("li",[a._v("Dificuldade de reuso.")]),a._v(" "),s("li",[a._v("Com responsabilidades entrelaçadas em uma mesma classe, pode ficar difícil alterar uma dessas responsabilidades sem comprometer as outras (rigidez) e pode acabar quebrando outras partes do software (fragilidade).")]),a._v(" "),s("li",[a._v("Acoplamento alto, ou seja, a classe tem um número excessivo de dependências, e portanto fica mais sujeita a mudanças em decorrência de alterações em outras classes (novamente a fragilidade).")])]),a._v(" "),s("h3",{attrs:{id:"exemplos-comuns-de-violacao"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#exemplos-comuns-de-violacao"}},[a._v("#")]),a._v(" Exemplos Comuns de Violação")]),a._v(" "),s("p",[a._v("Imaginem uma classe de negócio Pedido:")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Pedido")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("adicionarProduto")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Produto")]),a._v(" produto"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" quantidade"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("double")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("calcularTotal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("gerarPlanilhaExcel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("p",[a._v("No exemplo acima, temos uma quebra do SRP de uma forma bem explícita, uma vez que temos responsabilidades que deveriam ser de componentes distintos do software. Enquanto os dois primeiros métodos fazem sentido para o domínio do qual Pedido faz parte, o último está relacionado à exibição de dados em um formato específico, o que faz mais sentido em camadas superiores, como de Aplicação ou de UI.")]),a._v(" "),s("h2",{attrs:{id:"principio-aberto-fechado"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#principio-aberto-fechado"}},[a._v("#")]),a._v(" Princípio Aberto-Fechado")]),a._v(" "),s("h2",{attrs:{id:"principio-da-substituicao-de-liskov"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#principio-da-substituicao-de-liskov"}},[a._v("#")]),a._v(" Princípio da substituição de Liskov")]),a._v(" "),s("h2",{attrs:{id:"principio-da-segregacao-da-interface"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#principio-da-segregacao-da-interface"}},[a._v("#")]),a._v(" Princípio da Segregação da Interface")]),a._v(" "),s("h2",{attrs:{id:"principio-da-inversao-da-dependencia"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#principio-da-inversao-da-dependencia"}},[a._v("#")]),a._v(" Princípio da inversão da dependência")]),a._v(" "),s("hr",{staticClass:"footnotes-sep"}),a._v(" "),s("section",{staticClass:"footnotes"},[s("ol",{staticClass:"footnotes-list"},[s("li",{staticClass:"footnote-item",attrs:{id:"fn1"}},[s("p",[a._v("João Roberto da Paixão.O que é SOLID: O guia completo para você entender os 5 princípios da POO."),s("a",{attrs:{href:"https://medium.com/desenvolvendo-com-paixao/o-que-%C3%A9-solid-o-guia-completo-para-voc%C3%AA-entender-os-5-princ%C3%ADpios-da-poo-2b937b3fc530",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://medium.com/desenvolvendo-com-paixao/o-que-%C3%A9-solid-o-guia-completo-para-voc%C3%AA-entender-os-5-princ%C3%ADpios-da-poo-2b937b3fc530"),s("OutboundLink")],1),a._v(" (Acessado em 18/03/2022) "),s("a",{staticClass:"footnote-backref",attrs:{href:"#fnref1"}},[a._v("↩︎")]),a._v(" "),s("a",{staticClass:"footnote-backref",attrs:{href:"#fnref1:1"}},[a._v("↩︎")])])]),a._v(" "),s("li",{staticClass:"footnote-item",attrs:{id:"fn2"}},[s("p",[a._v("Robson Castilho. Princípio da Responsabilidade Única (SRP) "),s("a",{attrs:{href:"https://robsoncastilho.com.br/2013/02/06/principios-solid-principio-da-responsabilidade-unica-srp/",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://robsoncastilho.com.br/2013/02/06/principios-solid-principio-da-responsabilidade-unica-srp/"),s("OutboundLink")],1),a._v(".  (Acessado em 15/03/2022) "),s("a",{staticClass:"footnote-backref",attrs:{href:"#fnref2"}},[a._v("↩︎")])])])])])])}),[],!1,null,null,null);e.default=t.exports}}]);