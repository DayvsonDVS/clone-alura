<template>
  <div class="container-formation">

    <CardCyberpunkSemiStatic color="programming" title="PROGRAMAÇÃO" subtitle="ver Escola" :content="listProgramming">
      <SVGProgramming />
    </CardCyberpunkSemiStatic>

    <CardCyberpunkSemiStatic color="front-end" title="FRONT-END" subtitle="ver Escola" :content="listFrontEnd">
      <SVGFrontEnd />
    </CardCyberpunkSemiStatic>

    <CardCyberpunkSemiStatic color="data-science" title="DATA SCIENCE" subtitle="ver Escola" :content="listDataScience">
      <SVGDataScience />
    </CardCyberpunkSemiStatic>

    <CardCyberpunkSemiStatic color="devops" title="DEVOPS " subtitle="ver Escola" :content="listContentDevops">
      <SVGUXDevops />
    </CardCyberpunkSemiStatic>

    <CardCyberpunkSemiStatic color="ux-design" title="UX & DESIGN" subtitle="ver Escola" :content="listContentUXDesign">
      <SVGUXDesign />
    </CardCyberpunkSemiStatic>

    <CardCyberpunkSemiStatic color="mobile" title="MOBILE" subtitle="ver Escola" :content="listContentMobile">
      <SVGMobile />
    </CardCyberpunkSemiStatic>

    <CardCyberpunkSemiStatic color="innovation-management" title="INOVAÇÃO & GESTÃO " subtitle="ver Escola"
      :content="listInnovation">
      <SVGInnovation />
    </CardCyberpunkSemiStatic>

  </div>
</template>
 
<script setup lang="ts">
import SVGMobile from 'assets/icons/phone.svg'
import SVGUXDesign from 'assets/icons/eye-fill.svg'
import SVGUXDevops from 'assets/icons/gear.svg'
import SVGProgramming from 'assets/icons/terminal-plus.svg'
import SVGFrontEnd from 'assets/icons/filetype-html.svg'
import SVGDataScience from 'assets/icons/radioactive.svg'
import SVGInnovation from 'assets/icons/lightbulb.svg'

const listProgramming = [
  { title: 'A partir do zero: iniciante em programação', ref: '_blank' },
  { title: 'APIs com Node.js e Express', ref: '_blank' },
  { title: 'Aprenda a programar em C# com Orientação a Objetos', ref: '_blank' },
  { title: 'Aprenda a programar em Java com Orientação a Objetos', ref: '_blank' },
  { title: 'Aprenda a programar em JavaScript com foco no back-end', ref: '_blank' },
  { title: 'Aprenda a programar em PHP', ref: '_blank' },
  { title: 'Aprenda a programar em Python com Orientação a Objetos', ref: '_blank' },
  { title: 'Aprofunde em .NET com Arquitetura de Microsserviços e RabbitMQ', ref: '_blank' }
]

const listFrontEnd = [
  { title: 'A partir do zero: HTML e CSS para projetos web', ref: '_blank' },
  { title: 'Angular: construindo aplicações acessíveis e avançando em testes automatizados', ref: '_blank' },
  { title: 'Bootstrap 5: desenvolvimento de websites responsivos e atraentes', ref: '_blank' },
  { title: 'Criando uma aplicação acessível com JavaScript, Emotion e React Router', ref: '_blank' },
  { title: 'CSS: aprofunde em estilos', ref: '_blank' },
  { title: 'Desenvolva Aplicações Escaláveis com Angular', ref: '_blank' },
  { title: 'Desenvolva aplicações Web Acessíveis', ref: '_blank' },
  { title: 'Desenvolva aplicações Web com JavaScript', ref: '_blank' }
]

const listDataScience = [
  { title: 'Administração e performance com Oracle Database', ref: '_blank' },
  { title: 'Apache Airflow', ref: '_blank' },
  { title: 'Apache Spark com Python', ref: '_blank' },
  { title: 'Avançando em Data Science com Python', ref: '_blank' },
  { title: 'Business Intelligence com Excel', ref: '_blank' },
  { title: 'CD4ML: Continuous Delivery for Machine Learning', ref: '_blank' },
  { title: 'Consultas com Oracle Database', ref: '_blank' },
  { title: 'Data Analysis com Google Sheets', ref: '_blank' }
]

const listContentMobile = [
  { title: 'A partir do zero: crie projetos em Dart, a linguagem utilizada no Flutter', ref: '_blank' },
  { title: 'Android Jetpack Compose: Armazenamento de dados e arquivos', ref: '_blank' },
  { title: 'Construa aplicativos iOS com SwiftUI', ref: '_blank' },
  { title: 'Desenvolva seu primeiro app Android com Kotlin', ref: '_blank' },
  { title: 'Desenvolva seu primeiro app com Flutter', ref: '_blank' },
  { title: 'Desenvolva seu primeiro app com React Native', ref: '_blank' },
  { title: 'Domine a linguagem Swift', ref: '_blank' },
  { title: 'Evolua apps Android com Jetpack Compose: crie telas e gerencie estados', ref: '_blank' }
]

const listContentUXDesign = [
  { title: 'Adobe Illustrator para interfaces digitais', ref: '_blank' },
  { title: 'Adobe Mobile', ref: '_blank' },
  { title: 'Adobe Photoshop', ref: '_blank' },
  { title: 'Adobe XD', ref: '_blank' },
  { title: 'Arquitetura da Informação', ref: '_blank' },
  { title: 'Canva', ref: '_blank' },
  { title: 'Criação gráfica e editorial com o InDesign', ref: '_blank' },
]

const listContentDevops = [
  { title: 'AWS: Observabilidade com CloudWatch e Containers com ECS e EKS', ref: '_blank' },
  { title: 'Azure,', ref: '_blank' },
  { title: 'Certificação AWS Certified Cloud Practitioner', ref: '_blank' },
  { title: 'Certificação AZ-900: Microsoft Azure Fundamentals', ref: '_blank' },
  { title: 'Certificação Certified Solutions Architect - Associate', ref: '_blank' },
  { title: 'Certificação Google Certified Associate Cloud Engineer', ref: '_blank' },
  { title: 'Certificação LPI Linux Essentials', ref: '_blank' },
  { title: 'Cibersegurança', ref: '_blank' }
]

const listInnovation = [
  { title: 'Agilidade: abordagens e práticas avançadas', ref: '_blank' },
  { title: 'Aprendizagem', ref: '_blank' },
  { title: 'Autoliderança', ref: '_blank' },
  { title: 'Business Agility', ref: '_blank' },
  { title: 'Certificação PMP e CAPM do PMI', ref: '_blank' },
  { title: 'COBIT 2019', ref: '_blank' },
  { title: 'Comunicação', ref: '_blank' },
  { title: 'Comunicação para líderes', ref: '_blank' }
]
</script>
 
<style scoped lang="scss">
.container-formation {
  display: grid;
  grid-template-columns: repeat(4, max-content);
  gap: 2rem;
  margin-top: 5rem;
}
</style>