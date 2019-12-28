import React from "react"

import Layout from "../components/Layouts/Layout"
import SEO from "../components/seo"
import { H1White, H2White, H3White, Section } from "../components/common/styled"
import IndexForm from '../components/index/IndexForm'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Агенція інтеграції"
      lang="uk"
    />
    <Section>
      <H1White>Агенція</H1White>
      <H2White>Ми допомагаємо українцям в Польщі</H2White>
      <H3White align="start">- допомога в оформлені кредитів(іпотеки)</H3White>
      <H3White align="start">- пошук роботи</H3White>
      <H3White align="start">- візи</H3White>
      <H3White align="start">- зустріч і координації (вроцлав)</H3White>
      <H3White align="start">- оренда житла(вроцлав)</H3White>
      <H3White align="start">- мельдунок(прописка)(вроцлав)</H3White>
      <H3White align="start">- допомога і супровід виготовлення карти побиту</H3White>
      <H3White align="start">- реєстрація автомобіля</H3White>
      <H3White align="start">- громадянство Польщі (тільки для власників карти поляка)</H3White>
    </Section>
    <Section>
      <H2White>Отримати консультацію</H2White>
      <H3White>Задайте своє питання і ми звяжемося з Вами!</H3White>
      <IndexForm />
    </Section>
  </Layout>
)

export default IndexPage
