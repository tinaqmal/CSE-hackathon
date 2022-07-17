import React, { useEffect } from 'react';
import ArticleCard from './ArticleCard';
import { SimpleGrid } from '@chakra-ui/react';
import {
  animalArticles,
  environmentArticles,
  scienceArticles,
} from '../../data/articles';

const ArticleRecSection = ({ category }) => {
  let articles = animalArticles;
  if (category === '🐶 Animals') {
    articles = animalArticles;
  } else if (category === '🤩 For you') {
    articles = getForYouRecommendations();
  } else if (category === '🧪 Science') {
    articles = scienceArticles;
  } else if (category === '🌳 Environment') {
    articles = environmentArticles;
  }

  const heroArticle = articles[0];

  return (
    <SimpleGrid w="100%" columns={2} spacingX="12px" spacingY="20px">
      <a href="/article">
        <ArticleCard
          size="lg"
          img={heroArticle.heroImage}
          title={heroArticle.title}
          source={heroArticle.source}
        ></ArticleCard>
      </a>

      <SimpleGrid columns={2} spacingX="12px" spacingY="16px">
        {articles.slice(1).map(article => (
          <ArticleCard
            size={'sm'}
            img={article.heroImage}
            title={article.title}
            source={article.source}
          ></ArticleCard>
        ))}
      </SimpleGrid>
    </SimpleGrid>
  );
};
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
const getForYouRecommendations = () => {
  const allArticles = [
    ...animalArticles,
    ...environmentArticles,
    ...scienceArticles,
  ];

  const shuffled = shuffleArray(allArticles).slice(0, 5);
  console.log(shuffled);
  return shuffled;
};
export default ArticleRecSection;
