import Header from '@/components/workvyb/Header';
import Hero from '@/components/workvyb/Hero';
import RecentClosures from '@/components/workvyb/RecentClosures';
import Testimonials from '@/components/workvyb/Testimonials';
import Problem from '@/components/workvyb/Problem';
import Solution from '@/components/workvyb/Solution';
import RolesWeHire from '@/components/workvyb/RolesWeHire';
import WhyWorkvyb from '@/components/workvyb/WhyWorkvyb';
import Process from '@/components/workvyb/Process';
import Comparison from '@/components/workvyb/Comparison';
import FAQ from '@/components/workvyb/FAQ';
import FinalCTA from '@/components/workvyb/FinalCTA';
import BottomForm from '@/components/workvyb/BottomForm';
import Footer from '@/components/workvyb/Footer';
import FloatingWhatsApp from '@/components/workvyb/FloatingWhatsApp';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white font-body">
      <Header />
      <main>
        <Hero />
        <RecentClosures />
        <Testimonials />
        <Problem />
        <Solution />
        <RolesWeHire />
        <WhyWorkvyb />
        <Process />
        <Comparison />
        <FAQ />
        <FinalCTA />
        <BottomForm />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default LandingPage;
