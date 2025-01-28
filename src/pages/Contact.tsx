import React from 'react';
import { AnimatedContainer, BasicContainer } from '@/components/Containers';
import ContactForm from '@/components/ContactForm';

const Contact: React.FC = () => {
  return (
    <AnimatedContainer delay={100}>
        <BasicContainer className="border-none">
        <h3 className="text-3xl md:text-5xl text-[var(--white)] lexend-deca-700 md:text-left mb-2 w-full" id="projects">
            CONTACT ME
        </h3>
        <h2 className="text-2xl text-gray-400 lexend-deca-300">I'd be happy to hear from you!</h2>
        <ContactForm></ContactForm>
        </BasicContainer>
    </AnimatedContainer>
  );
};

export default Contact;