import { AnimatedTestimonials } from "../aceternity/animated-testimonials";
import Title from "./Title";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Resolve issues like booking errors or bike problems",
      name: "Bibek Bashyal",
      designation: "Support Agent",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Answers booking/payment questions Assists in profile recovery or technical glitches",
      name: "Michael Rodriguez",
      designation: "Customer Support Executive",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Takes professional photos of bikes for the website/app",
      name: "Emily Watson",
      designation: "Photographer / Content Creator",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Delivers bikes to customer-specified locations,Picks up bikes after rental completion",
      name: "James Kim",
      designation: "Delivery Personnel / Pickup Agent",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Runs online ad campaigns (Google, Facebook, Instagram) Creates SEO-optimized blog or social media content",
      name: "Lisa Thompson",
      designation: "Marketing Specialist",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
  <>
   <div className="py-20">
    <Title title='Operation Teams' subTitle='Beyond the Ride: The People Who Make It Happen' />
    <AnimatedTestimonials testimonials={testimonials} />
   </div>
  </>
  
  )
}
