import { error } from '@sveltejs/kit';
import { skills } from '$lib/data/skills';

export const prerender = true;

export function entries() {
	return skills.map((s) => ({ skill: s.slug }));
}

export function GET({ params }: { params: { skill: string } }) {
	const skill = skills.find((s) => s.slug === params.skill);
	if (!skill) error(404, 'Skill not found');

	return new Response(skill.raw, {
		headers: { 'Content-Type': 'text/markdown; charset=utf-8' }
	});
}
