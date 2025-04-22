import { Post } from "./Post"
import { Header } from "./components/Header"

export function App() {
  return (
      <div>
          <Header />
          <h1>Hello, World!</h1>

          <Post author="André" content="lorem ipsum dolor sit amet." />

          <Post author="Lucas" content="lorem ipsum."/>
      </div>
  );
}