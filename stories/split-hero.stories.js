import React from 'react';
import SplitHero from '../components/split-hero';

export default {
  title: 'Heros',
  component: SplitHero,
};

export const HeaderStory = () => (
    <div className="storybook-background">
        <SplitHero />
    </div>
)

HeaderStory.story = {
  name: 'Split Hero',
};
