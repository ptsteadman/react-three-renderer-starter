import React from 'react';
import { Spectacle, Deck, Slide, Text } from 'spectacle';

export default function () {
  return (
    <div>
      <Spectacle>
        <Deck transition={['slide']}>
          <Slide>
            <Text>Hello</Text>
          </Slide>
          <Slide>
            <Text>Bitch</Text>
          </Slide>
        </Deck>
      </Spectacle>
    </div>
  );
}
