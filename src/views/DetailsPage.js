import React from 'react';
import Image from "material-ui-image";
import './DetailsPage.css'
import { Button, Link } from '@material-ui/core';

const DetailsPage = ({ article }) => (
  <>
    <div>
        <div class="split left">
            <div class="centered">
                <Image max-width="600px" src={article.media[0]['media-metadata'][2].url} />
                <h2>{article.title}</h2>
                    <p>{article.media[0].caption}</p>
                <p>section: {article.section}</p>
                <p>published date : {article.published_date.split('T')[0]}</p>
            </div>
        </div>

        <div class="split right">
            <div class="centered">
                <p>{article.abstract}</p>
                    <br />
                    <Link to ="/">
                        <Button href={article.url} target="_blank">Back</Button>
                    </Link>
            </div>
        </div>
    </div>
  </>
);

export default DetailsPage;