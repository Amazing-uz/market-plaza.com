"use client"

import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const products = [
	// Electronics
	{
		id: 1,
		name: "Amazon Echo Studio",
		category: "Electronics",
		price: 199.99,
		rating: 4.7,
		reviews: 28542,
		image: "https://m.media-amazon.com/images/I/71BRtVq+uWL._AC_SL1500_.jpg",
		link: "https://www.amazon.com/dp/B0FBHDQ94L?th=1&linkCode=ll1&tag=marketplaza0b-20&linkId=4cd3efdb787ed10d584a3acabde6d449&language=en_US&ref_=as_li_ss_tl",
		description:
			"Premium smart speaker with immersive, room-filling sound, spatial audio processing, and Alexa voice control for the ultimate listening experience",
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
		link: "https://www.amazon.com/Anker-Travel-Ready-Technology-High-Speed-Output%EF%BC%88Black%EF%BC%89%EF%BC%8C1pack/dp/B0D5CLSMFB?&linkCode=ll1&tag=marketplaza0b-20&linkId=818d3797e1b4495aaa0287566855caf8&language=en_US&ref_=as_li_ss_tl",
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
		link: "https://www.amazon.com/Smartphone-Unlocked-Processor-Manufacturer-Warranty/dp/B0DP3G4GVQ?&linkCode=ll1&tag=marketplaza0b-20&linkId=818d3797e1b4495aaa0287566855caf8&language=en_US&ref_=as_li_ss_tl",
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
		link: "https://www.amazon.com/Instant-Pot-Multi-Use-Programmable-Pressure/dp/B00FLYWNYQ?&linkCode=ll1&tag=marketplaza0b-20&linkId=818d3797e1b4495aaa0287566855caf8&language=en_US&ref_=as_li_ss_tl",
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
		link: "https://www.amazon.com/Ninja-AF101-Fryer-Black-gray/dp/B07FDJMC9Q?&linkCode=ll1&tag=marketplaza0b-20&linkId=818d3797e1b4495aaa0287566855caf8&language=en_US&ref_=as_li_ss_tl",
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
		link: "https://www.amazon.com/Zinus-Mattress-Fiberglass-Pressure-Certified/dp/B0CKZ1CK1H?&linkCode=ll1&tag=marketplaza0b-20&linkId=818d3797e1b4495aaa0287566855caf8&language=en_US&ref_=as_li_ss_tl",
		description:
			"Premium memory foam mattress infused with green tea extract for natural odor control and pressure relief",
	},
	{
		id: 9,
		name: "Rubbermaid Brilliance Storage Container Set",
		category: "Home & Kitchen",
		price: 39.99,
		rating: 4.8,
		reviews: 45123,
		image: "https://m.media-amazon.com/images/I/81Ap89R-ajL._AC_SX679_.jpg",
		link: "https://www.amazon.com/Rubbermaid-Brilliance-Storage-Container-BPA-free/dp/B079M8FPTW?&linkCode=ll1&tag=marketplaza0b-20&linkId=818d3797e1b4495aaa0287566855caf8&language=en_US&ref_=as_li_ss_tl",
		description: "BPA-free leak-proof food storage containers with airtight seals and crystal-clear visibility",
	},
	{
		id: 10,
		name: "Shark Navigator Lift-Away Professional",
		category: "Home & Kitchen",
		price: 199.99,
		rating: 4.7,
		reviews: 78234,
		image: "https://m.media-amazon.com/images/I/71ybuaqVLwL._AC_SX679_.jpg",
		link: "https://www.amazon.com/Shark-Navigator-Professional-Anti-Allergy-NV360/dp/B0D7QLQNS5?&linkCode=ll1&tag=marketplaza0b-20&linkId=818d3797e1b4495aaa0287566855caf8&language=en_US&ref_=as_li_ss_tl",
		description: "Powerful upright vacuum with lift-away technology and anti-allergen complete seal",
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
		link: "https://www.amazon.com/CeraVe-Skin-Renewing-Night-Cream/dp/B00SNPCSUY?&linkCode=ll1&tag=marketplaza0b-20&linkId=818d3797e1b4495aaa0287566855caf8&language=en_US&ref_=as_li_ss_tl",
		description: "Peptide-rich night cream with hyaluronic acid for skin renewal and intense moisture",
	},
	{
		id: 12,
		name: "The Ordinary Hyaluronic Acid 2% + B5",
		category: "Beauty & Personal Care",
		price: 7.99,
		rating: 4.5,
		reviews: 89123,
		image: "https://m.media-amazon.com/images/I/61eH32lVpdL._SX522_.jpg",
		link: "https://www.amazon.com/Ordinary-Hyaluronic-Acid-2-30ml/dp/B01MYEZPC8?&linkCode=ll1&tag=marketplaza0b-20&linkId=818d3797e1b4495aaa0287566855caf8&language=en_US&ref_=as_li_ss_tl",
		description: "Concentrated hydration serum with multi-weight hyaluronic acid molecules for plump skin",
	},
	{
		id: 13,
		name: "LANEIGE Lip Sleeping Mask",
		category: "Beauty & Personal Care",
		price: 24.0,
		rating: 4.7,
		reviews: 67890,
		image: "https://m.media-amazon.com/images/I/51H5SkeGANL._SX522_.jpg",
		link: "https://www.amazon.com/Laneige-Sleeping-Berry/dp/B07XXPHQZK?&linkCode=ll1&tag=marketplaza0b-20&linkId=818d3797e1b4495aaa0287566855caf8&language=en_US&ref_=as_li_ss_tl",
		description: "Overnight lip treatment with berry extract for soft, moisturized lips by morning",
	},
	{
		id: 14,
		name: "Mielle Rosemary Mint Scalp & Hair Oil",
		category: "Beauty & Personal Care",
		price: 10.99,
		rating: 4.6,
		reviews: 34567,
		image: "https://m.media-amazon.com/images/I/61n1krgI+tL._SX466_.jpg",
		link: "https://www.amazon.com/Mielle-Rosemary-Mint-Scalp-Strengthening/dp/B07N7PK9QK?&linkCode=ll1&tag=marketplaza0b-20&linkId=818d3797e1b4495aaa0287566855caf8&language=en_US&ref_=as_li_ss_tl",
		description: "Biotin-enriched scalp treatment oil with rosemary and mint for healthy hair growth",
	},
	{
		id: 15,
		name: "e.l.f. Power Grip Primer",
		category: "Beauty & Personal Care",
		price: 10.0,
		rating: 4.6,
		reviews: 123456,
		image: "/elf-power-grip-primer-makeup-product.jpg",
		link: "https://www.amazon.com/l-f-Power-Grip-Primer-Enhancing/dp/B084Q5CQS9?&linkCode=ll1&tag=marketplaza0b-20&linkId=e1406fa0fbd1f28cd4e4fb1dcf3d4868&language=en_US&ref_=as_li_ss_tl",
		description: "Gel-based face primer with a tacky feel that grips makeup for long-lasting wear",
	},

	// Clothing, Shoes & Jewelry
	{
		id: 16,
		name: "Hanes Men's EcoSmart Fleece Sweatshirt",
		category: "Clothing, Shoes & Jewelry",
		price: 12.99,
		rating: 4.6,
		reviews: 56789,
		image: "https://m.media-amazon.com/images/I/81D+bCgn8hL._AC_SX569_.jpg",
		link: "https://www.amazon.com/Hanes-EcoSmart-Fleece-Sweatshirt-Stonewashed/dp/B0721C21RJ?&linkCode=ll1&tag=marketplaza0b-20&linkId=818d3797e1b4495aaa0287566855caf8&language=en_US&ref_=as_li_ss_tl",
		description: "Comfortable crewneck sweatshirt made with recycled polyester for sustainable warmth",
	},
	{
		id: 17,
		name: "Hanes Full-Zip EcoSmart Fleece Hoodie",
		category: "Clothing, Shoes & Jewelry",
		price: 16.99,
		rating: 4.5,
		reviews: 45678,
		image: "https://m.media-amazon.com/images/I/71QyRZzbaUL._AC_SX569_.jpg",
		link: "https://www.amazon.com/Hanes-Full-zip-Eco-smart-athletic-sweatshirts/dp/B00JUM4CT4?&linkCode=ll1&tag=marketplaza0b-20&linkId=818d3797e1b4495aaa0287566855caf8&language=en_US&ref_=as_li_ss_tl",
		description: "Classic zip-up hoodie with eco-friendly fabric and comfortable athletic fit",
	},
	{
		id: 18,
		name: "adidas Men's Cloudfoam Pure 2.0 Sneaker",
		category: "Clothing, Shoes & Jewelry",
		price: 65.0,
		rating: 4.7,
		reviews: 34567,
		image: "https://m.media-amazon.com/images/I/71JsiyZWwyL._AC_SY575_.jpg",
		link: "https://www.amazon.com/adidas-Racer-Adapt-Sneaker-Black/dp/B0CKMC1BGB?&linkCode=ll1&tag=marketplaza0b-20&linkId=818d3797e1b4495aaa0287566855caf8&language=en_US&ref_=as_li_ss_tl",
		description: "Lightweight running-inspired sneakers with cloudfoam cushioning for all-day comfort",
	},
	{
		id: 19,
		name: "Levi's Men's 511 Slim Fit Jeans",
		category: "Clothing, Shoes & Jewelry",
		price: 59.99,
		rating: 4.6,
		reviews: 78901,
		image: "https://m.media-amazon.com/images/I/81HRsNLuziL._AC_SX466_.jpg",
		link: "https://www.amazon.com/Levis-Mens-Jeans-Stretch-Panda/dp/B072NGDWDY?&linkCode=ll1&tag=marketplaza0b-20&linkId=818d3797e1b4495aaa0287566855caf8&language=en_US&ref_=as_li_ss_tl",
		description: "Classic slim-fit jeans with stretch denim for comfortable, modern style",
	},
	{
		id: 20,
		name: "Casio Men's Duro Analog Watch",
		category: "Clothing, Shoes & Jewelry",
		price: 54.95,
		rating: 4.7,
		reviews: 23456,
		image: "https://m.media-amazon.com/images/I/61nHUVwR65L._AC_SY550_.jpg",
		link: "https://www.amazon.com/Casio-MDV106-1AV-Analog-Watch-Black/dp/B009KYJAJY?&linkCode=ll1&tag=marketplaza0b-20&linkId=818d3797e1b4495aaa0287566855caf8&language=en_US&ref_=as_li_ss_tl",
		description: "Durable dive-style watch with 200M water resistance and reliable quartz movement",
	},

	// Toys & Games
	{
		id: 21,
		name: "LEGO Classic Medium Creative Brick Box",
		category: "Toys & Games",
		price: 34.99,
		rating: 4.8,
		reviews: 45678,
		image: "https://m.media-amazon.com/images/I/8160QjpuoOL._AC_SX679_.jpg",
		link: "https://www.amazon.com/LEGO-Classic-Medium-Creative-Brick/dp/B00NHQFA1I?&linkCode=ll1&tag=marketplaza0b-20&linkId=818d3797e1b4495aaa0287566855caf8&language=en_US&ref_=as_li_ss_tl",
		description: "484-piece creative building set with vibrant colors for endless imaginative possibilities",
	},
	{
		id: 22,
		name: "UNO Card Game",
		category: "Toys & Games",
		price: 5.99,
		rating: 4.9,
		reviews: 123456,
		image: "https://m.media-amazon.com/images/I/91zZyNjPcLL._AC_SY879_.jpg",
		link: "https://www.amazon.com/Mattel-Games-Adults-Parties-Special/dp/B0D6X9T62X?&linkCode=ll1&tag=marketplaza0b-20&linkId=818d3797e1b4495aaa0287566855caf8&language=en_US&ref_=as_li_ss_tl",
		description: "Classic family card game for 2-10 players with simple rules and fast-paced fun",
	},
	{
		id: 23,
		name: "Barbie Dreamhouse",
		category: "Toys & Games",
		price: 199.99,
		rating: 4.7,
		reviews: 12345,
		image: "https://m.media-amazon.com/images/I/71PFKADv6CL._AC_SX679_.jpg",
		link: "https://www.amazon.com/Barbie-Dreamhouse-3-Story-Playset-Elevator/dp/B0BLJTJ38M?&linkCode=ll1&tag=marketplaza0b-20&linkId=818d3797e1b4495aaa0287566855caf8&language=en_US&ref_=as_li_ss_tl",
		description: "3-story dollhouse playset with working elevator and pool slide for imaginative play",
	},
	{
		id: 24,
		name: "Nintendo Switch with Super Mario Bros. Wonder Bundle",
		category: "Toys & Games",
		price: 349.99,
		rating: 4.9,
		reviews: 23456,
		image: "https://m.media-amazon.com/images/I/715AHrLja3L._SX522_.jpg",
		link: "https://www.amazon.com/Nintendo-Switch-Mario-World-Bundle-2/dp/B0FC5FJZ9Z?&linkCode=ll1&tag=marketplaza0b-20&linkId=818d3797e1b4495aaa0287566855caf8&language=en_US&ref_=as_li_ss_tl",
		description: "Hybrid gaming console bundle with the latest Mario adventure game included",
	},
	{
		id: 25,
		name: "Play-Doh Modeling Compound 36-Pack",
		category: "Toys & Games",
		price: 19.99,
		rating: 4.8,
		reviews: 56789,
		image: "https://m.media-amazon.com/images/I/71LqxbA1WCL._AC_SX679_.jpg",
		link: "https://www.amazon.com/Play-Doh-Modeling-Compound-Non-Toxic-Exclusive/dp/B00JM5GW10?&linkCode=ll1&tag=marketplaza0b-20&linkId=818d3797e1b4495aaa0287566855caf8&language=en_US&ref_=as_li_ss_tl",
		description: "Non-toxic modeling compound in rainbow colors for creative sculpting and play",
	},

	// Health & Household / Baby
	{
		id: 26,
		name: "Pampers Sensitive Baby Wipes",
		category: "Health & Household / Baby",
		price: 19.99,
		rating: 4.8,
		reviews: 89012,
		image: "https://m.media-amazon.com/images/I/71NqHkGRN1L._AC_SX679_PIbundle-12,TopRight,0,0_SH20_.jpg",
		link: "https://www.amazon.com/Pampers-Wipes-Sensitive-Perfume-Multi/dp/B0BJ13K7FR?&linkCode=ll1&tag=marketplaza0b-20&linkId=818d3797e1b4495aaa0287566855caf8&language=en_US&ref_=as_li_ss_tl",
		description: "Hypoallergenic baby wipes with gentle cleansing lotion for sensitive skin",
	},
	{
		id: 27,
		name: "Charmin Ultra Strong Toilet Paper",
		category: "Health & Household / Baby",
		price: 29.99,
		rating: 4.7,
		reviews: 67890,
		image: "https://m.media-amazon.com/images/I/81Xyre0z0VL._AC_SX679_PIbundle-24,TopRight,0,0_SH20_.jpg",
		link: "https://www.amazon.com/Charmin-Toilet-Family-Cushiony-Sheets/dp/B0798DVT68?&linkCode=ll1&tag=marketplaza0b-20&linkId=818d3797e1b4495aaa0287566855caf8&language=en_US&ref_=as_li_ss_tl",
		description: "4X stronger bath tissue with cushiony comfort in family mega rolls",
	},
	{
		id: 28,
		name: "Nature's Way Sambucus Elderberry Gummies",
		category: "Health & Household / Baby",
		price: 14.99,
		rating: 4.6,
		reviews: 34567,
		image: "https://m.media-amazon.com/images/I/7134HKzZjdL._AC_SX679_.jpg",
		link: "https://www.amazon.com/Natures-Way-Elderberry-Vegetarian-Packaging/dp/B00MJ7VL1O?&linkCode=ll1&tag=marketplaza0b-20&linkId=818d3797e1b4495aaa0287566855caf8&language=en_US&ref_=as_li_ss_tl",
		description: "Immune support gummies with black elderberry extract and vitamin C",
	},
	{
		id: 29,
		name: "Huggies Natural Care Sensitive Baby Wipes",
		category: "Health & Household / Baby",
		price: 21.99,
		rating: 4.8,
		reviews: 56789,
		image: "https://m.media-amazon.com/images/I/81FlNgJOeqL._AC_SX679_PIbundle-12,TopRight,0,0_SH20_.jpg",
		link: "https://www.amazon.com/HUGGIES-Natural-Unscented-Sensitive-Water-Based/dp/B07SCL613T?&linkCode=ll1&tag=marketplaza0b-20&linkId=818d3797e1b4495aaa0287566855caf8&language=en_US&ref_=as_li_ss_tl",
		description: "Unscented plant-based wipes with 99% water for gentle baby care",
	},
	{
		id: 30,
		name: "Philips Avent Natural Baby Bottle",
		category: "Health & Household / Baby",
		price: 29.99,
		rating: 4.7,
		reviews: 23456,
		image: "https://m.media-amazon.com/images/I/71IsWBuTvfL._SX466_.jpg",
		link: "https://www.amazon.com/Philips-Natural-Response-SCY910-04/dp/B098YHHV3Q?&linkCode=ll1&tag=marketplaza0b-20&linkId=818d3797e1b4495aaa0287566855caf8&language=en_US&ref_=as_li_ss_tl",
		description: "Anti-colic baby bottles with natural response nipple for comfortable feeding",
	},

	// Sports & Outdoors
	{
		id: 31,
		name: "Fitbit Charge 6 Fitness Tracker",
		category: "Sports & Outdoors",
		price: 159.95,
		rating: 4.5,
		reviews: 12345,
		image: "https://m.media-amazon.com/images/I/61ZtqtvoD2L._AC_SX466_.jpg",
		link: "https://www.amazon.com/Fitbit-Exercise-Equipment-6-Months-Membership/dp/B0CC62ZG1M?&linkCode=ll1&tag=marketplaza0b-20&linkId=818d3797e1b4495aaa0287566855caf8&language=en_US&ref_=as_li_ss_tl",
		description: "Advanced fitness tracker with heart rate monitoring, GPS, and sleep tracking",
	},
	{
		id: 32,
		name: "Coleman Sleeping Bag",
		category: "Sports & Outdoors",
		price: 29.99,
		rating: 4.6,
		reviews: 45678,
		image: "https://m.media-amazon.com/images/I/61aUr3tBexL._AC_SX679_.jpg",
		link: "https://www.amazon.com/Coleman-Weatherproof-Festivals-Backyard-Sleepovers/dp/B0D7QLQNS5?&linkCode=ll1&tag=marketplaza0b-20&linkId=818d3797e1b4495aaa0287566855caf8&language=en_US&ref_=as_li_ss_tl",
		description: "All-season rectangular sleeping bag with weather-resistant design for camping",
	},
	{
		id: 33,
		name: "Under Armour Men's Charged Assert 10",
		category: "Sports & Outdoors",
		price: 70.0,
		rating: 4.6,
		reviews: 23456,
		image: "https://m.media-amazon.com/images/I/61O30g0cZmL._AC_SY575_.jpg",
		link: "https://www.amazon.com/Under-Armour-Charged-Assert-Running/dp/B09XBWQ9Y9?&linkCode=ll1&tag=marketplaza0b-20&linkId=818d3797e1b4495aaa0287566855caf8&language=en_US&ref_=as_li_ss_tl",
		description: "Performance running shoes with charged cushioning for responsive comfort",
	},
	{
		id: 34,
		name: "Garmin Forerunner 255 GPS Running Watch",
		category: "Sports & Outdoors",
		price: 349.99,
		rating: 4.7,
		reviews: 8901,
		image: "https://m.media-amazon.com/images/I/518z0My1ZlS._AC_SX679_.jpg",
		link: "https://www.amazon.com/Garmin-Forerunner-Running-Suggested-Workouts/dp/B092RCLKHN?&linkCode=ll1&tag=marketplaza0b-20&linkId=818d3797e1b4495aaa0287566855caf8&language=en_US&ref_=as_li_ss_tl",
		description: "Advanced GPS smartwatch with race widget, training status, and performance metrics",
	},
	{
		id: 35,
		name: "YETI Rambler 20 oz Tumbler",
		category: "Sports & Outdoors",
		price: 35.0,
		rating: 4.9,
		reviews: 67890,
		image: "https://m.media-amazon.com/images/I/51kXewLNVGL._AC_SX679_.jpg",
		link: "https://www.amazon.com/YETI-Rambler-Stainless-Insulated-MagSlider/dp/B08D3VPRQ1?&linkCode=ll1&tag=marketplaza0b-20&linkId=818d3797e1b4495aaa0287566855caf8&language=en_US&ref_=as_li_ss_tl",
		description: "Stainless steel insulated tumbler with MagSlider lid for hot or cold beverages",
	},

	// Books
	{
		id: 36,
		name: "Atomic Habits by James Clear",
		category: "Books",
		price: 16.99,
		rating: 4.8,
		reviews: 123456,
		image: "https://m.media-amazon.com/images/I/71F4+7rk2eL._SX342_.jpg",
		link: "https://www.amazon.com/Atomic-Habits-James-Clear-audiobook/dp/B07RFSSYBH?&linkCode=ll1&tag=marketplaza0b-20&linkId=818d3797e1b4495aaa0287566855caf8&language=en_US&ref_=as_li_ss_tl",
		description: "Proven strategies for building good habits and breaking bad ones with tiny changes",
	},
	{
		id: 37,
		name: "The Subtle Art of Not Giving a F*ck",
		category: "Books",
		price: 15.99,
		rating: 4.6,
		reviews: 89012,
		image: "https://m.media-amazon.com/images/I/81A5jQHA+lL._SX342_.jpg",
		link: "https://www.amazon.com/Subtle-Art-Not-Giving-Counterintuitive/dp/B01I29Y344?&linkCode=ll1&tag=marketplaza0b-20&linkId=818d3797e1b4495aaa0287566855caf8&language=en_US&ref_=as_li_ss_tl",
		description: "Counterintuitive approach to living a good life through accepting limitations",
	},
	{
		id: 38,
		name: "Harry Potter and the Sorcerer's Stone",
		category: "Books",
		price: 8.99,
		rating: 4.9,
		reviews: 234567,
		image: "https://m.media-amazon.com/images/I/91eopoUCjLL._SX342_.jpg",
		link: "https://www.amazon.com/Harry-Potter-Sorcerers-Stone-Book/dp/B017V4IMVQ?&linkCode=ll1&tag=marketplaza0b-20&linkId=818d3797e1b4495aaa0287566855caf8&language=en_US&ref_=as_li_ss_tl",
		description: "First book in the magical Harry Potter series following the young wizard's adventures",
	},
	{
		id: 39,
		name: "The 48 Laws of Power",
		category: "Books",
		price: 21.99,
		rating: 4.7,
		reviews: 45678,
		image: "https://m.media-amazon.com/images/I/71s-d6iLlaL._SX342_.jpg",
		link: "https://www.amazon.com/48-Laws-of-Power-Robert-Greene-audiobook/dp/B00X0TKUS0?&linkCode=ll1&tag=marketplaza0b-20&linkId=818d3797e1b4495aaa0287566855caf8&language=en_US&ref_=as_li_ss_tl",
		description: "Distilled wisdom of masters who wielded power throughout history",
	},

	// Pet Supplies
	{
		id: 40,
		name: "Furbo Dog Camera with 360° View",
		category: "Pet Supplies",
		price: 209.99,
		rating: 4.3,
		reviews: 12345,
		image: "https://m.media-amazon.com/images/I/616wRFOTA5L._AC_SX466_.jpg",
		link: "https://www.amazon.com/Furbo-Camera-with-360%C2%B0-View/dp/B09GDQZLD1?&linkCode=ll1&tag=marketplaza0b-20&linkId=818d3797e1b4495aaa0287566855caf8&language=en_US&ref_=as_li_ss_tl",
		description: "Smart pet camera with treat tossing, barking alerts, and full-room tracking",
	},
	{
		id: 51,
		name: "Amazon Basics Heavy-Duty Pet Training and Puppy Pads",
		category: "Pet Supplies",
		price: 19.99,
		rating: 4.6,
		reviews: 34567,
		image: "https://m.media-amazon.com/images/I/71LHksRF15L._AC_SX679_.jpg",
		link: "https://www.amazon.com/Amazon-Basics-Heavy-Duty-Absorbency-Regular/dp/B00MW8G62E?&linkCode=ll1&tag=marketplaza0b-20&linkId=818d3797e1b4495aaa0287566855caf8&language=en_US&ref_=as_li_ss_tl",
		description: "Super-absorbent training pads with 5-layer protection for puppies and senior dogs",
	},
	{
		id: 52,
		name: "Furbo Dog Camera",
		category: "Pet Supplies",
		price: 169.99,
		rating: 4.3,
		reviews: 23456,
		image: "https://m.media-amazon.com/images/I/616wRFOTA5L._AC_SX466_.jpg",
		link: "https://www.amazon.com/Furbo-Camera-with-360%C2%B0-View/dp/B09GDQZLD1?&linkCode=ll1&tag=marketplaza0b-20&linkId=818d3797e1b4495aaa0287566855caf8&language=en_US&ref_=as_li_ss_tl",
		description: "Interactive pet camera with treat tossing, two-way audio, and barking alerts",
	},
	{
		id: 53,
		name: "KONG Classic Dog Toy",
		category: "Pet Supplies",
		price: 12.99,
		rating: 4.8,
		reviews: 89012,
		image: "/kong-classic-red-rubber-dog-toy.jpg",
		link: "https://www.amazon.com/KONG-Classic-Durable-Natural-Rubber/dp/B0002AR0II?&linkCode=ll1&tag=marketplaza0b-20&linkId=818d3797e1b4495aaa0287566855caf8&language=en_US&ref_=as_li_ss_tl",
		description: "Durable rubber toy for stuffing treats, promoting healthy play and mental stimulation",
	},
	{
		id: 54,
		name: "PetSafe Automatic Ball Launcher",
		category: "Pet Supplies",
		price: 139.99,
		rating: 4.2,
		reviews: 5678,
		image: "/petsafe-automatic-ball-launcher-for-dogs.jpg",
		link: "https://www.amazon.com/PetSafe-Automatic-Ball-Launcher-Dog/dp/B0721735K9?&linkCode=ll1&tag=marketplaza0b-20&linkId=818d3797e1b4495aaa0287566855caf8&language=en_US&ref_=as_li_ss_tl",
		description: "Interactive automatic ball thrower for dogs with adjustable launch distances",
	},
	{
		id: 55,
		name: "Catit Flower Fountain",
		category: "Pet Supplies",
		price: 29.99,
		rating: 4.5,
		reviews: 45678,
		image: "/catit-flower-fountain-water-dispenser.jpg",
		link: "https://www.amazon.com/Catit-Flower-Fountain-3-Liters/dp/B0146QXOB0?&linkCode=ll1&tag=marketplaza0b-20&linkId=818d3797e1b4495aaa0287566855caf8&language=en_US&ref_=as_li_ss_tl",
		description: "3-liter pet water fountain with flower design encouraging cats to drink more water",
	},
	{
		id: 56,
		name: "Philips Avent Natural Baby Bottle",
		category: "Pet Supplies",
		price: 29.99,
		rating: 4.7,
		reviews: 23456,
		image: "https://m.media-amazon.com/images/I/71IsWBuTvfL._SX466_.jpg",
		link: "https://www.amazon.com/Philips-Natural-Response-SCY910-04/dp/B098YHHV3Q?&linkCode=ll1&tag=marketplaza0b-20&linkId=818d3797e1b4495aaa0287566855caf8&language=en_US&ref_=as_li_ss_tl",
		description: "Anti-colic baby bottles with natural response nipple for comfortable feeding",
	},
	{
		id: 57,
		name: "FURminator Deshedding Tool",
		category: "Pet Supplies",
		price: 39.99,
		rating: 4.6,
		reviews: 67890,
		image: "/furminator-deshedding-grooming-tool.jpg",
		link: "https://www.amazon.com/FURminator-deShedding-Tool-Large-Dogs/dp/B0040QQ07C?&linkCode=ll1&tag=marketplaza0b-20&linkId=818d3797e1b4495aaa0287566855caf8&language=en_US&ref_=as_li_ss_tl",
		description: "Professional grooming tool reducing shedding up to 90% for large dogs",
	},
	{
		id: 58,
		name: "SmartyKat Hot Pursuit Cat Toy",
		category: "Pet Supplies",
		price: 14.99,
		rating: 4.5,
		reviews: 23456,
		image: "/smartykat-hot-pursuit-electronic-cat-toy.jpg",
		link: "https://www.amazon.com/SmartyKat-Hot-Pursuit-Electronic-Concealed/dp/B06WP7F8YC?&linkCode=ll1&tag=marketplaza0b-20&linkId=818d3797e1b4495aaa0287566855caf8&language=en_US&ref_=as_li_ss_tl",
		description: "Electronic concealed motion cat toy with feather and random speed for active play",
	},
	{
		id: 59,
		name: "Petmate Two Door Top Load Kennel",
		category: "Pet Supplies",
		price: 49.99,
		rating: 4.6,
		reviews: 34567,
		image: "/petmate-two-door-pet-carrier-kennel.jpg",
		link: "https://www.amazon.com/Petmate-Two-Door-Top-Load/dp/B00063KCS8?&linkCode=ll1&tag=marketplaza0b-20&linkId=818d3797e1b4495aaa0287566855caf8&language=en_US&ref_=as_li_ss_tl",
		description: "Durable pet carrier with top and side entry for easy loading and secure travel",
	},
	{
		id: 60,
		name: "Tetra Aquarium Cleaner Gravel Vacuum",
		category: "Pet Supplies",
		price: 14.99,
		rating: 4.4,
		reviews: 12345,
		image: "https://m.media-amazon.com/images/I/71POJ-eqDWL._AC_SX679_.jpg",
		link: "https://www.amazon.com/Tetra-Cleaner-Gravel-Aquariums-Freshwater/dp/B091D3DTWS?&linkCode=ll1&tag=marketplaza0b-20&linkId=818d3797e1b4495aaa0287566855caf8&language=en_US&ref_=as_li_ss_tl",
		description: "Easy-to-use aquarium vacuum for cleaning gravel and water changes",
	},

	// Garden & Tools
	{
		id: 41,
		name: "Weber Spirit E-310 Gas Grill",
		category: "Garden & Tools",
		price: 549.0,
		originalPrice: 599.0,
		rating: 4.7,
		reviews: 8901,
		image: "https://m.media-amazon.com/images/I/71vd9uEPNFL._AC_SX679_.jpg",
		link: "https://www.amazon.com/Weber-SPIRIT-3-Burner-Liquid-Propane/dp/B0DPH6NNTB?&linkCode=ll1&tag=marketplaza0b-20&linkId=818d3797e1b4495aaa0287566855caf8&language=en_US&ref_=as_li_ss_tl",
		description: "3-burner liquid propane grill with porcelain-enameled cooking grates and built-in thermometer",
	},
	{
		id: 42,
		name: "Greenworks 40V Cordless Lawn Mower",
		category: "Garden & Tools",
		price: 349.99,
		rating: 4.5,
		reviews: 5678,
		image: "https://m.media-amazon.com/images/I/81hk0PGpklL._AC_SX679_.jpg",
		link: "https://www.amazon.com/dp/B09F9C3KFS?&linkCode=ll1&tag=marketplaza0b-20&linkId=818d3797e1b4495aaa0287566855caf8&language=en_US&ref_=as_li_ss_tl",
		description: "Battery-powered push mower with 20-inch cutting deck and 2-in-1 mulching capability",
	},
	{
		id: 43,
		name: "Best Choice Products 4-Piece Patio Furniture Set",
		category: "Garden & Tools",
		price: 399.99,
		rating: 4.4,
		reviews: 3456,
		image: "https://m.media-amazon.com/images/I/71UDfsaOKvL._AC_SX679_.jpg",
		link: "https://www.amazon.com/dp/B09F3CWRRC?&linkCode=ll1&tag=marketplaza0b-20&linkId=818d3797e1b4495aaa0287566855caf8&language=en_US&ref_=as_li_ss_tl",
		description: "Rattan wicker conversation set with cushions for outdoor comfort and style",
	},
	{
		id: 44,
		name: "BLACK+DECKER 20V MAX Drill & Home Tool Kit",
		category: "Garden & Tools",
		price: 89.99,
		rating: 4.6,
		reviews: 12345,
		image: "https://m.media-amazon.com/images/I/71CZ9FyVBhL._AC_SX679_.jpg",
		link: "https://www.amazon.com/dp/B07J66MY3Y?&linkCode=ll1&tag=marketplaza0b-20&linkId=818d3797e1b4495aaa0287566855caf8&language=en_US&ref_=as_li_ss_tl",
		description: "68-piece cordless drill kit with battery, charger, and essential hand tools",
	},
	{
		id: 45,
		name: "Sun Joe Electric Pressure Washer",
		category: "Garden & Tools",
		price: 149.99,
		rating: 4.5,
		reviews: 23456,
		image: "https://m.media-amazon.com/images/I/81IY7R7mHfL._AC_SX679_.jpg",
		link: "https://www.amazon.com/dp/B0DBZM45GP?&linkCode=ll1&tag=marketplaza0b-20&linkId=818d3797e1b4495aaa0287566855caf8&language=en_US&ref_=as_li_ss_tl",
		description: "2030 PSI electric power washer for cleaning decks, driveways, and siding",
	},
	{
		id: 46,
		name: "Kurapika 3-Piece Outdoor Patio Bistro Set",
		category: "Garden & Tools",
		price: 159.99,
		rating: 4.3,
		reviews: 1234,
		image: "https://m.media-amazon.com/images/I/71ZBHo8TceL._AC_SX679_.jpg",
		link: "https://www.amazon.com/Kurapika-Furniture-Outdoor-Conversation-Backyard/dp/B0DP43X8ZJ?&linkCode=ll1&tag=marketplaza0b-20&linkId=818d3797e1b4495aaa0287566855caf8&language=en_US&ref_=as_li_ss_tl",
		description: "Compact rattan bistro set perfect for balconies and small outdoor spaces",
	},
	{
		id: 47,
		name: "Devoko 5 Pieces Patio Furniture Sets",
		category: "Garden & Tools",
		price: 299.99,
		rating: 4.4,
		reviews: 5678,
		image: "https://m.media-amazon.com/images/I/81VhMt7V08L._AC_SX679_.jpg",
		link: "https://www.amazon.com/Devoko-Furniture-Rattan-Cushion-Outdoor/dp/B0765VTBLV?&linkCode=ll1&tag=marketplaza0b-20&linkId=818d3797e1b4495aaa0287566855caf8&language=en_US&ref_=as_li_ss_tl",
		description: "Manual wicker outdoor sectional with glass table and comfortable cushions",
	},
	{
		id: 48,
		name: "Qsun 4-Piece Outdoor Patio Furniture",
		category: "Garden & Tools",
		price: 349.99,
		rating: 4.3,
		reviews: 2345,
		image: "https://m.media-amazon.com/images/I/71tXTDVLrFL._AC_SX679_.jpg",
		link: "https://www.amazon.com/Qsun-Furniture-Conversation-Backyard-Poolside/dp/B09CDNXK56?&linkCode=ll1&tag=marketplaza0b-20&linkId=818d3797e1b4495aaa0287566855caf8&language=en_US&ref_=as_li_ss_tl",
		description: "Rattan conversation set ideal for backyard, poolside, or garden relaxation",
	},
	{
		id: 49,
		name: "Mouse Station Bait Station",
		category: "Garden & Tools",
		price: 24.99,
		rating: 4.5,
		reviews: 8901,
		image: "https://m.media-amazon.com/images/I/61Xjhe-7-1L._AC_SX679_.jpg",
		link: "https://www.amazon.com/Mouse-Station-Keys-Required-Stations/dp/B0FDFHPVQ7?&linkCode=ll1&tag=marketplaza0b-20&linkId=818d3797e1b4495aaa0287566855caf8&language=en_US&ref_=as_li_ss_tl",
		description: "Reusable rodent control station with key lock for safe pest management",
	},
	{
		id: 50,
		name: "JAMFLY Outdoor Wicker Egg Chair",
		category: "Garden & Tools",
		price: 279.99,
		rating: 4.6,
		reviews: 1234,
		image: "https://m.media-amazon.com/images/I/71ekHPtCxdL._AC_SX679_.jpg",
		link: "https://www.amazon.com/JAMFLY-Outdoor-Oversized-Lounger-Backyard/dp/B0D11DZZ5J?&linkCode=ll1&tag=marketplaza0b-20&linkId=818d3797e1b4495aaa0287566855caf8&language=en_US&ref_=as_li_ss_tl",
		description: "Oversized wicker egg chair lounger perfect for backyard relaxation and outdoor comfort",
	},
]

