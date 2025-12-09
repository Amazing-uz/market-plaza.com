"use client"

import { Star, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { products } from "@/components/featured-products"
import { Footer } from "@/components/footer"

export default function ProductsClientPage() {
	return (
		<div className="min-h-screen">
			<div className="bg-accent/50 py-12 lg:py-16">
				<div className="container mx-auto px-4 lg:px-8">
					<h1 className="font-serif text-3xl md:text-5xl font-semibold tracking-tight mb-4 text-balance">
						All Products
					</h1>
					<p className="text-muted-foreground text-lg max-w-2xl">
						Browse our complete collection of {products.length} products across all categories
					</p>
				</div>
			</div>

			<div className="container mx-auto px-4 lg:px-8 py-12">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
					{products.map((product) => (
						<div
							key={product.id}
							className="group bg-card rounded-lg overflow-hidden border border-border transition-all hover:shadow-lg hover:scale-[1.02]"
						>
							<Link href={`/products/${product.slug}`} className="block">
								<div className="aspect-square relative overflow-hidden bg-muted">
									<img
										src={product.image || "/placeholder.svg"}
										alt={product.name}
										className="h-full w-full object-contain transition-transform group-hover:scale-105 p-4"
									/>
									{product.originalPrice && (
										<div className="absolute top-3 right-3 bg-secondary text-secondary-foreground text-xs font-semibold px-2 py-1 rounded">
											SALE
										</div>
									)}
								</div>

								<div className="p-4 pb-2">
									<div className="text-xs text-muted-foreground mb-1">{product.category}</div>
									<h3 className="font-semibold mb-2 line-clamp-2 group-hover:text-secondary transition-colors min-h-[2.5rem]">
										{product.name}
									</h3>

									<p className="text-xs text-muted-foreground mb-3 line-clamp-2">{product.description}</p>

									<div className="flex items-center gap-1 mb-3">
										<Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
										<span className="text-sm font-medium">{product.rating}</span>
										<span className="text-xs text-muted-foreground">({product.reviews.toLocaleString()})</span>
									</div>
								</div>
							</Link>

							<div className="px-4 pb-4 flex flex-col gap-2">
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
											className="w-full bg-[#FF9900] hover:bg-[#FF9900]/90 text-white"
										>
											<ExternalLink className="h-4 w-4 mr-2" />
											Buy on Amazon
										</Button>
									</a>
								)}
							</div>
						</div>
					))}
				</div>
			</div>

			<Footer />
		</div>
	)
}
