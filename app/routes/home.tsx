import type { Route } from "./+types/home";
import { HomePage } from '~/components/home-page'

export function meta(): Route.MetaDescriptors {
  return [
    { title: 'Brian Cilenti | Home' },
    {
      name: 'description',
      content:
        "Brian Cilenti - Senior Frontend Developer | Creating user-friendly experiences with AI and community insight. Systematic problem-solver with a passion for optimization and collaboration. Let's connect and build something great!",
    },
  ];
}

export default function Home() {
  return <HomePage />
}