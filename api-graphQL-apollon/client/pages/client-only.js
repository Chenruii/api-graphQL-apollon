import App from '../components/App'
import InfoBox from '../components/InfoBox'
import Header from '../components/Header'
import Submit from '../components/Submit'
import PostList from '../components/PostList'
import { withApollo } from '../lib/apollo'

export default withApollo(ClientOnlyPage, {
  // Disable apollo ssr fetching in favour of automatic static optimization
  ssr: false
})
