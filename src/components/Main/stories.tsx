import { Story, Meta } from '@storybook/react/types-6-0'
import { withKnobs, text } from '@storybook/addon-knobs'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  decoration: [withKnobs]
} as Meta
// story para renderizar a main
export const Basic: Story = () => (
  <Main
    title={text('Title', 'BoilerPlace')}
    description={text('Description', 'TypeScript, NextJS e StyleCompoentes')}
  />
)
