import Layout from "./Layout";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import EditPost from "./EditPost";
import { Route, Routes } from "react-router-dom";
import { DataProvider } from "./context/DataContext";

function App() {
  // useEffect(() => {
  //   const fetchPosts = async (e) => {
  //     try {
  //       const response = await api.get('/posts');
  //       setPosts(response.data);
  //     } catch (error) {

  //       if (error.response) {
  //         // Not in range of 200 status code
  //         console.log(error.response.data);
  //         console.log(error.response.status);
  //         console.log(error.response.headers);
  //       } else {
  //         console.log(`Error: ${error.message}`);
  //       }
  //     }
  //   }
  //   fetchPosts();
  // }, [])

  return (
    <div className="App">
      <DataProvider>
        <Header title={"React JS Blog"} />
        <Nav />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="post" element={<NewPost />} />
            <Route path="/edit/:id" element={<EditPost />} />
            <Route path="post/:id" element={<PostPage />} />

            <Route path="about" element={<About />} />
            <Route path="*" element={<Missing />} />
          </Route>
        </Routes>
      </DataProvider>
      <Footer />
    </div>
  );
}

export default App;
