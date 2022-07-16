import React from 'react';
import ArticleCard from './ArticleCard';
import { SimpleGrid } from '@chakra-ui/react';
import { animalArticles } from '../../data/articles';

const ArticleRecSection = category => {
  let articles;
  if (category === '🐶 Animals') {
    articles = animalArticles;
  } else if (category === 'For you') {
    articles = getForYouRecommendations();
  }
  const heroArticle = articles[0];

  return (
    <SimpleGrid w="100%" columns={2} spacingX="12px" spacingY="20px">
      <ArticleCard
        size="lg"
        img={heroArticle.heroImage}
        title={heroArticle.title}
        source={heroArticle.source}
      ></ArticleCard>
      <SimpleGrid columns={2} spacingX="12px" spacingY="16px">
        {animalArticles.slice(1).map(article => (
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

const getForYouRecommendations = () => {};
export default ArticleRecSection;
