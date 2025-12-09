"use client"

import { notFound } from "next/navigation"
import { Star, ChevronLeft } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { products } from "@/lib/products-data"

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
									<Link href={`/products/${product.slug}`}>
										<Button className="w-full bg-transparent" variant="outline">
											View Details
										</Button>
									</Link>

									{product.link && (
										<a
											href={product.link}
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
