import React from 'react';
import HeroContent from '../components/hero-content';

export default {
  title: 'Hero Content',
  component: HeroContent,
};

export const HeroContentStory = () => (
    <div className="storybook-background">
        <HeroContent 
            title="Terpene Remedies"
            subtitle="Look After Yourself"
            paragraph="Traditional apothecary remedies, refined- and with a modern spin."
            buttonText="Learn More"
        />
    </div>
)

HeroContentStory.story = {
  name: 'Hero Content',
};
