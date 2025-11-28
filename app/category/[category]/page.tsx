"use client"

import { notFound } from "next/navigation"
import { Star, ChevronLeft } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

const products = [
  // Electronics
  {
    id: 1,
    name: "Like-New Echo Dot (5th Gen, 2022 release)",
    category: "Electronics",
    price: 49.99,
    rating: 4.7,
    reviews: 15234,
    image: "https://m.media-amazon.com/images/I/71W2eDGsAJL._AC_SX679_.jpg",
    link: "",
    description: "Smart speaker with Alexa featuring vibrant sound, voice control, and seamless smart home integration",
  },
  {
    id: 2,
    name: "Amazon Fire TV Stick 4K Select (newest model)",
    category: "Electronics",
    price: 54.99,
    rating: 4.6,
    reviews: 8912,
    image: "https://m.media-amazon.com/images/I/71B2hSrvyZL._AC_SY450_.jpg",
    link: "https://www.amazon.com/amazon-fire-tv-stick-4K-select/dp/B0C6W3D4RM?&linkCode=ll1&tag=marketplaza0b-20&linkId=818d3797e1b4495aaa0287566855caf8&language=en_US&ref_=as_li_ss_tl",
    description:
      "Stream in stunning 4K Ultra HD with support for Dolby Vision, HDR10+, and immersive Dolby Atmos audio",
  },
  {
    id: 3,
    name: "Apple AirPods Pro 2 Wireless Earbuds",
    category: "Electronics",
    price: 249.99,
    originalPrice: 299.99,
    rating: 4.8,
    reviews: 32456,
    image: "https://m.media-amazon.com/images/I/611pEx7220L._AC_SX522_.jpg",
    link: "https://www.amazon.com/Apple-Cancellation-Transparency-Personalized-High-Fidelity/dp/B0D1XD1ZV3?&linkCode=ll1&tag=marketplaza0b-20&linkId=04a9286d70d9246ac7e6693261e914f9&language=en_US&ref_=as_li_ss_tl",
    description:
      "Premium wireless earbuds with adaptive active noise cancellation, transparency mode, and personalized spatial audio",
  },
  {
    id: 4,
    name: "Anker Power Bank (PowerCore 10K)",
    category: "Electronics",
    price: 29.99,
    rating: 4.7,
    reviews: 18765,
    image: "https://m.media-amazon.com/images/I/71JJLJnwREL._AC_SX679_.jpg",
    link: "https://www.amazon.com/Anker-Travel-Ready-Technology-High-Speed-Output%EF%BC%88Black%EF%BC%89%EF%BC%8C1pack/dp/B0D5CLSMFB?&linkCode=ll1&tag=marketplaza0b-20&linkId=67890abcdef1234567890abcdef&language=en_US&ref_=as_li_ss_tl",
    description: "Ultra-compact 10,000mAh portable charger with PowerIQ technology for fast charging on the go",
  },
  {
    id: 5,
    name: "SAMSUNG Galaxy S25 Ultra",
    category: "Electronics",
    price: 1299.99,
    rating: 4.9,
    reviews: 4567,
    image: "https://m.media-amazon.com/images/I/61n0lmxP5-L._AC_SX679_.jpg",
    link: "https://www.amazon.com/Smartphone-Unlocked-Processor-Manufacturer-Warranty/dp/B0DP3G4GVQ?&linkCode=ll1&tag=marketplaza0b-20&linkId=12345abcdef67890abcdef12345&language=en_US&ref_=as_li_ss_tl",
    description:
      "Flagship unlocked smartphone with advanced processor, stunning display, and professional-grade camera system",
  },

  // Home & Kitchen
  {
    id: 6,
    name: "Instant Pot Duo 7-in-1 Electric Pressure Cooker",
    category: "Home & Kitchen",
    price: 89.99,
    originalPrice: 119.99,
    rating: 4.7,
    reviews: 142567,
    image: "https://m.media-amazon.com/images/I/71Z401LjFFL._AC_SX679_.jpg",
    link: "https://www.amazon.com/Instant-Pot-Multi-Use-Programmable-Pressure/dp/B00FLYWNYQ?&linkCode=ll1&tag=marketplaza0b-20&linkId=abcdef1234567890abcdef12345&language=en_US&ref_=as_li_ss_tl",
    description:
      "Multi-functional programmable cooker combining pressure cooker, slow cooker, rice cooker, steamer, and more",
  },
  {
    id: 7,
    name: "Ninja Air Fryer",
    category: "Home & Kitchen",
    price: 89.99,
    rating: 4.8,
    reviews: 67234,
    image: "https://m.media-amazon.com/images/I/71+8uTMDRFL._AC_SX679_.jpg",
    link: "https://www.amazon.com/Ninja-AF101-Fryer-Black-gray/dp/B07FDJMC9Q?&linkCode=ll1&tag=marketplaza0b-20&linkId=abcdef6789012345abcdef67890&language=en_US&ref_=as_li_ss_tl",
    description: "Compact air fryer with wide temperature range for guilt-free crispy favorites using little to no oil",
  },
  {
    id: 8,
    name: "ZINUS 12 Inch King Green Tea Memory Foam Mattress",
    category: "Home & Kitchen",
    price: 319.99,
    originalPrice: 449.99,
    rating: 4.6,
    reviews: 28945,
    image: "https://m.media-amazon.com/images/I/81XzXrlHljL._AC_SX679_.jpg",
    link: "https://www.amazon.com/Zinus-Mattress-Fiberglass-Pressure-Certified/dp/B0CKZ1CK1H?&linkCode=ll1&tag=marketplaza0b-20&linkId=abcdef1234567890abcdef12345&language=en_US&ref_=as_li_ss_tl",
    description:
      "Premium memory foam mattress infused with green tea extract for natural odor control and pressure relief",
  },
  {
    id: 9,
    name: "Rubbermaid Brilliance Food Storage Containers",
    category: "Home & Kitchen",
    price: 39.99,
    rating: 4.8,
    reviews: 45678,
    image: "https://m.media-amazon.com/images/I/81Ap89R-ajL._AC_SX679_.jpg",
    link: "https://www.amazon.com/Rubbermaid-Brilliance-Storage-Container-BPA-free/dp/B079M8FPTW?&linkCode=ll1&tag=marketplaza0b-20&linkId=abcdef6789012345abcdef67890&language=en_US&ref_=as_li_ss_tl",
    description:
      "Crystal-clear BPA-free containers with leak-proof seals, perfect for meal prep and kitchen organization",
  },
  {
    id: 10,
    name: "Shark Upright Vacuum",
    category: "Home & Kitchen",
    price: 199.99,
    rating: 4.7,
    reviews: 34567,
    image: "https://m.media-amazon.com/images/I/71ybuaqVLwL._AC_SX679_.jpg",
    link: "https://www.amazon.com/Shark-Navigator-Professional-Anti-Allergy-NV360/dp/B00JH98GR4?&linkCode=ll1&tag=marketplaza0b-20&linkId=abcdef1234567890abcdef12345&language=en_US&ref_=as_li_ss_tl",
    description:
      "Professional upright vacuum with anti-allergy seal, HEPA filter, and swivel steering for easy maneuverability",
  },

  // Beauty & Personal Care
  {
    id: 11,
    name: "CeraVe Skin Renewing Night Cream",
    category: "Beauty & Personal Care",
    price: 18.99,
    rating: 4.6,
    reviews: 23456,
    image: "https://m.media-amazon.com/images/I/71r7bLsvaVL._SX466_.jpg",
    link: "https://www.amazon.com/CeraVe-Skin-Renewing-Night-Cream/dp/B00SNPCSUY?&linkCode=ll1&tag=marketplaza0b-20&linkId=abcdef6789012345abcdef67890&language=en_US&ref_=as_li_ss_tl",
    description: "Nourishing night cream with hyaluronic acid and peptide complex to restore skin while you sleep",
  },
  {
    id: 12,
    name: "The Ordinary Hyaluronic Acid 2% + B5",
    category: "Beauty & Personal Care",
    price: 8.99,
    rating: 4.5,
    reviews: 89234,
    image: "https://m.media-amazon.com/images/I/61eH32lVpdL._SX522_.jpg",
    link: "https://www.amazon.com/Ordinary-Hyaluronic-Acid-2-30ml/dp/B01MYEZPC8?&linkCode=ll1&tag=marketplaza0b-20&linkId=abcdef1234567890abcdef12345&language=en_US&ref_=as_li_ss_tl",
    description: "Lightweight hydration serum with multiple weights of hyaluronic acid for deep moisture retention",
  },
  {
    id: 13,
    name: "LANEIGE Lip Sleeping Mask",
    category: "Beauty & Personal Care",
    price: 24.0,
    rating: 4.7,
    reviews: 56789,
    image: "https://m.media-amazon.com/images/I/51H5SkeGANL._SX522_.jpg",
    link: "https://www.amazon.com/Laneige-Sleeping-Berry/dp/B07XXPHQZK?&linkCode=ll1&tag=marketplaza0b-20&linkId=abcdef6789012345abcdef67890&language=en_US&ref_=as_li_ss_tl",
    description:
      "Overnight lip treatment with berry extract that intensely moisturizes and softens lips while you sleep",
  },
  {
    id: 14,
    name: "Mielle Organics Rosemary & Mint Hair Oil",
    category: "Beauty & Personal Care",
    price: 9.97,
    rating: 4.6,
    reviews: 34567,
    image: "https://m.media-amazon.com/images/I/61n1krgI+tL._SX466_.jpg",
    link: "https://www.amazon.com/Mielle-Rosemary-Mint-Scalp-Strengthening/dp/B07N7PK9QK?&linkCode=ll1&tag=marketplaza0b-20&linkId=abcdef1234567890abcdef12345&language=en_US&ref_=as_li_ss_tl",
    description: "Nourishing scalp oil with biotin and rosemary to strengthen hair and promote healthy growth",
  },
  {
    id: 15,
    name: "Hanes Men's Ecosmart Fleece Sweatshirt",
    category: "Beauty & Personal Care",
    price: 12.0,
    rating: 4.5,
    reviews: 67890,
    image: "https://m.media-amazon.com/images/I/81D+bCgn8hL._AC_SX569_.jpg",
    link: "https://www.amazon.com/Hanes-EcoSmart-Fleece-Sweatshirt-Stonewashed/dp/B0721C21RJ?&linkCode=ll1&tag=marketplaza0b-20&linkId=abcdef6789012345abcdef67890&language=en_US&ref_=as_li_ss_tl",
    description: "Classic crewneck sweatshirt made with eco-friendly fleece fabric for everyday comfort",
  },

  // Clothing, Shoes & Jewelry
  {
    id: 16,
    name: "Hanes mens Zip-up Hoodie",
    category: "Clothing, Shoes & Jewelry",
    price: 16.5,
    rating: 4.6,
    reviews: 45678,
    image: "https://m.media-amazon.com/images/I/71QyRZzbaUL._AC_SX569_.jpg",
    link: "https://www.amazon.com/Hanes-Full-zip-Eco-smart-athletic-sweatshirts/dp/B00JUM4CT4?&linkCode=ll1&tag=marketplaza0b-20&linkId=abcdef1234567890abcdef12345&language=en_US&ref_=as_li_ss_tl",
    description: "Full-zip eco-smart hoodie with kangaroo pocket, perfect for layering and athletic activities",
  },
  {
    id: 17,
    name: "adidas Mens Lite Racer Adapt 7.0 Shoes",
    category: "Clothing, Shoes & Jewelry",
    price: 65.0,
    rating: 4.5,
    reviews: 12345,
    image: "https://m.media-amazon.com/images/I/71JsiyZWwyL._AC_SY575_.jpg",
    link: "https://www.amazon.com/adidas-Racer-Adapt-Sneaker-Black/dp/B0CKMC1BGB?&linkCode=ll1&tag=marketplaza0b-20&linkId=abcdef6789012345abcdef67890&language=en_US&ref_=as_li_ss_tl",
    description: "Lightweight running-inspired sneakers with Cloudfoam cushioning for all-day comfort and style",
  },
  {
    id: 18,
    name: "Levi's Men's 511 Slim Fit Jeans",
    category: "Clothing, Shoes & Jewelry",
    price: 49.99,
    originalPrice: 69.5,
    rating: 4.6,
    reviews: 89012,
    image: "https://m.media-amazon.com/images/I/81HRsNLuziL._AC_SX466_.jpg",
    link: "https://www.amazon.com/Levis-Mens-Jeans-Stretch-Panda/dp/B072NGDWDY?&linkCode=ll1&tag=marketplaza0b-20&linkId=abcdef6789012345abcdef67890&language=en_US&ref_=as_li_ss_tl",
    description: "Classic slim fit jeans with just the right amount of stretch for comfort and timeless style",
  },
  {
    id: 19,
    name: "Casio MDV106 Series",
    category: "Clothing, Shoes & Jewelry",
    price: 59.95,
    rating: 4.7,
    reviews: 23456,
    image: "https://m.media-amazon.com/images/I/61nHUVwR65L._AC_SY550_.jpg",
    link: "https://www.amazon.com/Casio-MDV106-1AV-Analog-Watch-Black/dp/B009KYJAJY?&linkCode=ll1&tag=marketplaza0b-20&linkId=abcdef6789012345abcdef67890&language=en_US&ref_=as_li_ss_tl",
    description: "Durable dive-style analog watch with 200m water resistance and reliable quartz movement",
  },
  {
    id: 20,
    name: "Fossil Women's Fiona Large Crossbody Purse",
    category: "Clothing, Shoes & Jewelry",
    price: 98.0,
    originalPrice: 128.0,
    rating: 4.6,
    reviews: 5678,
    image: "https://m.media-amazon.com/images/I/81H9ZCTU4wL._AC_SY575_.jpg",
    link: "https://www.amazon.com/Fossil-Fiona-EW-Crossbody-Brown/dp/B07DLMZ4C7?&linkCode=ll1&tag=marketplaza0b-20&linkId=abcdef6789012345abcdef67890&language=en_US&ref_=as_li_ss_tl",
    description: "Elegant leather crossbody handbag with adjustable strap and multiple compartments for organization",
  },

  // Toys & Games
  {
    id: 21,
    name: "LEGO Classic Medium Creative Brick Box 10696",
    category: "Toys & Games",
    price: 39.99,
    rating: 4.9,
    reviews: 78901,
    image: "https://m.media-amazon.com/images/I/8160QjpuoOL._AC_SX679_.jpg",
    link: "https://www.amazon.com/LEGO-Classic-Medium-Creative-Brick/dp/B00NHQFA1I?&linkCode=ll1&tag=marketplaza0b-20&linkId=abcdef6789012345abcdef67890&language=en_US&ref_=as_li_ss_tl",
    description: "Creative building set with 484 colorful pieces to inspire endless imagination and construction fun",
  },
  {
    id: 22,
    name: "Mattel Games UNO Teams Card Game",
    category: "Toys & Games",
    price: 9.99,
    rating: 4.7,
    reviews: 12345,
    image: "https://m.media-amazon.com/images/I/91zZyNjPcLL._AC_SY879_.jpg",
    link: "https://www.amazon.com/Mattel-Games-Adults-Parties-Special/dp/B0D6X9T62X?&linkCode=ll1&tag=marketplaza0b-20&linkId=abcdef6789012345abcdef67890&language=en_US&ref_=as_li_ss_tl",
    description: "Classic card game with a team twist, perfect for family game nights and social gatherings",
  },
  {
    id: 23,
    name: "Barbie Dreamhouse",
    category: "Toys & Games",
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.8,
    reviews: 34567,
    image: "https://m.media-amazon.com/images/I/71PFKADv6CL._AC_SX679_.jpg",
    link: "https://www.amazon.com/Barbie-Dreamhouse-3-Story-Playset-Elevator/dp/B0BLJTJ38M?&linkCode=ll1&tag=marketplaza0b-20&linkId=abcdef6789012345abcdef67890&language=en_US&ref_=as_li_ss_tl",
    description: "3-story dollhouse with working elevator, pool, slide, and 75+ accessories for imaginative play",
  },
  {
    id: 24,
    name: "Nintendo Switch 2 + Mario Kart World Bundle",
    category: "Toys & Games",
    price: 359.99,
    rating: 4.9,
    reviews: 23456,
    image: "https://m.media-amazon.com/images/I/715AHrLja3L._SX522_.jpg",
    link: "https://www.amazon.com/Nintendo-Switch-Mario-World-Bundle-2/dp/B0FC5FJZ9Z?&linkCode=ll1&tag=marketplaza0b-20&linkId=abcdef6789012345abcdef67890&language=en_US&ref_=as_li_ss_tl",
    description: "Next-gen gaming console bundle with Mario Kart World for portable and TV play experiences",
  },
  {
    id: 25,
    name: "Play-Doh Modeling Compound 10-Pack",
    category: "Toys & Games",
    price: 9.97,
    rating: 4.8,
    reviews: 67890,
    image: "https://m.media-amazon.com/images/I/71LqxbA1WCL._AC_SX679_.jpg",
    link: "https://www.amazon.com/Play-Doh-Modeling-Compound-Non-Toxic-Exclusive/dp/B00JM5GW10?&linkCode=ll1&tag=marketplaza0b-20&linkId=abcdef6789012345abcdef67890&language=en_US&ref_=as_li_ss_tl",
    description: "Non-toxic modeling compound in 10 vibrant colors for endless creative sculpting and artistic fun",
  },

  // Health & Household / Baby
  {
    id: 26,
    name: "Pampers Sensitive Baby Wipes",
    category: "Health & Household / Baby",
    price: 24.97,
    rating: 4.8,
    reviews: 123456,
    image: "https://m.media-amazon.com/images/I/71NqHkGRN1L._AC_SX679_PIbundle-12,TopRight,0,0_SH20_.jpg",
    link: "https://www.amazon.com/Pampers-Wipes-Sensitive-Perfume-Multi/dp/B0BJ13K7FR?&linkCode=ll1&tag=marketplaza0b-20&linkId=abcdef6789012345abcdef67890&language=en_US&ref_=as_li_ss_tl",
    description: "Hypoallergenic and perfume-free baby wipes with clinically proven mild formula for sensitive skin",
  },
  {
    id: 27,
    name: "Charmin Ultra Soft Cushiony Touch Toilet Paper",
    category: "Health & Household / Baby",
    price: 36.94,
    rating: 4.8,
    reviews: 89012,
    image: "https://m.media-amazon.com/images/I/81Xyre0z0VL._AC_SX679_PIbundle-24,TopRight,0,0_SH20_.jpg",
    link: "https://www.amazon.com/Charmin-Toilet-Family-Cushiony-Sheets/dp/B0798DVT68?&linkCode=ll1&tag=marketplaza0b-20&linkId=abcdef6789012345abcdef67890&language=en_US&ref_=as_li_ss_tl",
    description: "Luxuriously soft and absorbent toilet tissue with cushiony texture for ultimate comfort",
  },
  {
    id: 28,
    name: "Nature's Way Sambucus Elderberry Gummies",
    category: "Health & Household / Baby",
    price: 14.99,
    rating: 4.6,
    reviews: 45678,
    image: "https://m.media-amazon.com/images/I/7134HKzZjdL._AC_SX679_.jpg",
    link: "https://www.amazon.com/Natures-Way-Elderberry-Vegetarian-Packaging/dp/B00MJ7VL1O?&linkCode=ll1&tag=marketplaza0b-20&linkId=abcdef6789012345abcdef67890&language=en_US&ref_=as_li_ss_tl",
    description: "Vegetarian elderberry gummies with vitamin C and zinc to support immune health for the whole family",
  },
  {
    id: 29,
    name: "Huggies Natural Care Sensitive Baby Wipes",
    category: "Health & Household / Baby",
    price: 22.97,
    rating: 4.8,
    reviews: 98765,
    image: "https://m.media-amazon.com/images/I/81FlNgJOeqL._AC_SX679_PIbundle-12,TopRight,0,0_SH20_.jpg",
    link: "https://www.amazon.com/HUGGIES-Natural-Unscented-Sensitive-Water-Based/dp/B07SCL613T?&linkCode=ll1&tag=marketplaza0b-20&linkId=abcdef6789012345abcdef67890&language=en_US&ref_=as_li_ss_tl",
    description: "Water-based unscented baby wipes with gentle plant-derived ingredients for delicate skin care",
  },
  {
    id: 30,
    name: "Philips Avent Natural Glass Baby Bottles",
    category: "Health & Household / Baby",
    price: 29.99,
    rating: 4.7,
    reviews: 12345,
    image: "https://m.media-amazon.com/images/I/71IsWBuTvfL._SX466_.jpg",
    link: "https://www.amazon.com/Philips-Natural-Response-SCY910-04/dp/B098YHHV3Q?&linkCode=ll1&tag=marketplaza0b-20&linkId=abcdef6789012345abcdef67890&language=en_US&ref_=as_li_ss_tl",
    description: "Premium glass bottles with Natural Response nipples designed to mimic breastfeeding for easy feeding",
  },

  // Sports & Outdoors
  {
    id: 31,
    name: "Fitbit Charge 6 Fitness Tracker",
    category: "Sports & Outdoors",
    price: 159.95,
    originalPrice: 199.95,
    rating: 4.5,
    reviews: 23456,
    image: "https://m.media-amazon.com/images/I/61ZtqtvoD2L._AC_SX466_.jpg",
    link: "https://www.amazon.com/Fitbit-Exercise-Equipment-6-Months-Membership/dp/B0CC62ZG1M?&linkCode=ll1&tag=marketplaza0b-20&linkId=abcdef6789012345abcdef67890&language=en_US&ref_=as_li_ss_tl",
    description: "Advanced fitness tracker with Google apps integration, heart rate monitoring, and built-in GPS",
  },
  {
    id: 32,
    name: "Coleman Sundome Camping Tent with Rainfly",
    category: "Sports & Outdoors",
    price: 89.99,
    rating: 4.6,
    reviews: 34567,
    image: "https://m.media-amazon.com/images/I/61aUr3tBexL._AC_SX679_.jpg",
    link: "https://www.amazon.com/Coleman-Weatherproof-Festivals-Backyard-Sleepovers/dp/B0D7QLQNS5?&linkCode=ll1&tag=marketplaza0b-20&linkId=abcdef6789012345abcdef67890&language=en_US&ref_=as_li_ss_tl",
    description: "Weatherproof dome tent with easy setup, ideal for camping trips, festivals, and outdoor adventures",
  },
  {
    id: 33,
    name: "Under Armour Men's Charged Assert 10 Shoes",
    category: "Sports & Outdoors",
    price: 65.0,
    rating: 4.5,
    reviews: 12345,
    image: "https://m.media-amazon.com/images/I/61O30g0cZmL._AC_SY575_.jpg",
    link: "https://www.amazon.com/Under-Armour-Charged-Assert-Running/dp/B09XBWQ9Y9?&linkCode=ll1&tag=marketplaza0b-20&linkId=abcdef6789012345abcdef67890&language=en_US&ref_=as_li_ss_tl",
    description: "Versatile running shoes with Charged Cushioning for responsive comfort and support during workouts",
  },
  {
    id: 34,
    name: "Garmin Forerunner 55",
    category: "Sports & Outdoors",
    price: 199.99,
    rating: 4.7,
    reviews: 23456,
    image: "https://m.media-amazon.com/images/I/518z0My1ZlS._AC_SX679_.jpg",
    link: "https://www.amazon.com/Garmin-Forerunner-Running-Suggested-Workouts/dp/B092RCLKHN?&linkCode=ll1&tag=marketplaza0b-20&linkId=abcdef6789012345abcdef67890&language=en_US&ref_=as_li_ss_tl",
    description:
      "GPS running watch with suggested workouts, pace guidance, and comprehensive health monitoring features",
  },
  {
    id: 35,
    name: "YETI Rambler 20 oz Travel Mug",
    category: "Sports & Outdoors",
    price: 38.0,
    rating: 4.8,
    reviews: 45678,
    image: "https://m.media-amazon.com/images/I/51kXewLNVGL._AC_SX679_.jpg",
    link: "https://www.amazon.com/YETI-Rambler-Stainless-Insulated-MagSlider/dp/B08D3VPRQ1?&linkCode=ll1&tag=marketplaza0b-20&linkId=abcdef6789012345abcdef67890&language=en_US&ref_=as_li_ss_tl",
    description: "Durable stainless steel insulated mug with MagSlider lid to keep drinks hot or cold for hours",
  },

  // Books
  {
    id: 36,
    name: "Atomic Habits by James Clear",
    category: "Books",
    price: 27.0,
    originalPrice: 32.0,
    rating: 4.9,
    reviews: 156789,
    image: "https://m.media-amazon.com/images/I/71F4+7rk2eL._SX342_.jpg",
    link: "https://www.amazon.com/Atomic-Habits-James-Clear-audiobook/dp/B07RFSSYBH?&linkCode=ll1&tag=marketplaza0b-20&linkId=abcdef6789012345abcdef67890&language=en_US&ref_=as_li_ss_tl",
    description:
      "Practical guide to building good habits and breaking bad ones with proven strategies and real-world examples",
  },
  {
    id: 37,
    name: "The Subtle Art of Not Giving a F*ck",
    category: "Books",
    price: 25.0,
    rating: 4.6,
    reviews: 98765,
    image: "https://m.media-amazon.com/images/I/81A5jQHA+lL._SX342_.jpg",
    link: "https://www.amazon.com/Subtle-Art-Not-Giving-Counterintuitive/dp/B01I29Y344?&linkCode=ll1&tag=marketplaza0b-20&linkId=abcdef6789012345abcdef67890&language=en_US&ref_=as_li_ss_tl",
    description: "Counterintuitive self-help book about embracing life's limitations and choosing what truly matters",
  },
  {
    id: 38,
    name: "Harry Potter and the Sorcerer's Stone",
    category: "Books",
    price: 29.99,
    rating: 4.9,
    reviews: 234567,
    image: "https://m.media-amazon.com/images/I/91eopoUCjLL._SX342_.jpg",
    link: "https://www.amazon.com/Harry-Potter-Sorcerers-Stone-Book/dp/B017V4IMVQ?&linkCode=ll1&tag=marketplaza0b-20&linkId=abcdef6789012345abcdef67890&language=en_US&ref_=as_li_ss_tl",
    description: "Magical beginning of the beloved series following young wizard Harry Potter's adventures at Hogwarts",
  },
  {
    id: 39,
    name: "48 Laws of Power",
    category: "Books",
    price: 32.0,
    rating: 4.7,
    reviews: 67890,
    image: "https://m.media-amazon.com/images/I/71s-d6iLlaL._SX342_.jpg",
    link: "https://www.amazon.com/48-Laws-of-Power-Robert-Greene-audiobook/dp/B00X0TKUS0?&linkCode=ll1&tag=marketplaza0b-20&linkId=abcdef6789012345abcdef67890&language=en_US&ref_=as_li_ss_tl",
    description:
      "Timeless guide to understanding and mastering power dynamics in business, politics, and everyday life",
  },

  // Pet Supplies
  {
    id: 40,
    name: "Furbo 360° Dog Camera",
    category: "Pet Supplies",
    price: 209.99,
    originalPrice: 249.99,
    rating: 4.5,
    reviews: 12345,
    image: "https://m.media-amazon.com/images/I/616wRFOTA5L._AC_SX466_.jpg",
    link: "https://www.amazon.com/Furbo-Camera-with-360%C2%B0-View/dp/B09GDQZLD1?&linkCode=ll1&tag=marketplaza0b-20&linkId=abcdef6789012345abcdef67890&language=en_US&ref_=as_li_ss_tl",
    description:
      "360-degree pet camera with treat tossing, barking alerts, and two-way audio to stay connected with your dog",
  },
  {
    id: 51,
    name: "Amazon Basics Heavy-Duty Pet Training and Puppy Pads",
    category: "Pet Supplies",
    price: 19.99,
    rating: 4.6,
    reviews: 34567,
    image: "https://m.media-amazon.com/images/I/71LHksRF15L._AC_SX679_.jpg",
    link: "https://www.amazon.com/Amazon-Basics-Heavy-Duty-Absorbency-Regular/dp/B00MW8G62E?&linkCode=ll1&tag=marketplaza0b-20&linkId=abcdef6789012345abcdef67890&language=en_US&ref_=as_li_ss_tl",
    description: "Super-absorbent training pads with 5-layer protection for puppies and senior dogs",
  },
  {
    id: 52,
    name: "PetSafe ScoopFree Purple Front-Entry Uncovered Ultra Self Cleaning Cat Litter Box System",
    category: "Pet Supplies",
    price: 119.99,
    rating: 4.3,
    reviews: 12456,
    image: "https://m.media-amazon.com/images/I/71BRBQMSoBL._AC_SX679_.jpg",
    link: "https://www.amazon.com/PetSafe-ScoopFree-Litter-Tray-Refills/dp/B000ELUQQS?&linkCode=ll1&tag=marketplaza0b-20&linkId=abcdef6789012345abcdef67890&language=en_US&ref_=as_li_ss_tl",
    description:
      "Automatic self-cleaning litter box with crystal litter that absorbs odors, reduces tracking, and lasts weeks",
  },
  {
    id: 53,
    name: "PetSafe Gentle Leader No-Pull Headcollar",
    category: "Pet Supplies",
    price: 19.99,
    rating: 4.2,
    reviews: 34567,
    image: "https://m.media-amazon.com/images/I/61mGDGV7V-L._AC_SX679_.jpg",
    link: "https://www.amazon.com/PetSafe-Gentle-Leader-Headcollar-Training/dp/B00074L4W2?&linkCode=ll1&tag=marketplaza0b-20&linkId=abcdef6789012345abcdef67890&language=en_US&ref_=as_li_ss_tl",
    description:
      "Veterinarian-recommended headcollar that gently stops pulling and jumping, makes walks more enjoyable",
  },
  {
    id: 54,
    name: "Hill's Science Diet Indoor",
    category: "Pet Supplies",
    price: 39.99,
    rating: 4.7,
    reviews: 45678,
    image: "https://m.media-amazon.com/images/I/81gu7OG9-4L._AC_SX679_.jpg",
    link: "https://www.amazon.com/Hills-Science-Diet-Adult-Chicken/dp/B003MA8P02?&linkCode=ll1&tag=marketplaza0b-20&linkId=abcdef6789012345abcdef67890&language=en_US&ref_=as_li_ss_tl",
    description:
      "Premium indoor cat food with natural fiber for healthy digestion and hairball control, made with real chicken",
  },
  {
    id: 55,
    name: "HONEY CARE All-Absorb A26 Male Dog Wrap",
    category: "Pet Supplies",
    price: 14.99,
    rating: 4.5,
    reviews: 23456,
    image: "https://m.media-amazon.com/images/I/71gYlXY6i-L._AC_SX679_.jpg",
    link: "https://www.amazon.com/All-Absorb-Male-Dog-Wrap-Count/dp/B07C22NTL4?&linkCode=ll1&tag=marketplaza0b-20&linkId=abcdef6789012345abcdef67890&language=en_US&ref_=as_li_ss_tl",
    description:
      "Disposable male dog wraps with leak-proof barriers and wetness indicator, perfect for marking and incontinence",
  },
  {
    id: 56,
    name: "Rocco & Roxie Supply Co. Stain & Strong Odor Eliminator",
    category: "Pet Supplies",
    price: 29.99,
    rating: 4.6,
    reviews: 98765,
    image: "https://m.media-amazon.com/images/I/71RbenYSqsL._AC_SX679_.jpg",
    link: "https://www.amazon.com/Rocco-Roxie-Supply-Co-Professional/dp/B00CKFL93K?&linkCode=ll1&tag=marketplaza0b-20&linkId=abcdef6789012345abcdef67890&language=en_US&ref_=as_li_ss_tl",
    description:
      "Professional strength enzyme cleaner that eliminates pet stains and odors from carpets, furniture, and floors",
  },
  {
    id: 57,
    name: "Pur Luv Chicken Jerky Dog Treats",
    category: "Pet Supplies",
    price: 14.99,
    rating: 4.5,
    reviews: 12345,
    image: "https://m.media-amazon.com/images/I/816d5YD4e9L._AC_SY879_.jpg",
    link: "https://www.amazon.com/Pur-Luv-Chicken-Jerky-Treats/dp/B08P2D95G8?&linkCode=ll1&tag=marketplaza0b-20&linkId=abcdef6789012345abcdef67890&language=en_US&ref_=as_li_ss_tl",
    description:
      "Premium chicken jerky strips made with real chicken, no artificial flavors, perfect training treats for dogs",
  },
  {
    id: 58,
    name: "Milk-Bone Mini's Flavor Snacks Dog Treats",
    category: "Pet Supplies",
    price: 19.99,
    rating: 4.7,
    reviews: 67890,
    image: "https://m.media-amazon.com/images/I/81tU7UkyxZL._AC_SX679_.jpg",
    link: "https://www.amazon.com/Milk-Bone-Flavor-Snacks-Biscuits-36-Ounce/dp/B0114BNXQ6?&linkCode=ll1&tag=marketplaza0b-20&linkId=abcdef6789012345abcdef67890&language=en_US&ref_=as_li_ss_tl",
    description:
      "Classic mini biscuits in 3 delicious flavors with vitamins and minerals for strong bones and healthy teeth",
  },
  {
    id: 59,
    name: "INABA Churu Cat Treats",
    category: "Pet Supplies",
    price: 19.99,
    rating: 4.8,
    reviews: 54321,
    image: "https://m.media-amazon.com/images/I/71B8D1hWW4L._AC_SX679_.jpg",
    link: "https://www.amazon.com/INABA-Chicken-Lickable-Creamy-Variety/dp/B07D323MFZ?&linkCode=ll1&tag=marketplaza0b-20&linkId=abcdef6789012345abcdef67890&language=en_US&ref_=as_li_ss_tl",
    description:
      "Lickable creamy puree treats for cats with farm-raised chicken, grain-free and low calorie, cats go crazy for these",
  },
  {
    id: 60,
    name: "Tetra Water Cleaner Gravel Siphon for Aquariums",
    category: "Pet Supplies",
    price: 29.99,
    rating: 4.4,
    reviews: 23456,
    image: "https://m.media-amazon.com/images/I/71POJ-eqDWL._AC_SX679_.jpg",
    link: "https://www.amazon.com/Tetra-Cleaner-Gravel-Aquariums-Freshwater/dp/B091D3DTWS?&linkCode=ll1&tag=marketplaza0b-20&linkId=abcdef6789012345abcdef67890&language=en_US&ref_=as_li_ss_tl",
    description:
      "Easy-to-use aquarium vacuum that removes debris from gravel while changing water, keeps tank clean and healthy",
  },

  // Garden & Tools
  {
    id: 41,
    name: "Weber Spirit E-310 Gas Grill",
    category: "Garden & Tools",
    price: 549.0,
    originalPrice: 599.0,
    rating: 4.7,
    reviews: 23456,
    image: "https://m.media-amazon.com/images/I/71vd9uEPNFL._AC_SX679_.jpg",
    link: "https://www.amazon.com/Weber-SPIRIT-3-Burner-Liquid-Propane/dp/B0DPH6NNTB?&linkCode=ll1&tag=marketplaza0b-20&linkId=abcdef6789012345abcdef67890&language=en_US&ref_=as_li_ss_tl",
    description:
      "3-burner liquid propane gas grill with porcelain-enameled lid and cooking grates for perfect outdoor BBQ",
  },
  {
    id: 42,
    name: "Gardening Tools 9-Piece",
    category: "Garden & Tools",
    price: 49.99,
    rating: 4.6,
    reviews: 8543,
    image: "https://m.media-amazon.com/images/I/81hk0PGpklL._AC_SX679_.jpg",
    link: "https://www.amazon.com/dp/B09F9C3KFS?&linkCode=ll1&tag=marketplaza0b-20&linkId=abcdef6789012345abcdef67890&language=en_US&ref_=as_li_ss_tl",
    description:
      "Complete 9-piece gardening tool set with ergonomic handles for all your planting and maintenance needs",
  },
  {
    id: 43,
    name: "Gardening Tool Set, CHRYZTAL",
    category: "Garden & Tools",
    price: 59.99,
    rating: 4.7,
    reviews: 12234,
    image: "https://m.media-amazon.com/images/I/71UDfsaOKvL._AC_SX679_.jpg",
    link: "https://www.amazon.com/dp/B09F3CWRRC?&linkCode=ll1&tag=marketplaza0b-20&linkId=abcdef6789012345abcdef67890&language=en_US&ref_=as_li_ss_tl",
    description:
      "Premium gardening tool collection with durable construction and comfortable grips for garden enthusiasts",
  },
  {
    id: 44,
    name: "HomGarden Folding Garden Kneeler Seat Bench Stool",
    category: "Garden & Tools",
    price: 39.99,
    rating: 4.5,
    reviews: 15678,
    image: "https://m.media-amazon.com/images/I/71CZ9FyVBhL._AC_SX679_.jpg",
    link: "https://www.amazon.com/dp/B07J66MY3Y?&linkCode=ll1&tag=marketplaza0b-20&linkId=abcdef6789012345abcdef67890&language=en_US&ref_=as_li_ss_tl",
    description: "Versatile folding garden seat and kneeler with tool pouch to reduce strain while gardening",
  },
  {
    id: 45,
    name: "Garden Flat Shovel - Snow Ice Scraper",
    category: "Garden & Tools",
    price: 29.99,
    rating: 4.4,
    reviews: 6789,
    image: "https://m.media-amazon.com/images/I/81IY7R7mHfL._AC_SX679_.jpg",
    link: "https://www.amazon.com/dp/B0DBZM45GP?&linkCode=ll1&tag=marketplaza0b-20&linkId=abcdef6789012345abcdef67890&language=en_US&ref_=as_li_ss_tl",
    description: "Multi-purpose flat shovel ideal for gardening, snow removal, and ice scraping tasks",
  },
  {
    id: 46,
    name: "Kurapika Patio Furniture Set 4 Pieces",
    category: "Garden & Tools",
    price: 99.99,
    rating: 4.3,
    reviews: 8934,
    image: "https://m.media-amazon.com/images/I/71ZBHo8TceL._AC_SX679_.jpg",
    link: "https://www.amazon.com/Kurapika-Furniture-Outdoor-Conversation-Backyard/dp/B0DP43X8ZJ?&linkCode=ll1&tag=marketplaza0b-20&linkId=abcdef6789012345abcdef67890&language=en_US&ref_=as_li_ss_tl",
    description: "Stylish 4-piece outdoor conversation set perfect for backyard gatherings and patio relaxation",
  },
  {
    id: 47,
    name: "Devoko Patio Porch Furniture Sets 3 Pieces",
    category: "Garden & Tools",
    price: 79.99,
    rating: 4.6,
    reviews: 23456,
    image: "https://m.media-amazon.com/images/I/81VhMt7V08L._AC_SX679_.jpg",
    link: "https://www.amazon.com/Devoko-Furniture-Rattan-Cushion-Outdoor/dp/B0765VTBLV?&linkCode=ll1&tag=marketplaza0b-20&linkId=abcdef6789012345abcdef67890&language=en_US&ref_=as_li_ss_tl",
    description: "Comfortable rattan patio furniture set with cushions for outdoor lounging and entertaining",
  },
  {
    id: 48,
    name: "3 Pieces Outdoor Patio Furniture Set",
    category: "Garden & Tools",
    price: 59.99,
    rating: 4.5,
    reviews: 11234,
    image: "https://m.media-amazon.com/images/I/71tXTDVLrFL._AC_SX679_.jpg",
    link: "https://www.amazon.com/Qsun-Furniture-Conversation-Backyard-Poolside/dp/B09CDNXK56?&linkCode=ll1&tag=marketplaza0b-20&linkId=abcdef6789012345abcdef67890&language=en_US&ref_=as_li_ss_tl",
    description: "Compact 3-piece patio set ideal for backyard, poolside, or balcony conversation areas",
  },
  {
    id: 49,
    name: "Mouse Station with Keys",
    category: "Garden & Tools",
    price: 99.99,
    rating: 4.4,
    reviews: 9876,
    image: "https://m.media-amazon.com/images/I/61Xjhe-7-1L._AC_SX679_.jpg",
    link: "https://www.amazon.com/Mouse-Station-Keys-Required-Stations/dp/B0FDFHPVQ7?&linkCode=ll1&tag=marketplaza0b-20&linkId=abcdef6789012345abcdef67890&language=en_US&ref_=as_li_ss_tl",
    description: "Professional mouse control station with secure key access for safe rodent management",
  },
  {
    id: 50,
    name: "JAMFLY Egg Chair Wicker Outdoor Chairs",
    category: "Garden & Tools",
    price: 69.99,
    rating: 4.7,
    reviews: 3456,
    image: "https://m.media-amazon.com/images/I/71ekHPtCxdL._AC_SX679_.jpg",
    link: "https://www.amazon.com/JAMFLY-Outdoor-Oversized-Lounger-Backyard/dp/B0D11DZZ5J?&linkCode=ll1&tag=marketplaza0b-20&linkId=abcdef6789012345abcdef67890&language=en_US&ref_=as_li_ss_tl",
    description: "Oversized wicker egg chair lounger perfect for backyard relaxation and outdoor comfort",
  },
]

