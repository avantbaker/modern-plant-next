import React from 'react';
import Header from '../components/header';

export default {
  title: 'Header',
  component: Header,
};

export const HeaderStory = () => (
    <div className="storybook-background">
        <Header />
    </div>
)

HeaderStory.story = {
  name: 'Header',
};
