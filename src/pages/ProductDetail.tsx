import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ChevronRight, ShieldCheck, Truck, RotateCcw } from "lucide-react";
import formatPrice from "@/utils/formatPrice"; // add at top of file
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Sample product data (in a real app, this would come from an API or database)
const allProducts = {
  laptops: [
    {
      id: "1",
      name: "HP 435 G8",
      price: 28999,
      brand: "HP",
      processor: "Ryzen 7",
      memory: "16GB DDR4",
      storage: "512GB NVMe SSD",
      display: "14-inch FHD (1920 x 1080) Anti-Glare",
      graphics: "AMD Redeon(TM) Graphics",
      operatingSystem: "Windows 11 Pro",
      battery: "45 Wh Rechargeable Li-Polymer Battery",
      ports: ["2x USB 3.2", "1x HDMI", "1x type C", "1x SD Card Reader", "1x Audio Jack"],
      condition: "Excellent",
      warranty: "1 Month",
      description: "The Hp Probook 435 G8 is a business-class laptop that offers excellent performance and reliability. This refurbished model has been thoroughly tested and restored to like-new condition. It features a fast Intel Core i5 processor, ample memory, and a speedy SSD for smooth multitasking and productivity. The 14-inch Full HD display provides crisp visuals for all your tasks, while the durable build quality ensures longevity. Perfect for business professionals or anyone needing a reliable laptop for everyday use.",
      images: [
        "/images/R7/R76.png",
        "/images/R7/R71.png",
        "/images/R7/R72.png",
        "/images/R7/R73.png",
        "/images/R7/R74.png",
        "/images/R7/R77.png",
      ],
      features: [
        "Business-grade durability",
        "360° Rotate",
        "Enhanced security features",
        "Long battery life",
        "Excellent keyboard with back light",
        "Wide range of connectivity options"
      ],
      specifications: [
        { name: "Processor", value: "Ryzen 7 (5850U 1.90 Ghz)" },
        { name: "Memory", value: "16GB DDR4-3200MHz" },
        { name: "Storage", value: "512GB PCIe NVMe SSD" },
        { name: "Display", value: "14-inch FHD (1920 x 1080) Touch Screen/360° Rotate" },
        { name: "Graphics", value: "AMD Radeon(TM) Graphics" },
        { name: "Operating System", value: "Windows 11 Pro 64-bit" },
        { name: "Battery", value: "45 Wh Rechargeable Li-Polymer Battery" },
        { name: "Webcam", value: "720p HD camera" },
        { name: "Audio", value: "Stereo speakers with Waves MaxxAudio Pro" },
        { name: "Wireless", value: "Wi-Fi 6 (802.11ax) and Bluetooth 5.1" },
        { name: "Dimensions", value: "30.85 x 22.29 x 1.79 cm" },
        { name: "Port", value: "1x type C, 2x USB 3.0, 1x HDMI, 1x SD Card Reader, 1x Audio Jack" },
        { name: "Weight", value: "1.45 kg (3.19 lbs)" }
      ]
    },
    {
      id: "2",
      name: "Dell Latitude 7420",
      price: 37999,
      brand: "Dell",
      processor: "Intel Core i7-1185G7",
      memory: "16GB DDR4",
      storage: "M.2 512GB PCIe NVMe Class 40 Solid State Drive",
      display: "14-inch FHD (1920 x 1080) IPS",
      graphics: "Intel Iris Xe Graphics",
      operatingSystem: "Windows 11 Pro",
      battery: "1 Lithium Ion batterie",
      ports: ["2x type C", "1x USB 3.0", "1x HDMI", "1x SD Card Reader", "1x Audio Jack"],
      condition: "Excellent",
      warranty: "1 Month",
      description: "The Dell Latitude 7420 is a premium business-class laptop built for performance and reliability. Powered by Intel Core processors, it offers fast and efficient multitasking with ample memory and a speedy SSD. The 14-inch Full HD display delivers crisp and clear visuals, while its slim and durable design makes it ideal for professionals on the go. With strong security features and long battery life, the Latitude 7420 is a dependable choice for both work and travel.",
      images: [
        "/images/Dell_7420/1.png",
        "/images/Dell_7420/2.png",
        "/images/Dell_7420/3.png",
        "/images/Dell_7420/4.png",
        "/images/Dell_7420/5.png"
      ],
      features: [
        "Powered by Intel Core processors (up to i7)",
        "14-inch Full HD display with slim bezels",
        "Premium lightweight and durable build",
        "Long battery life with ExpressCharge support",
        "Advanced security features including fingerprint reader & IR camera",
        "Business-class reliability with Dell Optimizer for performance"
      ],
      specifications: [
        { name: "Processor", value: "Intel Core i7-1185G7" },
        { name: "Memory", value: "16GB DDR4-2666MHz" },
        { name: "Storage", value: "M.2 512GB PCIe NVMe Class 40 Solid State Drive" },
        { name: "Display", value: "14-inch FHD (1920 x 1080) Touch Screen/360° Rotate" },
        { name: "Graphics", value: "Intel Iris Xe Graphics" },
        { name: "Operating System", value: "Windows 11 Pro 64-bit" },
        { name: "Battery", value: "1 Lithium Ion batterie" },
        { name: "Webcam", value: "7HD RGB Cam" },
        { name: "Audio", value: "Bang & Olufsen tuned speakers" },
        { name: "Wireless", value: "Wi-Fi 6 (802.11ax) and Bluetooth 5.0" },
        { name: "Dimensions", value: "6.4 x 34 x 40.4 cm" },
        { name: "Port", value: "2x type C, 1x USB 3.0, 1x HDMI, 1x SD Card Reader, 1x Audio Jack" },
        { name: "Weight", value: "2.38 kg" }
      ]
    },
    {
      id: "3",
      name: "Dell Latitude 5310",
      price: 27499,
      brand: "Dell",
      processor: "Core i7 10th Gen 10610U @ 1.8GHz - Quad Core",
      memory: "16GB DDR4",
      storage: "256 GB NVMe M.2 Solid State Drive",
      display: "13.3 Inches FHD - (1920x1080)",
      graphics: "Integrated Graphics",
      operatingSystem: "Windows 11 Pro",
      battery: "1 Lithium Ion batterie",
      ports: ["1x type C", "2x USB 3.0", "1x HDMI", "1x SD Card Reader", "1x Audio Jack"],
      condition: "Excellent",
      warranty: "1 Month",
      description: "Refurbished Dell Latitude 5310 is a compact and reliable business laptop designed for productivity on the go. Powered by a 10th Gen Intel Core i7 processor, it delivers excellent performance for multitasking, supported by 16GB of RAM and a fast 256GB SSD for quick boot times and smooth workflow. Its 13.3-inch Full HD display offers crisp visuals, while the lightweight and durable build makes it ideal for professionals who need power and portability. With strong security features and long-lasting battery life, the Latitude 5310 is a dependable partner for business and everyday tasks.",
      images: [
        "/images/Dell_5310/1.png",
        "/images/Dell_5310/2.png",
        "/images/Dell_5310/3.png",
        "/images/Dell_5310/4.png",
        "/images/Dell_5310/5.png",
        "/images/Dell_5310/6.png",
        "/images/Dell_5310/7.png",
        "/images/Dell_5310/8.png",
        "/images/Dell_5310/9.png",
      ],
      features: [
        "Intel Core i7 10th Gen processor for strong performance",
        "16GB RAM and 256GB SSD for seamless multitasking & storage",
        "13.3-inch Full HD display with vibrant clarity",
        "Compact and lightweight design for portability",
        "Enhanced security with fingerprint reader & TPM chip",
        "Long battery life with Dell ExpressCharge technology"
      ],
      specifications: [
        { name: "Processor", value: "Core i7 10th Gen 10610U @ 1.8GHz - Quad Core" },
        { name: "Memory", value: "16GB DDR4-2666MHz" },
        { name: "Storage", value: "256 GB NVMe M.2 Solid State Drive" },
        { name: "Display", value: "13.3 Inches FHD - (1920x1080) Touch Screen/360° Rotate" },
        { name: "Graphics", value: "Intel Iris Xe Graphics" },
        { name: "Operating System", value: "Windows 11 Pro 64-bit" },
        { name: "Battery", value: "1 Lithium Ion batterie" },
        { name: "Webcam", value: "HD resolution (1280 x 720) at 30 fps" },
        { name: "Audio", value: "Audio codec integrated" },
        { name: "Wireless", value: "Wi-Fi 6 (802.11ax) and Bluetooth 5.0" },
        { name: "Dimensions", value: "305.70 x 207.50 x 19.72 mm" },
        { name: "Port", value: "1x type C, 2x USB 3.0, 1x HDMI, 1x SD Card Reader, 1x Audio Jack" },
        { name: "Weight", value: "1.24 kg (2.73 lb)" }
      ]
    },
    {
      id: "4",
      name: "Apple MacBook Air",
      price: 41999,
      brand: "Apple",
      processor: "M1",
      memory: "8GB unified memory",
      storage: "256GB SSD",
      display: "13-inch Retina display 13.3-inch (diagonal) LED-backlit display with IPS technology; 2560x1600 native resolution at 227 pixels per inch with support for millions of colours",
      operatingSystem: "macOS",
      battery: "Up to 15 hours wireless web, Built-in 49.9-watt-hour lithium-polymer battery,Up to 18 hours Apple TV app movie playback, 30W USB-C Power Adapter",
      ports: ["2x C-type USB 3.2", "1x Audio Jack"],
      condition: "Excellent",
      warranty: "1 Month",
      description: "The Apple MacBook Air with M1 chip is a sleek and powerful laptop designed for everyday performance. This model comes with 8GB of RAM and a fast 256GB SSD, ensuring smooth multitasking and quick access to your files. The brilliant Retina display delivers sharp, vibrant visuals, while the lightweight and durable design makes it perfect for work, study, or travel. With long-lasting battery life and energy-efficient performance, it's an ideal choice for professionals and students alike.",
      images: [
        "/images/m1_air_silver/m11.png",
        "/images/m1_air_silver/m12.png",
        "/images/m1_air_silver/m13.png",
        "/images/m1_air_silver/m14.png",
        "/images/m1_air_silver/m15.png",
      ],
      features: [
        "Apple M1 chip with 8-core CPU for fast performance",
        "Brilliant 13.3-inch Retina display with True Tone",
        "Lightweight, fanless design for silent operation",
        "All-day battery life (up to 8 hours, varies by use)",
        "macOS with free apps like iMovie, GarageBand, Pages & more",
        "Wide range of connectivity options",
        "Energy efficient and made with recycled aluminum"
      ],
      specifications: [
        { name: "Processor", value: "M1 : 8-core CPU with 4 performance cores and 4 efficiency cores, 7-core GPU, 16-core Neural Engine, 8-core GPU" },
        { name: "Memory", value: "8GB unified memory" },
        { name: "Storage", value: "256GB SSD" },
        { name: "Display", value: "13-inch Retina display 13.3-inch (diagonal) LED-backlit display with IPS technology; 2560x1600 native resolution at 227 pixels per inch with support for millions of colours" },
        { name: "Graphics", value: "AMD Radeon(TM) Graphics" },
        { name: "Operating System", value: "macOS" },
        { name: "Battery", value: "Up to 15 hours wireless web, Built-in 49.9-watt-hour lithium-polymer battery,Up to 18 hours Apple TV app movie playback, 30W USB-C Power Adapter" },
        { name: "Webcam", value: "720p HD camera" },
        { name: "Audio", value: "Stereo speakers with Waves MaxxAudio Pro" },
        { name: "Wireless", value: "Wi-Fi 6 (802.11ax) and Bluetooth 5.1" },
        { name: "Dimensions", value: "30.85 x 22.29 x 1.79 cm" },
        { name: "Port", value: "2x type C, 1x Audio Jack" },
        { name: "Weight", value: "1.45 kg (3.19 lbs)" }
      ]
    },
    {
      id: "5",
      name: "HP Elitebook 840 G5",
      price: 26499,
      brand: "HP",
      processor: "Intel Core i7-8650U",
      memory: "16GB DDR4",
      storage: "512GB PCIe NVMe M.2 SSD",
      display: "14 IPS Full HD FHD (1920 x 1080 pixels)",
      graphics: "Integrated Intel UHD Graphics",
      operatingSystem: "Windows 11 Pro",
      battery: "1 Lithium Ion batterie",
      ports: ["1x type C", "2x USB 3.0", "1x HDMI", "1x Lan", "1x Audio Jack"],
      condition: "Excellent",
      warranty: "1 Month",
      description: "The HP EliteBook 840 G5 is a premium business-class laptop designed with performance, security, and portability in mind. Powered by an 8th Gen Intel Core i7 processor with 16GB of RAM and a fast 256GB SSD, it ensures smooth multitasking and reliable performance throughout the day. The 14-inch Full HD display with narrow bezels provides crisp and vibrant visuals, while the sleek aluminum chassis offers both style and durability. With enterprise-grade security features and excellent battery life, the EliteBook 840 G5 is perfect for professionals who demand both productivity and mobility.",
      images: [
        "/images/hp_840_G5/1.png",
        "/images/hp_840_G5/2.png",
        "/images/hp_840_G5/3.png",
        "/images/hp_840_G5/4.png",
        "/images/hp_840_G5/5.png",
        "/images/hp_840_G5/6.png"
      ],
      features: [
        "Intel Core i7-8650U 8th Gen processor with solid performance",
        "16GB RAM and 256GB SSD for smooth multitasking & fast storage",
        "14-inch Full HD anti-glare display with sharp visuals",
        "Premium aluminum chassis with durable build quality",
        "Enterprise-level security with HP Sure Start & TPM chip",
        "Long battery life with HP Fast Charge technology"
      ],
      specifications: [
        { name: "Processor", value: "Intel Core i7-8650U" },
        { name: "Memory", value: "16GB DDR4-2666MHz" },
        { name: "Storage", value: "512GB PCIe NVMe M.2 SSD" },
        { name: "Display", value: "14 IPS Full HD FHD (1920 x 1080 pixels)" },
        { name: "Graphics", value: "Integrated Intel UHD Graphics" },
        { name: "Operating System", value: "Windows 11 Pro 64-bit" },
        { name: "Battery", value: "1 Lithium Ion batterie" },
        { name: "Webcam", value: "HD resolution (1280 x 720) at 30 fps" },
        { name: "Audio", value: "Audio codec integrated" },
        { name: "Wireless", value: "Wi-Fi (802.11ac) and Bluetooth 5.0" },
        { name: "Dimensions", value: "23.62 x 33.78 x 1.88 cm" },
        { name: "Port", value: "1x type C, 2x USB 3.0, 1x HDMI, 1x Lan, 1x Audio Jack" },
        { name: "Weight", value: "1 kg 480 g" }
      ]
    },
    {
      id: "6",
      name: "Apple MacBook Pro",
      price: 47999,
      brand: "Apple",
      processor: "Intel Core i9 2019",
      memory: "32GB DDR4",
      storage: "1 TB SSD",
      display: "16 inch Quad HD LED Backlit IPS Retina",
      graphics: "4 GB Graphics",
      operatingSystem: "Mac OS",
      battery: "Lithium Ion batterie",
      ports: ["4x type C", "1x Audio Jack"],
      condition: "Excellent",
      warranty: "1 Month",
      description: "The Apple MacBook Pro 16-inch (2019) is a powerhouse laptop built for professionals who need uncompromising performance. Equipped with a 9th Gen Intel Core processor, 32GB of RAM, and a fast 1TB SSD, it delivers seamless multitasking and lightning-fast responsiveness. The dedicated 4GB graphics card ensures smooth rendering for creative tasks, video editing, and design work. Featuring a stunning 16-inch Retina display with True Tone and wide color (P3), it offers breathtaking visuals for work or entertainment. With its premium aluminum build, immersive six-speaker sound system, and long-lasting battery life, the MacBook Pro 16 is the ultimate choice for creators and power users.",
      images: [
        "/images/MacBookProi9/1.png",
        "/images/MacBookProi9/2.png",
        "/images/MacBookProi9/3.png",
        "/images/MacBookProi9/4.png",
        "/images/MacBookProi9/5.png"
      ],
      features: [
        "16-inch Retina display with True Tone & wide P3 color",
        "9th Gen Intel Core processor with exceptional performance",
        "32GB RAM and 1TB SSD for professional-grade multitasking & storage",
        "Dedicated 4GB graphics card for smooth video editing & design",
        "Premium aluminum unibody with immersive six-speaker audio",
        "macOS with advanced apps for productivity & creativity"
      ],
      specifications: [
        { name: "Processor", value: "Intel Core i9 2019" },
        { name: "Memory", value: "32GB DDR4" },
        { name: "Storage", value: "1 TB SSD" },
        { name: "Display", value: "16 inch Quad HD LED Backlit IPS Retina" },
        { name: "Graphics", value: "4 GB Graphics" },
        { name: "Operating System", value: "macOS" },
        { name: "Battery", value: "100 WHr Lithium Polymer Battery" },
        { name: "Webcam", value: "720p FaceTime HD Webcam" },
        { name: "Audio", value: "Audio codec integrated" },
        { name: "Wireless", value: "IEEE 802.11a/b/g/n/ac" },
        { name: "Dimensions", value: "357.9 x 245.9 x 16.2 mm" },
        { name: "Port", value: "4x type C, 1x Audio Jack" },
        { name: "Weight", value: "2 kg" }
      ]
    },
    {
      id: "7",
      name: "Dell Latitude 3400",
      price: 18499,
      brand: "Dell",
      processor: "Intel Core i7-8565U 1.8 GHz",
      memory: "8GB DDR4",
      storage: "256 GB SSD",
      display: "14 inch UHD",
      graphics: "Integrated Intel UHD Graphics",
      operatingSystem: "Windows 10 pro",
      battery: "Lithium Ion batterie",
      ports: ["1x type C", "3x USB", "1x HDMI", "1xSD", "1x VGA", "1x LAN", "1x Audio Jack"],
      condition: "Excellent",
      warranty: "1 Month",
      description: "The Dell Latitude 3400 is a compact and dependable business laptop designed for performance and mobility. Powered by an 8th Gen Intel Core i7 processor, paired with 8GB of RAM and a fast 256GB SSD, it delivers smooth multitasking and responsive performance for work or study. The 14-inch Full HD display offers crisp and vibrant visuals, while the lightweight and durable build makes it easy to carry on the go. With long battery life, ExpressCharge support, and Dell’s trusted reliability, the Latitude 3400 is an excellent choice for professionals and students alike.",
      images: [
        "/images/dell_3400/1.png",
        "/images/dell_3400/2.png",
        "/images/dell_3400/3.png",
        "/images/dell_3400/4.png",
        "/images/dell_3400/5.png"
      ],
      features: [
        "Intel Core i7 8th Gen processor for powerful performance",
        "8GB RAM and 256GB SSD for efficient multitasking & storage",
        "14-inch Full HD display with sharp clarity",
        "Slim and durable design for everyday mobility",
        "Long battery life with ExpressCharge fast charging",
        "Reliable Dell build quality with business-ready features"
      ],
      specifications: [
        { name: "Processor", value: "Intel Core i7-8565U 1.8 GHz" },
        { name: "Memory", value: "8GB DDR4" },
        { name: "Storage", value: "256 GB SSD" },
        { name: "Display", value: "14 inch 14 inch UHD" },
        { name: "Graphics", value: "Integrated Intel UHD Graphics" },
        { name: "Operating System", value: "Windows 10 Pro" },
        { name: "Battery", value: "Lithium Polymer Battery" },
        { name: "Webcam", value: "HD resolution (1280 x 720) at 30 fps" },
        { name: "Audio", value: "Audio codec integrated" },
        { name: "Wireless", value: "Wi-Fi 6 (802.11ax) and Bluetooth 5.0" },
        { name: "Dimensions", value: "19 x 14 x 3 inches" },
        { name: "Port", value: "1x type C, 3x USB, 1x HDMI, 1xSD, 1x VGA, 1x LAN, 1x Audio Jack" },
        { name: "Weight", value: "7 pounds" }
      ]
    },
    {
      id: "8",
      name: "Dell Latitude 3420",
      price: 28499,
      brand: "Dell",
      processor: "Intel Core i5-1135G7 1.38 GHz",
      memory: "16GB DDR4",
      storage: "256 GB SSD + 1 TB HDD",
      display: "14 inch UHD",
      graphics: "Integrated Intel UHD Graphics",
      operatingSystem: "Windows 10 pro",
      battery: "Lithium Ion batterie",
      ports: ["1x type C", "3x USB", "1x HDMI", "1x Micro SD", "1x LAN", "1x Audio Jack"],
      condition: "Excellent",
      warranty: "1 Month",
      description: "The Dell Latitude 3420 is a modern and efficient business laptop built for productivity and reliability. Powered by an 11th Gen Intel Core i5 processor with 8GB of RAM, it delivers smooth performance for everyday multitasking. With a fast 256GB SSD for quick boot times and an additional 1TB HDD for large file storage, it combines speed with ample capacity. The 14-inch Full HD display ensures clear and vibrant visuals, while the slim and durable design makes it easy to carry for work or study. Offering long battery life, advanced connectivity options, and Dell's trusted durability, the Latitude 3420 is a perfect balance of performance and storage.",
      images: [
        "/images/Dell_3420/1.png",
        "/images/Dell_3420/2.png",
        "/images/Dell_3420/3.png",
        "/images/Dell_3420/4.png",
        "/images/Dell_3420/5.png",
        "/images/Dell_3420/6.png",
        "/images/Dell_3420/7.png",
      ],
      features: [
        "Intel Core i5 11th Gen processor for efficient performance",
        "8GB RAM and 256GB SSD for efficient multitasking & storage",
        "8GB RAM with 256GB SSD + 1TB HDD for speed & storage capacity",
        "14-inch Full HD display with vivid clarity",
        "Slim, lightweight, and durable design for portability",
        "Long battery life with ExpressCharge fast charging",
        "Reliable Dell business-class build quality"
      ],
      specifications: [
        { name: "Processor", value: "Intel Core i5-1135G7 1.38 GHz" },
        { name: "Memory", value: "16GB DDR4" },
        { name: "Storage", value: "256 GB SSD + 1 TB HDD" },
        { name: "Display", value: "14 inch UHD" },
        { name: "Graphics", value: "Integrated Intel UHD Graphics" },
        { name: "Operating System", value: "Windows 10 Pro" },
        { name: "Battery", value: "Lithium Polymer Battery" },
        { name: "Webcam", value: "HD resolution (1280 x 720) at 30 fps" },
        { name: "Audio", value: "Audio codec integrated" },
        { name: "Wireless", value: "Wi-Fi 6 (802.11ax) and Bluetooth 5.0" },
        { name: "Dimensions", value: "19 x 14 x 3 inches" },
        { name: "Port", value: "1x type C, 3x USB, 1x HDMI, 1x Micro SD, 1x LAN, 1x Audio Jack" },
        { name: "Weight", value: "7 pounds" }
      ]
    },
    {
      id: "9",
      name: "Dell Latitude 5300",
      price: 24499,
      brand: "Dell",
      processor: "Core i7 8th Gen xxxxx @ 1.8GHz - Quad Core",
      memory: "16GB DDR4",
      storage: "256 GB NVMe M.2 Solid State Drive",
      display: "13.3 Inches FHD - (1920x1080)",
      graphics: "Integrated Graphics",
      operatingSystem: "Windows 11 Pro",
      battery: "1 Lithium Ion batterie",
      ports: ["1x type C", "2x USB 3.0", "1x HDMI", "1x Audio Jack"],
      condition: "Excellent",
      warranty: "1 Month",
      description: "The Dell Latitude 5300 2-in-1 is a premium business laptop that combines powerful performance with flexible design. Powered by an 11th Gen Intel Core i7 processor, 16GB of RAM, and a fast 256GB SSD, it ensures smooth multitasking and responsive performance. Its 13.3-inch Full HD touchscreen with 360° revolving hinge allows you to use it as a laptop or tablet, offering ultimate versatility for work and presentations. Built with a slim and durable design, it provides portability without compromise. With long battery life, advanced security, and modern connectivity, the Latitude 5300 2-in-1 is the perfect device for professionals who need performance and flexibility on the go.",
      images: [
        "/images/Dell_5300/1.png",
        "/images/Dell_5300/2.png",
        "/images/Dell_5300/3.png",
        "/images/Dell_5300/4.png",
        "/images/Dell_5300/5.png",
        "/images/Dell_5300/6.png"    
      ],
      features: [
        "Intel Core i7 11th Gen processor for powerful performance",
        "16GB RAM and 256GB SSD for smooth multitasking & storage",
        "13.3-inch Full HD touchscreen with 360° hinge (convertible laptop/tablet)",
        "Slim and durable business-class design",
        "Long battery life with ExpressCharge fast charging",
        "Enhanced security and modern connectivity options"
      ],
      specifications: [
        { name: "Processor", value: "Core i7 10th Gen 10610U @ 1.8GHz - Quad Core" },
        { name: "Memory", value: "16GB DDR4-2666MHz" },
        { name: "Storage", value: "256 GB NVMe M.2 Solid State Drive" },
        { name: "Display", value: "13.3 Inches FHD - (1920x1080) Touch Screen/360° Rotate" },
        { name: "Graphics", value: "Intel Iris Xe Graphics" },
        { name: "Operating System", value: "Windows 11 Pro 64-bit" },
        { name: "Battery", value: "1 Lithium Ion batterie" },
        { name: "Webcam", value: "HD resolution (1280 x 720) at 30 fps" },
        { name: "Audio", value: "Audio codec integrated" },
        { name: "Wireless", value: "Wi-Fi 6 (802.11ax) and Bluetooth 5.0" },
        { name: "Dimensions", value: "305.70 x 207.50 x 19.72 mm" },
        { name: "Port", value: "1x type C, 2x USB 3.0, 1x HDMI, 1x Audio Jack" },
        { name: "Weight", value: "1.24 kg (2.73 lb)" }
      ]
    },
  ],
  desktops: [
    {
      id: "117",
      name: "Dell OptiPlex 7070",
      price: 499.99,
      brand: "Dell",
      processor: "Intel Core i5-9500",
      memory: "16GB DDR4",
      storage: "512GB SSD",
      graphics: "Intel UHD Graphics 630",
      operatingSystem: "Windows 10 Pro",
      ports: ["8x USB 3.1", "2x DisplayPort", "1x HDMI", "1x RJ-45"],
      condition: "Excellent",
      warranty: "1 Month",
      description: "The Dell OptiPlex 7070 is a business-class desktop that offers excellent performance in a compact form factor. This refurbished model comes with an Intel Core i5 processor, 16GB of RAM, and a fast 512GB SSD, making it perfect for office productivity tasks. The system includes Windows 10 Pro and has a variety of ports for connectivity. The reliable OptiPlex design ensures durability and ease of maintenance. Ideal for small to medium businesses or home office use.",
      images: [
        "https://images.unsplash.com/photo-1593640408182-31c2bd3f3f33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
        "https://images.unsplash.com/photo-1587202372616-b43abea06c2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
        "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      ],
      features: [
        "Space-saving design",
        "Tool-less chassis for easy upgrades",
        "TPM security chip",
        "Energy efficient",
        "Quiet operation"
      ],
      specifications: [
        { name: "Processor", value: "Intel Core i5-9500 (9MB Cache, up to 4.4 GHz)" },
        { name: "Memory", value: "16GB DDR4-2666MHz" },
        { name: "Storage", value: "512GB SATA SSD" },
        { name: "Graphics", value: "Intel UHD Graphics 630" },
        { name: "Operating System", value: "Windows 10 Pro 64-bit" },
        { name: "Expansion Slots", value: "1x PCIe x16, 2x PCIe x1, 1x PCI" },
        { name: "Audio", value: "Integrated High Definition Audio" },
        { name: "Network", value: "Integrated Intel Gigabit Ethernet" },
        { name: "Dimensions", value: "290 x 92.6 x 292.8 mm" },
        { name: "Weight", value: "5.26 kg (11.6 lbs)" }
      ]
    }
  ]
};

export default function ProductDetail() {
  const { category = "laptops", productId } = useParams<{ category: string; productId: string }>();
  const [quantity, setQuantity] = useState(1);
  
  // Find the product in the appropriate category
  const products = allProducts[category as keyof typeof allProducts] || [];
  const product = products.find(p => p.id === productId);

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <p className="mb-6">The product you're looking for does not exist or has been removed.</p>
          <Link to={`/products/${category}`}>
            <Button>Back to Products</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <ChevronRight className="h-4 w-4" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to={`/products/${category}`}>{category.charAt(0).toUpperCase() + category.slice(1)}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <ChevronRight className="h-4 w-4" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink>{product.name}</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Product Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <Carousel className="w-full">
              <CarouselContent>
                {product.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <div className="overflow-hidden rounded-lg border border-slate-200">
                        <img 
                          src={image} 
                          alt={`${product.name} - Image ${index + 1}`} 
                          className="w-full aspect-video object-cover"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
            
            <div className="flex gap-2 overflow-auto">
              {product.images.map((image, index) => (
                <div key={index} className="w-24 h-24 flex-shrink-0 rounded-md overflow-hidden border border-slate-200">
                  <img 
                    src={image} 
                    alt={`${product.name} - Thumbnail ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm bg-slate-200 text-black-400 px-2 py-1 rounded">
                  {product.condition} Condition
                </span>
                <span className="text-sm text-black-600">Brand: {product.brand}</span>
              </div>
              <div className="text-2xl font-bold text-blue-600 mb-4">
  {formatPrice(product.price)}
</div>
              <p className="text-black-400 mb-6">
                {product.description}
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 bg-slate-100 text-blue-600" />
                  <span>{product.warranty} Warranty</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="h-5 w-5 bg-slate-100 text-blue-600" />
                  <span>Free shipping on orders over ₹1500</span>
                </div>
                <div className="flex items-center gap-2">
                  <RotateCcw className="h-5 w-5 bg-slate-100 text-blue-600" />
                  <span>30-day replacement policy</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div>
                    <label htmlFor="quantity" className="block text-sm font-medium mb-1">
                      Quantity
                    </label>
                    <select
                      id="quantity"
                      value={quantity}
                      onChange={(e) => setQuantity(parseInt(e.target.value))}
                      className="border border-slate-300 rounded-md p-2 w-16"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ))}
                    </select>
                  </div>
                  <a
  href={`https://wa.me/919893567595?text=Hi, I want to buy ${product.name} for ${formatPrice(product.price)}`}
  target="_blank"
  rel="noopener noreferrer"
  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg inline-block text-center"
>
  Buy on WhatsApp
</a>
                </div>
                <Button variant="outline" size="lg" className="w-full">
                  Request Quote
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section for Details */}
        <Tabs defaultValue="specifications" className="mb-12">
          <TabsList className="mb-6">
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="warranty">Warranty & Returns</TabsTrigger>
          </TabsList>
          <TabsContent value="specifications" className="p-6 bg-white border border-blue-200 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Technical Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.specifications?.map((spec, index) => (
                <div key={index} className="flex">
                  <span className="font-semibold min-w-[180px]">{spec.name}:</span>
                  <span className="text-black-600">{spec.value}</span>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="features" className="p-6 bg-white border border-blue-200 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Key Features</h2>
            <ul className="list-disc pl-5 space-y-2">
              {product.features?.map((feature, index) => (
                <li key={index} className="text-black-600">{feature}</li>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="warranty" className="p-6 bg-white border border-blue-200 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Warranty & Returns</h2>
            <div className="space-y-4 text-black-600">
              <p>
                All our refurbished products come with a {product.warranty} warranty that covers hardware failures and defects. 
                If any component fails during normal use within the warranty period, we will repair or replace it at no cost.
              </p>
              <h3 className="font-semibold text-lg">What's Covered:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Hardware failures due to manufacturer defects</li>
                <li>Components that fail during normal use</li>
                <li>System stability issues related to hardware</li>
              </ul>
              <h3 className="font-semibold text-lg">What's Not Covered:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Physical damage caused by accidents or misuse</li>
                <li>Software issues not related to hardware defects</li>
                <li>Damage from unauthorized repairs or modifications</li>
              </ul>
              <h3 className="font-semibold text-lg">Returns Policy:</h3>
              <p>
                We offer a 30-day replacement policy on all products. If you're not completely satisfied with your purchase, 
                you may replace it within 30 days for a exchange. The product must be returned in the same 
                condition as received, with all original accessories and packaging.
              </p>
            </div>
          </TabsContent>
        </Tabs>

        {/* Related Products */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products
              .filter(p => p.id !== productId)
              .slice(0, 4)
              .map((relatedProduct) => (
                <div key={relatedProduct.id} className="border border-slate-200 rounded-lg overflow-hidden">
                  <Link to={`/products/$${category}/${relatedProduct.id}`}>
                    <div className="h-40 overflow-hidden">
                      <img 
                        src={relatedProduct.images[0]} 
                        alt={relatedProduct.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-1 line-clamp-2">{relatedProduct.name}</h3>
                      <p className="text-blue-600 font-bold">${relatedProduct.price.toFixed(2)}</p>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}