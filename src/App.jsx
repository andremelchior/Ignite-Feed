import { Post } from "./Post"
import { Header } from "./components/Header"

import styles from './App.module.css'

export function App() {
  return (
      <div>
          <Header />

          <div className={styles.wrapper}>
              <aside>Sidebar</aside>
              <main>
                  <Post
                      author="André"
                      content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, molestiae totam quam, facere et excepturi assumenda possimus quasi, cupiditate eius itaque animi. Sequi rerum in nam non quaerat id reprehenderit."
                  />
                  <Post author="Lucas" content="lorem ipsum." />
              </main>
          </div>
      </div>
  );
}