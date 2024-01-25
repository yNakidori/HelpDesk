import React from "react";
import Header from "../components/Header";

const About = () => {
  const features = [
    "Funcionalidade 1: Descreva aqui a primeira funcionalidade incrível da sua aplicação.",
    "Funcionalidade 2: Adicione detalhes sobre a segunda funcionalidade impressionante.",
    "Funcionalidade 3: Destaque a terceira funcionalidade que torna sua aplicação única.",
  ];

  const benefits = [
    "Benefício 1: Como sua aplicação facilita a vida dos usuários?",
    "Benefício 2: Destaque a eficiência ou economia de tempo proporcionada pela aplicação.",
    "Benefício 3: Explique como a sua aplicação resolve um problema específico dos usuários.",
  ];

  return (
    <div className="w-full">
      <Header />
      <div className="p-4 min-h-screen flex flex-col items-center justify-center">
        <h1>About the application</h1>

        <section className="mt-8">
          <h2>Recursos Principais</h2>
          <ul className="list-disc ml-6">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </section>

        <section className="mt-8">
          <h2>Benefícios</h2>
          <ul className="list-disc ml-6">
            {benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </section>

        <section className="mt-8">
          <h2>Informações Adicionais</h2>
          <p>
            Adicione aqui outras informações relevantes sobre a sua aplicação,
            como detalhes técnicos, tecnologias utilizadas, e qualquer coisa que
            destaque a singularidade e qualidade do seu produto.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
