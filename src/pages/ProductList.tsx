import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import formatPrice from "@/utils/formatPrice";


import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Laptop, Monitor, Server } from "lucide-react";

// Sample product data (in a real app, this would come from an API or database)
const products = {
  laptops: [
    {
      id: 1,
      name: "HP 435 G8",
      price: 28999,
      brand: "HP",
      processor: "Ryzen 7",
      memory: "16GB",
      storage: "512GB SSD",
      condition: "Excellent",
      image: "/images/R7/R76.png"
    },
    {
      id: 2,
      name: "Dell Latitude 7420",
      price: 37999,
      brand: "Dell",
      processor: "Intel Core i7",
      memory: "16GB",
      storage: "512GB SSD",
      condition: "Excellent",
      image: "/images/Dell_7420/1.png"
    },
    {
      id: 3,
      name: "Dell Latitude 5310",
      price: 27499,
      brand: "Dell",
      processor: "Core i7-10610U",
      memory: "16GB",
      storage: "256 GB NVMe M.2 Solid State Drive",
      condition: "Good",
      image: "/images/Dell_5310/1.png"
    },
    {
      id: 4,
      name: "Apple MacBook Air",
      price: 41999,
      brand: "Apple",
      processor: "M1",
      memory: "8GB unified memory",
      storage: "256GB SSD",
      condition: "Good",
      image: "/images/m1_air_silver/m11.png"
    },
    {
      id: 5,
      name: "HP Elitebook 840 G5",
      price: 26499,
      brand: "HP",
      processor: "Intel Core i7-8650U",
      memory: "16GB",
      storage: "512GB PCIe NVMe M.2 SSD",
      condition: "Excellent",
      image: "/images/hp_840_G5/1.png"
    },
    {
      id: 6,
      name: "Apple MacBook Pro",
      price: 47999,
      brand: "Apple",
      processor: "Intel Core i9",
      memory: "32GB",
      storage: "1 TB SSD",
      condition: "Good",
      image: "/images/MacBookProi9/1.png"
    },
    {
      id: 7,
      name: "Dell Latitude 3400",
      price: 18499,
      brand: "Dell",
      processor: "Core i7-8565U",
      memory: "8GB",
      storage: "256 GB NVMe M.2 Solid State Drive",
      condition: "Good",
      image: "/images/dell_3400/1.png"
    },
    {
      id: 8,
      name: "Dell Latitude 3420",
      price: 28499,
      brand: "Dell",
      processor: "Intel Core i5-1135G7 1.38 GHz",
      memory: "16GB",
      storage: "256 GB NVMe M.2 Solid State Drive + 1 TB HDD",
      condition: "Good",
      image: "/images/Dell_3420/1.png"
    },
    {
      id: 9,
      name: "Dell Latitude 5300",
      price: 24499,
      brand: "Dell",
      processor: "Core i7 8th Gen",
      memory: "16GB",
      storage: "256 GB NVMe M.2 Solid State Drive",
      condition: "Good",
      image: "/images/Dell_5300/1.png"
    },
  ],
  
  desktops: [
    {
      id: 117,
      name: "Dell OptiPlex 7070",
      price: 49999,
      brand: "Dell",
      processor: "Intel Core i5",
      memory: "16GB",
      storage: "512GB SSD",
      condition: "Excellent",
      image: "https://images.unsplash.com/photo-1593640408182-31c2bd3f3f33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80"
    },
    {
      id: 118,
      name: "HP EliteDesk 800 G5",
      price: 57999,
      brand: "HP",
      processor: "Intel Core i7",
      memory: "32GB",
      storage: "1TB SSD",
      condition: "Like New",
      image: "https://images.unsplash.com/photo-1593640408182-31c2bd3f3f33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80"
    },
    {
      id: 119,
      name: "Lenovo ThinkCentre M720",
      price: 44999,
      brand: "Lenovo",
      processor: "Intel Core i5",
      memory: "16GB",
      storage: "512GB SSD",
      condition: "Good",
      image: "https://images.unsplash.com/photo-1593640408182-31c2bd3f3f33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80"
    },
    {
      id: 110,
      name: "Apple iMac 2018",
      price: 79999,
      brand: "Apple",
      processor: "Intel Core i5",
      memory: "8GB",
      storage: "256GB SSD",
      condition: "Excellent",
      image: "https://images.unsplash.com/photo-1527443195645-1133f7f28990?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    },
    {
      id: 111,
      name: "Dell Precision 3630",
      price: 69999,
      brand: "Dell",
      processor: "Intel Core i7",
      memory: "32GB",
      storage: "1TB SSD",
      condition: "Excellent",
      image: "https://images.unsplash.com/photo-1593640408182-31c2bd3f3f33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80"
    }
  ],
  servers: [
    {
      id: 112,
      name: "Dell PowerEdge R640",
      price: 129999,
      brand: "Dell",
      processor: "Intel Xeon Silver",
      memory: "64GB",
      storage: "2TB SSD",
      condition: "Excellent",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80"
    },
    {
      id: 113,
      name: "HP ProLiant DL380 Gen10",
      price: 159999,
      brand: "HP",
      processor: "Intel Xeon Gold",
      memory: "128GB",
      storage: "4TB SSD",
      condition: "Like New",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80"
    },
    {
      id: 114,
      name: "Lenovo ThinkSystem SR650",
      price: 134999,
      brand: "Lenovo",
      processor: "Intel Xeon Silver",
      memory: "96GB",
      storage: "2TB SSD",
      condition: "Excellent",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80"
    }
  ],
  accessories: [
    {
      id: 15,
      name: "Dell UltraSharp U2720Q Monitor",
      price: 29999,
      brand: "Dell",
      condition: "Excellent",
      image: "https://images.unsplash.com/photo-1585792180666-f7347c490ee2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1777&q=80"
    },
    {
      id: 16,
      name: "Logitech MX Master 3 Mouse",
      price: 499,
      brand: "Logitech",
      condition: "Like New",
      image: "https://images.unsplash.com/photo-1585792180666-f7347c490ee2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1777&q=80"
    },
    {
      id: 17,
      name: "Microsoft Surface Keyboard",
      price: 2999,
      brand: "Microsoft",
      condition: "Excellent",
      image: "https://images.unsplash.com/photo-1585792180666-f7347c490ee2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1777&q=80"
    },
    {
      id: 18,
      name: "LG 27UK650-W 27\" Monitor",
      price: 12999,
      brand: "LG",
      condition: "Good",
      image: "https://images.unsplash.com/photo-1585792180666-f7347c490ee2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1777&q=80"
    }
  ]
};

// Category information mapping
const categoryInfo = {
  laptops: {
    title: "Refurbished Laptops",
    description: "High-quality refurbished laptops from top brands with warranty",
    icon: <Laptop className="h-8 w-8 text-white-600" />
  },
  desktops: {
    title: "Refurbished Desktops",
    description: "Reliable refurbished desktop computers for home and office use",
    icon: <Monitor className="h-8 w-8 text-white-600" />
  },
  servers: {
    title: "Refurbished Servers",
    description: "Enterprise-grade refurbished servers for your business infrastructure",
    icon: <Server className="h-8 w-8 text-white-600" />
  },
  accessories: {
    title: "IT Accessories",
    description: "Quality refurbished monitors, keyboards, mice, and other IT accessories",
    icon: <Monitor className="h-8 w-8 text-white-600" />
  }
};

export default function ProductList() {
  const { category = "laptops" } = useParams<{ category: string }>();

  // Normalize category from URL (handle plural, case-insensitive)
const key = category.toLowerCase();
const pluralKey = key.endsWith("s") ? key : key + "s";

const categoryProducts = products[pluralKey as keyof typeof products] || [];
const info = categoryInfo[pluralKey as keyof typeof categoryInfo] || categoryInfo.laptops;

  // compute min and max prices for this category so the slider covers all products by default
  const prices = categoryProducts.map(p => p.price);
  const minPrice = prices.length ? Math.min(...prices) : 0;
  const maxPrice = prices.length ? Math.max(...prices) : 2000;

  // initialize range to full span so all products display initially
  const [priceRange, setPriceRange] = useState<number[]>([minPrice, maxPrice]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState("featured");

  useEffect(() => {
    setPriceRange([minPrice, maxPrice]);
  }, [category, minPrice, maxPrice]);

  // Extract unique brands for the filter
  const allBrands = [...new Set(categoryProducts.map(product => product.brand))];

  // Filter products based on search term, price range, and brands
  const filteredProducts = categoryProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    return matchesSearch && matchesPrice && matchesBrand;
  });

  // Sort products based on the selected sort order
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOrder) {
      case "price-low-high":
        return a.price - b.price;
      case "price-high-low":
        return b.price - a.price;
      case "name-a-z":
        return a.name.localeCompare(b.name);
      case "name-z-a":
        return b.name.localeCompare(a.name);
      default:
        return 0; // Featured or default sorting
    }
  });

  // Handle brand checkbox changes
  const handleBrandChange = (brand: string) => {
    setSelectedBrands(prev => {
      if (prev.includes(brand)) {
        return prev.filter(b => b !== brand);
      } else {
        return [...prev, brand];
      }
    });
  };
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo300 text-white py-5">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            {info.icon}
            <h1 className="text-3xl font-bold">{info.title}</h1>
          </div>
          <p className="text-lg text-white-100 max-w-2xl">
            {info.description}
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar Filters */}
            <div className="w-full md:w-64 space-y-6">
              <div className="bg-white/50 p-4 rounded-lg border border-slate-200">
                <h2 className="font-bold mb-4">Search</h2>
                <Input 
                  placeholder="Search products..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="mb-2"
                />

