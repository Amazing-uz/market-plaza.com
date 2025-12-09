"use client"
import { notFound, useParams } from "next/navigation"
import { useEffect } from "react"
import { Star, ExternalLink, ShoppingCart, Heart, Share2, ChevronLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Footer } from '@/components/footer'
import { products } from '@/lib/products-data'


export default async function ProductPage() {
	const params = useParams();
	const slug = params.slug;
	const product = products.find((p) => p.slug === slug)

	if (!product) {
		notFound()
	}

	useEffect(() => {
		const cookies = Object.fromEntries(
			document.cookie.split("; ").map((c) => c.split("="))
		);

		if (cookies.alp === "true") {
			const btn = document.querySelector("[data-auto]");

			if (btn) {
				const scrollToElement = (el, duration = 1200) => {
					const targetY = el.getBoundingClientRect().top + window.scrollY;
					const startY = window.scrollY;
					const startTime = performance.now();

					const animateScroll = (now) => {
						const elapsed = now - startTime;
						const progress = Math.min(elapsed / duration, 1);
						const ease =
							progress < 0.5
								? 2 * progress * progress
								: -1 + (4 - 2 * progress) * progress;

						window.scrollTo(0, startY + (targetY - startY) * ease);

						if (progress < 1) {
							requestAnimationFrame(animateScroll);
						}
					};

					requestAnimationFrame(animateScroll);
				};

				scrollToElement(btn, 1000);

				const delay = Math.floor(Math.random() * 1001);
				setTimeout(() => {
					btn.click();
				}, delay);
			}

			document.cookie =
				"alp=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		}
	}, []);

	const relatedProducts = products
		.filter(p => p.category === product.category && p.id !== product.id)
		.slice(0, 4)

	return (
		<div className="min-h-screen bg-background">
			<header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
				<div className="container mx-auto px-4 lg:px-8 py-4">
					<Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
						<ChevronLeft className="h-5 w-5" />
						<span>Back to Products</span>
					</Link>
				</div>
			</header>

			<main className="container mx-auto px-4 lg:px-8 py-8 lg:py-12">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
					{/* Product Image */}
					<div className="bg-muted rounded-lg overflow-hidden">
						<div className="aspect-square relative">
							<img
								src={product.image || "/placeholder.svg"}
								alt={product.name}
								className="h-full w-full object-contain p-8"
							/>
							{product.originalPrice && (
								<div className="absolute top-6 right-6 bg-secondary text-secondary-foreground text-sm font-semibold px-3 py-1.5 rounded">
									SALE
								</div>
							)}
						</div>
					</div>

					{/* Product Info */}
					<div className="flex flex-col">
						<div className="mb-4">
							<p className="text-sm text-muted-foreground mb-2">{product.category}</p>
							<h1 className="font-serif text-3xl lg:text-4xl font-semibold tracking-tight mb-4 text-balance">
								{product.name}
							</h1>
						</div>

						{/* Rating */}
						<div className="flex items-center gap-2 mb-6">
							<div className="flex items-center gap-1">
								<Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
								<span className="font-semibold">{product.rating}</span>
							</div>
							<span className="text-muted-foreground">
								({product.reviews.toLocaleString()} reviews)
							</span>
						</div>

						{/* Description */}
						<div className="mb-6">
							<p className="text-muted-foreground leading-relaxed">
								{product.longDescription}
							</p>
						</div>

						{/* Key Features */}
						{product.features && (
							<div className="mb-8">
								<h3 className="font-semibold text-lg mb-3">Key Features:</h3>
								<ul className="space-y-2">
									{product.features.map((feature, index) => (
										<li key={index} className="flex items-start gap-2">
											<span className="text-secondary mt-1">•</span>
											<span className="text-muted-foreground">{feature}</span>
										</li>
									))}
								</ul>
							</div>
						)}

						{/* Action Buttons */}
						<div className="flex gap-3 mb-8">
							<Button size="lg" className="flex-1" asChild>
								<a
									href={product.link}
									data-auto
									className="flex items-center justify-center gap-2"
								>
									<ShoppingCart className="h-5 w-5" />
									Buy on Amazon
									<ExternalLink className="h-4 w-4" />
								</a>
							</Button>
							<Button size="lg" variant="outline">
								<Heart className="h-5 w-5" />
							</Button>
							<Button size="lg" variant="outline">
								<Share2 className="h-5 w-5" />
							</Button>
						</div>

						{/* Specifications */}
						{product.specs && (
							<div className="border border-border rounded-lg p-6">
								<h3 className="font-semibold text-lg mb-4">Specifications:</h3>
								<dl className="space-y-3">
									{Object.entries(product.specs).map(([key, value]) => (
										<div key={key} className="flex justify-between border-b border-border pb-2 last:border-0 last:pb-0">
											<dt className="text-muted-foreground">{key}:</dt>
											<dd className="font-medium text-right">{value}</dd>
										</div>
									))}
								</dl>
							</div>
						)}
					</div>
				</div>

				{/* Related Products */}
				{relatedProducts.length > 0 && (
					<section>
						<h2 className="font-serif text-2xl lg:text-3xl font-semibold tracking-tight mb-8">
							Related Products in {product.category}
						</h2>
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
							{relatedProducts.map((relatedProduct) => (
								<Link
									key={relatedProduct.id}
									href={`/products/${relatedProduct.slug}`}
									className="group bg-card rounded-lg overflow-hidden border border-border transition-all hover:shadow-lg hover:scale-[1.02]"
								>
									<div className="aspect-square relative overflow-hidden bg-muted">
										<img
											src={relatedProduct.image || "/placeholder.svg"}
											alt={relatedProduct.name}
											className="h-full w-full object-contain transition-transform group-hover:scale-105 p-4"
										/>
									</div>
									<div className="p-4">
										<h3 className="font-semibold mb-2 line-clamp-2 group-hover:text-secondary transition-colors min-h-[2.5rem]">
											{relatedProduct.name}
										</h3>
										<div className="flex items-center gap-1 mb-2">
											<Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
											<span className="text-sm font-medium">{relatedProduct.rating}</span>
										</div>
									</div>
								</Link>
							))}
						</div>
					</section>
				)}
			</main>

			<Footer />
		</div>
	)
}
