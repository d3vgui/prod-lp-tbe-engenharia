document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    const formProps = Object.fromEntries(formData);

    const message = `Olá, TED Engenharia e Arquitetura! 

Meu nome é ${formProps.name}, e estou entrando em contato para solicitar um orçamento.

Telefone/WhatsApp: ${formProps.phone}
E-mail: ${formProps.email}
Localização do imóvel: ${formProps.localizacao}
Tipo de imóvel: ${formProps.imovel}
Tipo de serviço: ${formProps.servico}

Mensagem:
${formProps.mensagem}`;

    const whatsappURL = `https://api.whatsapp.com/send?phone=5511955548865&text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  });

/* ----------------------------------------------------------------------------------------- */

document
  .getElementById("formEmpresa")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    const data = Object.fromEntries(formData);

    const message = `Olá, TED Engenharia e Arquitetura!

Gostaria de apresentar os dados da minha empresa para possível parceria:

Nome da Empresa/Profissional: ${data.nomeEmpresa}
CNPJ ou CPF: ${data.cpfCnpj}
Responsável pelo contato: ${data.responsavel}
Telefone/WhatsApp: ${data.telefone}
E-mail: ${data.email}
Cidade e Estado: ${data.cidadeEstado}
Segmento de Atuação: ${data.segmento}

Descrição de produtos e/ou serviços:
${data.descricao}

Portfólio, site ou redes sociais:
${data.portfolio}`;

    const whatsappURL = `https://api.whatsapp.com/send?phone=5511955548865&text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  });