<h2 className="font-bold mt-6 mb-4">Price Range</h2>
<div className="space-y-6">
<Slider
   value={priceRange}
   min={minPrice}
   max={maxPrice}
   step={50}
   onValueChange={setPriceRange}
 />
  <div className="flex items-center justify-between">
    <span>{formatPrice(priceRange[0])}</span>
    <span>{formatPrice(priceRange[1])}</span>
  </div>
</div>

                <h2 className="font-bold mt-6 mb-4">Brands</h2>
                <div className="space-y-2">
                  {allBrands.map((brand) => (
                    <div key={brand} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`brand-${brand}`} 
                        checked={selectedBrands.includes(brand)}
                        onCheckedChange={() => handleBrandChange(brand)}
                      />
                      <Label htmlFor={`brand-${brand}`}>{brand}</Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-6">
                <p className="text-black-600">{sortedProducts.length} products found</p>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-black-600">Sort by:</span>
                  <Select value={sortOrder} onValueChange={setSortOrder}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="price-low-high">Price: Low to High</SelectItem>
                      <SelectItem value="price-high-low">Price: High to Low</SelectItem>
                      <SelectItem value="name-a-z">Name: A to Z</SelectItem>
                      <SelectItem value="name-z-a">Name: Z to A</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedProducts.map((product) => (
                  <Card key={product.id} 
                  className="overflow-hidden bg-white/50">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                      <p className="text-blue-600 font-bold mb-2">{formatPrice(product.price)}</p>
                      <p className="text-sm text-black-600 font-bold mb-1">Brand: {product.brand}</p>
                      {product.processor && 
                      (
                        <p className="text-sm text-black-600 mb-1">Processor: {product.processor}</p>
                      )}
                      {product.memory && 
                      (
                        <p className="text-sm text-black-600 mb-1">Memory: {product.memory}</p>
                      )}
                      {product.storage && 
                      (
                        <p className="text-sm text-black-600 mb-1">Storage: {product.storage}</p>
                      )}
                      <p className="text-sm text-black-600">Condition: {product.condition}</p>
                    </CardContent>
                    <CardFooter className="p-4 pt-0 flex justify-between">
                      <Button variant="outline" asChild>
                        <Link to={`/products/${category}/${product.id}`}>Details</Link>
                      </Button>
                      <a
  href={`https://wa.me/919200111400?text=Hi, I visited your website and I want to buy ${product.name} for ₹${product.price}`}
  target="_blank"
  rel="noopener noreferrer"
  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg inline-block"
>
  Buy on WhatsApp
</a>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
