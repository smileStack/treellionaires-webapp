'use client'
import { LandingCTA } from '@/designSystem/landing/LandingCTA'
import { LandingContainer } from '@/designSystem/landing/LandingContainer'
import LandingFAQ from '@/designSystem/landing/LandingFAQ'
import { LandingFeatures } from '@/designSystem/landing/LandingFeatures'
import { LandingHero } from '@/designSystem/landing/LandingHero'
import { LandingHowItWorks } from '@/designSystem/landing/LandingHowItWorks'
import { LandingPainPoints } from '@/designSystem/landing/LandingPainPoints'
import { LandingSocialProof } from '@/designSystem/landing/LandingSocialProof'
import { LandingSocialRating } from '@/designSystem/landing/LandingSocialRating'
import { LandingTestimonials } from '@/designSystem/landing/LandingTestimonials'
import {
  SearchOutlined,
  TeamOutlined,
  DollarOutlined,
  EnvironmentOutlined,
  CalendarOutlined,
  RocketOutlined,
} from '@ant-design/icons'

export default function LandingPage() {
  const features = [
    {
      heading: `Interactive Grant Map`,
      description: `Discover funding opportunities with our intuitive map interface, making it easy to find grants in your area.`,
      icon: <SearchOutlined />,
    },
    {
      heading: `Comprehensive Grant Directory`,
      description: `Access a detailed database of tree planting grants, updated regularly to ensure you never miss an opportunity.`,
      icon: <TeamOutlined />,
    },
    {
      heading: `Streamlined Application Process`,
      description: `Save time and effort with our user-friendly interface, designed to simplify the grant application process.`,
      icon: <DollarOutlined />,
    },
    {
      heading: `Geolocation Filtering`,
      description: `Find grants specific to your location, ensuring you only see relevant opportunities for your tree planting projects.`,
      icon: <EnvironmentOutlined />,
    },
    {
      heading: `Event Calendar`,
      description: `Stay informed about upcoming tree planting events and grant deadlines with our integrated calendar feature.`,
      icon: <CalendarOutlined />,
    },
    {
      heading: `Grantor-Grantee Matching`,
      description: `Connect directly with grantors looking for projects like yours, increasing your chances of securing funding.`,
      icon: <RocketOutlined />,
    },
  ]

  const testimonials = [
    {
      name: `Sarah Johnson`,
      designation: `Executive Director, GreenCity Nonprofit`,
      content: `TreeFund Connect revolutionized our grant search process. We've secured funding for three major urban forestry projects in just six months!`,
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: `Michael Chen`,
      designation: `Grant Manager, EcoRestore Foundation`,
      content: `The interactive map feature saved us countless hours. We quickly identified and applied for grants that perfectly matched our reforestation goals.`,
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
    {
      name: `Emily Rodriguez`,
      designation: `Program Officer, Urban Canopy Initiative`,
      content: `As a grantor, TreeFund Connect has dramatically improved the quality of applications we receive. It's a win-win for both sides of the funding equation.`,
      avatar: 'https://randomuser.me/api/portraits/women/27.jpg',
    },
  ]

  const navItems = [
    {
      title: `Features`,
      link: `#features`,
    },
    {
      title: `How It Works`,
      link: `#how-it-works`,
    },
    {
      title: `FAQ`,
      link: `#faq`,
    },
  ]

  const questionAnswers = [
    {
      question: `How does TreeFund Connect help me find grants?`,
      answer: `TreeFund Connect provides an interactive map and comprehensive directory of tree planting grants. You can easily filter by location, grant type, and funding amount to find opportunities that match your project needs.`,
    },
    {
      question: `Is TreeFund Connect free for non-profits?`,
      answer: `Yes, we offer a free basic plan for non-profits. This includes access to our grant directory and map features. Premium features are available through our paid plans.`,
    },
    {
      question: `How often is the grant information updated?`,
      answer: `Our team updates the grant database daily to ensure you have access to the most current information. New opportunities are added as soon as they become available.`,
    },
    {
      question: `Can grantors use TreeFund Connect to post their funding opportunities?`,
      answer: `Absolutely! Grantors can create an account to post their tree planting grants, manage applications, and connect with qualified non-profits directly through our platform.`,
    },
  ]

  const logos = [
    { url: 'https://i.imgur.com/afwBIFK.png' },
    { url: 'https://i.imgur.com/LlloOPa.png' },
    { url: 'https://i.imgur.com/j8jPb4H.png' },
    { url: 'https://i.imgur.com/mJ1sZFv.png' },
  ]

  const steps = [
    {
      heading: `Create Your Profile`,
      description: `Sign up and provide details about your organization and tree planting projects.`,
    },
    {
      heading: `Explore Grants`,
      description: `Use our interactive map and filters to find relevant funding opportunities in your area.`,
    },
    {
      heading: `Apply with Ease`,
      description: `Utilize our streamlined application process to quickly submit your proposals.`,
    },
    {
      heading: `Connect and Grow`,
      description: `Engage with grantors, track your applications, and expand your tree planting initiatives.`,
    },
  ]

  const painPoints = [
    {
      emoji: `🔍`,
      title: `Hours spent searching for relevant grants`,
    },
    {
      emoji: `📊`,
      title: `Overwhelmed by complex application processes`,
    },
    {
      emoji: `⏳`,
      title: `Missed opportunities due to lack of information`,
    },
  ]

  const avatarItems = [
    {
      src: 'https://randomuser.me/api/portraits/men/51.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/9.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/52.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
  ]

  return (
    <LandingContainer navItems={navItems}>
      <LandingHero
        title={`Grow Your Impact: Connect with Tree Planting Grants`}
        subtitle={`TreeFund Connect bridges the gap between non-profits and grant opportunities, empowering you to plant more trees and create a greener future.`}
        buttonText={`Get Started`}
        pictureUrl={`https://marblism-dashboard-api--production-public.s3.us-west-1.amazonaws.com/2h4xvP-treellionairs-wlHp`}
        socialProof={
          <LandingSocialRating
            avatarItems={avatarItems}
            numberOfUsers={1000}
            suffixText={`from happy tree planters`}
          />
        }
      />
      <LandingSocialProof
        logos={logos}
        title={`Trusted by Leading Environmental Organizations`}
      />
      <LandingPainPoints
        title={`The $4 Billion Challenge: Bridging the Funding Gap for 60 Billion Trees`}
        painPoints={painPoints}
      />
      <LandingHowItWorks
        title={`Your Path to Successful Tree Planting Funding`}
        steps={steps}
      />
      <LandingFeatures
        id="features"
        title={`Empowering Your Green Vision with Cutting-Edge Tools`}
        subtitle={`Discover how TreeFund Connect's features can revolutionize your grant seeking process and amplify your tree planting impact.`}
        features={features}
      />
      <LandingTestimonials
        title={`Success Stories: How TreeFund Connect is Changing the Game`}
        subtitle={`Hear from organizations that have transformed their tree planting initiatives with our platform.`}
        testimonials={testimonials}
      />
      <LandingFAQ
        id="faq"
        title={`Got Questions? We've Got Answers`}
        subtitle={`Learn more about how TreeFund Connect can support your tree planting mission.`}
        questionAnswers={questionAnswers}
      />
      <LandingCTA
        title={`Ready to Grow Your Impact?`}
        subtitle={`Join TreeFund Connect today and start planting the seeds for a greener tomorrow.`}
        buttonText={`Start Your Green Journey`}
        buttonLink={`/register`}
      />
    </LandingContainer>
  )
}
