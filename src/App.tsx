import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import WhyChooseUs from './pages/WhyChooseUs';
{/*import Testimonials from './pages/Testimonials'; */}
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <ScrollToTop />

        {/* 🔹 Background Wrapper */}
        <div className="relative min-h-screen">
          {/* Background image with opacity */}
          <div className="fixed inset-0 bg-[url('/images/Background.png')] bg-cover bg-center bg-no-repeat opacity-90"></div>

          {/* All routes & content */}
          <div className="relative z-10 backdrop-blur-sm">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/why-choose-us" element={<WhyChooseUs />} />
              {/* <Route path="/testimonials" element={<Testimonials />} /> */}
              <Route path="/products/:category" element={<ProductList />} />
              <Route path="/products/:category/:productId" element={<ProductDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/welcome" element={<Index />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
