import { RetroPC, Laptop, GameController } from './assets';

export const navMenuLinks = [
  'Home',
  'New',
  'Popular',
  'Trending',
  'Categories',
];

export const news = [
  {
    title: 'Hydrogen VS Electric Cars',
    content: 'Will hydrogen-fueled cars ever catch up to EVs?',
  },
  {
    title: 'The Downsides of AI Artistry',
    content:
      'What are the possible adverse effects of on-demand AI image generation?',
  },
  {
    title: 'Is VC Funding Drying Up?',
    content:
      'Private funding by VC firms is down 50% YOY. We take a look at what that means.',
  },
];

export const trending = [
  {
    number: '01',
    title: 'Reviving Retro PCs',
    content: 'What happens when old PCs are given modern upgrades?',
    img: RetroPC,
    alt: 'Retro pc',
  },
  {
    number: '02',
    title: 'Top 10 Laptops of 2022',
    content: 'Our best picks for various needs and budgets.',
    img: Laptop,
    alt: 'laptop red keyboard keys',
  },
  {
    number: '03',
    title: 'The Growth of Gaming',
    content: 'How the pandemic has sparked fresh opportunities.',
    img: GameController,
    alt: 'white playstation 4 dualshock 4 controller',
  },
];
