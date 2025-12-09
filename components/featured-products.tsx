"use client"

import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { products } from "@/lib/products-data"

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
