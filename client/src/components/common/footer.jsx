// src/components/common/footer.jsx
import {
	FaFacebookF,
	FaXTwitter,
	FaTiktok,
	FaYoutube
} from "react-icons/fa6";

export default function Footer() {
	return (
		<footer className="bg-gray-100 text-gray-700 mt-auto border-t">
			<div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
				<div>
					<h3 className="font-semibold mb-2">More from SellBd</h3>
					<ul className="space-y-1">
						<li>Sell Fast</li>
						<li>Membership</li>
						<li>Banner Ads</li>
						<li>Boost Ad</li>
					</ul>
				</div>
				<div>
					<h3 className="font-semibold mb-2">Help & Support</h3>
					<ul className="space-y-1">
						<li>FAQ</li>
						<li>Stay safe</li>
						<li>Contact Us</li>
					</ul>
				</div>
				<div>
					<h3 className="font-semibold mb-2">About SellBd</h3>
					<ul className="space-y-1">
						<li>About Us</li>
						<li>Careers</li>
						<li>Terms and Conditions</li>
						<li>Privacy policy</li>
						<li>Sitemap</li>
					</ul>
				</div>
				<div>
					<div className="flex space-x-4 text-lg">
						<FaFacebookF className="hover:text-blue-600 cursor-pointer" />
						<FaXTwitter className="hover:text-black cursor-pointer" />
						<FaTiktok className="hover:text-black cursor-pointer" />
						<FaYoutube className="hover:text-red-600 cursor-pointer" />
					</div>
				</div>
			</div>
			<hr className="border-gray-300" />
			<div className="text-center text-xs text-gray-500 py-4">
				© {new Date().getFullYear()}. All rights reserved.
			</div>
		</footer>
	);
}