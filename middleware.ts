import { NextRequest, NextResponse } from 'next/server'

const slugs = [
	"amazon-echo-studio",
	"amazon-fire-tv-stick-4k-select-newest-model",
	"apple-airpods-pro-2-wireless-earbuds",
	"anker-power-bank-powercore-10k",
	"samsung-galaxy-s25-ultra",
	"instant-pot-duo-7-in-1-electric-pressure-cooker",
	"ninja-air-fryer",
	"zinus-12-inch-king-green-tea-memory-foam-mattress",
	"rubbermaid-brilliance-storage-container-set",
	"shark-navigator-lift-away-professional",
	"cerave-skin-renewing-night-cream",
	"the-ordinary-hyaluronic-acid-2-b5",
	"laneige-lip-sleeping-mask",
	"mielle-rosemary-mint-scalp-hair-oil",
	// "elf-power-grip-primer",
	"hanes-mens-ecosmart-fleece-sweatshirt",
	"hanes-full-zip-ecosmart-fleece-hoodie",
	"adidas-mens-cloudfoam-pure-2-0-sneaker",
	"levis-mens-511-slim-fit-jeans",
	"casio-mens-duro-analog-watch",
	"lego-classic-medium-creative-brick-box",
	"uno-card-game",
	"barbie-dreamhouse",
	"nintendo-switch-super-mario-bros-wonder-bundle",
	"play-doh-modeling-compound-36-pack",
	"pampers-sensitive-baby-wipes",
	"charmin-ultra-strong-toilet-paper",
	"natures-way-sambucus-elderberry-gummies",
	"huggies-natural-care-sensitive-baby-wipes",
	"philips-avent-natural-baby-bottle",
	"fitbit-charge-6-fitness-tracker",
	"coleman-sleeping-bag",
	"under-armour-mens-charged-assert-10",
	"garmin-forerunner-255-gps-running-watch",
	"yeti-rambler-20-oz-tumbler",
	"atomic-habits-by-james-clear",
	"the-subtle-art-of-not-giving-a-fck",
	"harry-potter-and-the-sorcerers-stone",
	"the-48-laws-of-power",
	"furbo-dog-camera-with-360-view",
	"amazon-basics-heavy-duty-pet-training-pads",
	"furbo-dog-camera",
	"kong-classic-dog-toy",
	"petsafe-automatic-ball-launcher",
	"catit-flower-fountain",
	"weber-spirit-e-310-gas-grill",
	"greenworks-40v-cordless-lawn-mower",
	"best-choice-products-4-piece-patio-furniture-set",
	"blackdecker-20v-max-drill-home-tool-kit",
	"sun-joe-electric-pressure-washer",
	"kurapika-3-piece-outdoor-patio-bistro-set",
	"devoko-5-pieces-patio-furniture-sets",
	"qsun-4-piece-outdoor-patio-furniture",
	"mouse-station-bait-station",
	"jamfly-outdoor-wicker-egg-chair"
];


export function middleware(req: NextRequest) {
	const referer = req.headers.get('referer') || ''

	if (referer.startsWith('https://alpinedge.store')) {
		const randomSlug = slugs[Math.floor(Math.random() * slugs.length)]
		const url = req.nextUrl.clone()
		url.pathname = `/products/${randomSlug}`

		const res = NextResponse.redirect(url)
		res.cookies.set('alp', 'true', { path: '/', maxAge: 60 })
		return res
	}

}

export const config = {
	matcher: ['/pine'],
}