import {
  Brain,
  Building2,
  CirclePlay,
  Cpu,
  DatabaseZap,
  Globe2,
  HeartPulse,
  MessageSquareText,
  Sparkles,
  Users
} from 'lucide-react';

export const navItems = [
  ['home', 'Home'],
  ['about', 'About'],
  ['focus', 'What We Do'],
  ['advisors', 'Advisors'],
  ['thinktank', 'Think Tank'],
  ['insights', 'Insights'],
  ['partners', 'Partners'],
  ['contact', 'Join Us']
];

export const domains = [
  'memory',
  'attention',
  'sleep',
  'executive function',
  'language processing',
  'sensory integration',
  'motor function',
  'learning',
  'social cognition'
];

export const focusAreas = [
  'Memory',
  'Attention',
  'Sleep & circadian health',
  'Executive function',
  'Language processing',
  'Sensory processing',
  'Motor function',
  'Learning efficiency',
  'Social cognition'
];

export const whatWeDo = [
  {
    icon: DatabaseZap,
    title: 'Multimodal Data Integration',
    text: 'We combine cellular, molecular, electrophysiology, behavioral, and environmental data to understand cognitive patterns at multiple levels.'
  },
  {
    icon: Cpu,
    title: 'AI-Driven Insight Generation',
    text: 'Advanced models help us detect early cognitive stressors and performance changes long before they become visible.'
  },
  {
    icon: HeartPulse,
    title: 'Human-Centered Solutions',
    text: 'We design tools and frameworks that individuals, organizations, and communities can use to strengthen cognitive resilience.'
  },
  {
    icon: Globe2,
    title: 'Global Collaboration',
    text: 'We partner with universities, corporations, governments, and health agencies to accelerate innovation and impact.'
  }
];

export const advisorAreas = [
  'Neurotechnology and computational neuroscience',
  'Psychiatry and cognitive rehabilitation',
  'AI, machine learning, and data science',
  'Public health and policy',
  'Corporate innovation and leadership strategy'
];

export const participantGroups = [
  'Undergraduate and graduate students',
  'Students within three years of graduation',
  'Young innovators passionate about neuroscience, AI, public health, or human performance'
];

export const pitchTopics = [
  'Cognitive decline',
  'Memory and attention enhancement',
  'Sleep and circadian optimization',
  'Neurotechnology',
  'AI for brain health',
  'Learning and performance science',
  'Social cognition and mental resilience'
];

export const participantBenefits = [
  'Mentorship from world-class neuroscientists and neurotech leaders',
  'Exposure to policymakers, industry executives, and research institutions',
  'Opportunities for internships, collaborations, and project incubation',
  'Recognition, awards, and potential funding pathways',
  'A platform to shape the future of cognitive health'
];

export const partners = [
  'State and regional health agencies',
  'Educational institutions',
  'Corporations and CSR programs',
  'Nonprofits and community organizations',
  'Research labs and innovation hubs'
];

export const partnerReasons = [
  'Build community-level cognitive-health programs',
  'Support early-detection and monitoring initiatives',
  'Strengthen workforce performance and resilience',
  'Advance public-health innovation',
  'Contribute to global scientific progress'
];

export const joinPaths = [
  {
    icon: Cpu,
    title: 'Join as a Technologist',
    text: 'Help build tools, models, and platforms that decode and strengthen human cognition.'
  },
  {
    icon: Building2,
    title: 'Join as a State Leader',
    text: 'Collaborate with us to bring cognitive-health programs to your region or community.'
  },
  {
    icon: Users,
    title: 'Join as a Volunteer',
    text: 'Support events, research initiatives, outreach programs, and public-health campaigns.'
  }
];

export const interviewCards = [
  {
    type: 'Video interview',
    title: 'Leader Name - Title',
    text: 'Short description of their work and what the interview covers.',
    action: 'Watch Video',
    icon: CirclePlay
  },
  {
    type: 'Written Q&A',
    title: 'Leader Name - Title',
    text: 'Short description highlighting their contributions.',
    action: 'Read Interview',
    icon: MessageSquareText
  },
  {
    type: 'Nomination',
    title: 'Nominate a Leader',
    text: 'Know someone whose work deserves to be highlighted?',
    action: 'Submit a Nomination',
    icon: Sparkles
  }
];

export const missionSteps = [
  'Decode cognitive decline',
  'Develop early-detection frameworks',
  'Build cognitive resilience tools',
  'Support public-health agencies'
];

export const insightTopics = [
  'Video interviews',
  'Written Q&A features',
  'External links to talks, podcasts, and keynote sessions',
  'Spotlights on emerging voices',
  'Insights from our advisors and think-tank judges'
];

export const brand = {
  name: 'Inverse Bionics',
  icon: Brain
};
