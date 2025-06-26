'use client';

import { useState } from 'react';
import Link from 'next/link';

import { WEB_COMPONENTS } from '@/constants/dashboard';
import { WebComponent } from '@/interfaces/dashboard/interfaces';

export default function Dashboard() {
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('All');

    const filteredComponents = WEB_COMPONENTS.filter((component) => {
        const searchFilter = component.name.toLowerCase().includes(search.toLowerCase());
        const levelFilter = filter === 'All' || component.level === filter;
        return searchFilter && levelFilter;
    });

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Frontend Bits</h1>
            <div className="flex justify-center mb-8">
                <input
                    type="text"
                    placeholder="Search components..."
                    className="w-1/2 p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => setSearch(e.target.value)}
                />
                <select
                    className="ml-4 p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => setFilter(e.target.value)}
                >
                    <option>All</option>
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                </select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {(filteredComponents as WebComponent[]).map((component: WebComponent) => (
                    <Link href={`/${component.slug}`} key={component.slug}>
                        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out">
                            <h2 className="text-2xl font-semibold text-gray-700">{component.name}</h2>
                            <p className="text-gray-500 mt-2">{component.type}</p>
                            <span className={`inline-block mt-4 px-3 py-1 text-sm font-semibold text-white rounded-full ${component.level === 'Beginner' ? 'bg-green-500' : component.level === "Intermediate" ? "bg-blue-500" : component.level === "Advanced" ? "bg-red-500": "bg-gray-500"}`}>
                                {component.level}
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}