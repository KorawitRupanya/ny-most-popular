import React from 'react';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ArticleCard from './ArticleCard.js';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Route, Link } from 'react-router-dom';
import DetailsPage from '../views/DetailsPage.js';



const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
        backgroundColor: "#fafafa",
    },
    media: {
        height: 300,
    },
});

export default function Articles({ loading, articles }) {
    const classes = useStyles();

    return (
        <>
            {
                loading ? (
                    <CircularProgress />
                ) : (
                    <div divided style={{ maxWidth: 900, margin: "0 auto" }} className={classes.root} >
                            <Grid container spacing={3}>
                                {articles.map((article) => (
                                    <Link to="/details">
                                        <Grid item xs={12} sm={4} key={article.id}>
                                            <ArticleCard article={article} />
                                        </Grid>
                                        <Route exact path="/details" render={() => (
                                            <>
                                                <DetailsPage loading={loading} article={article} />
                                            </>
                                        )} />
                                    </Link>
                                ))}
                            </Grid>
                    </div>
                )}
        </>
    );
}

Articles.propTypes = {
    loading: PropTypes.bool.isRequired,
    articles: PropTypes.array.isRequired,
};