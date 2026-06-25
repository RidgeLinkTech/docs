import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://docs.ridgelink.us',
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    starlight({
      title: 'RidgeLink Docs',
      description: 'Documentation for the RidgeLink Technologies fictional enterprise engineering environment.',
      logo: {
        src: './public/images/ridgelink-logo.svg',
        alt: 'RidgeLink Technologies'
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/RidgeLinkTech' }
      ],
      sidebar: [
        { label: 'Start Here', items: [{ label: 'Welcome', slug: 'index' }, { label: 'Getting Started', slug: 'getting-started' }, { label: 'Roadmap', slug: 'roadmap' }, { label: 'Repository Strategy', slug: 'repositories' }] },
        { label: 'Company', items: [{ label: 'Company Profile', slug: 'company/profile' }, { label: 'Mission, Vision, Values', slug: 'company/mission-vision-values' }, { label: 'Organization', slug: 'company/organization' }, { label: 'Culture', slug: 'company/culture' }] },
        { label: 'Brand Guide', items: [{ label: 'Overview', slug: 'brand-guide' }, { label: 'Logo Usage', slug: 'brand-guide/logo-usage' }, { label: 'Colors', slug: 'brand-guide/colors' }, { label: 'Typography', slug: 'brand-guide/typography' }, { label: 'Voice & Tone', slug: 'brand-guide/voice-and-tone' }] },
        { label: 'Design System', items: [{ label: 'Overview', slug: 'design-system' }, { label: 'Components', slug: 'design-system/components' }, { label: 'Icons', slug: 'design-system/icons' }, { label: 'UI Kit', slug: 'design-system/ui-kit' }] },
        { label: 'Website', items: [{ label: 'Overview', slug: 'website' }, { label: 'Sitemap', slug: 'website/sitemap' }, { label: 'Cloudflare Pages Deployment', slug: 'website/cloudflare-pages' }, { label: 'Content Standards', slug: 'website/content-standards' }] },
        { label: 'Personas', items: [{ label: 'Overview', slug: 'personas' }, { label: 'Directory', slug: 'personas/directory' }, { label: 'Persona Template', slug: 'personas/template' }, { label: 'Image Standards', slug: 'personas/image-standards' }] },
        { label: 'Services', items: [{ label: 'Service Catalog', slug: 'services' }, { label: 'Infrastructure Engineering', slug: 'services/infrastructure-engineering' }, { label: 'Cloud Services', slug: 'services/cloud-services' }, { label: 'Cybersecurity', slug: 'services/cybersecurity' }, { label: 'Networking', slug: 'services/networking' }, { label: 'Managed IT Support', slug: 'services/managed-it-support' }] },
        { label: 'Architecture', items: [{ label: 'Architecture Standards', slug: 'architecture' }, { label: 'Hybrid Cloud', slug: 'architecture/hybrid-cloud' }, { label: 'Identity', slug: 'architecture/identity' }, { label: 'Zero Trust', slug: 'architecture/zero-trust' }, { label: 'Network Topology', slug: 'architecture/network-topology' }] },
        { label: 'Templates', items: [{ label: 'Overview', slug: 'templates' }, { label: 'Architecture Decision Record', slug: 'templates/architecture-decision-record' }, { label: 'Runbook', slug: 'templates/runbook' }, { label: 'Incident Report', slug: 'templates/incident-report' }, { label: 'Project Charter', slug: 'templates/project-charter' }] },
        { label: 'AI Prompts', items: [{ label: 'Prompt Library', slug: 'ai-prompts' }, { label: 'Branding Prompts', slug: 'ai-prompts/branding' }, { label: 'Photography Prompts', slug: 'ai-prompts/photography' }, { label: 'Diagram Prompts', slug: 'ai-prompts/diagrams' }, { label: 'Persona Prompts', slug: 'ai-prompts/personas' }] }
      ]
    })
  ]
});
