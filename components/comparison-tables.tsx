'use client'

import { useState } from 'react'
import { Check, X } from 'lucide-react'
import Link from 'next/link'

const comparisonData = {
  Electronics: {
    products: [
      { name: 'Apple AirPods Pro', id: '1' },
      { name: 'Sony WH-1000XM5', id: '2' },
      { name: 'Bose QuietComfort', id: '3' },
    ],
    features: [
      { name: 'Active Noise Cancellation', values: [true, true, true] },
      { name: 'Battery Life (Hours)', values: ['6', '30', '24'] },
      { name: 'Water Resistance', values: [true, false, false] },
      { name: 'Transparency Mode', values: [true, true, true] },
      { name: 'Wireless Charging', values: [true, false, true] },
    ],
  },
  'Home & Kitchen': {
    products: [
      { name: 'Instant Pot Duo', id: '4' },
      { name: 'Ninja Foodi', id: '5' },
      { name: 'Crock-Pot Express', id: '6' },
    ],
    features: [
      { name: 'Capacity (Quarts)', values: ['6', '8', '6'] },
      { name: 'Pressure Cook', values: [true, true, true] },
      { name: 'Air Fryer', values: [false, true, false] },
      { name: 'Slow Cook', values: [true, true, true] },
      { name: 'Dishwasher Safe', values: [true, true, true] },
    ],
  },
  'Beauty & Personal Care': {
    products: [
      { name: 'Revlon Hair Dryer', id: '7' },
      { name: 'Dyson Airwrap', id: '8' },
      { name: 'T3 Micro', id: '9' },
    ],
    features: [
      { name: 'Ionic Technology', values: [true, true, true] },
      { name: 'Heat Settings', values: ['3', '3', '5'] },
      { name: 'Attachments Included', values: ['2', '6', '4'] },
      { name: 'Cool Shot Button', values: [true, true, true] },
      { name: 'Folding Handle', values: [true, false, false] },
    ],
  },
}

export function ComparisonTables() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof comparisonData>('Electronics')

  const currentData = comparisonData[activeCategory]

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-3">Product Comparisons</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Compare popular products side-by-side to make informed decisions
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {Object.keys(comparisonData).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category as keyof typeof comparisonData)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-foreground text-background'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden border border-border rounded-lg">
              <table className="min-w-full divide-y divide-border">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Feature</th>
                    {currentData.products.map((product) => (
                      <th key={product.id} className="px-4 py-3 text-center text-sm font-semibold min-w-[150px]">
                        <div className="hover:text-foreground/80 transition-colors">
                          {product.name}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border bg-card">
                  {currentData.features.map((feature, idx) => (
                    <tr key={idx} className="hover:bg-muted/30 transition-colors">
                      <td className="px-4 py-3 text-sm font-medium">{feature.name}</td>
                      {feature.values.map((value, valueIdx) => (
                        <td key={valueIdx} className="px-4 py-3 text-center text-sm">
                          {typeof value === 'boolean' ? (
                            value ? (
                              <Check className="w-5 h-5 text-green-600 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-red-600 mx-auto" />
                            )
                          ) : (
                            <span className="text-muted-foreground">{value}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground">
            Specifications are subject to change. Please verify details on product pages.
          </p>
        </div>
      </div>
    </section>
  )
}
