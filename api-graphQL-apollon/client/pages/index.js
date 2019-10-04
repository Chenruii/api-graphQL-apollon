import App from "../components/App";
import InfoBox from "../components/InfoBox";
import Header from "../components/Header";
import Submit from "../components/Submit";
import PostList from "../components/PostList";
import { withApollo } from "../lib/apollo";
import { Button, Box, Divider, Typography } from "@material-ui/core";
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks'

export const ALL_PRODUCTS_QUERY = gql`
  query product {
    products {
      id
      name
      description
      category
      price
    }
  }
` 
const IndexPage = props => {
  const {data, loading, error} = useQuery(ALL_PRODUCTS_QUERY);

  if (loading) return <div>Loading...</div>;

  
  return (
  <App>
    <Header />
    <InfoBox>
      ℹ️ This example shows how to fetch all initial apollo queries on the
      server. If you <a href="/">reload</a> this page you won't see a loader
      since Apollo fetched all needed data on the server. This prevents{" "}
      <a
        href="https://nextjs.org/blog/next-9#automatic-static-optimization"
        target="_blank"
      >
        automatic static optimization
      </a>{" "}
      in favour of full Server-Side-Rendering.
    </InfoBox>

    {data.products.map(product => (
      <Box m={3} p={1} bgcolor="#eee">
        <Typography variant="h6">{product.name}</Typography>
        <Typography variant="body1">{product.description}</Typography>
        <Typography variant="caption">{product.category}</Typography>

      </Box>
    ))}
    <Box mt={3}>
      <Button variant="contained" color="primary">
        material-ui works
      </Button>
    </Box>
  </App> 
)};

export default withApollo(IndexPage);