// Category mapping for URL slugs
const categoryMapping: Record<string, string> = {
  electronics: "Electronics",
  "home-kitchen": "Home & Kitchen",
  "beauty-personal-care": "Beauty & Personal Care",
  "clothing-shoes-jewelry": "Clothing, Shoes & Jewelry",
  "toys-games": "Toys & Games",
  "health-household-baby": "Health & Household / Baby",
  "sports-outdoors": "Sports & Outdoors",
  books: "Books",
  "pet-supplies": "Pet Supplies",
  "garden-tools": "Garden & Tools",
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params
  const categoryName = categoryMapping[category]

  if (!categoryName) {
    notFound()
  }

  const categoryProducts = products.filter((p) => p.category === categoryName)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 lg:px-8 py-8 lg:py-12">
        {/* Category Header */}
        <div className="mb-12">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-4 text-balance">
            {categoryName}
          </h1>
          <p className="text-muted-foreground text-lg">{categoryProducts.length} products available</p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categoryProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-card rounded-lg overflow-hidden border border-border transition-all hover:shadow-lg"
            >
              <Link href={`/products/${product.id}`} className="block">
                <div className="aspect-square relative overflow-hidden bg-muted">
                  {product.originalPrice && (
                    <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground text-xs font-semibold px-2 py-1 rounded z-10">
                      SALE
                    </div>
                  )}
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="h-full w-full object-contain transition-transform group-hover:scale-105 p-4"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2 line-clamp-2 group-hover:text-secondary transition-colors min-h-[2.5rem]">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{product.description}</p>
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{product.rating}</span>
                    <span className="text-xs text-muted-foreground">({product.reviews.toLocaleString()})</span>
                  </div>
                </div>
              </Link>

              <div className="p-4 pt-0">
                <div className="flex flex-col gap-2">
                  <Link href={`/products/${product.id}`}>
                    <Button className="w-full bg-transparent" variant="outline">
                      View Details
                    </Button>
                  </Link>

                  {product.link && (
                    <Button
                      onClick={() => {
                        window.open(product.link, "_blank", "noopener,noreferrer")
                      }}
                      className="w-full bg-[#FF9900] hover:bg-[#FA8900] text-white"
                    >
                      Buy on Amazon
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {categoryProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">No products found in this category.</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
