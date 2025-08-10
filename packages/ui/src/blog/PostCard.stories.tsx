import type { Meta, StoryObj } from '@storybook/react';
import { PostCard } from './PostCard';

export default { title: 'Blog/PostCard', component: PostCard } satisfies Meta<typeof PostCard>;
export const Basic: StoryObj<typeof PostCard> = {
    args: { title: 'Hello', excerpt: 'World' },
};
