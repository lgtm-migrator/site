import { Container, Link, Text } from "@chakra-ui/react";
import { Layout } from "../components/layout";
import type { NextPage } from "next";
import { Title } from "../components/title";
import { boldUnderline } from "../lib/theme";

const PolicyPage: NextPage = () => (
  <Layout pageName="限界開発鯖 - プライバシーポリシー">
    <Title>プライバシーポリシー</Title>
    <Container
      as="section"
      sx={{
        p: {
          margin: "0.6em",
          lineHeight: 1.7,
          textIndent: "1em",
        },
      }}
    >
      <Text>当サイトは Google アナリティクスを使用しております。</Text>

      <Text>
        取得するデータは当サイトの改善に役立てる事のみに使用するとし、
        <Text as="span" bgGradient={boldUnderline}>
          個人の特定やその他個人の不利益に関わることは致しません。
        </Text>
      </Text>

      <Text>
        規約の詳細に関しましては、
        <Link href="https://marketingplatform.google.com/about/analytics/terms/jp/" isExternal>
          Google アナリティクス利用規約
        </Link>
        や
        <Link href="https://policies.google.com/technologies/ads?hl=ja" isExternal>
          Google ポリシーと規約
        </Link>
        のページをご覧ください。
      </Text>
    </Container>
  </Layout>
);

export default PolicyPage;
