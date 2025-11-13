import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu } from "lucide-react";

const categories = [
  {
    title: "Laptops",
    path: "/products/laptops",
  },
  {
    title: "Desktops",
    path: "/products/desktops",
  },
  {
    title: "Other IT Goods",
    path: "/products/other-goods",
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const NavigationMenuDemo = () => {
    return (
      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList>
          {/* Home */}
          <NavigationMenuItem>
            <Link to="/">
              <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900">
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          {/* Products */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Our Products</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {categories.map((category) => (
                  <li key={category.title} className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-slate-50 to-slate-100 p-6 no-underline outline-none focus:shadow-md"
                        to={category.path}
                      >
                        <div className="mb-2 mt-4 text-lg font-medium hover:text-slate-900">
                          {category.title}
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* IT Services */}
          <NavigationMenuItem>
            <Link to="/services">
              <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900">
                IT Services
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          {/* Why Choose Us */}
          <NavigationMenuItem>
            <Link to="/why-choose-us">
              <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900">
                Why Choose Us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          {/* Testimonials 
          <NavigationMenuItem>
            <Link to="/testimonials">
              <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900">
                Testimonials
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem> */}

          {/* About */}
          <NavigationMenuItem>
            <Link to="/about">
              <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900">
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          {/* Contact */}
          <NavigationMenuItem>
            <Link to="/contact">
              <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900">
                Contact
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img
              src="/images/logo.png"
              alt="Furtherance Technotree"
              className="h-16 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <NavigationMenuDemo />

        {/* Mobile Nav */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 mt-6">
              <Link to="/" onClick={() => setIsOpen(false)}>
                <Button variant="ghost" className="w-full justify-start">
                  Home
                </Button>
              </Link>
              <Link to="/about" onClick={() => setIsOpen(false)}>
                <Button variant="ghost" className="w-full justify-start">
                  About
                </Button>
              </Link>

              {/* Products for Mobile */}
              <div className="space-y-2">
                <h3 className="font-medium text-sm px-4">Our Products</h3>
                <div className="pl-4 space-y-1">
                  {categories.map((category) => (
                    <Link
                      key={category.title}
                      to={category.path}
                      onClick={() => setIsOpen(false)}
                    >
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-sm"
                      >
                        {category.title}
                      </Button>
                    </Link>
                  ))}
                </div>
              </div>

              <Link to="/services" onClick={() => setIsOpen(false)}>
                <Button variant="ghost" className="w-full justify-start">
                  IT Services
                </Button>
              </Link>
              <Link to="/why-choose-us" onClick={() => setIsOpen(false)}>
                <Button variant="ghost" className="w-full justify-start">
                  Why Choose Us
                </Button>
              </Link>
              <Link to="/testimonials" onClick={() => setIsOpen(false)}>
                <Button variant="ghost" className="w-full justify-start">
                  Testimonials
                </Button>
              </Link>
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Button variant="ghost" className="w-full justify-start">
                  Contact
                </Button>
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
