import { Post } from "./Post"
import { Header } from "./components/Header"

export function App() {
  return (
    <div>
      <Header />
      <h1>Hello, World!</h1>
      <Post />
      <Post />
      <Post />
    </div>
    
  )
}