export function FeaturedProducts() {
	const displayedProducts = products.slice(0, 3)

	return (
		<section id="featured" className="py-16 lg:py-24 bg-accent/50">
			<div className="container mx-auto px-4 lg:px-8">
				<div className="text-center mb-12">
					<h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight mb-4">Featured Products</h2>
					<p className="text-muted-foreground text-pretty max-w-2xl mx-auto">
						Handpicked favorites from our collection across all categories
					</p>
				</div>

				{/* Products Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{displayedProducts.map((product) => (
						<div
							key={product.id}
							className="group bg-card rounded-lg overflow-hidden border border-border transition-all hover:shadow-lg"
						>
							<Link href={`/products/${product.slug}`} className="block">
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
									<p className="text-xs text-muted-foreground mb-1">{product.category}</p>
									<h3 className="font-semibold mb-2 line-clamp-2 group-hover:text-secondary transition-colors min-h-[2.5rem]">
										{product.name}
									</h3>
									<p className="text-sm text-muted-foreground mb-3 line-clamp-2">{product.description}</p>
									<div className="flex items-center gap-1 mb-3">
										<Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
										<span className="text-sm font-medium">{product.rating}</span>
										<span className="text-xs text-muted-foreground">({product.reviews.toLocaleString()})</span>
									</div>
								</div>
							</Link>

							<div className="p-4 pt-0">
								<div className="flex flex-col gap-2">
									<Link href={`/products/${product.slug}`}>
										<Button className="w-full bg-transparent" variant="outline">
											View Details
										</Button>
									</Link>

									{product.link && (
										<a href={product.link}
											data-auto>
											<Button
												className="w-full bg-[#FF9900] hover:bg-[#FA8900] text-white"
											>
												Buy on Amazon
											</Button>
										</a>
									)}
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="text-center mt-12">
					<Link href="/products">
						<Button size="lg" variant="outline">
							View All Products
						</Button>
					</Link>
				</div>
			</div>
		</section>
	)
}

export { products }
