import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import Part1 from '../Part1/Part1.js';
import Part2 from '../Part2/Part2.js';
import Part3 from '../Part3/Part3.js';
import Part4 from '../Part4/Part4.js';
import ImageRow from '../Part2/ImageRow/ImageRow'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('Part1', module) .add('p1', () => <Part1/>);

storiesOf('Part2', module) .add('p2', () => <Part2/>);

storiesOf('Part3', module) .add('p3', () => <Part3/>);

storiesOf('Part4', module) .add('p4', () => <Part4/>);
