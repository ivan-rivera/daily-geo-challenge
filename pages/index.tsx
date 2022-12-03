import type { NextPage } from "next";
import getConfig from "next/config";
import { Button, Text, Container } from "@nextui-org/react";

// TODO:
//  - Have a look at Codenames and see what you can copy design-wise
//  - Add a footer with DEVELOPER, TROUBLESHOOTING, Q&A; add Next.JS logo
//  - Add a header with a logo, a link to the home page
//  - Add a rotating card that shows example questions and answers
//  - Add an image somewhere in the background to spice things up
//  - Play with the colours

const { publicRuntimeConfig } = getConfig();

const Home: NextPage = () => {
  return (
    <>
      <Text h1 weight="bold" color="primary" css={{ my: "$xl" }}>
        Daily Geo Challenge
      </Text>
      <Text h4 color="error" css={{ mb: "$xl" }}>
        Test your knowledge of geography with this daily challenge
      </Text>
      <Container css={{ mb: "$xl" }}>
        <Text h4>{publicRuntimeConfig.rounds} daily questions</Text>
        <Text h4>Share your score and challenge your friends</Text>
      </Container>
      <Button shadow size="xl" color="gradient" css={{ mx: "auto" }}>
        Let's Play
      </Button>
    </>
  );
};

export default Home;
