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
	"rubbermaid-brilliance-storage-14-piece-plastic-containers",
	"shark-navigator-professional-upright-vacuum",
	"cerave-skin-renewing-night-cream",
	"the-ordinary-hyaluronic-acid-2-b5",
	"laneige-lip-sleeping-mask",
	"neutrogena-makeup-remover-wipes-25-count-3-pack",
	"elf-power-grip-primer",
	"hanes-mens-pullover-ecosmart-hooded-sweatshirt",
	"hanes-mens-full-zip-eco-smart-hoodie",
	"adidas-mens-lite-racer-adapt-70-sneaker",
	"levis-mens-511-slim-fit-jeans",
	"casio-mens-mdv106-1av-analog-watch",
	"fossil-womens-fiona-small-crossbody-handbag",
	"lego-classic-medium-creative-brick-box",
	"uno-spin-card-game",
	"barbie-dreamhouse-3-story-dollhouse-playset",
	"nintendo-switch-super-mario-bros-wonder-bundle",
	"play-doh-modeling-compound-36-pack",
	"pampers-aqua-pure-sensitive-water-baby-wipes",
	"charmin-ultra-soft-toilet-paper-18-family-mega-rolls",
	"natures-way-sambucus-elderberry-gummies",
	"huggies-natural-care-sensitive-baby-wipes",
	"philips-avent-natural-baby-bottle-set",
	"fitbit-charge-6-fitness-tracker",
	"coleman-sundome-camping-tent",
	"under-armour-mens-charged-assert-10-running-shoe",
	"garmin-forerunner-255-gps-running-smartwatch",
	"yeti-rambler-20-oz-tumbler",
	"atomic-habits-by-james-clear",
	"the-subtle-art-of-not-giving-a-fck-by-mark-manson",
	"harry-potter-and-the-sorcerers-stone-by-jk-rowling",
	"the-48-laws-of-power-by-robert-greene",
	"weber-spirit-e-310-gas-grill",
	"greenworks-40v-cordless-lawn-mower",
	"best-choice-products-4-piece-patio-furniture-set",
	"victor-m250s-no-touch-no-see-electronic-mouse-trap",
	"amazonbasics-mesh-desk-organizer",
	"serenelife-hanging-egg-chair-with-stand",
	"blackdecker-20v-max-cordless-drill",
	"scotts-turf-builder-lawn-food",
	"fiskars-steel-bypass-pruning-shears",
	"miracle-gro-indoor-plant-food",
	"amazon-basics-dog-and-puppy-pee-pads-with-leak-proof-design",
	"furbo-dog-camera-with-360-view",
	"kong-classic-dog-toy",
	"petsafe-automatic-ball-launcher-dog-toy",
	"catit-flower-fountain-cat-water-fountain",
	"purina-pro-plan-high-protein-dog-food",
	"furminator-deshedding-tool-for-dogs",
	"smartykat-hot-pursuit-cat-toy",
	"petmate-two-door-top-load-pet-kennel",
	"tetra-glofish-aquarium-gravel-cleaner"
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