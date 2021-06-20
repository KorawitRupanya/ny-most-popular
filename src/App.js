
import React, { useEffect, useState } from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import axios from 'axios';
import ArticleList from './components/ArticleList'
import Search from './components/Search';
import Typography from "@material-ui/core/Typography";
import Container from '@material-ui/core/Container';
import SplitButton from './components/SplitButton'


const App = () => {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getStarterArticles = async () => {
      setLoading(true);
      const res = await axios.get(`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${process.env.NYTIMES_API_KEY}`);
      setArticles(res.data.results);
      setLoading(false);
    };
    getStarterArticles();
  }, []);

  const searchArticles = async (text) => {
    if (!text.length) {
      getArticlesByPeriod()
    }
    if (text.length > 0){
      setLoading(true);
      const filtered = await articles.filter(article => {
        return article.title.toLowerCase().match(text.toLowerCase())
      })
        setArticles(filtered);
        setLoading(false);
    } else setLoading(false);
  };

  const getArticlesByPeriod = async (period) => {
      setLoading(true);
      const res = await axios.get(`https://api.nytimes.com/svc/mostpopular/v2/viewed/${period ? period : 1}.json?api-key=${process.env.NYTIMES_API_KEY}`);
      setArticles(res.data.results);
      setLoading(false);
  };

  return (
    <div>
      <Container>
        <Typography color="textPrimary" gutterBottom variant="h2" align="center">
          <BrowserRouter>
            <Switch>
            <Route exact path="/" render={() => (
              <>
                  <div style={{display:"grid", gridAutoFlow:"column", gridColumnGap:"10px", margin:"10px"}}>
                    <Search searchArticles={searchArticles}/>
                      <Typography variant="h6"> Most viewed in <SplitButton getArticlesByPeriod={getArticlesByPeriod}/> Days </Typography>
                  </div>
                  <ArticleList loading={loading} articles={articles} />
              </>
              )} />
          </Switch>
          </BrowserRouter>
        </Typography>
      </Container>
    </div>
  );
};

export default App;