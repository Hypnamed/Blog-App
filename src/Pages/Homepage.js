import { Grid, Group, Title } from "@mantine/core";
import "../App.css";
import BlogItem from "../Components/BlogItem";

function Homepage() {
  return (
    <div>
      <Title className="title" ta="center">
        Homepage
      </Title>
      <Grid gutter="lg" my="xl">
        <Group position="center">
          <BlogItem />
          <BlogItem />
          <BlogItem />
          <BlogItem />
          <BlogItem />
          <BlogItem />
          <BlogItem />
          <BlogItem />
          <BlogItem />
          <BlogItem />
        </Group>
      </Grid>
    </div>
  );
}

export default Homepage;
