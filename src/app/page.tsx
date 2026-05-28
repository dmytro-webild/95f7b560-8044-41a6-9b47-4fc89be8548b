"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTwentyNine from '@/components/sections/feature/featureCardTwentyNine/FeatureCardTwentyNine';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import { AlertCircle, Award, DollarSign, FileText, Image, MapPin, Settings, ShieldCheck, Smile, Star, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="mediumSmall"
        sizing="largeSmall"
        background="noiseDiagonalGradient"
        cardStyle="layered-gradient"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="layered"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "#hero",
        },
        {
          name: "Services",
          id: "#services",
        },
        {
          name: "Why Us",
          id: "#why-us",
        },
        {
          name: "Gallery",
          id: "#gallery",
        },
        {
          name: "FAQ",
          id: "#faq",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      button={{
        text: "Get a Quote",
        href: "#contact",
      }}
      brandName="Alpha Heating & Cooling Llc."
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitTestimonial
      useInvertedBackground={true}
      background={{
        variant: "downward-rays-static-grid",
      }}
      imagePosition="right"
      title="Expert Heating, Cooling & Plumbing Services in Dallas"
      description="Alpha Heating & Cooling Llc. provides reliable and efficient HVAC and plumbing solutions 24/7. Experience unparalleled service from our LGBTQ+ and women-owned business."
      testimonials={[
        {
          name: "Sarah J.",
          handle: "@HomeownerDallas",
          testimonial: "Alpha Heating & Cooling saved us! Our AC went out in July, and they were here within hours. Professional, quick, and super friendly. Highly recommend!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/horizontal-portrait-happy-male-enterpreneur-being-glad-succeed_273609-8635.jpg",
          imageAlt: "Sarah J. testimonial",
        },
        {
          name: "Michael R.",
          handle: "@BizOwnerTX",
          testimonial: "As a local business, reliable HVAC is crucial. Alpha Heating & Cooling handles all our maintenance and emergencies seamlessly. Top-notch service!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-happy-dark-skinned-female-with-curly-bushy-afro-hairstyle-rests-cafe_273609-2873.jpg",
          imageAlt: "Michael R. testimonial",
        },
        {
          name: "Emily C.",
          handle: "@DallasResident",
          testimonial: "They fixed a complex plumbing issue that two other companies couldn't. Professional, knowledgeable, and transparent pricing. Couldn't be happier!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/bearded-grey-haired-elderly-man-wearing-formal-suit_273609-5599.jpg",
          imageAlt: "Emily C. testimonial",
        },
        {
          name: "David L.",
          handle: "@HappyCustomer",
          testimonial: "Had my furnace serviced by Alpha Heating & Cooling. The technician was on time, thorough, and explained everything clearly. Fantastic experience!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/indoor-shot-mixed-race-girlfriend-boyfriend-watch-video-online-via-cell-phone_273609-44867.jpg",
          imageAlt: "David L. testimonial",
        },
        {
          name: "Jessica M.",
          handle: "@LocalFam",
          testimonial: "Outstanding customer service and quality work. From initial contact to completion, every interaction was pleasant. Our go-to for all HVAC needs!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/confident-young-barber-wearing-uniform-glasses-looking-camera-while-keeping-hand-chin-isolated-blue-background_141793-138059.jpg",
          imageAlt: "Jessica M. testimonial",
        },
      ]}
      testimonialRotationInterval={5000}
      tag="Your Comfort, Our Priority"
      tagIcon={Zap}
      tagAnimation="slide-up"
      buttons={[
        {
          text: "Schedule Service",
          href: "#contact",
        },
        {
          text: "Call Us Now",
          href: "tel:+12149458799",
        },
      ]}
      buttonAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/pleased-caucasian-adult-builder-man-uniform-holds-hands-together-looks-up-orange_141793-69273.jpg",
          alt: "Plumbing Technician",
        },
        {
          src: "http://img.b2bpic.net/free-photo/female-engineer-from-middle-east-oil-refinery-wearing-white-hard-hat-hijab-engineer-writes-data-tablet-concept-women-specialists-production_166373-9027.jpg",
          alt: "HVAC Specialist",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-stylish-asian-woman-business-owner-glasses-sitting-cafe-with-notebook-smiling-camera_1258-199055.jpg",
          alt: "Lead Plumber",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-smiling-male-worker-wearing-hard-hat-warehouse_107420-96568.jpg",
          alt: "Customer Service Rep",
        },
        {
          src: "http://img.b2bpic.net/free-photo/pleased-young-male-builder-wearing-uniform-safety-helmet-showing-two-pink_141793-74761.jpg",
          alt: "Friendly Service Technician",
        },
      ]}
      avatarText="Trusted by 130+ homeowners & businesses in Dallas"
      imageSrc="http://img.b2bpic.net/free-photo/plumbing-professional-doing-his-job_23-2150721531.jpg"
      imageAlt="Technician working on an HVAC unit with a confident smile"
      mediaAnimation="slide-up"
      marqueeItems={[
        {
          type: "text-icon",
          text: "24/7 Emergency Service",
          icon: AlertCircle,
        },
        {
          type: "text-icon",
          text: "Licensed & Insured",
          icon: FileText,
        },
        {
          type: "text-icon",
          text: "Transparent Pricing",
          icon: DollarSign,
        },
        {
          type: "text-icon",
          text: "Customer Satisfaction",
          icon: Smile,
        },
        {
          type: "text-icon",
          text: "Local Dallas Experts",
          icon: MapPin,
        },
      ]}
      marqueeSpeed={30}
      showMarqueeCard={true}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentyNine
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      carouselMode="buttons"
      features={[
        {
          title: "AC Repair & Installation",
          description: "Expert diagnostics and efficient installation for all air conditioning systems. Stay cool all summer long.",
          imageSrc: "http://img.b2bpic.net/free-photo/engineer-looks-online-new-blower-fan_482257-75912.jpg",
          imageAlt: "AC repair and installation",
          titleImageSrc: "http://img.b2bpic.net/free-photo/close-up-hvac-system-manometers_482257-90544.jpg",
          buttonText: "Learn More",
        },
        {
          title: "Heating System Services",
          description: "Reliable repair, maintenance, and new installations for furnaces, boilers, and heat pumps. Keeping you warm through the winter.",
          imageSrc: "http://img.b2bpic.net/free-photo/mechanic-using-touchscreen-device_1170-1578.jpg",
          imageAlt: "Heating system services",
          titleImageSrc: "http://img.b2bpic.net/free-photo/electrical-technician-looking-focused-while-working-switchboard-with-fuses_169016-23718.jpg",
          buttonText: "Learn More",
        },
        {
          title: "Residential Plumbing",
          description: "From leaky faucets to drain cleaning and water heater services, our licensed plumbers handle it all with precision.",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-dirty-plates-cups-sink_23-2149363730.jpg",
          imageAlt: "Residential plumbing services",
          titleImageSrc: "http://img.b2bpic.net/free-photo/plumbing-professional-doing-his-job_23-2150721542.jpg",
          buttonText: "Learn More",
        },
        {
          title: "Indoor Air Quality",
          description: "Improve your home's air with duct cleaning, air purifiers, and ventilation solutions for a healthier living environment.",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-people-wearing-helmets_23-2149366666.jpg",
          imageAlt: "Indoor air quality solutions",
          titleImageSrc: "http://img.b2bpic.net/free-photo/electrician-installing-laying-electrical-cables-ceiling-inside-house_169016-55463.jpg",
          buttonText: "Learn More",
        },
        {
          title: "Smart Thermostat Installation",
          description: "Upgrade to a smart thermostat for optimal energy efficiency and convenient control over your home's climate.",
          imageSrc: "http://img.b2bpic.net/free-photo/man-turning-off-thermostat-energy-crisis_23-2150061798.jpg",
          imageAlt: "Smart thermostat installation",
          titleImageSrc: "http://img.b2bpic.net/free-photo/smart-home-tablet-wall_23-2149036900.jpg",
          buttonText: "Learn More",
        },
        {
          title: "Commercial Solutions",
          description: "Specialized HVAC and plumbing services tailored for commercial properties, ensuring minimal disruption to your business.",
          imageSrc: "http://img.b2bpic.net/free-photo/high-tech-laboratory-interior-designed-scientific-innovation_482257-122587.jpg",
          imageAlt: "Commercial HVAC and plumbing",
          titleImageSrc: "http://img.b2bpic.net/free-photo/steel-pipelines-cables-factory-interior-as-nuclear-industry-background-concept_645730-823.jpg",
          buttonText: "Learn More",
        },
      ]}
      title="Comprehensive HVAC & Plumbing Solutions"
      description="From routine maintenance to emergency repairs, Alpha Heating & Cooling Llc. offers a full spectrum of services to keep your home or business comfortable."
      tag="Our Expertise"
      tagIcon={Settings}
    />
  </div>

  <div id="why-us" data-section="why-us">
      <TestimonialAboutCard
      useInvertedBackground={true}
      tag="Why Alpha Heating & Cooling?"
      tagIcon={Star}
      title="Your Trusted Local Experts"
      description="At Alpha Heating & Cooling Llc., we stand for integrity, reliability, and unparalleled customer service. With 24/7 availability, transparent pricing, and a commitment to quality, we ensure your comfort and peace of mind."
      subdescription="We're proud to be an LGBTQ+ and women-owned, Latino-owned business, deeply rooted in the Dallas community. We believe in building lasting relationships through honest work and exceptional care."
      icon={ShieldCheck}
      imageSrc="http://img.b2bpic.net/free-photo/medium-shot-smiley-people-wearing-helmets_23-2149366669.jpg"
      imageAlt="Technician shaking hand with a happy customer"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="gallery" data-section="gallery">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      carouselMode="buttons"
      products={[
        {
          id: "project-1",
          name: "AC Unit Upgrade",
          price: "Dallas, TX",
          variant: "HVAC Installation",
          imageSrc: "http://img.b2bpic.net/free-photo/down-up-view-modern-operational-plant-with-grey-pipes-ladders-heavy-industry-machinery-metalworking-workshop-concept_645730-428.jpg",
          imageAlt: "Newly installed outdoor AC unit",
          rating: 5,
        },
        {
          id: "project-2",
          name: "Commercial Plumbing",
          price: "Dallas, TX",
          variant: "Pipe Fitting",
          imageSrc: "http://img.b2bpic.net/free-photo/modern-kitchen-featuring-terrazzo-countertops-faucet-interior-uses-minimalist-style_169016-72720.jpg",
          imageAlt: "Commercial plumbing installation",
          rating: 5,
        },
        {
          id: "project-3",
          name: "Furnace Replacement",
          price: "Dallas, TX",
          variant: "Heating System",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-people-wearing-helmets-work_23-2149366667.jpg",
          imageAlt: "New furnace installation in a home",
          rating: 5,
        },
        {
          id: "project-4",
          name: "Air Duct Cleaning",
          price: "Dallas, TX",
          variant: "Air Quality",
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-smiley-woman-holding-smartphone_23-2149395804.jpg",
          imageAlt: "Cleaned air ducts in a residential building",
          rating: 5,
        },
        {
          id: "project-5",
          name: "Water Heater Install",
          price: "Dallas, TX",
          variant: "Plumbing",
          imageSrc: "http://img.b2bpic.net/free-photo/coworkers-refill-air-conditioner-freon_482257-90737.jpg",
          imageAlt: "New water heater in a utility closet",
          rating: 5,
        },
        {
          id: "project-6",
          name: "Emergency Repair",
          price: "Dallas, TX",
          variant: "HVAC Service",
          imageSrc: "http://img.b2bpic.net/free-photo/young-male-pointing-house-model-t-shirt-cap-looking-cheerful_176474-16487.jpg",
          imageAlt: "Technician repairing an indoor HVAC unit",
          rating: 5,
        },
      ]}
      title="Our Work: Quality You Can See"
      description="Explore a gallery of our completed HVAC and plumbing projects. We take pride in delivering clean, efficient, and long-lasting solutions for our clients."
      tag="Our Portfolio"
      tagIcon={Image}
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "5.0 Star Rating (137 reviews)",
        "BBB Accredited",
        "LGBTQ+ Friendly",
        "Women-Owned Business",
        "Latino-Owned Business",
        "Google Reviews Preferred",
        "Angie's List Certified",
      ]}
      title="Trusted by the Dallas Community"
      description="Our commitment to quality and service has earned us strong relationships and high ratings across various platforms."
      tag="Community Endorsements"
      tagIcon={Award}
      speed={30}
      showCard={true}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "faq-1",
          title: "What areas do you serve?",
          content: "We proudly serve the greater Dallas, TX metropolitan area, including surrounding communities. Contact us to confirm service availability in your specific location.",
        },
        {
          id: "faq-2",
          title: "Are you available for emergency services?",
          content: "Yes, we offer 24/7 emergency HVAC and plumbing services. You can call us anytime, day or night, for urgent repairs and immediate assistance.",
        },
        {
          id: "faq-3",
          title: "Do you offer free estimates?",
          content: "We provide transparent pricing and can discuss potential costs over the phone for general services. For complex issues, a thorough on-site diagnostic may be required before providing a detailed estimate.",
        },
        {
          id: "faq-4",
          title: "What types of HVAC systems do you service?",
          content: "Our technicians are trained and equipped to service all major brands and types of HVAC systems, including central air conditioning, furnaces, heat pumps, and ductless mini-splits.",
        },
        {
          id: "faq-5",
          title: "Is your company licensed and insured?",
          content: "Absolutely. Alpha Heating & Cooling Llc. is fully licensed, bonded, and insured, giving you peace of mind that you're working with qualified and responsible professionals.",
        },
      ]}
      sideTitle="Frequently Asked Questions"
      sideDescription="Have more questions? Don't hesitate to reach out to our friendly team for personalized assistance."
      buttons={[
        {
          text: "Contact Us Directly",
          href: "#contact",
        },
      ]}
      faqsAnimation="slide-up"
      textPosition="left"
      showCard={true}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={true}
      background={{
        variant: "radial-gradient",
      }}
      text="Ready for Reliable Service? Contact Us Today!"
      buttons={[
        {
          text: "Call Us Now (24/7)",
          href: "tel:+12149458799",
        },
        {
          text: "Schedule Online",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Services",
          items: [
            {
              label: "AC Repair",
              href: "#services",
            },
            {
              label: "Heating Services",
              href: "#services",
            },
            {
              label: "Plumbing",
              href: "#services",
            },
            {
              label: "Air Quality",
              href: "#services",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "Why Us",
              href: "#why-us",
            },
            {
              label: "Gallery",
              href: "#gallery",
            },
            {
              label: "FAQ",
              href: "#faq",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          title: "Contact Info",
          items: [
            {
              label: "1910 Pacific Ave Suite 12000, Dallas, TX 75201",
              href: "https://www.google.com/maps/search/1910+Pacific+Ave+Suite+12000,+Dallas,+TX+75201",
            },
            {
              label: "(214) 945-8799",
              href: "tel:+12149458799",
            },
            {
              label: "alphahvac.site",
              href: "https://alphahvac.site",
            },
          ],
        },
      ]}
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=zkwvw6"
      logoAlt="Alpha Heating & Cooling Llc. Logo"
      logoText="Alpha Heating & Cooling Llc."
      copyrightText="© 2024 Alpha Heating & Cooling Llc. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
