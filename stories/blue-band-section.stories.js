import React from 'react';
import BlueBandSection from '../components/blue-band-section';

export default {
  title: 'Blue Band Section',
  component: BlueBandSection,
};

export const BlueBandSectionStory = () => (
    <div className="storybook-background">
        <BlueBandSection />
    </div>
)

BlueBandSectionStory.story = {
  name: 'Blue Band Section',
};
