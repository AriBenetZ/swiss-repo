'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [mounted, setMounted] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		setMounted(true);
	}, []);

	// Ensure consistent navigation rendering between server and client
	const navigationItems = [
		{ name: 'Platform', href: '/how-it-works' },
		{ name: 'About', href: '/about' },
		{ name: 'Team', href: '/team' },
		{ name: 'Contact', href: '/contact' },
	];

	// Simplified class functions to avoid hydration issues
	const getNavLinkClass = (href: string) => {
		const isActive = mounted && pathname === href;
		return isActive ? 'nav-link active' : 'nav-link';
	};

	const getMobileNavLinkClass = (href: string) => {
		const baseClasses = 'mobile-nav-link flex w-full px-3 sm:px-4 py-3 rounded-lg transition-all duration-200 text-center min-h-[44px] items-center justify-center';
		const isActive = mounted && pathname === href;
		
		if (isActive) {
			return `${baseClasses} active bg-accent/10 text-accent border border-accent/20`;
		}
		return `${baseClasses} text-text-secondary hover:text-text-primary hover:bg-bg-secondary/50`;
	};

	return (
		<nav
			className="fixed top-0 w-full z-50 nav-gold-elegant gold-accent-overlay"
		>
			<div className="max-w-7xl mx-auto px-6">
				<div className="flex justify-between items-center h-16">
					{/* Logo */}
					<div className="flex-shrink-0">
						<Link href="/" className="flex items-center gap-3 group navbar-logo-link">
							<div className="relative w-20 h-20 group-hover:scale-110 transition-transform duration-300">
								<Image 
									src="/logo.png" 
									alt="Aurum Ascend Capital Logo" 
									width={34}
									height={34}
									className="w-20 h-20 object-contain"
									priority
									unoptimized
								/>
							</div>
							<div className="flex flex-col">
								<span className="text-lg text-primary">
									<span className="font-bold text-primary">Aurum</span>
									<span className="font-bold text-accent-primary">Ascend</span>
								</span>
								<span className="text-xs text-secondary leading-none">Investment Platform</span>
							</div>
						</Link>
					</div>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center gap-1">
						{navigationItems.map((item) => (
							<Link
								key={`desktop-${item.name}`}
								href={item.href}
								className={getNavLinkClass(item.href)}
							>
								{item.name}
							</Link>
						))}
						<div className="ml-6 flex items-center gap-3">
							<Link href="/apply" className="btn-link-wrapper">
								<Button
									className="btn btn-primary btn-small hover-glow"
								>
									Get Started
								</Button>
							</Link>
						</div>
					</div>

					{/* Mobile menu button */}
					<div className="md:hidden">
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="p-2 rounded-lg text-secondary hover:text-primary hover:bg-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-accent-primary min-w-[44px] min-h-[44px] flex items-center justify-center"
							aria-label={isOpen ? 'Close menu' : 'Open menu'}
						>
							{isOpen ? <X size={20} /> : <Menu size={20} />}
						</button>
					</div>
				</div>

				{/* Mobile Navigation */}
				{isOpen && (
					<div
						className="md:hidden absolute top-16 left-0 right-0 mobile-menu-bg transition-all duration-300 border-t border-glass"
					>
						<div className="px-3 sm:px-4 py-4 sm:py-6 space-y-2">
							{navigationItems.map((item) => (
								<Link
									key={`mobile-${item.name}`}
									href={item.href}
									onClick={() => setIsOpen(false)}
									className={getMobileNavLinkClass(item.href)}
								>
									{item.name}
								</Link>
							))}
							<div className="pt-3 sm:pt-4 space-y-2 sm:space-y-3 border-t border-glass">
								<Link href="/apply" onClick={() => setIsOpen(false)} className="block w-full">
									<Button className="btn btn-primary w-full min-h-[44px]">
										Get Started
									</Button>
								</Link>
							</div>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
}
