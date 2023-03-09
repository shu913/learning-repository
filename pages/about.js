// import React from "react";
import Container from "components/container";
import Hero from "components/hero";
import PostBody from "components/post-body";
import Contact from "components/contact";
import { TwoColumn, TwoColumnMain, TwoColumnSidebar  } from "components/two-column";

export default function Home() {
  return (
    <Container>
      <Hero title="About" subtitle="About development activities" />

      <TwoColumn>
        <TwoColumnMain>
          <PostBody>
          </PostBody>
        </TwoColumnMain>

        <TwoColumnSidebar>
          <Contact />
        </TwoColumnSidebar>
      </TwoColumn>
    </Container>
  );
}
