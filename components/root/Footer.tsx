/**
 * Footer component
 */
import { Container, Grid, Text } from "@nextui-org/react";

function Footer() {
  return (
    <footer>
      <Container
        fluid
        css={{
          backgroundColor: "$primary",
          bottom: "0",
          pb: "$xl",
          pt: "$xs",
          mt: "auto",
          width: "100%",
        }}
      >
        <Grid.Container justify="center" direction="row">
          <Grid justify="center" xs={2}>
            <Text color="$background" weight="bold">
              Made by
            </Text>
          </Grid>
          <Grid justify="center" xs={2}>
            <Text color="$background" weight="bold">
              XYZ
            </Text>
          </Grid>
        </Grid.Container>
      </Container>
    </footer>
  );
}

export default Footer;
